import FetchResponses from "~/components/fetchUserResponse";
import { getServerAuthSession } from "~/server/auth"

const ShowData = async({searchParams}:{searchParams:{index:number}}) => {
  const user = await getServerAuthSession()
  const id = user?.user.id;
  return (
    <div className="text-white">
      <FetchResponses id={id as string} index={searchParams.index}/>
    </div>
  )
}

export default ShowData