import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="mx-auto max-w-sm px-2 sm:px-0 sm:max-w-2xl">
      <header className="text-center text-violet-400 text-3xl font-bold mb-3">
        {post.data.title}
      </header>
      <p className="text-slate-400 text-center mb-16">
        {post.data.date}, By {post.data.author}
      </p>

      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
