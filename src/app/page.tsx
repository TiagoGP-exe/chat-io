import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="flex h-[20vh] w-full max-w-screen-xl border-[#748FF026] border-l-2 border-r-2"></div>
      <div className="flex w-full items-center justify-center py-8 border-t-2 border-b-2 border-[#748FF026]">
      <Image src="/logomark.svg" 
      quality={100}
        width={400} 
        height={400}
        alt='banner'
        className='aspect-auto   '
      />
      </div>
      <div className=" flex flex-1 w-full items-center justify-center border-l-2 border-[#748FF026] border-r-2 max-w-screen-xl p-12">
      <div>
      <Image src="/banner.png" 
      quality={100}
        width={1280} 
        height={832}
        alt='banner'
        className='aspect-auto   border-4 rounded-[2rem] border-primary'
      />
     
      </div>
      <Image src="/gradient.png" 
      quality={100}
        width={1280} 
        height={832}
        alt='banner'
        className=' w-[100vw] md:translate-y-16 absolute bottom-0 left-0 -z-10'
      />
      
      </div>
     
    </main>
  );
}
