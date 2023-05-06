import { AppBar, Box, Button, CircularProgress, CssBaseline, Toolbar, Typography } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';

export function Layout({ children }: any) {
	const { data: session, status } = useSession();

	return (
		<Box>
			<CssBaseline />
			<AppBar position="static">
				<Toolbar>
					<Typography>Codelingo</Typography>
					{status == 'loading' ? (
						<CircularProgress color="inherit" sx={{ ml: 'auto' }} />
					) : status == 'authenticated' ? (
						<Button variant="outlined" sx={{ ml: 'auto' }} color="inherit" onClick={() => signOut()}>
							Sign Out
						</Button>
					) : (
						<Button variant="outlined" sx={{ ml: 'auto' }} color="inherit" onClick={() => signIn()}>
							Sign In
						</Button>
					)}
				</Toolbar>
			</AppBar>
			{children}
		</Box>
	);
}
