"use client"

import { useState } from "react"
import { User } from "@prisma/client"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { messageSchema } from "@/lib/validations/message"
import { Input } from "@/components/ui/input"

interface Message {
  author: string
  message: string
}

type FormData = z.infer<typeof messageSchema>

interface HomeProps {
  // user?: User & {
  //   id: string
  //   username?: string | null | undefined
  // }
  params: { id?: string };
  searchParams: {};
}

export default function Home({ }: HomeProps) {
  const [messages, setMessages] = useState<Array<Message>>([])
  const { register, reset, handleSubmit } = useForm<FormData>()

  // useEffect(() => {
  //   socketInitializer(setMessages)
  // }, [])

  const sendMessage = async ({ message }: FormData) => {
    console.log("message", message)
    // const author = user?.username ?? ""
    // socket.emit("createdMessage", { author, message })
    // setMessages((currentMsg) => [...currentMsg, { author, message }])
  }

  return (
    <main className="relative flex min-h-screen flex-1 flex-col items-center ">
      {messages.map((message, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <p className="text-2xl font-bold">{message.author}</p>
            <p className="text-xl">{message.message}</p>
          </div>
        )
      })}
      <form
        onSubmit={handleSubmit(sendMessage)}
        className="absolute inset-x-0 bottom-0 flex flex-col items-center bg-foreground-soft px-6 pb-6"
      >
        <Input
          placeholder="Message"
          autoComplete="off"
          {...register("message")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              e.stopPropagation()
              handleSubmit(sendMessage)
              reset()
            }
          }}
          className=" border-0 bg-foreground/10 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </form>
    </main>
  )
}
