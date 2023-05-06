import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: any) {
	return (
		<SessionProvider session={session}>
			<Head>
				<title>Codelingo</title>
				<link rel="shortcut icon" href="/icon/48x48.png" />
				<meta name="description" content="Your Interactive Coding Companion" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
				<link rel="shortcut icon" href="/icon/48x48.png" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<Component {...pageProps} />
		</SessionProvider>
	);
}
