import React from 'react'
import QuizPage from '~/components/quizPage'

const quizPage = ({searchParams}:{searchParams:{
  code: string
}}) => {
  return (
    <div>
    <QuizPage code={searchParams.code}/>
    </div>
  )
}

export default quizPage