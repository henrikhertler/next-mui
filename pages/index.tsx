import Head from 'next/head';
import { Box } from '@mui/system';

export default function Home() {
	return (
		<Box>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>
					Welcome to <a href="https://nextjs.org">Next.js!</a>{' '}
					integrated with <a href="https://mui.com/">Material-UI!</a>
				</h1>
				<p>Get started by editing</p>
			</main>
		</Box>
	);
}
