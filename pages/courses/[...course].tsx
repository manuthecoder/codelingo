import { Layout } from "@/components/Layout";
import { Level } from "@/components/courses/course/level";
import { Alert, Box, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import useSWR from "swr";
import Timeline from "@mui/lab/Timeline";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

export default function CoursePage() {
  const router = useRouter();
  const { data: session }: any = useSession();
  const language: any = router?.query?.course?.[0] ?? null;

  const url = `/api/user/courses/pathway?${new URLSearchParams({
    language,
    email: session?.user?.email,
  })}`;

  const { data, error } = useSWR(url, (url) =>
    fetch(url).then((res) => res.json())
  );

  const url1 = `/api/user/courses/get-data?${new URLSearchParams({
    language,
    email: session?.user?.email,
  })}`;

  const { data: progressData, error: progressDataError } = useSWR(url1, (e) =>
    fetch(e).then((res) => res.json())
  );

  const levels =
    data && Array.isArray(data.questions)
      ? [
          ...(new Set(
            ((data as any).questions as any).map((obj: any) => obj.level) as any
          ) as any),
        ].sort()
      : [];

  const randomColor = useMemo(() => {
    const colors = [
      "red",
      "green",
      "blue",
      "lime",
      "orange",
      "purple",
      "pink",
      "brown",
      "grey",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        {!language && <Alert severity="error">Language not specified</Alert>}
        {language && (
          <Box
            sx={{
              textAlign: "center",
              py: { xs: 3, sm: 5 },
              overflow: "hidden",
              whiteSpace: "noWrap",
              textOverflow: "ellipsis",
            }}
          >
            <Typography
              className="font-grotesk"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
                fontSize: { xs: "60px", sm: "100px" },
                overflow: "hidden",
                whiteSpace: "noWrap",
                textOverflow: "ellipsis",
              }}
            >
              {language}
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                opacity: 0.6,
                fontSize: { xs: "15px", sm: "16px" },
              }}
            >
              {levels.length} levels &bull; {levels.length * 10} questions
            </Typography>
            <Box>
              <Timeline position="alternate">
                {levels.map((level: any) => (
                  <Level
                    progressUrl={url1}
                    progressData={progressData}
                    questions={
                      (data as any).questions.filter(
                        (obj: any) => obj.level === level
                      ) as any
                    }
                    index={level}
                    key={level}
                    color={randomColor}
                    language={language}
                    reverse={level % 2 === 0}
                  />
                ))}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="warning" sx={{ color: "black" }}>
                      <span className="material-symbols-outlined">
                        verified
                      </span>
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>
            {(error || progressDataError) && (
              <Alert severity="error" sx={{ mt: 2 }} variant="filled">
                Oh no! We couldn&apos;t load the pathway for this course! Please
                try again later!
              </Alert>
            )}
          </Box>
        )}
      </Box>
    </Layout>
  );
}
