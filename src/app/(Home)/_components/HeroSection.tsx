'use client';
/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

/**
 |--------------------------------------------------
 | Custom imports
 |--------------------------------------------------
 */
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useScroll } from '../context/useScrollContext';

/**
|--------------------------------------------------
| Data array
|--------------------------------------------------
*/
const _DATA = [
	{
		cta: 'Join the Waitlist',
		title: 'Your family’s story matters. We connect its roots to your health.',
		description:
			"It's more than just names and dates. We trace your roots to uncover the rich history behind your DNA. By connecting the past to your present, we help you better understand your health.",
	},
	{
		cta: 'Be the First to Know',
		title: 'Merging DNA insights with cultural legacy—for generations to come.',
		description:
			'We believe your story is written not just in your genes, but in the rich traditions of your heritage. By merging DNA insights with cultural legacy, we unlock a deeper understanding of who you are. This powerful connection creates a lasting legacy—for you and generations to come.',
	},
	{
		cta: 'Get Early Access',
		title: 'Your heritage, your wellness, your legacy—together in one home',
		description:
			'Your heritage tells the story of where you come from. Your wellness shapes how you live today. And your legacy defines what you pass on. We bring all three together—into one connected, empowering experience.',
	},
];

/**
|--------------------------------------------------
| Images
|--------------------------------------------------
*/
const _IMAGES = ['/tree_two.jpeg', '/tree_one.jpeg', '/tree_four.jpeg'];

export default function HeroSection() {
	/**
    |--------------------------------------------------
    | Component states
    |--------------------------------------------------
    */
	const ref = React.useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true });
	const indicatorRef = React.useRef<HTMLButtonElement>(null);
	const [currentIndex, setCurrentIndex] = React.useState<number>(0);

	const { homeRef } = useScroll();

	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<section ref={homeRef} className="w-full md:snap-start px-[4%] flex flex-col gap-2 relative">
			<div className="flex w-full max-w-7xl md:h-screen mx-auto justify-between items-center md:flex-row flex-col">
				<div className="relative">
					<AnimatePresence initial={true} mode="wait">
						<motion.div
							ref={ref}
							key={`hero-${currentIndex}`}
							initial={{ opacity: 0, x: -180 }}
							transition={{ duration: 1, ease: 'easeOut' }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							className="flex flex-col gap-8 relative pt-24 md:pt-0"
						>
							{/**
                            |--------------------------------------------------
                            | Header
                            |--------------------------------------------------
                            */}
							<motion.h1 className="md:text-5xl leading-[1.2] text-3xl tracking-tighter font-bold max-w-[700px] text-black">
								{_DATA[currentIndex].title}
							</motion.h1>

							{/**
                            |--------------------------------------------------
                            | Description
                            |--------------------------------------------------
                            */}
							<motion.p className="max-w-[600px] text-sm w-full text-black text-justify font-extralight">
								{_DATA[currentIndex].description}
							</motion.p>

							{/**
                            |--------------------------------------------------
                            | Call to action
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
								<Button className="!overflow-hidden hover:bg-[#DB6F23] relative py-4 px-8 min-h-[50px] bg-[#004000] btn btn-border-reveal rounded-full flex items-center gap-2">
									<motion.a
										variants={{
											rest: { x: 0 },
											hover: { x: -8 },
										}}
										transition={{ duration: 0.3 }}
										href="https://forms.gle/Xo7rmTQ1J6cX18E58"
										className="isolate z-20 text-sm font-medium text-white"
									>
										{_DATA[currentIndex].cta}
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
										className="absolute right-4 z-10"
										transition={{ duration: 0.3, ease: 'easeInOut' }}
									>
										<ArrowRight size={18} className="text-white" />
									</motion.span>
								</Button>
							</motion.div>
						</motion.div>
					</AnimatePresence>

					{/**
                    |--------------------------------------------------
                    | Indicators
                    |--------------------------------------------------
                    */}
					<div className="flex items-center absolute -bottom-[100px] mx-auto w-full gap-2">
						{[...Array(3)].map((_, index) => {
							return (
								<motion.button
									type="button"
									ref={indicatorRef}
									initial={{ width: 15 }}
									key={`indicator-${index}`}
									onClick={() => setCurrentIndex(index)}
									transition={{ duration: 0.6, ease: 'easeOut' }}
									animate={currentIndex === index ? { width: 70 } : {}}
									className="h-[15px] rounded-full bg-[#004000] cursor-pointer hover:bg-[#DB6F23]"
								/>
							);
						})}
					</div>
				</div>

				{/**
                |--------------------------------------------------
                | Image
                |--------------------------------------------------
                */}
				<AnimatePresence mode="wait" initial={true}>
					<motion.div
						transition={{
							duration: 1,
							ease: 'easeInOut',
						}}
						whileHover={{ scale: 1.1 }}
						initial={{ y: 0, opacity: 0 }}
						key={`hero-image${currentIndex}`}
						style={{ clipPath: 'url(#clip-circle)' }}
						animate={isInView ? { y: [0, -20, 0], opacity: 1 } : {}}
						className="mt-32 md:mt-0 rounded-3xl overflow-hidden relative"
					>
						<Image
							width={100000}
							height={10000}
							alt="background helix"
							src={_IMAGES[currentIndex]}
							className={cn('max-w-[600px] w-full object-contain')}
						/>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
