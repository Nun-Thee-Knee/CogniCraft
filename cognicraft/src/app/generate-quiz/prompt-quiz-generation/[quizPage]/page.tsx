import React from 'react'
import QuizPage from '~/components/quizPage'
import { getServerAuthSession } from '~/server/auth'

const quizPage = async({searchParams}:{searchParams:{
  code: string,
  title: string
}}) => {
  const user = await getServerAuthSession();
  return (
    <div>
    <QuizPage userID={user?.user.id as string} topic={searchParams.title} code={searchParams.code}/>
    </div>
  )
}

export default quizPage