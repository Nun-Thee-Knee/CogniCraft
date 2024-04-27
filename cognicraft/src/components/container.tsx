import { Hammer } from "lucide-react"
import React from "react"

type containerData = {
  heading:string,
  description:string,
  icon: React.ReactNode
}

const Container = ({heading, description, icon}:containerData) => {
  return (
    <div className="text-white cursor-pointer hover:bg-black hover:scale-95 w-auto h-auto bg-zinc-950 rounded-2xl border-[1px] border-zinc-800 p-5 flex flex-col">
      <div>
        <h1 className='font-bold'>{heading}</h1>
        <p>{description}</p>
      </div>
      <div className="ml-auto mt-5">
        {icon}
      </div>
    </div>
  )
}

export default Container
