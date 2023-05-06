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
              69 lessons &bull; 49 completed
            </Typography>
          </Box>
        )}
      </Box>
    </Layout>
  );
}
