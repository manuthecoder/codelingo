import { Box, Button, Divider, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";

function QuestionChoice({
  answer,
  setProgress,
  answerIndex,
  index,
  question,
  progress,
  isMobile,
  alreadyAnsweredIncorrectly,
  setAlreadyAnsweredIncorrectly,
}: any) {
  return (
    <Box sx={{ display: "flex", justifyContent: "end" }} key={answer}>
      <Button
        disabled={
          alreadyAnsweredIncorrectly && answerIndex !== question.correctAnswer
        }
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
            setAlreadyAnsweredIncorrectly(true);
            toast.error("Incorrect answer");
            setTimeout(() => {
              setProgress(
                progress.map((item: any, i: number) =>
                  i === index ? "incorrect" : item
                )
              );
            }, 1000);
            new Audio("/incorrect.wav").play();
          }
        }}
        variant="contained"
        disableElevation
        sx={{
          mt: 1,
          background: "#007AFF",
          ...(alreadyAnsweredIncorrectly &&
            answerIndex === question.correctAnswer && {
              color: "#000",
              background: "#00FF00",
            }),
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
        <Typography {...(!isMobile && { variant: "h6" })}>{answer}</Typography>
      </Button>
    </Box>
  );
}

export default function Slide({ index, progress, setProgress, question }: any) {
  const currentSlide = progress.findIndex((item: any) => item === "incomplete");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [alreadyAnsweredIncorrectly, setAlreadyAnsweredIncorrectly] =
    useState(false);

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
          <QuestionChoice
            index={index}
            key={answer}
            answer={answer}
            answerIndex={answerIndex}
            setProgress={setProgress}
            question={question}
            progress={progress}
            isMobile={isMobile}
            alreadyAnsweredIncorrectly={alreadyAnsweredIncorrectly}
            setAlreadyAnsweredIncorrectly={setAlreadyAnsweredIncorrectly}
          />
        ))}
      </Box>
    </Box>
  ) : (
    <></>
  );
}
