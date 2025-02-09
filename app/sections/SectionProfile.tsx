"use client"

import { useWorldAuth } from "@/lib/wallet"
import { Button } from "@worldcoin/mini-apps-ui-kit-react"
import { Fragment } from "react"
import { FaStar } from "react-icons/fa6"
import { IoIosLogOut } from "react-icons/io"
import { PiPlugsConnectedBold } from "react-icons/pi"

export default function SectionProfile() {
  const { isLoggedIn, signOut, user, isSyncing, signInWithWallet } =
    useWorldAuth()

  if (!isLoggedIn) {
    return (
      <Fragment>
        <nav className="pt-2 pb-3 text-xl border-b">
          <strong>Profile</strong>
        </nav>

        <div className="grid place-content-center place-items-center py-32">
          <PiPlugsConnectedBold className="text-5xl scale-110" />
          <p className="mt-6 opacity-70 text-lg">Please login to continue</p>
        </div>

        <div className="flex-grow" />

        <Button
          isLoading={isSyncing}
          onClick={signInWithWallet}
          variant="primary"
          fullWidth
          size="lg"
        >
          Login
        </Button>
        <div className="mb-8" />
      </Fragment>
    )
  }
  return (
    <Fragment>
      <nav className="pt-2 pb-3 text-xl border-b">
        <strong>Profile</strong>
      </nav>

      <nav className="flex gap-4 items-center mt-4">
        <div
          style={{
            backgroundImage: `url(${user?.profilePictureUrl})`,
          }}
          className="bg-black/5 bg-cover bg-center rounded-full overflow-hidden size-24"
        />
        <section>
          <strong className="text-2xl capitalize">
            {user?.username?.split(".").at(0) || "sir"}
          </strong>
          <div className="flex text-relist-yellow items-center gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </section>
      </nav>

      <section className="flex flex-wrap gap-4 mt-12">
        <div className="bg-black/2 w-full p-4 rounded-2xl border">
          <strong>Wallet</strong>
          <div className="text-2xl">0.00 WRLD</div>
        </div>

        <div className="bg-black/2 w-1/3 flex-grow p-4 rounded-2xl border">
          <strong>Sales</strong>
          <div className="text-2xl">2</div>
        </div>

        <div className="bg-black/2 w-1/3 flex-grow p-4 rounded-2xl border">
          <strong>Purchases</strong>
          <div className="text-2xl">2</div>
        </div>
      </section>

      <div className="flex-grow" />

      <Button
        onClick={signOut}
        icon={<IoIosLogOut />}
        variant="tertiary"
        fullWidth
        size="lg"
      >
        Logout
      </Button>
      <div className="mb-8" />
    </Fragment>
  )
}
