import { Box, Button, Divider, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";

function BuildCode({ question, progress, setProgress }: any) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  // {"type":"build","prompt":"How do you declare a function named 'add' that takes two parameters, 'a' and 'b'?","choices":["function","add","(","a",",","b",")","{","}","return"],"correctOrder":[0,1,2,3,4,5,7,8,9],"level":2}

  const [phrase, setPhrase] = useState<string[]>([]);

  return (
    <>
      <Box
        sx={{
          alignItems: "end",
          justifyContent: "end",
          display: "flex",
          gap: 2,
          width: "100%",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            color: "#000",
            px: 2,
            py: 1,
            background: "#007AFF",
            minWidth: "100px",
            borderRadius: 5,
            minHeight: 45,
            borderBottomRightRadius: 0,
          }}
        >
          {phrase.length === 0 && (
            <Box
              sx={{ width: "100%", height: 35, borderBottom: "1px solid #fff" }}
            />
          )}
          {phrase.map((word: string, index: number) => (
            <Button
              key={index}
              variant="outlined"
              color="inherit"
              onClick={() => setPhrase(phrase.filter((w, i) => i !== index))}
            >
              {question.choices[word]}
            </Button>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          backdropFilter: "blur(10px)",
          p: 3,
          width: "100%",
          borderRadius: 5,
          mt: "auto",
        }}
      >
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {question.choices.map((word: any, index: any) => (
            <Button
              variant="outlined"
              key={word}
              onClick={() => setPhrase([...phrase, index])}
              disabled={phrase.includes(index)}
            >
              {word}
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
}

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
            {question.answer.map((answer: any, answerIndex: number) => (
              <Box sx={{ display: "flex", justifyContent: "end" }} key={answer}>
                <Button
                  onClick={() => {
                    if (answerIndex === question.correctAnswer) {
                      toast.success("Correct!");
                      new Audio("/correct.wav").play();
                      setProgress(
                        progress.map((item: any, i: number) =>
                          i === index ? "correct" : item
                        )
                      );
                    } else {
                      toast.error("Incorrect answer");
                      new Audio("/incorrect.wav").play();
                    }
                  }}
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
        <BuildCode
          question={question}
          progress={progress}
          setProgress={setProgress}
        />
      )}
    </Box>
  ) : (
    <></>
  );
}
