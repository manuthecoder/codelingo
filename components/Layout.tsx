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
    MuiMenu: {
      defaultProps: {
        transitionDuration: 200,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        transformOrigin: { vertical: "top", horizontal: "center" },
        disableEnforceFocus: true,
        disableAutoFocusItem: true,
        BackdropProps: {
          sx: {
            opacity: "0!important",
          },
        },
      },
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            transition: "all .2s",
            "& .MuiPaper-root": {
              mt: 1,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              ml: -1,
              borderRadius: "10px",
              minWidth: 180,
              color: "hsl(var(--base), 20%)",
              border: "1px solid",
              background: "hsl(var(--base), 95%)",
              borderColor: "hsl(var(--base), 90%)",
              "& .MuiMenu-list": {
                padding: "3px",
              },
              "& .MuiMenuItem-root": {
                cursor: "unset",
                gap: 2,
                "&:focus-visible, &:hover": {
                  background: "hsl(var(--base), 90%)",
                  color: "hsl(var(--base), 10%)",
                  "& .MuiSvgIcon-root": {
                    color: "hsl(var(--base), 10%)",
                  },
                },
                padding: "8.5px 12px",
                minHeight: 0,
                borderRadius: "10px",
                marginBottom: "1px",
                "& .MuiSvgIcon-root": {
                  fontSize: 25,
                  color: "hsl(var(--base), 10%)",
                  marginRight: 1.9,
                },
                "&:active": {
                  background: "hsl(var(--base), 90%)",
                },
              },
            },
          }),
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
