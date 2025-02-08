"use client"

import { useWorldAuth } from "@/lib/wallet"
import { SearchField } from "@worldcoin/mini-apps-ui-kit-react"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Home() {
  const { isLoggedIn, user } = useWorldAuth()

  return (
    <main className="max-w-2xl mx-auto">
      <nav className="border-b [&_input]:rounded-none [&_input]:h-16">
        <SearchField placeholder="Search for Xbox One" />
      </nav>

      <section className="px-2 mt-12">
        {isLoggedIn && (
          <p className="text-base text-center">
            Welcome back {user?.username}!
          </p>
        )}

        <h1 className="font-semibold text-2xl text-center mx-auto max-w-xs">
          Buy and sell second-hand items without getting off your sofa.
        </h1>
      </section>
    </main>
  )
}
