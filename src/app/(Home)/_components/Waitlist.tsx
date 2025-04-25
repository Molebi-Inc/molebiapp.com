'use client';
/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/

const _IMAGES = [
	'/waitlist_one.png',
	'/waitlist_two.png',
	'/waitlist_three.png',
	'/waitlist_five.png',
	'/waitlist_six.png',
	'/waitlist_four.png',
];

export default function Waitlist() {
	/**
    |--------------------------------------------------
    | Component states
    |--------------------------------------------------
    */

	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<section className="snap-start w-full min-h-screen max-w-7xl mx-auto px-[4%] gap-8 grid grid-cols-2 pt-24 items-center">
			{/**
            |--------------------------------------------------
            | Left view
            |--------------------------------------------------
            */}
			<div className="col-span-1">
				{/**
                |--------------------------------------------------
                | Header
                |--------------------------------------------------
                */}
				<motion.h1
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.6, ease: 'easeInOut' }}
					className="text-7xl font-bold tracking-tighter mb-8"
				>
					We’re almost there. Join the Waitlist!
				</motion.h1>

				{/**
                |--------------------------------------------------
                | Subtext two
                |--------------------------------------------------
                */}
				<motion.p
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.6, ease: 'easeInOut' }}
					className="mb-8 font-medium max-w-[600px] text-justify text-sm"
				>
					Want to be the first to know when we launch? Join our waitlist and stay connected to the future of
					ancestry, science, and culture. Don’t miss out—join the waitlist for an exclusive first look at our
					groundbreaking features!
				</motion.p>

				{/**
                |--------------------------------------------------
                | Waitlist button
                |--------------------------------------------------
                */}
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
			</div>

			{/**
            |--------------------------------------------------
            | Right view
            |--------------------------------------------------
            */}
			<motion.div
				initial={{ x: 80, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1.6, ease: 'easeInOut' }}
				className="relative w-full col-span-1 h-[90%] mt-auto flex gap-4 overflow-hidden -translate-y-24"
			>
				{/**
				|--------------------------------------------------
				| Top and Bottom Fade
				|--------------------------------------------------
				*/}
				<div className="absolute top-0 right-0 w-full max-w-[450px] h-16 bg-gradient-to-b from-white to-transparent z-10" />
				<div className="absolute bottom-0 right-0 w-full max-w-[450px] h-16 bg-gradient-to-t from-white to-transparent z-10" />

				{/**
                |--------------------------------------------------
                | Image column two
                |--------------------------------------------------
                */}
				<motion.div
					animate={{ y: ['0%', '-100%'] }}
					className="flex flex-col gap-4 ml-auto"
					transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
				>
					{_IMAGES?.map((src, index) => (
						<Image
							src={src}
							width={200}
							height={350}
							key={`col1-${index}`}
							alt={`image-${index}`}
							className="rounded-lg object-cover min-h-[350px]"
						/>
					))}
				</motion.div>

				{/**
                |--------------------------------------------------
                | Image column two
                |--------------------------------------------------
                */}
				<motion.div
					className="flex flex-col gap-4"
					animate={{ y: ['-100%', '0%'] }}
					transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
				>
					{_IMAGES?.map((src, index) => (
						<Image
							src={src}
							width={200}
							height={350}
							key={`col2-${index}`}
							alt={`image-${index}`}
							className="rounded-lg object-cover min-h-[350px]"
						/>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
