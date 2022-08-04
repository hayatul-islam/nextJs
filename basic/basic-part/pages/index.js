import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/blog">blog</Link>
      <Link href="/product">Products</Link>
    </div>
  );
}
