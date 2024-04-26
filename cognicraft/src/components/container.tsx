import React from 'react'
import { Hammer } from "lucide-react"

const Container = () => {
  return (
    <div className="text-white cursor-pointer hover:bg-black w-auto h-auto bg-zinc-950 rounded-2xl border-[1px] border-zinc-800 p-5 flex flex-col">
      <div>
        <h1 className='font-bold'>Build with us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="ml-auto mt-5">
        <Hammer className="hammer-icon"/>
      </div>
    </div>
  )
}

export default Container
