import AttemptedQuiz from "~/components/AttemptedQuiz"
import { api } from "~/trpc/react"

const classData = ({searchParams}:{
  searchParams: {
    userID: string
  }
}) => {
  const id = searchParams.userID;
  return (
    <div className="bg-black h-auto p-10">
      {/* <AttemptedQuiz/> */}
      Hello
    </div>
  )
}

export default classData