"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"

import Class from "~/components/class";
import { createClassRoom } from "utils/action"

const classAddSchema = z.object({
  title: z.string().min(5).max(50),
})


const classRoom = () => {
  //Form Definition
  const form = useForm<z.infer<typeof classAddSchema>>({
    resolver: zodResolver(classAddSchema),
    defaultValues: {
      title: "",
    },
  })
  function onSubmit(values: z.infer<typeof classAddSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const className = values.title
    createClassRoom(className)
  }

  return (
    <div className="flex flex-col gap-10 h-[100vh] items-center justify-center bg-black text-white">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className="text-black" placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      <Class title="Bitchass Class" student={90} quiz={90} code="sgfav56qw4qw4"/>
    </div>
  );
};

export default classRoom;
