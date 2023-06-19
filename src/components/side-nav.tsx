import Image from "next/image"

import { ItemNav } from "./item-nav"

export const SideNav = () => {
  return (
    <div className="flex w-full max-w-xs flex-col justify-between gap-3 overflow-auto bg-foreground pb-4 text-white">
      <div className=" flex h-20 items-center  border-b-2 p-4 ">
        <Image
          src="/images/channel-1.png"
          quality={100}
          width={64}
          height={64}
          alt="logomark"
          className="h-12 w-12 rounded-full"
        />
      </div>
    </div>
  )
}
