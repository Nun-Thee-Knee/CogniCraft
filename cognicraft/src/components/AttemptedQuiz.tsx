import { AreaChart, MessageCircleQuestion, SearchCheck } from "lucide-react"

type quizData = {
  quizTitle:string,
  quizCode:string,
  correct:number,
  total:number
}

const AttemptedQuiz = ({quizTitle,quizCode,correct,total}:quizData) => {
  return (
    <div className="h-auto flex flex-col gap-3 items-center justify-start text-white w-auto p-10 border-blue-700 border-[1px] rounded-xl cursor-pointer hover:scale-95">
        <h1 className="font-bold uppercase">{quizTitle}</h1>
        <p className="text-sm text-zinc-700">{quizCode}</p>
        <div className="flex justify-between w-full">
          <h1 className="font-bold">Correct Answer: </h1>
          <h1 className="font-bold flex gap-2"><SearchCheck/> {correct}</h1>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="font-bold">Total Questions: </h1>
          <h1 className="font-bold flex gap-2"><MessageCircleQuestion/> {total}</h1>
        </div>
        <h1 className="text-green-600 font-bold flex gap-5">Performance: <span className="flex"><AreaChart/> {(Math.ceil((correct/total)*100))}%</span></h1>
      </div>
  )
}

export default AttemptedQuiz