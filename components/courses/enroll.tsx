import { Button, SwipeableDrawer, Typography } from "@mui/material";
import { cloneElement, useState } from "react";

export function EnrollCourse({ children }: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const trigger = cloneElement(children, {
    onClick: handleOpen,
  });
  return (
    <>
      {trigger}
      <SwipeableDrawer
        open={open}
        disableSwipeToOpen
        anchor="right"
        onClose={handleClose}
        onOpen={handleOpen}
        ModalProps={{ keepMounted: false }}
      >
        <Typography variant="h5">Enroll</Typography>
        <Typography>Pick a language</Typography>
      </SwipeableDrawer>
    </>
  );
}
