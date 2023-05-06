import { languages } from "@/questionData/languages";
import { Masonry } from "@mui/lab";
import {
  Alert,
  Box,
  Card,
  CardActionArea,
  CardContent,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { cloneElement, useState } from "react";
``;
export function EnrollCourse({ children }: any) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const trigger = cloneElement(children, {
    onClick: handleOpen,
  });

  const handleCourseSelect = async (language: string) => {
    const email: any = session?.user?.email;

    setLoading(true);
    await fetch(
      "/api/user/courses/enroll?" +
        new URLSearchParams({
          language,
          email,
        })
    );
    setLoading(false);
    setOpen(false);
  };

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
            background: "hsl(var(--base), 95%)",
            m: "10px",
            borderRadius: "28px",
            height: "calc(100vh - 20px)",
          },
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
            Learn a new language
          </Typography>
          <Typography>Pick a language</Typography>
          <Masonry columns={{ xs: 1, sm: 2 }} spacing={2} sx={{ mt: 2 }}>
            {languages.map((language) => (
              <Card
                onClick={() => handleCourseSelect(language.name)}
                sx={{
                  my: 1,
                  textAlign: "center",
                  background: "hsl(var(--base), 90%)",
                  borderRadius: "28px",
                  ...(loading && {
                    opacity: 0.5,
                  }),
                }}
                elevation={0}
                key={language.name}
              >
                <CardActionArea disabled={loading}>
                  <CardContent>
                    <picture>
                      <img
                        style={{ borderRadius: "20px" }}
                        src={language.icon}
                        alt={language.name}
                        draggable={false}
                        width="100%"
                      />
                    </picture>
                    <Typography sx={{ mt: 2, textTransform: "capitalize" }}>
                      {language.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Masonry>
          <Alert severity="info">More languages coming soon!</Alert>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
