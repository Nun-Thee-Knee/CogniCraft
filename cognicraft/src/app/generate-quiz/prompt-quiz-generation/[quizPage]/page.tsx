'use client'
import {useState} from 'react'
import Option from '~/components/option'
import { Button } from '~/components/ui/button'
import {ChevronLeft, ChevronRight} from "lucide-react"

type dataType = {
  Answer: number,
  Question: string,
  Options: string[]
}

const data:dataType[] = [
  {
    "Answer": 0,
    "Options": [
      "Musa paradisiaca",
      "Malus domestica",
      "Citrus sinensis",
      "Capsicum annuum"
    ],
    "Question": "What is the scientific name for a banana plant?"
  },
  {
    "Answer": 0,
    "Options": [
      "Mango",
      "Apple",
      "Pineapple",
      "Kiwi"
    ],
    "Question": "Which fruit is known as the \"king of fruits\"?"
  },
  {
    "Answer": 3,
    "Options": [
      "Strawberry",
      "Raspberry",
      "Apple",
      "Banana"
    ],
    "Question": "Which fruit is considered a berry botanically?"
  },
  {
    "Answer": 0,
    "Options": [
      "Lemon",
      "Watermelon",
      "Guava",
      "Mango"
    ],
    "Question": "Which fruit is rich in vitamin C and known for its sour taste?"
  },
  {
    "Answer": 0,
    "Options": [
      "Avocado",
      "Orange",
      "Grape",
      "Pear"
    ],
    "Question": "Which fruit is the main ingredient in guacamole?"
  }
]

const page = () => {
  const [num, setNum] = useState(0);
  const increaseNum = () => {
    setNum(num+1);
  }
  const decreaseNum = () => {
    setNum(num-1);
  }
  return (
    <div className='bg-black h-auto lg:h-[100vh] flex flex-col gap-10 items-center justify-center p-10'>
      <center>
      <h1 className='text-white text-5xl lg:text-6xl font-bold'>{data[num]?.Question}</h1>
      </center>
      <div className='grid flex-col lg:grid-cols-2 gap-10'>
      {data[num]?.Options.map((option)=>{
        return <Option key={option} optionContent={option}/>
      })}
      </div>
      <div className="flex items-center gap-20">
      {num>0?<Button onClick={decreaseNum} variant="secondary"><ChevronLeft/></Button>:<Button disabled variant="secondary"><ChevronLeft/></Button>}
        {num<data.length-1?<Button onClick={increaseNum} variant="secondary"><ChevronRight/></Button>:<Button disabled variant="secondary"><ChevronRight/></Button>}
      </div>
    </div>
  )
}
 
export default page