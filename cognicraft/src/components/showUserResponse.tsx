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

const ShowUserResponse = ({userData, quizData}:{userData:userResponseType, quizData:quizDataType[]}) => {
    const response = userData.response;
    return (
    <center>
        <div>
          {quizData.map((entry)=>{
            return <div>
              <hr className="my-5"></hr>
              <h1 className="font-bold text-xl">{entry.Question}</h1>
              {entry.Options.map((option)=>{
                if(option === response[quizData.indexOf(entry)]?.correctAnswer || option === response[quizData.indexOf(entry)]?.userAnswer)
                  if(response[quizData.indexOf(entry)]?.correctAnswer === response[quizData.indexOf(entry)]?.userAnswer)
                    return <h1 className="text-green-700">{option}</h1>
                  else{
                    if(option === response[quizData.indexOf(entry)]?.correctAnswer)
                      return <h1 className="text-green-700">{option}</h1>
                    else
                    return <h1 className="text-red-700">{option}</h1>
                  }
                else
                  return <h1>{option}</h1>
              })}
              <hr className="my-5"></hr>
            </div>
          })}
    </div>
    </center>
  )
}


export default ShowUserResponse