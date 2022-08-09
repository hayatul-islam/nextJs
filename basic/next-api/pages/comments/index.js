import { useSatate } from "react";
import { comments } from "../../data/comments";
export default function CommentsPage() {
  const fetchComments = async () => {
    const [comments, setComments] = useSatate();
    const response = await fetch("api/comments");
    const data = await response.json();
    setComments(data);
  };
  return (
    <>
      <button onClick={fetchComments}>Load comment</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id} | {comment.text}
        </div>
      ))}
    </>
  );
}
