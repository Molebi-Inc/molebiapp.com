/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import { Button } from '@/components/ui/button';

export default function HeroCarousel() {
	/**
    |--------------------------------------------------
    | Hero SLIDES
    |--------------------------------------------------
    */
	const SLIDES = [
		{
			text: 'Every family has a story. Ours connects heritage with health.',
			cta: 'Join the Waitlist',
			image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			text: 'Combining DNA science with cultural history to protect generations.',
			cta: 'Be the First to Know',
			image: 'https://images.unsplash.com/photo-1732046801426-f32529468176?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			text: 'Your roots, your health, your future. All in one place.',
			cta: 'Get Early Access',
			image: 'https://images.unsplash.com/photo-1531956656798-56686eeef3d4?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
	];

	/**
    |--------------------------------------------------
    | Component states
    |--------------------------------------------------
    */
	const [index, setIndex] = React.useState<number>(0);

	/**
    |--------------------------------------------------
    | Handles the scrolling interval
    |--------------------------------------------------
    */
	React.useEffect(() => {
		/**
        |--------------------------------------------------
        | Interval for the slides
        |--------------------------------------------------
        */
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % SLIDES.length);
		}, 5000);

		/**
        |--------------------------------------------------
        | Clean up function
        |--------------------------------------------------
        */
		return () => clearInterval(interval);
	}, [SLIDES.length]);

	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<motion.div
			key={index}
			exit={{ opacity: 0, x: -20 }}
			transition={{ duration: 0.8 }}
			animate={{ opacity: 1, x: 0 }}
			initial={{ opacity: 0, x: 20 }}
			className="w-full h-screen relative flex items-center bg-no-repeat px-[4%] bg-cover justify-center text-white bg-gradient-to-br from-green-900 to-amber-600"
		>
			<AnimatePresence mode="wait">
				<motion.div
					key={index}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.8 }}
					animate={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 20 }}
					className="absolute max-w-7xl mx-auto inset-0 flex isolate items-center z-[2] justify-start text-start px-4"
				>
					<div className="flex flex-col items-start justify-start">
						<h1 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-13 text-start">
							{SLIDES[index].text}
						</h1>
						<Button asChild className="mt-12 bg-white text-green-900 p-6 rounded-[100px] font-bold">
							<a href="https://forms.gle/your-google-form-link" target="_blank" className="font-bold">
								{SLIDES[index].cta}
							</a>
						</Button>
					</div>
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
}
