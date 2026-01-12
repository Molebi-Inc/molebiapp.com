'use client';
/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AlignVerticalDistributeCenter, MoonIcon, SunMoonIcon } from 'lucide-react';

/**
 |--------------------------------------------------
 | Custom imports
 |--------------------------------------------------
 */
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/app/(Home)/context/DarkModeContext';
import { useScroll } from '@/app/(Home)/context/useScrollContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function MobileNavbar() {
	/**
    |--------------------------------------------------
    | Component states
    |--------------------------------------------------
    */
	const { scrollTo } = useScroll();
	const { theme, toggleTheme } = useTheme();
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<div className="md:hidden flex fixed top-0 h-[60px] overflow-visible items-center justify-between bg-white shadow-sm z-[500] w-screen px-4">
			{/**
            |--------------------------------------------------
            | Logo
            |--------------------------------------------------
            */}
			<Image width={50} height={50} src="/logo.svg" alt="molebi logo" className="min-w-[100px] max-w-[120px]" />

			<Sheet open={isOpen} onOpenChange={(value) => setIsOpen(value)}>
				{/**
                |--------------------------------------------------
                | Trigger
                |--------------------------------------------------
                */}
				<SheetTrigger>
					{/**
                    |--------------------------------------------------
                    | Menu icon
                    |--------------------------------------------------
                    */}
					<AlignVerticalDistributeCenter className="ml-auto text-black" />
				</SheetTrigger>

				{/**
                |--------------------------------------------------
                | Content
                |--------------------------------------------------
                */}
				<SheetContent className="z-[600] h-[100vh] max-w-[320px]" side="top">
					<div className="p-6 pt-12 flex flex-col gap-6 w-full relative">
						{/**
                        |--------------------------------------------------
                        | Home
                        |--------------------------------------------------
                        */}
						<a
							onClick={() => {
								scrollTo('home');
								setIsOpen(false);
							}}
							className="font-bold text-2xl tracking-tighter"
						>
							Home
						</a>

						{/**
                        |--------------------------------------------------
                        | About us
                        |--------------------------------------------------
                        */}
						<a
							onClick={() => {
								scrollTo('about');
								setIsOpen(false);
							}}
							className="font-bold text-2xl tracking-tighter"
						>
							About us
						</a>

						{/**
                        |--------------------------------------------------
                        | Contact us
                        |--------------------------------------------------
                        */}
						<a
							onClick={() => {
								scrollTo('contact');
								setIsOpen(false);
							}}
							className="font-bold text-2xl tracking-tighter"
						>
							Contact
						</a>

						<motion.div
							initial="rest"
							animate="rest"
							whileHover="hover"
							className="relative inline-flex items-center mt-"
						>
							{/**
                            |--------------------------------------------------
                            | Waitlist button with animated arrow
                            |--------------------------------------------------
                            */}
							<Button className="!overflow-hidden text-inherit hover:shadow-none relative py-4 flex items-center gap-2 bg-transparent px-0">
								<motion.a
									href="https://beta.molebiapp.com/welcome"
									className="isolate z-20 text-2xl font-bold tracking-tighter hover:text-amber-600"
								>
									Sign up now
								</motion.a>
							</Button>
						</motion.div>

						{/**
						|--------------------------------------------------
						| Toggler
						|--------------------------------------------------
						*/}
						<button
							type="button"
							onClick={toggleTheme}
							className={cn(
								'relative flex items-center w-16 h-8 bg-gray-100 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300'
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
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
