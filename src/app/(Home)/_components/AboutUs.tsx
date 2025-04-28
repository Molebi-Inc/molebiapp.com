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
| Custom imports
|--------------------------------------------------
*/
import useWidth from '@/app/hooks/useWidth';
import { useScroll as useScrollTo } from '../context/useScrollContext';

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
	const width = useWidth();
	const { aboutRef } = useScrollTo();
	const targetRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: targetRef });
	const x = useTransform(scrollYProgress, [0, 1], ['0%', width > 1463 ? '-50%' : width > 1200 ? '-60%' : '-70%']);

	/**
    |--------------------------------------------------
    | Rendered veiw
    |--------------------------------------------------
    */
	return (
		<section ref={aboutRef} className="snap-start w-full pb-12 px-[4%] relative">
			<div className="w-full max-w-7xl mx-auto pt-28 flex flex-col justify-start">
				{/**
                |--------------------------------------------------
                | Header
                |--------------------------------------------------
                */}
				<h1 className="md:text-7xl text-5xl max-w-[700px] tracking-tighter text-start mt-3 font-bold">
					About Molebi
				</h1>

				{/**
                |--------------------------------------------------
                | About us
                |--------------------------------------------------
                */}
				<motion.div className="flex flex-col gap-12 mt-6 pr-[4%]">
					{_DATA.map((data, index) => (
						<div key={data} className="flex items-center gap-8 max-w-[500px]">
							{/**
                            |--------------------------------------------------
                            | Index
                            |--------------------------------------------------
                            */}
							<motion.span
								initial={{ x: -20, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className="relative md:min-h-16 min-h-8 min-w-8 text-[#000000] bg-white border border-[#000000] md:min-w-16 md:flex hidden items-center justify-center rounded-full text-sm md:text-base md:font-semibold"
							>
								{index + 1}

								{/**
                                |--------------------------------------------------
                                | Border
                                |--------------------------------------------------
                                */}
								<div className="w-[1px] h-[120px] bg-[#000000] absolute top-[100%] left-1/2 -translate-x-1/2" />
							</motion.span>

							{/**
                            |--------------------------------------------------
                            | Data
                            |--------------------------------------------------
                            */}
							<motion.p
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className="md:text-base text-sm font-medium md:text-justify"
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
			<div className="md:h-[500vh] w-full" ref={targetRef}>
				<div className="md:h-[70vh] md:sticky md:top-24 items-center justify-start pt-12 w-full flex px-[4%]">
					{/**
                    |--------------------------------------------------
                    | Cards wrapper
                    |--------------------------------------------------
                    */}
					<motion.div
						style={width > 768 ? { x } : {}}
						className="grid md:grid-cols-[1fr_1fr_1fr] -translate-x-[0.5%] grid-rows-[1fr] gap-[3vw] pr-[4rem] md:-translate-x-[1%] h-full [@media(min-width:1500px)]:translate-x-[3%]"
					>
						{/**
                        |--------------------------------------------------
                        | Card three
                        |--------------------------------------------------
                        */}
						<div
							className="h-[50vh] group md:h-full md:w-[900px] w-[84vw] relative bg-center rounded-md md:rounded-3xl bg-[#DB6F23] overflow-hidden col-span-1 hover:scale-95 transition-all isolate bg-no-repeat bg-cover"
							style={{ backgroundImage: "url('/image_eleven.jpeg')" }}
						>
							{/**
							|--------------------------------------------------
							|
							|--------------------------------------------------
							*/}
							<div className="absolute transition-all group-hover:hidden inset-0 z-[-1] bg-gradient-to-t from-black to-transparent" />
							<div className="w-full h-full md:p-12 p-4 flex flex-col justify-between isolate z-[2]">
								{/**
								|--------------------------------------------------
								| Why we exist
								|--------------------------------------------------
								*/}
								<div className="flex items-center justify-between">
									<GiThornHelix className="text-white text-[34px] md:text-[80px] mb-8" />
								</div>
								{/**
                                |--------------------------------------------------
                                | Text
                                |--------------------------------------------------
                                */}
								<div className="flex flex-col gap-6 justify-end">
									<h1 className="text-white text-xs md:text-base p-2 border border-white rounded-full w-max px-6 font-bold tracking-tighter max-w-[90%]">
										Why we exist?
									</h1>
									{/**
									|--------------------------------------------------
									| Header
									|--------------------------------------------------
									*/}
									<h1 className="text-white text-xl md:text-4xl w-full font-bold tracking-tighter md:max-w-[90%]">
										Because heritage is fading too fast.
									</h1>
								</div>
							</div>
						</div>

						{/**
                        |--------------------------------------------------
                        | Card one
                        |--------------------------------------------------
                        */}
						<div
							className="h-[50vh] group md:h-full md:w-[900px] w-[84vw] relative bg-center rounded-md md:rounded-3xl bg-[#DB6F23] overflow-hidden col-span-1 hover:scale-95 transition-all isolate bg-no-repeat bg-cover"
							style={{ backgroundImage: "url('/image_eight.jpeg')" }}
						>
							{/**
							|--------------------------------------------------
							|
							|--------------------------------------------------
							*/}
							<div className="inset-0 group-hover:hidden transition-all bg-black/40 absolute z-[-1]" />
							<div className="w-full h-full md:p-12 p-4 flex flex-col justify-between isolate z-[2]">
								{/**
								|--------------------------------------------------
								| Why we exist
								|--------------------------------------------------
								*/}
								<div className="flex items-center justify-between">
									<GiThornHelix className="text-white text-[34px] md:text-[80px] mb-8" />
								</div>

								{/**
                                |--------------------------------------------------
                                | Text
                                |--------------------------------------------------
                                */}
								<div className="flex flex-col gap-6 justify-end">
									<h1 className="text-white text-xs md:text-base p-2 border border-white rounded-full w-max px-6 font-bold tracking-tighter max-w-[90%]">
										Why we exist?
									</h1>

									{/**
									|--------------------------------------------------
									| Headline
									|--------------------------------------------------
									*/}
									<h1 className="text-white text-xl md:text-4xl w-full font-bold tracking-tighter md:max-w-[90%]">
										Because many don’t have access to their genetic data.
									</h1>
								</div>
							</div>
						</div>

						{/**
                        |--------------------------------------------------
                        | Card two
                        |--------------------------------------------------
                        */}
						<div
							className="h-[50vh] group md:h-full md:w-[900px] w-[84vw] relative bg-center rounded-md md:rounded-3xl bg-[#DB6F23] overflow-hidden col-span-1 hover:scale-95 transition-all isolate bg-no-repeat bg-cover"
							style={{ backgroundImage: "url('/image_two.jpeg')" }}
						>
							{/**
							|--------------------------------------------------
							|
							|--------------------------------------------------
							*/}
							<div className="absolute group-hover:hidden transition-all inset-0 z-[-1] bg-gradient-to-t from-black to-transparent" />
							<div className="w-full h-full md:p-12 p-4 flex flex-col justify-between isolate z-[2]">
								{/**
								|--------------------------------------------------
								| Why we exist
								|--------------------------------------------------
								*/}
								<div className="flex items-center justify-between">
									<GiThornHelix className="text-white text-[34px] md:text-[80px] mb-8" />
								</div>

								{/**
                                |--------------------------------------------------
                                | Text
                                |--------------------------------------------------
                                */}
								<div className="flex flex-col gap-6 justify-end">
									<h1 className="text-white text-xs md:text-base p-2 border border-white rounded-full w-max px-6 font-bold tracking-tighter max-w-[90%]">
										Why we exist?
									</h1>

									{/**
									|--------------------------------------------------
									| Header
									|--------------------------------------------------
									*/}
									<h1 className="text-white text-xl md:text-4xl w-full font-bold tracking-tighter md:max-w-[90%]">
										Because our culture deserves to be remembered and protected for future
										generations.
									</h1>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
