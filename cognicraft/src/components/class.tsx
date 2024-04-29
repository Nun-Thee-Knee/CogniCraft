import {Users, NotepadText} from "lucide-react"

type classDataType = {
  title: string,
  student: number,
  quiz: number
}

const Class = ({title, student, quiz}:classDataType) => {
  return (
    <div className="flex flex-col cursor-pointer hover:bg-black hover:scale-95 rounded-xl gap-3 h-auto w-auto items-start justify-start p-10 border-[1px] border-zinc-800 bg-zinc-950">
      <h1 className="font-bold text-xl">English Debate</h1>
      <p className="flex gap-5">Enrolled Students: <span className="flex gap-2 underline">100 <Users/></span></p>
      <p className="flex gap-5">Assignment Quizzes: <span className="flex gap-2 underline">9 <NotepadText/></span></p>
    </div>
  );
};

export default Class;
