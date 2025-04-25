/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/

export default function Anticipation() {
	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<div className="flex flex-col gap-4 min-h-[600px] justify-center mx-auto max-w-7xl px-[4%]">
			<div className="relative overflow-hidden w-fit mx-auto md:min-h-[100px] flex items-center flex-col">
				{/**
                |--------------------------------------------------
                | Colored Text (revealed by mask)
                |--------------------------------------------------
                */}
				<motion.div
					initial={{ width: '0%' }}
					animate={{ width: '100%' }}
					transition={{ duration: 3, ease: 'easeInOut' }}
					className="absolute top-0 left-0 h-full overflow-hidden flex items-center"
				>
					<h1 className="text-3xl md:text-7xl md:leading-64 font-bold tracking-tighter text-transparent bg-clip-text bg-black whitespace-nowrap">
						Launching Soon
					</h1>
				</motion.div>

				{/**
                |--------------------------------------------------
                | White Text Layer (on top initially)
                |--------------------------------------------------
                */}
				<h1 className="text-3xl md:text-7xl tracking-tighter font-bold text-white whitespace-nowrap mt-2">
					Launching Soon
				</h1>
			</div>

			{/**
            |--------------------------------------------------
            |
            |--------------------------------------------------
            */}
			<div className="mx-auto flex flex-col items-center">
				<motion.p
					viewport={{ once: false }}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="text-sm max-w-[600px] text-center"
					transition={{ duration: 1.3, ease: 'easeInOut' }}
				>
					Something powerful is on the horizon — a game-changer that redefines what’s possible. Stay close and
					be the first to witness innovation unfold before your eyes. The wait won’t be long, but the impact
					will last.
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
					className="relative inline-flex items-center justify-center mt-8"
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
		</div>
	);
}
