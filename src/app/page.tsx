import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="mx-auto max-w-sm px-2 sm:px-0 sm:max-w-2xl lg:max-w-6xl">
      <header className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
        {postPreviews}
      </header>
    </div>
  );
};

export default HomePage;
