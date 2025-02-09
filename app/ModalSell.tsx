import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  Typography,
} from "@worldcoin/mini-apps-ui-kit-react"

export default function ModalSell({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="flex flex-col items-center pb-4">
        <Typography component="h2" variant="heading" level={3}>
          Drawer title
        </Typography>
        <Typography className="p-4">Drawer content</Typography>
        <DrawerClose>
          <Button>Close</Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}
