import useSWR from "swr";
const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};
export default function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return "An error has occured";
  if (!data) return "loading";
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Posts - {data?.posts}</h3>
      <h3>Links - {data?.likes}</h3>
      <h3>Followers - {data?.followers}</h3>
    </div>
  );
}
