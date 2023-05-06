import { Card } from "@mui/material";
import { useState } from "react";

export default function Course() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Card
      sx={{
        my: 1,
        textAlign: "center",
        background: "hsl(var(--base), 90%)",
        borderRadius: "28px",
        ...(loading && {
          opacity: 0.5,
        }),
      }}
    ></Card>
  );
}
