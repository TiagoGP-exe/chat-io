"use client"

import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ModeToggle } from "@/components/mode-toggle"

const getProfileGithub = async (): Promise<string> => {
  const res = await fetch(`https://api.github.com/users/tiagogp-exe`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  })
  const { avatar_url } = await res.json()
  return avatar_url
}

export default async function Home() {
  const profileGithub = await getProfileGithub()

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="flex  h-[20vh] w-full  max-w-screen-xl  border-x-2 "></div>
      <div className="flex w-full items-center justify-center  border-y-2 ">
        <div className="flex w-full  max-w-screen-xl items-center justify-center border-x-2  px-2 py-8">
          <Logo size="large" />
        </div>
      </div>
      <div className="flex w-full max-w-screen-xl flex-1 flex-col items-center justify-center border-x-2  py-8">
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

        <div className="relative w-full ">
          <Image
            priority
            src="/images/banner.png"
            quality={100}
            width={1280}
            height={832}
            alt="banner"
            className=" relative z-10 h-auto w-full  px-10 sm:w-auto"
          />
          <div className="absolute left-0 top-0 h-full  w-full blur-3xl ">
            <div className="clip-trapezoid h-full w-full dark:bg-primary "></div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center  border-t-2 ">
        <div className="flex w-full max-w-screen-xl flex-wrap items-center justify-center gap-4 border-x-2 p-8 md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-4 ">
            <Link href="https://github.com/tiagogp-exe">
              <Image
                src={profileGithub}
                width={64}
                height={64}
                alt="logomark"
                className="h-8 w-8 rounded-full"
              />
            </Link>
            <p className="text-center text-sm leading-loose md:text-left">
              Built by{" "}
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Tiago Guimarães
              </a>
              . Hosted on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Vercel
              </a>
              .
            </p>
          </div>
          <ModeToggle />
        </div>
      </div>
    </main>
  )
}
