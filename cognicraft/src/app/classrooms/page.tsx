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
import { api } from "~/trpc/react"

const classAddSchema = z.object({
  title: z.string().min(5).max(50),
})


const classRoom = () => {
  const { data: classes, isLoading } = api.class.getAll.useQuery();
  const classCreate = api.class.create.useMutation({
    onSuccess:()=>{
      console.log("Successfully added the class")
    },
    onError: (err)=>{
      console.log("There was an error " + err);
    }
  })

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
    const name = values.title
    classCreate.mutate({name})
  }

  return (
    <div className="flex flex-col gap-10 h-[100vh] items-center justify-start bg-black text-white p-10">
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 flex-col gap-10">
      {isLoading ? (
      <p>Loading classes...</p>
    ) : classes?.length === 0 ? (
      <p>No classes found.</p>
    ) : (
      classes?.map((classData) => (
       <Class title={classData.name} student={0} quiz={0} code={classData.id}/>// Replace 'id' with the actual ID field
      ))
    )}
      </div>
    </div>
  );
};

export default classRoom;
