/* eslint-disable @next/next/no-page-custom-font */
/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import type { Metadata } from 'next';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import './globals.css';
import Navbar from './components/Navbar';
import ScrollProvider from './components/ScrollContext';

/**
|--------------------------------------------------
| Meta data
|--------------------------------------------------
*/
export const metadata: Metadata = {
	title: 'Molebi Inc',
	description: 'Every family has a story. Ours connects heritage with health.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	/**
	|--------------------------------------------------
	| Rendered View
	|--------------------------------------------------
	*/
	return (
		<html lang="en">
			{/**
			|--------------------------------------------------
			| Header
			|--------------------------------------------------
			*/}
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Gruppo&family=Special+Gothic+Expanded+One&display=swap"
					rel="stylesheet"
				/>
			</head>

			<body className={`antialiased scroll-smooth w-screen overflow-x-hidden`}>
				<ScrollProvider>
					{/**
					|--------------------------------------------------
					| Navigation bar
					|--------------------------------------------------
					*/}
					<Navbar />

					{/**
					|--------------------------------------------------
					| Children
					|--------------------------------------------------
					*/}
					{children}
				</ScrollProvider>
			</body>
		</html>
	);
}
