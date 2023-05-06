import { languages } from "@/questionData/languages";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
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
        anchor="right"
        onClose={handleClose}
        onOpen={handleOpen}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "500px",
            background: "hsl(var(--base), 90%)",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Enroll
          </Typography>
          <Typography>Pick a language</Typography>
          {languages.map((language) => (
            <Card variant="outlined" sx={{ my: 1, p: 2 }} key={language.name}>
              <CardActionArea>
                <CardContent>
                  <picture>
                    <img
                      src={language.icon}
                      alt={language.name}
                      width="100"
                      height="100"
                    />
                  </picture>
                  <Typography>{language.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </SwipeableDrawer>
    </>
  );
}
