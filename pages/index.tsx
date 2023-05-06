import { Layout } from "@/components/Layout";
import Course from "@/components/courses";
import { EnrollCourse } from "@/components/courses/enroll";
import { Masonry } from "@mui/lab";
import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function Home() {
  const { data: session } = useSession();
  const email: any = session?.user?.email;

  const url = `/api/user/courses?` + new URLSearchParams({ email });

  const { data, error, isLoading } = useSWR(url, (e) =>
    fetch(e).then((res) => res.json())
  );

  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        {error && (
          <Alert severity="error">
            Oh no! An error occured while trying to get your courses! Please try
            again later.
          </Alert>
        )}
        <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
          Courses
        </Typography>
        {data ? (
          <Masonry columns={{ xs: 1, md: 2 }} spacing={2}>
            {data.map((language: any, index: any) => (
              <Course key={index} language={language} />
            ))}
          </Masonry>
        ) : (
          <CircularProgress />
        )}
        {data?.length === 0 && (
          <Alert
            severity="info"
            sx={{ mt: 2 }}
            action={
              <EnrollCourse>
                <Button>Enroll</Button>
              </EnrollCourse>
            }
          >
            You haven&apos;t enrolled in any courses yet!
          </Alert>
        )}
      </Box>
    </Layout>
  );
}
