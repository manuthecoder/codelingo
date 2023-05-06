import { Layout } from "@/components/Layout";
import { Alert, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function CoursePage() {
  const router = useRouter();

  // const getRandomLesson = () => { 
  //   //get info later
  //   const lesson = {
  //     //dummy lesson
  //     type: "chat",
  //     prompt: "Which of these defines a variable that can be reassigned?",
  //     answer: ["let varName = 2", "const varName = 2", "var varName = 2"],
  //     correctAnswer: 2,
  //   };
  // };

  const language = router?.query?.course?.[0] ?? null;

  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        {!language && <Alert severity="error">Language not specified</Alert>}
        {language && (
          <Box sx={{ textAlign: "center", py: 5 }}>
            <Typography
              className="font-foldit"
              variant="h1"
              sx={{ textTransform: "capitalize" }}
            >
              {language}
            </Typography>
            <Typography sx={{ textTransform: "uppercase", opacity: 0.6 }}>
              69 lessons &bull; 49 completed
            </Typography>
          </Box>
        )}
      </Box>
    </Layout>
  );
}
