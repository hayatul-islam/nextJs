import { useRouter } from "next/router";
import React from "react";

export default function Posts({ posts }) {
  const router = useRouter();
  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`posts/${id}`);
  };
  return (
    <div className="container py-8 px-12">
      <div className="grid grid-cols-4 gap-4">
        {posts?.map((post) => (
          <div
            onClick={(e) => handleClick(e, post.id)}
            className="border p-2"
            key={post.id}
          >
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();
  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
}
