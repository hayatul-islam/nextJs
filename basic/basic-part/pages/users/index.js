import User from "../../components/user";

export default function Users({ users }) {
  return (
    <>
      <h1>Users</h1>
      {users?.map((user) => (
        <div key={user?.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
