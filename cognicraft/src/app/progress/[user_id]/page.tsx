import { BookUser, School } from "lucide-react"
import Link from "next/link"
import Container, {containerData} from "~/components/container"


const UserProgress = ({searchParams}:{
    searchParams:{
        id: string
    }
}) => {
    const containerDataSchema:containerData[] = [
        {
            heading: "User Created Quiz",
            description: "This section tracks the record of the user created quizzes and the obtained result",
            icon: <BookUser/>,
            link: `/progress/${searchParams.id}/userData`
        },
        {
            heading: "Classrooms Enrolled",
            description: "This section tracks the classrooms and the assignment done by the user",
            icon: <School/>,
            link: `/progress/${searchParams.id}/classData`
        }
    ]
  return (
    <div className="bg-black h-[100vh] flex items-center justify-center p-10 gap-10 lg:flex-row flex-col">
        {containerDataSchema.map((entry)=>{
            return <Link href={{
                pathname: entry.link as string,
                query: {
                    userID: searchParams.id,
                }
            }}>
            <Container heading={entry.heading} description={entry.description} icon={entry.icon}/>
            </Link>
        })}
    </div>
  )
}

export default UserProgress