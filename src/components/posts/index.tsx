import { type Post } from "@/posts";
import Link from "next/link";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ol className="bg-green-500 p-10">
      {posts.map(({ slug, title, publishDate, categories }) => (
        <li className="p-10" key={slug}>
          <h2>
            <Link className="underline" href={`/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong>{" "}
            {new Date(publishDate).toLocaleDateString()}{" "}
            <strong>Categories:</strong>{" "}
            {categories.map((cat, i) => `${i ? ", " : ""}${cat}`)}
          </p>
        </li>
      ))}
    </ol>
  );
}
