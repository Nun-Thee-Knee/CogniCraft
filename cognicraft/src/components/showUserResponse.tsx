import { Prisma } from "@prisma/client"

type responseType = {
  qNumber: number,
  userAnswer: string,
  correctAnswer: string
}

type userResponseType = {
  title: string,
  total: number,
  quizId: string,
  correct: number,
  response: responseType[]
}

type quizDataType = {
    Answer: String,
    Options: String[],
    Question: String
  }

const ShowUserResponse = ({userData, quizData}:{userData:userResponseType, quizData:Prisma.JsonValue}) => {
    const response = userData.response;
    return (
    <center>
        <div>
        {(quizData as Prisma.JsonArray).map((entry)=>{
            return <div>
                <h1 className="font-bold text-xl">{(entry as quizDataType).Question}</h1>
            </div>
        })}
    </div>
    </center>
  )
}


export default ShowUserResponse