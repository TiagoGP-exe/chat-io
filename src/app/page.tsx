"use client"

import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="flex  w-full max-w-screen-xl  border-[#748FF026]  border-x-2 h-[20vh]"></div>
      <div className="flex w-full items-center justify-center  border-y-2 border-[#748FF026]">
      <div className='flex w-full  items-center justify-center max-w-screen-xl py-8 border-[#748FF026] border-x-2 px-2'>
      <Image src="/images/logomark.svg" 
      quality={100}
        width={432} 
        height={115}
        alt='logomark'
        className=' max-w-[90%] w-auto h-auto'
      />
      </div>
      </div>
      <div className=" flex flex-1 w-full pt-8 justify-center border-x-2 border-[#748FF026]  max-w-screen-xl px-4 md:p-12">
      <div>
        
      <Image src="/images/banner.png" 
      quality={100}
        width={1280} 
        height={832}
        alt='banner'
        className='aspect-auto '
      />
     
      </div>
      <Image src="/images/gradient.png" 
      quality={100}
        width={1280} 
        height={832}
        alt='banner'
       className='w-[100vw]  absolute top-[4  0vh] left-0 -z-10 bg-gradient-to-b '
      />

      </div>
     
    </main>
  );
}
