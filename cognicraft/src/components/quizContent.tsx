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

const QuizContent = ({ data }: { data: dataType[] }) => {
  const [num, setNum] = useState(0);
  document.body.classList.add("bg-black")
  const increaseNum = () => {
    setNum(num + 1);
  };
  const decreaseNum = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <div className="flex h-auto flex-col items-center justify-center gap-10 bg-black p-10 text-white">
        <center>
          <h1 className="text-5xl font-bold text-white lg:text-6xl">
            {data[num]?.Question}
          </h1>
        </center>
        <div className="grid flex-col gap-10 lg:grid-cols-2">
          {data[num]?.Options.map((option) => {
            return <Option key={option} optionContent={option} />;
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
            <Button onClick={increaseNum} variant="secondary">
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
