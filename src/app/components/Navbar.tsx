'use client';
/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import { useScroll } from './ScrollContext';
import { Button } from '@/components/ui/button';

export default function Navbar() {
	/**
	|--------------------------------------------------
	| Component states
	|--------------------------------------------------
	*/
	const controls = useAnimation();
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const { scrollToSection, aboutRef, homeRef, contactRef } = useScroll();

	React.useEffect(() => {
		/**
		|--------------------------------------------------
		| Handles scrolling
		|--------------------------------------------------
		*/
		const handleScroll = () => {
			if (window.scrollY >= 600) {
				controls.start({ backgroundColor: 'rgba(243, 244, 246, 0.7)' });
			} else {
				controls.start({ backgroundColor: 'rgba(255, 255, 255, 0.7)' });
			}
		};

		window.addEventListener('scroll', handleScroll);

		/**
		|--------------------------------------------------
		| Clean up function
		|--------------------------------------------------
		*/
		return () => window.removeEventListener('scroll', handleScroll);
	}, [controls]);

	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<motion.header
			animate={controls}
			transition={{ duration: 0.4, ease: 'easeInOut' }}
			initial={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
			className="sticky top-0 z-[99999] border-b border-gray-200 shadow-sm text-sm backdrop-blur-3xl"
		>
			<div ref={homeRef} className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
				{/**
                |--------------------------------------------------
                | Logo
                |--------------------------------------------------
                */}
				<div className="text-xl text-green-900">
					<Image
						alt="molebi"
						height={50}
						width={1000}
						src="/logo.svg"
						className="max-w-[150px] max-h-[150px] object-contain"
					/>
				</div>

				{/**
                |--------------------------------------------------
                | Website navigations
                |--------------------------------------------------
                */}
				<nav className="hidden md:flex space-x-6 items-center">
					{['Home', 'About Us', 'Contact Us'].map((navigation) => {
						return (
							<Link
								key={navigation}
								href={`#${navigation}`}
								onClick={() => {
									scrollToSection(
										navigation === 'Home'
											? homeRef
											: navigation === 'About Us'
											? aboutRef
											: contactRef
									);
								}}
								className="hover:text-amber-600 text-base !font-light"
							>
								{navigation}
							</Link>
						);
					})}

					{/**
                    |--------------------------------------------------
                    | Action button
                    |--------------------------------------------------
                    */}
					<Button asChild className="bg-amber-600 text-white rounded-[100px] text-base">
						<a href="https://forms.gle/Xo7rmTQ1J6cX18E58" className="text-base">
							Join the Waitlist
						</a>
					</Button>
				</nav>

				{/**
				|--------------------------------------------------
				| Icon for mobile
				|--------------------------------------------------
				*/}
				<div className="flex md:hidden items-center">
					<button onClick={() => setIsOpen(true)}>
						<Menu className="text-black w-6 h-6" />
					</button>
				</div>

				{/**
				|--------------------------------------------------
				| Sidebar for mobile
				|--------------------------------------------------
				*/}
				<div
					className={`fixed top-0 right-0 h-screen w-64 !bg-white shadow-lg z-[99999999] transform transition-transform duration-300 ease-in-out ${
						isOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
				>
					<div className="flex justify-between items-center p-4 border-b">
						<div className="font-bold text-xl text-green-900">
							<Image
								alt="molebi"
								height={50}
								width={1000}
								src="/logo.svg"
								className="max-w-[100px] max-h-[100px] object-contain"
							/>
						</div>

						<button onClick={() => setIsOpen(false)}>
							<X className="w-6 h-6 text-black" />
						</button>
					</div>

					{/**
					|--------------------------------------------------
					| Navigations
					|--------------------------------------------------
					*/}
					<div className="flex flex-col space-y-6 p-6">
						{['Home', 'About Us', 'Contact Us'].map((navigation) => (
							<Link
								key={navigation}
								href={`#${navigation}`}
								onClick={() => {
									scrollToSection(
										navigation === 'Home'
											? homeRef
											: navigation === 'About Us'
											? aboutRef
											: contactRef
									);

									setIsOpen(false);
								}}
								className="text-left text-sm hover:text-amber-600"
							>
								{navigation}
							</Link>
						))}

						<button
							type="button"
							className="bg-transparent text-amber-700 text-sm font-semibold w-full flex justify-start p-0 h-auto"
						>
							<a href="https://forms.gle/Xo7rmTQ1J6cX18E58">Join the Waitlist</a>
						</button>
					</div>
				</div>
			</div>

			{/**
			|--------------------------------------------------
			| Optional backdrop
			|--------------------------------------------------
			*/}
			{isOpen && (
				<div className="fixed inset-0 bg-black/50 bg-opacity-50 z-[999999]" onClick={() => setIsOpen(false)} />
			)}
		</motion.header>
	);
}
