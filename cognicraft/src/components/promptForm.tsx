"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { api } from "~/trpc/react";
import { useState } from "react";
import { useToast } from "./ui/use-toast"
import { Toaster } from "./ui/toaster";
import Link from "next/link";
import { useRouter } from "next/navigation";
import crypto from "crypto"


const formSchema = z.object({
  topic: z.string().min(2),
  number: z.string(),
});

function generateRandomString(length:number) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

const promptForm = () => {
  const code = generateRandomString(20);
  const { toast } = useToast()
  const [pending, setPending] = useState(false)
  const [redirectURL, setURL] = useState("");
  const quizCreate = api.quiz.create.useMutation({
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Successfully Added the Quiz",
      })
      setPending(false)
    },
    onError: (err) => {
      toast({
        title: "Error",
        description: "Action could not be completed due to error",
      })
      setPending(false)
    },
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      number: '10',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const postData = { topic: values.topic, number: values.number };
    setPending(true)
    try {
      const response = await fetch("https://cognicraft.onrender.com/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
    },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json()
      const question = data
      const id = code
      quizCreate.mutate({question, id})
      setURL(id)
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex lg:flex-row flex-col gap-10">
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-center gap-5">
              <FormLabel className="text-white">Topic: </FormLabel>
              <FormControl>
                <Input className="text-white" placeholder="Your prompt goes here" {...field} />
              </FormControl>
              </div>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <div className="flex gap-5 items-center justify-center">
              <FormLabel className="text-white">Number: </FormLabel>
              <FormControl>
                <Input className="text-white" placeholder="Enter the number of question" itemType="number" {...field} />
              </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        {pending?(<Button disabled type="submit">Submittng...</Button>):(<Button type="submit">Submit</Button>)}
        </div>
      </form>
    <Toaster/>
    <Link className="mt-28" href={{
      href: "/generate-quiz/prompt-quiz-generation/quizPage/",
      query: {
        code: redirectURL
      }
    }}>
      {redirectURL}
      </Link>
    </Form>
  );
};

export default promptForm;
