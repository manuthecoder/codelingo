import { Box, Button, Divider, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function Slide({ index, progress, setProgress, question }: any) {
  const currentSlide = progress.findIndex((item: any) => item === "incomplete");
  const isMobile = useMediaQuery("(max-width: 600px)");

  return index === currentSlide ? (
    <Box
      sx={{
        p: 5,
        display: "flex",
        justifyContent: { sm: "center" },
        alignItems: { sm: "center" },
        flexDirection: "column",
        height: { sm: "100vh" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          gap: 2,
          mt: "auto",
        }}
      >
        <Image
          src="/icon/clear.png?purge=true"
          style={{ borderRadius: "100%" }}
          width={isMobile ? 50 : 70}
          height={isMobile ? 50 : 70}
          alt="astronaut"
        />
        <Box
          sx={{
            background: "#eee",
            color: "#000",
            px: 2,
            py: 1,
            borderRadius: 5,
            borderBottomLeftRadius: 0,
            height: "auto",
            flexGrow: 0,
          }}
        >
          <Typography
            {...(!isMobile && { variant: "h6" })}
            className="font-grotesk"
            sx={{ fontWeight: "700" }}
          >
            {question.prompt}
          </Typography>
        </Box>
      </Box>
      {question.type === "chat" ? (
        <>
          <Box
            sx={{
              mt: 2,
              backdropFilter: "blur(10px)",
              p: 3,
              width: "100%",
              borderRadius: 5,
              mt: "auto",
            }}
          >
            <Divider sx={{ mb: 2 }} />
            <Typography sx={{ textAlign: "center" }} variant="body2">
              SELECT A REPLY
            </Typography>
            {question.answer.map((answer: any) => (
              <Box sx={{ display: "flex", justifyContent: "end" }} key={answer}>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    mt: 1,
                    background: "#007AFF",
                    borderRadius: 5,
                    minWidth: "unset",
                    borderBottomRightRadius: 0,
                    textTransform: "none",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                    textAlign: "right",
                  }}
                >
                  <Typography {...(!isMobile && { variant: "h6" })}>
                    {answer}
                  </Typography>
                </Button>
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <></>
      )}
    </Box>
  ) : (
    <></>
  );
}
