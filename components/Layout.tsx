import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { AccountMenu } from "./AccountMenu";

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
            <Typography
              variant="h6"
              sx={{ fontWeight: 700 }}
              className="font-grotesk"
            >
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
      {status == "authenticated" ? (
        children
      ) : status == "loading" ? (
        "Loading..."
      ) : (
        <Box sx={{ p: 3 }}>
          <Typography
            variant="h3"
            className="font-grotesk"
            sx={{ fontWeight: 700 }}
          >
            Codelingo
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Your interactive coding companion
          </Typography>
          <Typography>
            <b>🖥️ Interactive Coding Lessons</b>
            <br /> Dive into a series of bite-sized coding lessons designed to
            teach you fundamental concepts, programming languages, and advanced
            techniques. Each lesson combines theory with hands-on practice,
            allowing you to apply what you&apos;ve learned in real-time.
            <br />
            <br />
            <b>🏆 Gamified Learning</b>
            <br /> Make learning fun and addictive with CodeLingo&apos;s
            gamified approach. Earn experience points (XP), unlock achievements,
            and level up as you progress through different coding challenges.
            Compete with friends or challenge yourself to reach the top of the
            global leaderboards. confidence.
            <br />
            <br />
            <b>🔔 Personalized Learning Path</b>
            <br /> CodeLingo understands that everyone learns differently.
            That&apos;s why it tailors your learning path based on your goals,
            skill level, and preferred programming languages. Whether
            you&apos;re interested in Python, JavaScript, Java, or any other
            language, CodeLingo has you covered.
            <br />
            <br />
            <b> 📱 Mobile Flexibility</b>
            <br /> Learn coding anytime, anywhere with CodeLingo&apos;s mobile
            app. Take your coding lessons on the go, practice coding challenges
            during your commute, or engage with the community from the comfort
            of your smartphone or tablet.
          </Typography>
        </Box>
      )}
    </ThemeProvider>
  );
}
