"use client"

import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'

export const BannerHome = () => {
  const matches = useMediaQuery("(max-width: 640px)")

  return (
    <div className="relative w-full ">
      <Image
        src={
          matches ? "/images/banner-mobile.png" : "/images/banner.png"
        }
        quality={100}
        width={1280}
        height={832}
        alt="banner"
        className={
          `${matches ? "pl-8" : "px-10"}  relative z-10 h-auto w-full sm:w-auto`
        }
      />
      <div className="absolute left-0 top-0 h-full  w-full blur-3xl ">
        <div className="clip-trapezoid h-full w-full dark:bg-primary "></div>
      </div>
    </div>
  )
}