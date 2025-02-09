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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="flex flex-col items-center px-4 pb-4">
        <Typography component="h2" variant="heading" level={3}>
          Let's sell something
        </Typography>

        <div className="w-full block mt-4">
          <p className="text-sm opacity-70 px-1 mb-1">Product name</p>
          <Input placeholder="Xbox 360 - Good condition" />
        </div>

        <div className="w-full block mt-4">
          <p className="text-sm opacity-70 px-1 mb-1">Price</p>
          <NumberSelectModal />
        </div>

        <div className="shrink-0 mt-4 w-full">
          <Button fullWidth size="lg">
            Publish
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function NumberSelectModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("")
  const [updatingValue, setUpdatingValue] = useState("")

  useEffect(() => {
    setUpdatingValue(value)
  }, [isOpen])

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
