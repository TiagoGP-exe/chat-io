"use client"

import Image from "next/image"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

const nickChannel = "Makj3212"

export const SideNav = () => {
  const [_, copy] = useCopyToClipboard()

  return (
    <div className="flex w-full max-w-xs flex-col justify-between gap-3 overflow-auto bg-sidebar  pb-4">
      <div className=" flex h-20 items-center border-b-2 border-foreground/10 p-4 ">
        <Image
          unoptimized
          src="/images/channel-1.png"
          quality={100}
          width={100}
          height={100}
          alt="logomark"
          className="aspect-square h-12 w-12 rounded-full"
        />

        <div className="ml-2 flex flex-col">
          <h1 className="text-sm font-bold text-foreground">Channel 1</h1>
          <div
            className="select-none transition-all duration-200 active:scale-90"
            onClick={() => copy(nickChannel)}
          >
            <p className="cursor-pointer rounded-2xl bg-primary/20 px-1 text-center text-xs text-primary transition-all hover:bg-primary/30">
              @<span className="text-[0.6rem]">{nickChannel}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
