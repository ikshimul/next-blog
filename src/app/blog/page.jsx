import getNewest from "@/utils/getNewest";
import List from "./../components/blog/List";

const page = async () => {
  const newest_posts = await getNewest();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="font-semibold text-center pt-[100px]"></h1>
      {<List list={newest_posts} />}
    </main>
  );
};

export default page;
