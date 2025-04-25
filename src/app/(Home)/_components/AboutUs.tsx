'use client';
/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import { GiThornHelix } from 'react-icons/gi';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
|--------------------------------------------------
| Copy
|--------------------------------------------------
*/
const _DATA = [
	'Molebi is a science-driven cultural platform that protects and connects families through DNA, cultural heritage, and health.',
	'We’re building the largest private DNA database for the developing world—fuelled by love, memory, and the desire to preserve what matters most.',
	'By weaving together genetic science and the stories of our ancestors, we help you uncover your roots, understand your health, and preserve your legacy.',
];

export default function AboutUs() {
	/**
    |--------------------------------------------------
    | Component states
    |--------------------------------------------------
    */
	const targetRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: targetRef });
	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

	/**
    |--------------------------------------------------
    | Rendered veiw
    |--------------------------------------------------
    */
	return (
		<section className="snap-start w-full bg-[#fff4f1]/10 pb-12 px-[4%] relative">
			<div className="w-full max-w-7xl mx-auto pt-28 flex flex-col justify-start">
				{/**
                |--------------------------------------------------
                | Header
                |--------------------------------------------------
                */}
				<h1 className="text-7xl max-w-[700px] tracking-tighter text-start mt-3 font-bold">About us</h1>

				{/**
                |--------------------------------------------------
                | About us
                |--------------------------------------------------
                */}
				<motion.div className="flex flex-col gap-12 mt-6">
					{_DATA.map((data, index) => (
						<div key={data} className="flex items-center gap-8 max-w-[500px]">
							{/**
                            |--------------------------------------------------
                            | Index
                            |--------------------------------------------------
                            */}
							<motion.span
								initial={{ x: -50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className="relative min-h-16 text-[#000000] bg-white border border-[#000000] min-w-16 flex items-center justify-center rounded-full font-semibold"
							>
								{index + 1}

								{/**
                                |--------------------------------------------------
                                | Border
                                |--------------------------------------------------
                                */}
								<div className="w-[1px] h-[100px] bg-[#000000] absolute top-[100%] left-1/2 -translate-x-1/2" />
							</motion.span>

							{/**
                            |--------------------------------------------------
                            | Data
                            |--------------------------------------------------
                            */}
							<motion.p
								initial={{ x: 50, opacity: 0 }}
								className="text-sm text-justify"
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
							>
								{data}
							</motion.p>
						</div>
					))}
				</motion.div>
			</div>

			{/**
            |--------------------------------------------------
            | Scrollable horizontal cards
            |--------------------------------------------------
            */}
			<div className="h-[500vh] w-full" ref={targetRef}>
				<div className="h-[70vh] sticky top-24 items-center justify-start pt-12 w-full flex px-[4%]">
					{/**
                    |--------------------------------------------------
                    | Cards wrapper
                    |--------------------------------------------------
                    */}
					<motion.div
						style={{ x }}
						className="grid grid-cols-[1fr_1fr_1fr] -translate-x-[0.5%] grid-rows-[1fr] gap-[3vw] pr-[4rem] md:-translate-x-[1%] h-full [@media(min-width:1500px)]:translate-x-[3%]"
					>
						{/**
                        |--------------------------------------------------
                        | Card three
                        |--------------------------------------------------
                        */}
						<div
							className="h-full w-[900px] relative bg-center rounded-3xl bg-[#DB6F23] overflow-hidden col-span-1 hover:scale-95 transition-all isolate bg-no-repeat bg-cover bg-center"
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1662120455989-5a433cec9980?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFF1ZXN0aW9uJTIwbWFya3xlbnwwfHwwfHx8MA%3D%3D')",
							}}
						>
							{/**
							|--------------------------------------------------
							|
							|--------------------------------------------------
							*/}
							<div className="inset-0 bg-black/60 absolute z-[-1]" />
							<div className="w-full h-full p-12 flex flex-col justify-between isolate z-[2]">
								{/**
								|--------------------------------------------------
								| Why we exist
								|--------------------------------------------------
								*/}
								<div className="flex items-center justify-between">
									<GiThornHelix className="text-white" size={80} />
								</div>
								{/**
                                |--------------------------------------------------
                                | Text
                                |--------------------------------------------------
                                */}
								<div className="flex flex-col gap-6 justify-end">
									<h1 className="text-white text-base p-2 border border-white rounded-full w-max px-6 font-bold tracking-tighter max-w-[90%]">
										Why we exist?
									</h1>
									{/**
									|--------------------------------------------------
									| Header
									|--------------------------------------------------
									*/}
									<h1 className="text-white text-7xl w-full font-bold tracking-tighter max-w-[90%]">
										Because our culture deserves to be remembered.
									</h1>

									{/**
									|--------------------------------------------------
									| Description
									|--------------------------------------------------
									*/}
									<p className="text-base text-justify text-white max-w-[90%] font-medium">
										Because our culture deserves to be remembered and protected for future
										generations. It holds the wisdom, values, and spirit of those who came before
										us—woven into every tradition and story. By honoring and preserving it today, we
										ensure its power lives on tomorrow.
									</p>
								</div>
							</div>
						</div>

						{/**
                        |--------------------------------------------------
                        | Card one
                        |--------------------------------------------------
                        */}
						<div
							className="h-full w-[900px] overflow-hidden relative rounded-3xl bg-[#004000] col-span-1 hover:scale-95 transition-all bg-center isolate bg-no-repeat bg-cover"
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1652077859695-de2851a95620?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFF1ZXN0aW9uJTIwbWFya3xlbnwwfHwwfHx8MA%3D%3D')",
							}}
						>
							{/**
							|--------------------------------------------------
							|
							|--------------------------------------------------
							*/}
							<div className="inset-0 bg-black/40 absolute z-[-1]" />
							<div className="w-full h-full p-12 flex flex-col justify-between isolate z-[2]">
								{/**
								|--------------------------------------------------
								| Why we exist
								|--------------------------------------------------
								*/}
								<div className="flex items-center justify-between">
									<GiThornHelix className="text-white" size={80} />
								</div>

								{/**
                                |--------------------------------------------------
                                | Text
                                |--------------------------------------------------
                                */}
								<div className="flex flex-col gap-6 justify-end">
									<h1 className="text-white text-base p-2 border border-white rounded-full w-max px-6 font-bold tracking-tighter max-w-[90%]">
										Why we exist?
									</h1>

									{/**
									|--------------------------------------------------
									| Headline
									|--------------------------------------------------
									*/}
									<h1 className="text-white text-7xl w-full font-bold tracking-tighter max-w-[90%]">
										Because many don’t have access to their genetic data.
									</h1>

									{/**
									|--------------------------------------------------
									| Description
									|--------------------------------------------------
									*/}
									<p className="text-base text-justify text-white max-w-[90%] font-medium">
										Millions are left out of life-changing insights that could improve their health
										and reconnect them to their roots. We believe everyone deserves the right to
										know their biology, their ancestry, and their story.
									</p>
								</div>
							</div>
						</div>

						{/**
                        |--------------------------------------------------
                        | Card two
                        |--------------------------------------------------
                        */}
						<div
							className="h-full w-[900px] overflow-hidden rounded-3xl bg-[#DB6F23] col-span-1 hover:scale-95 transition-all bg-no-repeat bg-cover isolate relative"
							style={{
								backgroundImage:
									"url('https://plus.unsplash.com/premium_photo-1700675175400-2930de24d773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxRdWVzdGlvbiUyMG1hcmt8ZW58MHx8MHx8fDA%3D')",
							}}
						>
							{/**
							|--------------------------------------------------
							|
							|--------------------------------------------------
							*/}
							<div className="inset-0 bg-black/60 absolute z-[-1]" />
							<div className="w-full h-full p-12 flex flex-col justify-between">
								{/**
								|--------------------------------------------------
								| Why we exist
								|--------------------------------------------------
								*/}
								<div className="flex items-center justify-between">
									<GiThornHelix className="text-white" size={80} />
								</div>

								{/**
                                |--------------------------------------------------
                                | Text
                                |--------------------------------------------------
                                */}
								<div className="flex flex-col gap-6 justify-end">
									<h1 className="text-white text-base p-2 border border-white rounded-full w-max px-6 font-bold tracking-tighter max-w-[90%]">
										Why we exist?
									</h1>

									{/**
									|--------------------------------------------------
									| Header
									|--------------------------------------------------
									*/}
									<h1 className="text-white text-7xl w-full font-bold tracking-tighter max-w-[90%]">
										Because heritage is fading too fast.
									</h1>

									{/**
									|--------------------------------------------------
									| Description
									|--------------------------------------------------
									*/}
									<p className="text-base text-justify text-white max-w-[90%] font-medium">
										The stories, languages, and legacies of our ancestors are vanishing with each
										generation. We&apos;re here to preserve, protect, and pass them on—before they
										disappear forever.
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
