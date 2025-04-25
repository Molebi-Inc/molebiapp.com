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
import { ArrowRight } from 'lucide-react';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import { Button } from '@/components/ui/button';

export default function DesktopNavbar() {
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
					<Image width={50} height={50} src="/logo.svg" alt="molebi logo" className="min-w-[150px]" />

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
						<Link href="#home" className="">
							Home
						</Link>

						{/**
                        |--------------------------------------------------
                        | About us
                        |--------------------------------------------------
                        */}
						<Link href="#about" className="">
							About us
						</Link>

						{/**
                        |--------------------------------------------------
                        | Contact us
                        |--------------------------------------------------
                        */}
						<Link href="#contact">Contact</Link>
					</div>

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
						<Button
							variant="outline"
							className="!overflow-hidden relative py-4 px-8 min-h-[50px] bg-[#004000] btn btn-border-reveal rounded-full flex items-center gap-2"
						>
							<motion.a
								variants={{
									rest: { x: 0 },
									hover: { x: -8 },
								}}
								transition={{ duration: 0.3 }}
								href="https://forms.gle/Xo7rmTQ1J6cX18E58"
								className="isolate z-20 text-sm font-medium text-white"
							>
								Join the waitlist
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
