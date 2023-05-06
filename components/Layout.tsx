import {
  AppBar,
  Button,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { AccountMenu } from "./AccountMenu";
import Link from "next/link";

const theme = createTheme({
  components: {
    MuiDrawer: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiSwipeableDrawer: {
      defaultProps: {
        disableSwipeToOpen: true,
        ModalProps: { keepMounted: false },
      },
    },
    MuiBackdrop: {
      defaultProps: {
        style: {
          background: "hsla(var(--base), 10%, .1)",
          backdropFilter: "blur(5px)",
        },
      },
    },
  },
});

export function Layout({ children }: any) {
  const { data: session, status } = useSession();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "hsl(var(--base), 90%)",
          color: "hsl(var(--base), 10%)",
        }}
      >
        <Toolbar>
          <Link href="/" passHref>
            <Typography variant="h5" className="font-foldit">
              Codelingo
            </Typography>
          </Link>
          {status == "loading" ? (
            <CircularProgress color="inherit" sx={{ ml: "auto" }} />
          ) : status == "authenticated" ? (
            <AccountMenu user={session} />
          ) : (
            <Button
              variant="outlined"
              sx={{ ml: "auto" }}
              color="inherit"
              onClick={() => signIn()}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {status == "authenticated"
        ? children
        : status == "loading"
        ? "Loading..."
        : "Please sign in"}
    </ThemeProvider>
  );
}
