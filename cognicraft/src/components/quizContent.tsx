"use client";
import { useState } from "react";
import Option from "~/components/option";
import { Button } from "~/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";
import { api } from "~/trpc/react";
import { redirect } from "next/navigation";
import { Toaster } from "./ui/toaster";
import { useToast } from "./ui/use-toast";

type dataType = {
  Answer: number;
  Question: string;
  Options: string[];
};

type optionType = {
  qNumber: number;
  userAnswer: string;
  correctAnswer: string;
};

const QuizContent = ({ data, quizCode }: { data: dataType[], quizCode:string}) => {
  const {toast} = useToast();
  const quizDelete = api.quiz.delete.useMutation(
    {
      onSuccess: () => {
        toast({
          title:"Success",
          description: "Successfully deleted the progress"
        })
      },
      onError:()=> {
        toast({
          title:"Error",
          description: "Action cannot be completed due to unknown error"
        })
      }
    }
  )
  const [num, setNum] = useState(0);
  const [divNum, setDiv] = useState<number | null>();
  const [enteredData, setEnteredData] = useState<optionType[]>([]);
  const [temporaryStorage, setStorage] = useState<optionType[]>([]);
  const [attempted, setAttempted] = useState<number[]>([0,10]);
  document.body.classList.add("bg-black");
  const increaseNum = (rm: number) => {
    if (rm === 5) setNum(num + 1);
    else {
      const removeOption = document.getElementById(
        data[num]?.Options[rm] as string,
      );
      removeOption?.classList.remove("bg-black", "border-blue-600");
      removeOption?.classList.add("bg-zinc-950", "border-zinc-900");
      setNum(num + 1);
      setDiv(5);
    }
  };
  const decreaseNum = () => {
    setNum(num - 1);
  };

  const handleClick = (id: string) => {
    if (enteredData.find((entry) => entry.qNumber === num)) {
      enteredData.forEach((entry) => {
        if (num === entry.qNumber) {
          const removeOption = document.getElementById(entry.userAnswer);
          removeOption?.classList.add("bg-zinc-950", "border-zinc-900");
          removeOption?.classList.remove("bg-black", "border-blue-600");
          entry.userAnswer = id;
          const choosenOption = document.getElementById(id);
          choosenOption?.classList.remove("bg-zinc-950", "border-zinc-900");
          choosenOption?.classList.add("bg-black", "border-blue-600");
          setStorage([...temporaryStorage, entry]);
        }
        setStorage([...temporaryStorage, entry]);
      });
    } else {
      setEnteredData(temporaryStorage);
      setStorage([]);
      const choosenOption = document.getElementById(id);
      choosenOption?.classList.remove("bg-zinc-950", "border-zinc-900");
      choosenOption?.classList.add("bg-black", "border-blue-600");
      setEnteredData([
        ...enteredData,
        {
          qNumber: num,
          userAnswer: id,
          correctAnswer: data[num]?.Options[data[num].Answer] as string,
        },
      ]);
    }
  };

  const calculateMarks = () => {
    let marks = 0;
    const totalMarks = data.length;
    enteredData.forEach((entry) => {
      if (entry.correctAnswer === entry.userAnswer) marks = marks + 1;
    });
    setAttempted([marks, totalMarks]);
  };

  const handleSubmit = () => {
    const quizDiv = document.getElementById("quizDiv");
    const resultDiv = document.getElementById("resultDiv");
    quizDiv?.classList.add("hidden");
    resultDiv?.classList.remove("hidden");
    resultDiv?.classList.add("flex");
  }

  const deleteQuiz = () => {
    const id = quizCode;
    quizDelete.mutate({id})
  }

  return (
    <div>
      <div id="quizDiv" className="flex h-auto flex-col items-center justify-center gap-10 bg-black p-10 text-white">
        <center>
          <h1 className="text-5xl font-bold text-white lg:text-6xl">
            {data[num]?.Question}
          </h1>
        </center>
        <div className="grid flex-col gap-10 lg:grid-cols-2">
          {data[num]?.Options.map((option) => {
            return (
              <div
                onClick={() => {
                  handleClick(option);
                  setDiv(data[num]?.Options.indexOf(option));
                }}
                id={option}
                className="flex h-auto w-auto cursor-pointer items-center justify-center rounded-xl border-[1px] border-zinc-900 bg-zinc-950 p-10 text-white hover:scale-95"
              >
                {option}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-20">
          {num > 0 ? (
            <Button onClick={decreaseNum} variant="secondary">
              <ChevronLeft />
            </Button>
          ) : (
            <Button disabled variant="secondary">
              <ChevronLeft />
            </Button>
          )}
          <Dialog>
            <DialogTrigger>
              <Button
                onClick={() => {
                  calculateMarks();
                }}
                className={`${num === data.length - 1 ? "" : "hidden"}`}
                variant="default"
              >
                Submit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Do you want to submit the quiz?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone.
                </DialogDescription>
                <DialogClose><Button onClick={()=>{handleSubmit()}} className="default">Submit</Button></DialogClose>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          {num < data.length - 1 ? (
            <Button
              onClick={() => {
                increaseNum(divNum as number);
              }}
              variant="secondary"
            >
              <ChevronRight />
            </Button>
          ) : (
            <Button disabled variant="secondary">
              <ChevronRight />
            </Button>
          )}
        </div>
      </div>
      <center>
      <div id="resultDiv" className="hidden bg-black h-[100vh] p-5 flex-col gap-7 items-center justify-center text-white">
        <h1 className="text-slate-700 font-bold text-5xl">You have scored: {attempted[0]}/{attempted[1]}</h1>
        <h1>Do You want to save the result?</h1>
        <div className="flex gap-10">
          <Button variant="secondary">Save</Button>
          <Link href="/">
          <Button onClick={()=>{deleteQuiz()}} variant="destructive">Delete</Button>
          </Link>
        </div>
      </div>
      </center>
      <Toaster/>
    </div>
  );
};

export default QuizContent;
