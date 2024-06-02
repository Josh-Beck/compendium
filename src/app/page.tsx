import { categories } from "@/categories";
import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPosts, postsPerPage } from "@/posts";

export default async function Home() {
  const { posts, total } = await getPaginatedPosts({ page: 1, limit: postsPerPage });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-500">
      <h1 className="underline">Next.js MdDX Blofg</h1>
      <Posts posts={posts} />

      <Pagination baseUrl="/page" page={1} perPage={postsPerPage} total={total} />

      <h2 className="text-white">Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <a href={`category/${cat}`}>{cat}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
