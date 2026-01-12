'use client';
/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MoonIcon, SunMoonIcon } from 'lucide-react';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useScroll } from '@/app/(Home)/context/useScrollContext';
import { useTheme } from '@/app/(Home)/context/DarkModeContext';

export default function DesktopNavbar() {
	const { scrollTo } = useScroll();
	const { theme, toggleTheme } = useTheme();

	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<React.Fragment>
			<div className="fixed left-1/2 -translate-x-1/2 top-3 shadow-sm w-full hidden justify-between items-center z-50 h-[60px]  bg-[#ffffff] rounded-full max-w-7xl md:flex">
				{/**
                |--------------------------------------------------
                | Top navigation
                |--------------------------------------------------
                */}
				<nav className="mx-auto w-full flex items-center justify-between px-2">
					{/**
                    |--------------------------------------------------
                    | Logo
                    |--------------------------------------------------
                    */}
					<Link href="/">
						<Image width={50} height={50} src="/logo.svg" alt="molebi logo" className="min-w-[150px]" />
					</Link>

					{/**
                    |--------------------------------------------------
                    | Floating navigation
                    |--------------------------------------------------
                    */}
					<div className="bottom-4 right-[4%] text-sm font-medium w-auto py-3 px-6 rounded-[100px] h-auto z-50 flex gap-8 text-black transition-all">
						{/**
                        |--------------------------------------------------
                        | Home
                        |--------------------------------------------------
                        */}
						<a
							onClick={() => scrollTo('home')}
							className="hover:text-[#DB6F23] bg-gray-100 p-2 px-4 rounded-full hover:shadow-sm"
						>
							Home
						</a>

						{/**
                        |--------------------------------------------------
                        | About us
                        |--------------------------------------------------
                        */}
						<a
							onClick={() => scrollTo('about')}
							className="hover:text-[#DB6F23] bg-gray-100 p-2 px-4 rounded-full hover:shadow-sm"
						>
							About us
						</a>

						{/**
                        |--------------------------------------------------
                        | Contact us
                        |--------------------------------------------------
                        */}
						<a
							onClick={() => scrollTo('contact')}
							className="hover:text-[#DB6F23] bg-gray-100 p-2 px-4 rounded-full hover:shadow-sm"
						>
							Contact
						</a>
					</div>

					{/**
					|--------------------------------------------------
					| Toggler
					|--------------------------------------------------
					*/}
					<button
						type="button"
						onClick={toggleTheme}
						className={cn(
							'relative flex items-center w-16 h-8 bg-gray-100 dark:bg-gray-900 rounded-full p-1 transition-colors duration-300'
						)}
					>
						{/**
						|--------------------------------------------------
						| Sliding circle
						|--------------------------------------------------
						*/}
						<span
							className={cn(
								'absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300',
								theme === 'dark' && 'translate-x-8'
							)}
						></span>

						{/**
						|--------------------------------------------------
						|  Sun icon (left)
						|--------------------------------------------------
						*/}
						<SunMoonIcon
							size={18}
							className={cn(
								'absolute left-2 text-yellow-500 transition-opacity duration-300',
								theme === 'dark' && 'opacity-0'
							)}
						/>

						{/**
						|--------------------------------------------------
						| Moon icon (right)
						|--------------------------------------------------
						*/}
						<MoonIcon
							size={18}
							className={cn(
								'absolute right-2 text-black transition-opacity duration-300',
								theme === 'light' && 'opacity-0'
							)}
						/>
					</button>

					<motion.div
						initial="rest"
						animate="rest"
						whileHover="hover"
						className="relative inline-flex items-center"
					>
						{/**
						 |--------------------------------------------------
						| Waitlist button with animated arrow
						|--------------------------------------------------
						*/}
						<Button className="!overflow-hidden hover:bg-[#DB6F23] relative py-4 px-8 min-h-[50px] bg-[#004000] btn btn-border-reveal rounded-full flex items-center gap-2">
							<motion.a
								variants={{
									rest: { x: 0 },
									hover: { x: -8 },
								}}
								transition={{ duration: 0.3 }}
								href="https://beta.molebiapp.com/welcome"
								className="isolate z-20 text-sm font-medium text-white"
							>
								Sign up now
							</motion.a>

							{/**
							|--------------------------------------------------
							|  Arrow container (hidden initially, slides in on
							| hover)
							|--------------------------------------------------
							*/}
							<motion.span
								variants={{
									rest: { opacity: 0, x: 16 },
									hover: { opacity: 1, x: 0 },
								}}
								transition={{ duration: 0.3, ease: 'easeInOut' }}
								className="absolute right-4 z-10"
							>
								<ArrowRight size={18} className="text-white" />
							</motion.span>
						</Button>
					</motion.div>
				</nav>
			</div>
		</React.Fragment>
	);
}
