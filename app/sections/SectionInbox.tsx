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
          <div
            style={{
              backgroundImage: `url(https://randomuser.me/api/portraits/men/1.jpg)`,
            }}
            className="bg-black/5 bg-cover bg-center shrink-0 rounded-xl overflow-hidden size-24"
          />
          <div className="w-full">
            <p className="opacity-70 mt-1">Skate Shop 101</p>
            <strong className="text-lg block">
              Skateboard - 8.5" - Good condition
            </strong>
            <p className="overflow-hidden max-w-[calc(100vw-9rem)] whitespace-nowrap text-ellipsis">
              Thank you. It's looking dope!
            </p>
          </div>
        </div>

        <div className="flex overflow-hidden border-b pb-4 items-start gap-4">
          <div
            style={{
              backgroundImage: `url(https://randomuser.me/api/portraits/men/2.jpg)`,
            }}
            className="bg-black/5 bg-cover bg-center shrink-0 rounded-xl overflow-hidden size-24"
          />
          <div className="w-full">
            <p className="opacity-70 mt-1">Steve Aoki</p>
            <strong className="text-lg block">Sauna Party at my place</strong>
            <p className="overflow-hidden max-w-[calc(100vw-9rem)] whitespace-nowrap text-ellipsis">
              Sorry, can't make it for that price.
            </p>
          </div>
        </div>

        <div className="flex overflow-hidden border-b pb-4 items-start gap-4">
          <div
            style={{
              backgroundImage: `url(https://randomuser.me/api/portraits/men/22.jpg)`,
            }}
            className="bg-black/5 bg-cover bg-center shrink-0 rounded-xl overflow-hidden size-24"
          />
          <div className="w-full">
            <p className="opacity-70 mt-1">David R.</p>
            <strong className="text-lg block">Netlix Gift Card - 1Y</strong>
            <p className="overflow-hidden max-w-[calc(100vw-9rem)] whitespace-nowrap text-ellipsis">
              $5??
            </p>
          </div>
        </div>

        <div className="flex overflow-hidden border-b pb-4 items-start gap-4">
          <div
            style={{
              backgroundImage: `url(https://randomuser.me/api/portraits/men/12.jpg)`,
            }}
            className="bg-black/5 bg-cover bg-center shrink-0 rounded-xl overflow-hidden size-24"
          />
          <div className="w-full">
            <p className="opacity-70 mt-1">Rolaldino Soccer</p>
            <strong className="text-lg block">Roblox Pass 360</strong>
            <p className="overflow-hidden max-w-[calc(100vw-9rem)] whitespace-nowrap text-ellipsis">
              Hey mate, still interested? I can give you a discount if you want.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
