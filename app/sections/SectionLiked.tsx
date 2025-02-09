import { MOCK_PRODUDCTS } from "@/lib/products"
import { Fragment } from "react"

export default function SectionLiked() {
  return (
    <Fragment>
      <nav className="pt-2 pb-3 text-xl border-b">
        <strong>Favorite items</strong>
      </nav>

      <section className="mt-4 grid grid-cols-2 gap-4">
        {MOCK_PRODUDCTS.slice(0, 4).map(({ name, price, image }) => (
          <div key={`liked-${image}-${price}`}>
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className="bg-black/5 bg-cover bg-center rounded-xl overflow-hidden w-full h-40"
            />
            <strong className="text-lg mt-2 block">${price}</strong>
            <p className="opacity-70">{name}</p>
          </div>
        ))}
      </section>
    </Fragment>
  )
}
