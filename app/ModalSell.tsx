"use client"

import { toast } from "sonner"
import { useProducts } from "@/lib/products"
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Input,
  NumberPad,
  Typography,
} from "@worldcoin/mini-apps-ui-kit-react"
import { useEffect, useState } from "react"

export default function ModalSell({ trigger }: { trigger: React.ReactNode }) {
  const [products, setProducts] = useProducts()
  const [isOpen, setIsOpen] = useState(false)
  const [price, setPrice] = useState(0)
  const [name, setName] = useState("")

  useEffect(() => {
    if (isOpen) {
      // Reset the form when the modal is opened
      setPrice(0)
      setName("")
    }
  }, [isOpen])

  function publishProduct() {
    if (!name) return toast.error("Name can't be empty")
    if (price < 1) return toast.error("Price must be greater than 1 USD")
    setProducts([
      ...products,
      {
        name,
        price,
        image:
          "https://static.vecteezy.com/system/resources/previews/044/250/390/non_2x/still-empty-no-product-yet-concept-illustration-flat-design-simple-modern-graphic-element-for-empty-state-ui-infographic-icon-vector.jpg",
      },
    ])
    toast.success("Product published!")
    setIsOpen(false)
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="flex flex-col items-center px-4 pb-4">
        <Typography component="h2" variant="heading" level={3}>
          Let's sell something
        </Typography>

        <div className="w-full block mt-4">
          <p className="text-sm opacity-70 px-1 mb-1">Product name</p>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Xbox 360 - Good condition"
          />
        </div>

        <div className="w-full block mt-4">
          <p className="text-sm opacity-70 px-1 mb-1">Price</p>
          <NumberSelectModal onValueChange={setPrice} />
        </div>

        <div className="shrink-0 mt-4 w-full">
          <Button onClick={publishProduct} fullWidth size="lg">
            Publish
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function NumberSelectModal({
  onValueChange,
}: {
  onValueChange?: (value: number) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("")
  const [updatingValue, setUpdatingValue] = useState("")

  useEffect(() => {
    setUpdatingValue(value)
  }, [isOpen])

  useEffect(() => {
    const formatted = Number(value)
    onValueChange?.(Number.isFinite(formatted) ? formatted : 0)
  }, [value])

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button className="bg-black/3 text-lg font-semibold border rounded-lg w-full h-12 flex items-center p-3">
          ${value || "0.00"}
        </button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col items-center px-4 pb-4">
        <div className="flex flex-col gap-4 items-center w-[400px]">
          <div className="font-display font-semibold flex items-center gap-2 h-[4.25rem]">
            <span className="text-xl">$</span>
            <span className="text-[3.5rem]">{updatingValue || "0.00"}</span>
          </div>
          <NumberPad value={updatingValue} onChange={setUpdatingValue} />
        </div>
        <Button
          onClick={() => {
            setValue(updatingValue)
            setIsOpen(false)
          }}
          fullWidth
          size="lg"
        >
          Confirm
        </Button>
      </DrawerContent>
    </Drawer>
  )
}
