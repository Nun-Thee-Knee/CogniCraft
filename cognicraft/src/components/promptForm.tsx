"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"

const promptFormSchema = z.object({
  prompt: z.string().min(2,{
    message: "Prompt must be of atleast 2 characters"
  }).max(100,{
    message: "Prompt is expected to be less than 100 characters"
  }),
  number: z.number()
})

const PromptForm = () => {
  const form = useForm<z.infer<typeof promptFormSchema>>({
    resolver: zodResolver(promptFormSchema),
    defaultValues: {
      prompt: "",
    },
  })
  function onSubmit(values: z.infer<typeof promptFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="prompt"
        render={({ field }) => (
          <FormItem>
            <div className="flex gap-2 mb-3 flex-row">
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
            <Button variant="secondary" type="submit">Submit</Button>
            </FormDescription>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  </Form>
  )
}

export default PromptForm