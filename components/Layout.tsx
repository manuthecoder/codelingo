import { AppBar, Box, Button, CircularProgress, CssBaseline, Toolbar, Typography } from '@mui/material';
import { useSession, signIn } from 'next-auth/react';
import { AccountMenu } from './AccountMenu';

export function Layout({ children }: any) {
	const { data: session, status } = useSession();

	return (
		<Box>
			<CssBaseline />
			<AppBar
				position="static"
				elevation={0}
				sx={{ background: 'hsl(var(--base), 90%)', color: 'hsl(var(--base), 10%)' }}
			>
				<Toolbar>
					<Typography variant="h5" className="font-foldit">
						Codelingo
					</Typography>
					{status == 'loading' ? (
						<CircularProgress color="inherit" sx={{ ml: 'auto' }} />
					) : status == 'authenticated' ? (
						<AccountMenu user={session} />
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
