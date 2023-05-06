import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

export function AccountMenu({ user }: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton sx={{ ml: "auto", p: 0 }} onClick={handleClick}>
        <Avatar src={user.user.image} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        BackdropProps={{
          sx: {
            backdropFilter: "none!important",
            background: "transparent!important",
          },
        }}
      >
        <Link href={`/profile/${user.user.email}`}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </Menu>
    </>
  );
}
