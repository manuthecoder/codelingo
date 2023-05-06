import { Layout } from "@/components/Layout";
import { EnrollCourse } from "@/components/courses/enroll";
import { Alert, Box, Button, Card } from "@mui/material";
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
        {data.map((language) => (
          <Course language={language} />
        ))}
        {data?.length === 0 && (
          <Alert
            severity="info"
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
