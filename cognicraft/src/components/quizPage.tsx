'use client'
import React, { useState } from 'react'
import { api } from '~/trpc/react'
import QuizContent from './quizContent'

type quizData = {
    "Answer": number,
    "Options": string[],
    "Question": string
}

const QuizPage = ({code, userID, topic}:{code:string, userID:string, topic:string}) => {
    const id = code
    const {data:quiz, isLoading, error} = api.quiz.getLatest.useQuery({id});
    const [mcq, setMCQ] = useState<quizData[]>([])
    const setProgram = (newdata:quizData[]) => {
        setMCQ(newdata)
    }
    return (
    <div>
        {
            (isLoading) ? (
                <h1>Loading...</h1>
            ) : (
                (quiz?.Data as quizData[]).length === 0 ? (
                    <h1>Quiz Provided is null</h1>
                ) : (
                    (mcq.length === 0)?(
                        <button onClick={()=>{setProgram(quiz?.Data as quizData[])}}>Start</button>
                    ):(
                        <QuizContent topic={topic} data={mcq} user={userID} quizCode={code}/>
                    )
                )
            )
        }
    </div>
  )
}

export default QuizPage