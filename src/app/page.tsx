"use client"

import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="flex  h-[20vh] w-full  max-w-screen-xl  border-x-2 border-[#748FF026]"></div>
      <div className="flex w-full items-center justify-center  border-y-2 border-[#748FF026]">
        <div className="flex w-full  max-w-screen-xl items-center justify-center border-x-2 border-[#748FF026] px-2 py-8">
          <Image
            src="/images/logomark.svg"
            quality={100}
            width={432}
            height={115}
            alt="logomark"
            className="h-auto w-48 max-w-[90%] sm:w-auto"
          />
        </div>
      </div>
      <div className="flex w-full max-w-screen-xl flex-1 flex-col items-center justify-center border-x-2 border-[#748FF026]  px-4 pt-8 md:p-12">
        <div className="mb-10 flex items-center gap-2 text-white">
          <Link href="/channels" className={buttonVariants()}>
            Get Started
          </Link>

          <Link
            href="/"
            className={buttonVariants({ variant: "outline-primary" })}
          >
            Read more
          </Link>
        </div>

        <div>
          <Image
            src="/images/banner.png"
            quality={100}
            width={1280}
            height={832}
            alt="banner"
            className="w-[50rem] "
          />
        </div>
        <Image
          src="/images/gradient.png"
          quality={100}
          width={1280}
          height={832}
          alt="banner"
          className="absolute  left-0 top-[40vh] -z-10 w-[100vw] "
        />
      </div>
    </main>
  )
}
