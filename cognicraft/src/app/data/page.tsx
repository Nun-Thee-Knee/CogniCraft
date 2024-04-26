import {getServerAuthSession} from "~/server/auth"
import Image from "next/image";


const DataPage = async() => {
  const user = await getServerAuthSession();
  return (
    <div>
      {user?.user.name}
      <Image className="rounded-full" width={100} height={100} src={`${user?.user.image}`} alt="Image"/>
    </div>
  )
}

export default DataPage