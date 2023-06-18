"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { MainNavItem } from "@/types"
import { LogOut } from "lucide-react"

import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="fixed bottom-0 top-0 flex w-20 max-w-[100vw]  flex-col  gap-3  bg-foreground pb-4">
      <div className="flex flex-col items-center  gap-3 overflow-y-auto pt-4">
        <div className="flex w-full items-center justify-center  border-l-4 border-slate-100 border-opacity-40 ">
          <Link
            href="/"
            className=" flex h-12 w-12 items-center justify-center rounded-full  bg-white/10"
          >
            <Image
              src="/images/logo.svg"
              quality={100}
              width={64}
              height={64}
              alt="logomark"
              className="h-7 w-7 pr-1"
            />
          </Link>
        </div>
        <nav className="flex w-full flex-col items-center gap-2.5 border-t-2 border-slate-100 border-opacity-10 pt-3">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((item, index) => (
            <Image
              src="/images/channel-1.png"
              quality={100}
              width={64}
              height={64}
              alt="logomark"
              className=" h-12 w-12 rounded-full bg-black"
            />
          ))}
          <div className="absolute bottom-[4.5rem] h-10 w-full bg-gradient-to-t from-foreground" />
        </nav>
      </div>
      <div className=" flex items-center justify-center rounded-full">
        <Link
          href="/"
          className="flex h-12  w-12  items-center justify-center rounded-full bg-white/10"
        >
          <LogOut className="rotate-180 text-white" size={16} />
        </Link>
      </div>
    </div>
  )
}
