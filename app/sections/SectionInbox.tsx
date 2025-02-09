"use client"

import { useWorldAuth } from "@/lib/wallet"
import { Fragment } from "react"

export default function SectionInbox() {
  const { isLoggedIn, user } = useWorldAuth()

  return (
    <Fragment>
      <nav className="pt-2 pb-3 text-xl border-b">
        <strong>Inbox</strong>
      </nav>

      <section className="mt-4 grid gap-4">
        <div className="flex overflow-hidden border-b pb-4 items-start gap-4">
          <div className="bg-black/5 shrink-0 rounded-xl overflow-hidden size-24" />
          <div className="w-full">
            <p className="opacity-70 mt-1">David R.</p>
            <strong className="text-lg block">Xbox One for sale</strong>
            <p className="overflow-hidden max-w-[calc(100vw-9rem)] whitespace-nowrap text-ellipsis">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt, nunc nec euismod.
            </p>
          </div>
        </div>

        <div className="flex overflow-hidden border-b pb-4 items-start gap-4">
          <div className="bg-black/5 shrink-0 rounded-xl overflow-hidden size-24" />
          <div className="w-full">
            <p className="opacity-70 mt-1">David R.</p>
            <strong className="text-lg block">Xbox One for sale</strong>
            <p className="overflow-hidden max-w-[calc(100vw-9rem)] whitespace-nowrap text-ellipsis">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt, nunc nec euismod.
            </p>
          </div>
        </div>

        <div className="flex overflow-hidden border-b pb-4 items-start gap-4">
          <div className="bg-black/5 shrink-0 rounded-xl overflow-hidden size-24" />
          <div className="w-full">
            <p className="opacity-70 mt-1">David R.</p>
            <strong className="text-lg block">Xbox One for sale</strong>
            <p className="overflow-hidden max-w-[calc(100vw-9rem)] whitespace-nowrap text-ellipsis">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt, nunc nec euismod.
            </p>
          </div>
        </div>

        <div className="flex overflow-hidden border-b pb-4 items-start gap-4">
          <div className="bg-black/5 shrink-0 rounded-xl overflow-hidden size-24" />
          <div className="w-full">
            <p className="opacity-70 mt-1">David R.</p>
            <strong className="text-lg block">Xbox One for sale</strong>
            <p className="overflow-hidden max-w-[calc(100vw-9rem)] whitespace-nowrap text-ellipsis">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt, nunc nec euismod.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
