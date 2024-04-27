'use client'
const Option = ({optionContent}:{optionContent:string}) => {

  return (
    <div id='option' className='bg-zinc-950 border-[1px] border-zinc-900 cursor-pointer hover:scale-95 rounded-xl h-auto w-auto p-10 text-white flex items-center justify-center'>
      {optionContent}
    </div>
  )
}

export default Option