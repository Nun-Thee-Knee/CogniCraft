'use client'
import Link from "next/link";
import PromptForm from "~/components/promptForm"
import { api } from "~/trpc/react"
import { Button } from "~/components/ui/button";


const page = () => {
  const {data: quiz, isLoading, error} = api.quiz.getLatest.useQuery();
  return (
    <div className="bg-black h-[100vh] flex flex-col text-white justify-start items-center p-10">
      <PromptForm/>
      {isLoading?(<p>
      </p>):(<p>
        <Link href="/generate-quiz/prompt-quiz-generation/as">
        <Button variant="secondary" className="mt-28">
          Start The Quiz
        </Button>
        </Link>
      </p>)}
    </div>
  )
}

export default page