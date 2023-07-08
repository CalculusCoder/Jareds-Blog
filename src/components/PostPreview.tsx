import { PostMetadata } from "../../PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
  return (
    <div>
      <Link href={`/posts/${props.slug}`}>
        <div className="border border-slate-200 p-4 rounded-md shadow-lg bg-white">
          <h1 className="font-bold text-violet-600 hover:underline">
            {props.title}
          </h1>
          <p className="text-sm text-slate-400">{props.date}</p>
          <p>{props.subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
