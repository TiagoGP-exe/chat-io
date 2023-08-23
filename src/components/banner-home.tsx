"use client"

import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'

export const BannerHome = () => {
  const matches = useMediaQuery('(min-width: 640px)')

  return (
    <div className="relative w-full ">
      {
        matches ? (
          <Image
            src={"/images/banner.png"}
            quality={100}
            width={1280}
            height={832}
            alt="banner"
            className="relative z-10 h-auto w-full px-10 sm:w-auto"
          />
        ) : (
          <Image
            src="/images/banner-mobile.png"
            quality={100}
            width={1280}
            height={832}
            alt="banner"
            className="relative z-10 h-auto w-full pl-8 sm:w-auto"
          />
        )
      }

      <div className="absolute left-0 top-0 h-full  w-full blur-3xl ">
        <div className="clip-trapezoid h-full w-full dark:bg-primary "></div>
      </div>
    </div>
  )
}