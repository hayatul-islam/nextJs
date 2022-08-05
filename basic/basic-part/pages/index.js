import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("order");
    // router.push("/product");
    router.replace("/product");
  };
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/blog">blog</Link>
      <Link href="/product">Products</Link>
      <Link href="/posts">Posts</Link>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}
