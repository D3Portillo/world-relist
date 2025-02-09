"use client"

import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useWorldAuth } from "@/lib/wallet"
import { Tabs, TabsContent } from "@radix-ui/react-tabs"
import { SearchField } from "@worldcoin/mini-apps-ui-kit-react"
import { useState } from "react"

import { FaRegHeart } from "react-icons/fa6"
import { LuPackagePlus } from "react-icons/lu"
import { BsPersonLinesFill } from "react-icons/bs"
import { FiInbox } from "react-icons/fi"

import AppIcon from "@/components/icons/AppIcon"

import ModalSell from "./ModalSell"
import SectionHome from "./sections/SectionHome"
import SectionInbox from "./sections/SectionInbox"
import SectionLiked from "./sections/SectionLiked"

export default function Home() {
  const [view, setView] = useState("home")
  const { isLoggedIn, user } = useWorldAuth()

  return (
    <Tabs
      value={view}
      onValueChange={setView}
      className="max-w-2xl h-screen flex flex-col mx-auto"
    >
      {view === "home" && (
        <nav className="border-b [&_input]:rounded-none [&_input]:h-16">
          <SearchField placeholder="Search for Xbox One" />
        </nav>
      )}

      <section className="px-3 flex-grow overflow-auto pt-2">
        <TabsContent value="home">
          <SectionHome />
        </TabsContent>

        <TabsContent value="inbox">
          <SectionInbox />
        </TabsContent>

        <TabsContent value="liked">
          <SectionLiked />
        </TabsContent>
      </section>

      <TabsList className="w-full border-t h-auto bg-transparent shrink-0 p-0 pt-1 grid grid-cols-5 rounded-none [&_button]:font-semibold">
        <TabsTrigger
          className="rounded-none data-[state=active]:text-relist-teal gap-0.5 grid place-items-center py-1.5"
          value="home"
        >
          <AppIcon className="w-6 scale-105" />
          <span className="text-xs mt-0.5 h-4">Buy</span>
        </TabsTrigger>

        <TabsTrigger
          className="rounded-none data-[state=active]:text-relist-teal gap-0.5 grid place-items-center py-1.5"
          value="liked"
        >
          <FaRegHeart className="text-2xl" />
          <span className="text-xs h-4">Liked</span>
        </TabsTrigger>

        <ModalSell
          trigger={
            <button className="rounded-none data-[state=active]:text-relist-teal gap-0.5 grid place-items-center py-1.5">
              <LuPackagePlus className="text-2xl mb-px scale-110" />
              <span className="text-xs h-4">Sell</span>
            </button>
          }
        />

        <TabsTrigger
          className="rounded-none data-[state=active]:text-relist-teal gap-0.5 grid place-items-center py-1.5"
          value="inbox"
        >
          <FiInbox className="text-2xl scale-110" />
          <span className="text-xs h-4">Inbox</span>
        </TabsTrigger>

        <TabsTrigger
          className="rounded-none data-[state=active]:text-relist-teal gap-0.5 grid place-items-center py-1.5"
          value="profile"
        >
          <BsPersonLinesFill className="text-2xl" />
          <span className="text-xs h-4">Profile</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
