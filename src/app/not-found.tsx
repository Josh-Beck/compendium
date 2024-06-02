import Link from "next/link";


export default async function NotFound() {
  return (
    <div className="flex h-screen flex h-screen justify-center items-center">
      <Link href="/"><h1> Oops, can't find that page. Click here to return home!</h1></Link>
    </div>
  );
}
