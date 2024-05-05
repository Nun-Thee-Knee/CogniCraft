'use client'
import { api } from "~/trpc/react"
import UserCorrection from "./UserCorrection";
import { Prisma } from "@prisma/client";

type userResponseType = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  AttemptedQuiz: Prisma.JsonValue[];
  image: string | null;
}[]

type responseType = {
  qNumber: number,
  userAnswer: string,
  correctAnswer: string
}

type AttemptedQuizType = {
  title: string,
  total: number,
  quizId: string,
  correct: number,
  response: responseType[]
}

const FetchResponses = ({id,index}:{id:string,index:number}) => {
    const {data:userResponse, isLoading} = api.user.getProgress.useQuery({id});
  return (
    <div>{isLoading?(<h1>Loading</h1>):(<UserCorrection userData={(userResponse as userResponseType)[0]?.AttemptedQuiz[index] as AttemptedQuizType}/>)}</div>
  )
}

export default FetchResponses