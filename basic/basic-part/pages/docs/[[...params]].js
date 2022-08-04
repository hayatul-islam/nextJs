import { useRouter } from "next/router";
function Params() {
  const router = useRouter();
  const { params = [] } = router.query;
  //   console.log(params);
  return <h1>params</h1>;
}
export default Params;
