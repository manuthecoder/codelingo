import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Course({ language }: any) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Link
      href={`/courses/${language.language}`}
      passHref
      style={{
        textDecoration: "none",
      }}
    >
      <Card
        sx={{
          my: 1,
          background: "hsl(var(--base), 90%)",
          borderRadius: "28px",
          ...(loading && {
            opacity: 0.5,
          }),
        }}
        elevation={0}
      >
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" sx={{ textTranform: "capitalize" }}>
              LANGUAGE
            </Typography>
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
              {language.language}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
