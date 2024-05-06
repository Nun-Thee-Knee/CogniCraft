'use client'
import { api } from "~/trpc/react"
import ShowUserResponse from "./showUserResponse"
import { Prisma } from "@prisma/client"
import { JsonValue } from "next-auth/adapters"

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

type quizType = {
  id: string;
  Data: quizDataType;
  createdAt: Date;
  AttemptedBy: string[];
  title: string;
}

const UserCorrection = ({ userData }: { userData: userResponseType }) => {
  const id = userData.quizId;
  const { data:quizData, isLoading, error } = api.quiz.getLatest.useQuery({ id });

  return (
    <div className="flex h-auto items-center justify-center p-12 mb-10">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <ShowUserResponse
          userData={userData}
          //@ts-ignore
          quizData={quizData?.Data as quizDataType[]}
        />
      )}
    </div>
  );
};


export default UserCorrection