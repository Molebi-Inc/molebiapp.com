/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import './globals.css';
import Navbar from './components/Navbar';
import { ScrollProvider } from './(Home)/context/useScrollContext';

/**
|--------------------------------------------------
| Font
|--------------------------------------------------
*/
const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-poppins-sans',
	weight: ['400', '500', '600', '700', '800'],
});

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
		<html lang="en" className="md:scroll-smooth md:snap-y md:snap-mandatory">
			<body
				className={`antialiased relative scroll-smooth w-screen overflow-x-hidden bg-no-repeat m-0 p-0 ${montserrat.variable}`}
			>
				<ScrollProvider>
					{/**
					|--------------------------------------------------
					| Navbar
					|--------------------------------------------------
					*/}
					<Navbar />
					<div className="isolate z-20">
						{/**
						|--------------------------------------------------
						| Children
						|--------------------------------------------------
						*/}
						{children}
					</div>
				</ScrollProvider>
			</body>
		</html>
	);
}
