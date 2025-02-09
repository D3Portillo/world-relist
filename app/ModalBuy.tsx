"use client"

import { toast } from "sonner"

import {
  Button,
  Drawer,
  DrawerContent,
  Typography,
} from "@worldcoin/mini-apps-ui-kit-react"
import { handlePay } from "@/components/Pay"
import { useWorldAuth } from "@/lib/wallet"

export default function ModalBuy({
  onClose,
  item,
}: {
  onClose?: () => void
  item: {
    name: string
    price: number
    image: string
  } | null
}) {
  const { isLoggedIn, signInWithWallet } = useWorldAuth()

  async function handleBuy() {
    if (!isLoggedIn) {
      toast.error("Login to buy this item")
      return signInWithWallet()
    }

    const result = await handlePay()
    if (result?.status === "success") {
      toast.success("Yaay. Item purchased!")
    }
  }

  if (!item) return null
  return (
    <Drawer open={Boolean(item)} onOpenChange={onClose}>
      <DrawerContent className="flex flex-col items-center px-4 pb-4">
        <Typography component="h2" variant="heading" level={3}>
          Confirm purchase
        </Typography>

        <div className="border-t mt-4 w-full">
          <div
            style={{
              backgroundImage: `url(${item.image})`,
            }}
            className="bg-black/5 bg-cover bg-center rounded-xl overflow-hidden w-full h-56"
          />
          <p className="opacity-70 text-center">{item.name}</p>
        </div>

        <div className="shrink-0 mt-4 w-full">
          <Button onClick={handleBuy} fullWidth size="lg">
            Buy for ${item.price}
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
