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
import { ThemeProvider } from './(Home)/context/DarkModeContext';

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
	title: 'Molebi: Connecting Your Culture with Genetics.',
	description:
		'Molebi app is an app that integrates personalized DNA health insights with the preservation of cultural heritage, empowering families to protect their legacy and make informed health decisions.',
	keywords: [
		'Molebi app',
		'DNA analysis',
		'cultural heritage',
		'African ancestry',
		'health insights',
		'family tree',
		'genetics',
		'preservation of culture',
		'health-tech',
		'genetic testing',
		'developing world',
		'cultural preservation',
		'family tree DNA',
		'ancestry insights',
		' family health insights',
		'DNA for health decisions',
	],
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
				<ThemeProvider>
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
				</ThemeProvider>
			</body>
		</html>
	);
}
