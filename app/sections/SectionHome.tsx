"use client"

import { useWorldAuth } from "@/lib/wallet"
import { Fragment } from "react"

export default function SectionHome() {
  const { isLoggedIn, user } = useWorldAuth()

  return (
    <Fragment>
      {isLoggedIn && (
        <Fragment>
          <nav className="mt-2">
            <p className="text-lg">
              Welcome back{" "}
              <strong className="capitalize">
                {user?.username?.split(".").at(0) || "sir"},
              </strong>
              <br />
              Here are some items you might like!
            </p>
          </nav>

          <section className="mt-4 flex overflow-auto gap-4">
            <div>
              <div className="bg-black/5 rounded-xl overflow-hidden size-40" />
              <strong className="text-lg mt-2 block">$32.32</strong>
              <p className="opacity-70">Item name</p>
            </div>

            <div>
              <div className="bg-black/5 rounded-xl overflow-hidden size-40" />
              <strong className="text-lg mt-2 block">$32.32</strong>
              <p className="opacity-70">Item name</p>
            </div>

            <div>
              <div className="bg-black/5 rounded-xl overflow-hidden size-40" />
              <strong className="text-lg mt-2 block">$32.32</strong>
              <p className="opacity-70">Item name</p>
            </div>

            <div>
              <div className="bg-black/5 rounded-xl overflow-hidden size-40" />
              <strong className="text-lg mt-2 block">$32.32</strong>
              <p className="opacity-70">Item name</p>
            </div>
          </section>
        </Fragment>
      )}

      <nav className="mt-6 border-t pt-2 text-xl">
        <strong>Popular items</strong>
      </nav>

      <section className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <div className="bg-black/5 rounded-xl overflow-hidden w-full h-40" />
          <strong className="text-lg mt-2 block">$32.32</strong>
          <p className="opacity-70">Item name</p>
        </div>

        <div>
          <div className="bg-black/5 rounded-xl overflow-hidden w-full h-40" />
          <strong className="text-lg mt-2 block">$32.32</strong>
          <p className="opacity-70">Item name</p>
        </div>

        <div>
          <div className="bg-black/5 rounded-xl overflow-hidden w-full h-40" />
          <strong className="text-lg mt-2 block">$32.32</strong>
          <p className="opacity-70">Item name</p>
        </div>

        <div>
          <div className="bg-black/5 rounded-xl overflow-hidden w-full h-40" />
          <strong className="text-lg mt-2 block">$32.32</strong>
          <p className="opacity-70">Item name</p>
        </div>
      </section>
    </Fragment>
  )
}
