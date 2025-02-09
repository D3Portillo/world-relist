"use client"

import { Fragment, useState } from "react"
import { SearchField } from "@worldcoin/mini-apps-ui-kit-react"

import { cn } from "@/lib/utils"
import { useProducts } from "@/lib/products"
import { useWorldAuth } from "@/lib/wallet"

import ModalBuy from "@/app/ModalBuy"

export default function SectionHome() {
  const [products] = useProducts()
  const [buyingItem, setBuyingItem] = useState<{
    name: string
    price: number
    image: string
  } | null>(null)
  const { isLoggedIn, user } = useWorldAuth()

  return (
    <Fragment>
      <ModalBuy onClose={() => setBuyingItem(null)} item={buyingItem} />
      <nav className="border-b -mx-3 -mt-2 [&_input]:text-lg [&_input]:rounded-none [&_input]:h-16">
        <SearchField placeholder="Search for Xbox One" />
      </nav>

      {isLoggedIn && (
        <Fragment>
          <nav className="mt-5">
            <p className="text-lg">
              Welcome back{" "}
              <strong className="capitalize">
                {user?.username?.split(".").at(0) || "sir"} 👋,
              </strong>
              <br />
              Here are some items you might like!
            </p>
          </nav>

          <section className="mt-4 shrink-0 flex overflow-auto gap-4">
            {products
              .sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map(({ name, price, image }) => (
                <button
                  onClick={() => setBuyingItem({ name, price, image })}
                  key={`recom-${image}-${price}`}
                >
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                    className="bg-black/5 bg-cover bg-center rounded-xl overflow-hidden size-40"
                  />
                  <strong className="text-lg mt-2 block">${price}</strong>
                  <p className="opacity-70">{name}</p>
                </button>
              ))}
          </section>
        </Fragment>
      )}

      <nav
        className={cn("text-xl", isLoggedIn ? "border-t pt-2 mt-6" : "mt-4")}
      >
        <strong>Popular items</strong>
      </nav>

      <section className="mt-4 mb-12 grid grid-cols-2 gap-4">
        {products.map(({ name, price, image }) => (
          <button
            onClick={() => setBuyingItem({ name, price, image })}
            key={`item-${image}-${price}`}
          >
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className="bg-black/5 bg-cover bg-center rounded-xl overflow-hidden w-full h-40"
            />
            <strong className="text-lg mt-2 block">${price}</strong>
            <p className="opacity-70">{name}</p>
          </button>
        ))}
      </section>
    </Fragment>
  )
}
