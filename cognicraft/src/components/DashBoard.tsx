import NavBar from './NavBar'
import { getServerAuthSession } from '~/server/auth';
import Heading from './heading';
import Attributes from './attributes';


const DashBoard = async() => {
  const user = await getServerAuthSession();
  return (
    <>
    <NavBar userName={user?.user.name} email={user?.user.email} image={user?.user.image}/>
    <div className="flex h-auto flex-col items-center justify-center gap-12 bg-black p-5 text-white lg:h-[90vh] lg:p-10">
        <center>
          <Heading/>
        </center>
        <Attributes/>
      </div>
    </>
  )
}

export default DashBoard