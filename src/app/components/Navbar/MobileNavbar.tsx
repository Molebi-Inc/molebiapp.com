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
import { AlignVerticalDistributeCenter } from 'lucide-react';

/**
 |--------------------------------------------------
 | Custom imports
 |--------------------------------------------------
 */
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function MobileNavbar() {
	/**
    |--------------------------------------------------
    | Component states
    |--------------------------------------------------
    */
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<div className="md:hidden flex fixed top-0 h-[60px] items-center justify-between bg-white shadow-md z-[500] w-screen px-4">
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
				<SheetContent className="z-[6000]">
					<motion.div
						initial={{ x: 40, opacity: 0 }}
						className="p-6 pt-16 flex flex-col gap-6"
						whileInView={isOpen ? { x: 0, opacity: 1 } : {}}
						transition={{ duration: 1.3, ease: 'easeInOut' }}
					>
						{/**
                        |--------------------------------------------------
                        | Home
                        |--------------------------------------------------
                        */}
						<Link
							href="#home"
							onClick={() => setIsOpen(false)}
							className="font-bold text-2xl tracking-tighter"
						>
							Home
						</Link>

						{/**
                        |--------------------------------------------------
                        | About us
                        |--------------------------------------------------
                        */}
						<Link
							href="#about"
							onClick={() => setIsOpen(false)}
							className="font-bold text-2xl tracking-tighter"
						>
							About us
						</Link>

						{/**
                        |--------------------------------------------------
                        | Contact us
                        |--------------------------------------------------
                        */}
						<Link
							href="#contact"
							onClick={() => setIsOpen(false)}
							className="font-bold text-2xl tracking-tighter"
						>
							Contact
						</Link>

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
					</motion.div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
