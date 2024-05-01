import { Upload, SquareTerminal } from "lucide-react"
import Link from "next/link"
import Container, {containerData} from "~/components/container"

const containerContent:containerData[] = [
  {
    heading: "Prompt Generation",
    description: "Generate quizzes instantly from your prompts, making learning personalized and convenient",
    icon: <SquareTerminal/>,
    link: "/generate-quiz/prompt-quiz-generation"
  },
  {
    heading: "Uploading files",
    description: "Effortlessly generate quizzes by uploading files, making learning convenient and tailored to your content",
    icon: <Upload/>,
    link: "/generate-quiz/ocr-based-quiz-generation"
  }
]

const Quiz = () => {
  return (
    <div className="bg-black p-10 h-[100vh] lg:flex-row flex-col flex items-center justify-center gap-10 text-white">
      {containerContent.map((content)=>{
        return <Link href={content.link as string}>
        <Container key={content.heading} heading={content.heading} description={content.description} icon={content.icon}/>
        </Link>
      })}
    </div>
  )
}

export default Quiz