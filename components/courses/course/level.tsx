import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import {
  AppBar,
  CardActionArea,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { cloneElement, useState } from "react";

export function Level({ reverse, index, language, color }: any) {
  const [open, setOpen] = useState(false);

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
          <Typography>Because you need strength</Typography>
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
          <Typography>Because it&apos;s awesome!</Typography>
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
        <AppBar elevation={0}>
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
          </Toolbar>
        </AppBar>
      </Drawer>
    </>
  );
}
