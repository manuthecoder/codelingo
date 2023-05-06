import { Layout } from "@/components/Layout";
import {
  Alert,
  Avatar,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function CoursePage() {
  const router = useRouter();
  const user: any = router?.query?.u?.[0] ?? null;
  const url = `/api/user/profile?${new URLSearchParams({ email: user })}`;
  const { data, error } = useSWR(url, (url) =>
    fetch(url).then((res) => res.json())
  );

  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        {data ? (
          data[0] ? (
            <Box>
              <Box
                sx={{
                  mt: "100px",
                  background: "hsl(var(--base), 80%)",
                  position: "relative",
                  pt: "100px",
                  pb: "40px",
                  width: "100%",
                  borderRadius: 5,
                }}
              >
                <Avatar
                  src={data[0].image}
                  sx={{
                    width: 150,
                    height: 150,
                    position: "absolute",
                    top: -75,
                    border: "5px solid",
                    background: "hsl(var(--base), 95%)",
                    borderColor: "hsl(var(--base), 95%)",
                    left: "calc(50% - 75px)",
                  }}
                />
                <Typography
                  sx={{
                    color: "hsl(var(--base), 15%)",
                    fontSize: "30px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                  gutterBottom
                >
                  {data[0].name}
                </Typography>
                <Typography sx={{ textAlign: "center" }}>
                  Profile customization coming soon!
                </Typography>
              </Box>
            </Box>
          ) : (
            <Alert severity="error">User not found</Alert>
          )
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Layout>
  );
}
