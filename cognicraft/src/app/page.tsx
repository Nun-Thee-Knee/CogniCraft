import Dashboard from "~/components/DashBoard";
import LandingPage from "~/components/landingpage";
import { getServerAuthSession } from "~/server/auth";

const page = async() => {
  const session = await getServerAuthSession();
  if(!session) return <LandingPage/>
  return <Dashboard/>
};

export default page;
