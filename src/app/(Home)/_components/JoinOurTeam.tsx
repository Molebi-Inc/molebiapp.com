/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import JobAccordion from './JobsAccordion';
import { Button } from '@/components/ui/button';

export default function JoinOurTeam() {
	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<section className="snap-start mx-auto w-full">
			<div className="grid md:grid-cols-2 w-full gap-12 max-w-7xl mx-auto items-center px-[4%]">
				<div
					className="col-span-1 md:h-[80vh] h-[40vh] rounded-3xl mb-auto mt-24 w-full bg-cover bg-center md:sticky md:top-24"
					style={{ backgroundImage: "url('/join.png')" }}
				/>

				<motion.div
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					className="col-span-1 md:pt-24"
					transition={{ duration: 1.4, ease: 'easeInOut' }}
				>
					<div className="col-span-1 flex flex-col items-start">
						{/**
                        |--------------------------------------------------
                        | Header
                        |--------------------------------------------------
                        */}
						<h1 className="md:text-7xl text-4xl tracking-tighter font-bold text-start max-w-[700px]">
							This isn’t just another family tree app.
						</h1>

						{/**
                        |--------------------------------------------------
                        | Subtext
                        |--------------------------------------------------
                        */}
						<p className="max-w-[600px] mt-6 text-sm text-start">
							It’s a revolution in ancestry, health, and cultural pride.{' '}
							<b>Ready to leave your mark? Join our team</b> as we build what the world hasn’t seen—yet.
						</p>

						<motion.div
							initial="rest"
							animate="rest"
							whileHover="hover"
							className="relative inline-flex items-start mt-6"
						>
							{/**
                             |--------------------------------------------------
                            | Waitlist button with animated arrow
                            |--------------------------------------------------
                            */}
							<Button className="!overflow-hidden relative pt-[14px] pb-5 px-12 min-h-[50px] bg-[#004000] btn btn-border-reveal rounded-full flex items-start gap-2 hover:bg-[#DB6F23]">
								<motion.a
									variants={{
										rest: { x: 0 },
										hover: { x: -16 },
									}}
									transition={{ duration: 0.3 }}
									href="https://forms.gle/AYgFSta5P8GKAVAAA"
									className="isolate z-20 text-sm font-medium text-white"
								>
									Apply Here
								</motion.a>

								{/**
                                |--------------------------------------------------
                                |  Arrow container (hidden initially, slides in on
                                | hover)
                                |--------------------------------------------------
                                */}
								<motion.span
									variants={{
										rest: { opacity: 0, x: 20 },
										hover: { opacity: 1, x: -10 },
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
					<div className="col-span-1 w-full flex flex-col mt-6 pr-[4%]">
						{/**
                        |--------------------------------------------------
                        | Main heading
                        |--------------------------------------------------
                        */}
						<h1 className="text-3xl font-bold tracking-tighter text-start mt-6">Available Roles</h1>

						{/**
                        |--------------------------------------------------
                        | Jobs
                        |--------------------------------------------------
                        */}
						<JobAccordion />
					</div>
				</motion.div>
			</div>
		</section>
	);
}
