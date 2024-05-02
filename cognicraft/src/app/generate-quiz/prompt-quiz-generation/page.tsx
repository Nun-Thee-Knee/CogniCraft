'use client'
import Link from "next/link";
import PromptForm from "~/components/promptForm"
import { api } from "~/trpc/react"
import { Button } from "~/components/ui/button";
import { ToastProvider } from "~/components/ui/toast";
import crypto from "crypto"


const page = () => {
  return (
    <div className="bg-black h-[100vh] flex flex-col text-white justify-start items-center p-10">
      <ToastProvider>
      <PromptForm />
      </ToastProvider>
    </div>
  )
}

export default page