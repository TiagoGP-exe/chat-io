import { NavItem } from "@/types"

import { MainNav } from "@/components/main-nav"

interface RootLayoutProps {
  children: React.ReactNode
}

const items: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
]

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <main>
      <div className="flex min-h-screen flex-col">
        <MainNav items={items} />
      </div>
    </main>
  )
}
