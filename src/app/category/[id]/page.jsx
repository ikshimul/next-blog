import List from "@/app/components/blog/List";
import getPostList from "@/utils/getPostList";

const page = async ({ params }) => {
  const id = params.id;
  const postList = await getPostList(id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="font-semibold text-center pt-[100px]">এটি ব্লগ সেকশন</h1>
      {<List list={postList} />}
    </main>
  );
};

export default page;
