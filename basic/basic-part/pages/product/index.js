import Link from "next/link";

function Product({ productId = 100 }) {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product page</h1>
      <li>
        <Link href="/product/1">Product 1</Link>
      </li>
      <li>
        <Link href="/product/2">Product 2</Link>
      </li>
      <li>
        <Link href="/product/3" replace>
          Product 3
        </Link>
      </li>
      <li>
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </li>
    </>
  );
}
export default Product;
