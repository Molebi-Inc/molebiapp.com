'use client';
/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AlignVerticalDistributeCenter } from 'lucide-react';

/**
 |--------------------------------------------------
 | Custom imports
 |--------------------------------------------------
 */
import { Button } from '@/components/ui/button';
import { useScroll } from '@/app/(Home)/context/useScrollContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function MobileNavbar() {
	/**
    |--------------------------------------------------
    | Component states
    |--------------------------------------------------
    */
	const { scrollTo } = useScroll();
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
					<AlignVerticalDistributeCenter className="ml-auto" />
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
							<Button className="!overflow-hidden hover:shadow-none relative py-4 flex items-center gap-2 bg-transparent px-0">
								<motion.a
									href="https://forms.gle/Xo7rmTQ1J6cX18E58"
									className="isolate z-20 text-2xl font-bold tracking-tighter text-black hover:text-amber-600"
								>
									Join the waitlist
								</motion.a>
							</Button>
						</motion.div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
