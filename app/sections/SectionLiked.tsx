import { Fragment } from "react"

export default function SectionLiked() {
  return (
    <Fragment>
      <nav className="pt-2 pb-3 text-xl border-b">
        <strong>Favorite items</strong>
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
