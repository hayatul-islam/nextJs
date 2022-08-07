import { useRouter } from "next/router";
export default function PostDetails({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h4>Loading...</h4>;
  }
  return (
    <>
      <h1>Post Details</h1>
      <p>{post?.title}</p>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  const paths = data.slice(0, 3).map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { postId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}
