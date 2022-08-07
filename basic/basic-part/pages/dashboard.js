import { useEffect, useState } from "react";
export default function dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboard(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Posts - {dashboard.posts}</h3>
      <h3>Links - {dashboard.likes}</h3>
      <h3>Followers - {dashboard.followers}</h3>
    </div>
  );
}
