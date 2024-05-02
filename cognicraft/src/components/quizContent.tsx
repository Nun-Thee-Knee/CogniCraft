"use client";
import { useState } from "react";
import Option from "~/components/option";
import { Button } from "~/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const QuizContent = ({ data }: { data: dataType[] }) => {
  const [num, setNum] = useState(5);
  const [divNum, setDiv] = useState<number | null>();
  const [enteredData, setEnteredData] = useState<optionType[]>([]);
  const [temporaryStorage, setStorage] = useState<optionType[]>([]);
  const [attempted, notAttempted] = useState("")
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

  return (
    <div>
      <div className="flex h-auto flex-col items-center justify-center gap-10 bg-black p-10 text-white">
        <center>
          {JSON.stringify(enteredData)}
          {attempted}
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
    </div>
  );
};

export default QuizContent;
