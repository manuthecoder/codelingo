import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import {
  AppBar,
  Box,
  CardActionArea,
  Drawer,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
} from "@mui/material";
import { cloneElement, useMemo, useState } from "react";
import Slide from "./slide";

export function Level({ questions, reverse, index, language, color }: any) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState<
    ("incomplete" | "correct" | "incorrect")[]
  >(["incomplete", "incomplete", "incomplete", "incomplete", "incomplete"]);

  const fiveRandomQuestions = useMemo(() => {
    const randomQuestions = questions.sort(() => 0.5 - Math.random());
    return randomQuestions.slice(0, 5);
  }, [questions]);

  const item = reverse ? (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        9:30 am
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="success" sx={{ color: "#fff" }}>
          <span className="material-symbols-outlined">check</span>
        </TimelineDot>{" "}
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <CardActionArea>
          <Typography variant="h6" component="span">
            Level {index}
          </Typography>
          {/* <Typography>Absolute beginner</Typography> */}
        </CardActionArea>
      </TimelineContent>
    </TimelineItem>
  ) : (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
      >
        10:00 am
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="success" sx={{ color: "#fff" }}>
          <span className="material-symbols-outlined">check</span>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <CardActionArea>
          <Typography variant="h6" component="span">
            Level {index}
          </Typography>
          {/* <Typography>Basic knowledge</Typography> */}
        </CardActionArea>
      </TimelineContent>
    </TimelineItem>
  );

  const trigger = cloneElement(item, {
    onClick: () => setOpen(true),
  });

  return (
    <>
      {trigger}
      <Drawer
        PaperProps={{
          sx: {
            height: "100vh",
          },
        }}
        anchor="bottom"
        open={open}
        onClose={() =>
          confirm(
            "Are you sure you want to exit? All your progress will be lost"
          ) && setOpen(false)
        }
      >
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            color: "hsl(var(--base), 10%)",
            background: "hsl(var(--base), 90%)",
          }}
        >
          <Toolbar>
            <IconButton
              onClick={() =>
                confirm(
                  "Are you sure you want to exit? All your progress will be lost"
                ) && setOpen(false)
              }
              color="inherit"
              sx={{ mr: 2 }}
            >
              <span className="material-symbols-outlined">close</span>
            </IconButton>
            <Typography>Level {index}</Typography>
            <LinearProgress
              sx={{ ml: 2, flexGrow: 1, height: 20, borderRadius: 20 }}
              variant="determinate"
              value={
                (progress.filter((p) => p !== "incomplete").length /
                  progress.length) *
                100
              }
            />
          </Toolbar>
        </AppBar>
        {fiveRandomQuestions.map((question: any, index: number) => (
          <Slide
            question={question}
            key={question.prompt}
            progress={progress}
            setProgress={setProgress}
            index={index}
          />
        ))}
        {progress.filter((p) => p !== "incomplete").length === 5 && (
          <Box>
            <Typography variant="h6">Congratulations!</Typography>
            <Typography variant="body1">
              You have completed this level
            </Typography>
            <Typography variant="body1">
              Accuracy:{" "}
              {Math.round(
                (progress.filter((p) => p === "correct").length /
                  progress.length) *
                  100
              )}
              %
            </Typography>
          </Box>
        )}
      </Drawer>
    </>
  );
}
