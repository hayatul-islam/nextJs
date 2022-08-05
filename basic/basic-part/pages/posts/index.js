import Link from "next/link";

export default function PostsList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts?.map((post) => (
        <div key={post?.id}>
          <Link href={`/posts/${post?.id}`} passHref>
            Post Details
          </Link>
          <p>{post?.title}</p>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
