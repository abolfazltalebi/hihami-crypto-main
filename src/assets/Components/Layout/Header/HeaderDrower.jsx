import {
  Drawer,
  Button,
  Typography,
  IconButton,
  DrawerTrigger,
  DrawerOverlay,
  DrawerPanel,
  DrawerDismissTrigger,
} from "@material-tailwind/react";
import { CgClose } from "react-icons/cg";

export default function HeaderDrower() {
  return (
    <Drawer>
      <DrawerTrigger as={Button}>Open Drawer</DrawerTrigger>
      <DrawerOverlay>
        <DrawerPanel>
          <div className="flex items-center justify-between gap-4">
            <Typography type="h6">Material Tailwind</Typography>
            <DrawerDismissTrigger
              as={IconButton}
              size="sm"
              variant="ghost"
              color="secondary"
              className="absolute right-2 top-2"
              isCircular
            >
              <CgClose className="h-5 w-5" />
            </DrawerDismissTrigger>
          </div>
          <Typography className="mb-6 mt-2 text-foreground">
            Material Tailwind features multiple React and HTML components, all
            written with Tailwind CSS classes and Material Design guidelines.
          </Typography>
          <div className="mb-1 flex items-center gap-2">
            <Button>Get Started</Button>
            <Button color="secondary">Documentation</Button>
          </div>
        </DrawerPanel>
      </DrawerOverlay>
    </Drawer>
  );
}
