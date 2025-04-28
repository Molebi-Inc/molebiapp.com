/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import { SiHelix } from 'react-icons/si';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import useWidth from '@/app/hooks/useWidth';

/**
|--------------------------------------------------
| Images
|--------------------------------------------------
*/
const IMAGES_URL = ['/Designer.jpeg', '/image_three.jpeg', '/image_nine.jpeg', '/image_seven.jpeg'];

export default function OurVision() {
	/**
	|--------------------------------------------------
	|  Refs for each of the divs you want to target
	|--------------------------------------------------
	*/
	const width = useWidth();
	const cursorRef = React.useRef<HTMLDivElement>(null);
	const [isInside, setIsInside] = React.useState(false);
	const divRefs = [React.useRef(null), React.useRef(null), React.useRef(null), React.useRef(null)];

	/**
	|--------------------------------------------------
	| Use Framer's useScroll hook to track the scroll
	| position for each div
	|--------------------------------------------------
	*/
	const { scrollYProgress: scrollYProgressOne } = useScroll({ target: divRefs[0] });
	const { scrollYProgress: scrollYProgressTwo } = useScroll({ target: divRefs[1] });
	const { scrollYProgress: scrollYProgressThree } = useScroll({ target: divRefs[2] });
	const { scrollYProgress: scrollYProgressFour } = useScroll({ target: divRefs[3] });

	/**
	|--------------------------------------------------
	| Map scroll progress (0 to 1) to rotateX (from 25
	| to 0 degrees)
	|--------------------------------------------------
	*/
	const rotateX1 = useTransform(scrollYProgressOne, [0, 1], [0, 20]);
	const rotateX2 = useTransform(scrollYProgressTwo, [0, 1], [0, 20]);
	const rotateX3 = useTransform(scrollYProgressThree, [0, 1], [0, 20]);
	const rotateX4 = useTransform(scrollYProgressFour, [0, 1], [0, 20]);

	React.useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			/**
			|--------------------------------------------------
			| Custom cursor
			|--------------------------------------------------
			*/
			if (cursorRef.current) {
				cursorRef.current.style.left = `${e.clientX}px`;
				cursorRef.current.style.top = `${e.clientY}px`;
			}
		};

		/**
		|--------------------------------------------------
		| Adding the event listener
		|--------------------------------------------------
		*/
		window.addEventListener('mousemove', moveCursor);

		/**
		|--------------------------------------------------
		| Clean up function
		|--------------------------------------------------
		*/
		return () => {
			window.removeEventListener('mousemove', moveCursor);
		};
	}, []);

	/**
    |--------------------------------------------------
    | Rendered veiw
    |--------------------------------------------------
    */
	return (
		<section
			className="snap-start w-screen cursor-none"
			onMouseEnter={() => setIsInside(true)}
			onMouseLeave={() => setIsInside(false)}
		>
			{/**
			|--------------------------------------------------
			| Custom cursor
			|--------------------------------------------------
			*/}
			<div
				ref={cursorRef}
				className={`pointer-events-none fixed z-50 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full transition-all duration-300 ease-in-out ${
					isInside ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
				}`}
				style={{
					backgroundSize: 'cover',
					backgroundImage: "url('/leaf.avif')",
				}}
			/>

			<div className="w-full mx-auto pt-28 px-[4%] max-w-7xl">
				<div className="mx-auto flex justify-center">
					<motion.h1
						initial={{ y: -50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 2, ease: 'easeInOut' }}
						className="font-bold md:text-7xl text-center text-4xl tracking-tighter text-balance mt-6 max-w-[950px]"
					>
						Think We’re Just Another Family Tree App?
					</motion.h1>
				</div>

				{/**
				|--------------------------------------------------
				| Text
				|--------------------------------------------------
				*/}
				<div className="relative mt-8">
					<div className="text-center md:mb-12 mb-4 mx-auto flex items-center flex-col">
						<h2 className="md:text-4xl text-xl font-bold mb-2 tracking-tighter max-w-[900px]">
							Get Ready for Something Extraordinary!
						</h2>
						<p className="text-sm md:text-base max-w-[600px] font-medium">
							Here’s a sneak peek to show you how we’re connecting roots, traditions, and real-time health
							like never before.
						</p>
					</div>

					{/**
					|--------------------------------------------------
					| Sticky scroll
					|--------------------------------------------------
					*/}
					<div className="grid-cols-1 [@media(min-width:840px)]:grid gap-12 mx-auto">
						{/**
						|--------------------------------------------------
						| Right view
						|--------------------------------------------------
						*/}
						<div className="w-full [@media(min-width:840px)]:flex flex-col col-span-[1.5] gap-12">
							<div className="flex flex-col gap-8 perspective-[1000px] mb-8 mx-auto">
								<motion.div
									ref={divRefs[0]}
									initial={{ rotateX: 25 }}
									transition={{ duration: 1, ease: 'easeInOut' }}
									style={{ backgroundImage: `url('${IMAGES_URL[0]}')`, rotateX: rotateX1 }}
									className="h-[50vh] md:h-[700px] max-w-[900px] w-full rounded-3xl flex flex-col justify-center overflow-hidden bg-no-repeat bg-cover"
								>
									<motion.div
										initial={width > 768 ? { y: 40, opacity: 0 } : {}}
										whileHover={width > 768 ? { y: 0, opacity: 1 } : {}}
										className="flex flex-col text-white p-12 w-full h-full bg-gradient-to-t from-amber-600 to-transparent justify-end"
									>
										{/**
										|--------------------------------------------------
										| Icon
										|--------------------------------------------------
										*/}
										<SiHelix className="mb-4 text-[#ffffff]" size={54} />

										<h1 className="text-xs md:text-base w-max font-semibold tracking-tighter py-2 px-6 mb-6 border border-white rounded-full">
											Our vision
										</h1>

										{/**
										|--------------------------------------------------
										| Header
										|--------------------------------------------------
										*/}
										<motion.h1 className="max-w-[600px] font-bold text-2xl md:text-6xl tracking-tighter">
											Build Your Family Tree
										</motion.h1>

										{/**
										|--------------------------------------------------
										| Description
										|--------------------------------------------------
										*/}
										<motion.p className="text-sm md:text-base font-medium md:text-justify max-w-[500px] mt-4">
											Map your lineage across generations and preserve your family’s oral and
											cultural history.
										</motion.p>
									</motion.div>
								</motion.div>
								<motion.div
									ref={divRefs[1]}
									transition={{ duration: 1, ease: 'easeInOut' }}
									style={{ backgroundImage: `url('${IMAGES_URL[1]}')`, rotateX: rotateX2 }}
									className="h-[50vh] md:h-[700px] max-w-[900px] w-full rounded-3xl flex flex-col justify-center overflow-hidden bg-no-repeat bg-cover"
								>
									<motion.div
										initial={width > 768 ? { y: 40, opacity: 0 } : {}}
										whileHover={width > 768 ? { y: 0, opacity: 1 } : {}}
										className="flex flex-col text-white p-12 w-full h-full bg-gradient-to-t from-amber-600 to-transparent justify-end"
									>
										{/**
										|--------------------------------------------------
										| Icon
										|--------------------------------------------------
										*/}
										<SiHelix className="mb-4 text-[#ffffff]" size={54} />

										<h1 className="text-xs md:text-base w-max font-semibold tracking-tighter py-2 px-6 mb-6 border border-white rounded-full">
											Our vision
										</h1>

										{/**
										|--------------------------------------------------
										| Header
										|--------------------------------------------------
										*/}
										<motion.h1 className="max-w-[600px] font-bold text-2xl md:text-6xl tracking-tighter">
											Preserve Your Intangible Cultural Heritage
										</motion.h1>

										{/**
										|--------------------------------------------------
										| Description
										|--------------------------------------------------
										*/}
										<motion.p className="text-sm md:text-base font-medium md:text-justify max-w-[500px] mt-4">
											Record stories, languages, folklore, and traditions. Molebi keeps your
											cultural wealth alive.
										</motion.p>
									</motion.div>
								</motion.div>
							</div>
							<div className="flex flex-col gap-8 perspective-[1000px] pb-48 mx-auto">
								<motion.div
									ref={divRefs[2]}
									initial={{ rotateX: 25 }}
									transition={{ duration: 1, ease: 'easeInOut' }}
									style={{ backgroundImage: `url('${IMAGES_URL[2]}')`, rotateX: rotateX3 }}
									className="h-[50vh] md:h-[700px] max-w-[900px] w-full rounded-3xl flex flex-col justify-center overflow-hidden bg-no-repeat bg-cover"
								>
									<motion.div
										initial={width > 768 ? { y: 40, opacity: 0 } : {}}
										whileHover={width > 768 ? { y: 0, opacity: 1 } : {}}
										className="flex flex-col text-white p-12 w-full h-full bg-gradient-to-t from-amber-600 to-transparent justify-end"
									>
										{/**
										|--------------------------------------------------
										| Icon
										|--------------------------------------------------
										*/}
										<SiHelix className="mb-4 text-[#ffffff]" size={54} />

										<h1 className="text-xs md:text-base w-max font-semibold tracking-tighter py-2 px-6 mb-6 border border-white rounded-full">
											Our vision
										</h1>

										{/**
										|--------------------------------------------------
										| Header
										|--------------------------------------------------
										*/}
										<motion.h1 className="max-w-[600px] font-bold text-2xl md:text-6xl tracking-tighter">
											DNA + Heritage Integration
										</motion.h1>

										{/**
										|--------------------------------------------------
										| Description
										|--------------------------------------------------
										*/}
										<motion.p className="text-sm md:text-base font-medium md:text-justify max-w-[500px] mt-4">
											Get DNA insights that align with your cultural identity. From health traits
											to heritage connections.
										</motion.p>
									</motion.div>
								</motion.div>
								<motion.div
									ref={divRefs[3]}
									initial={{ rotateX: 45 }}
									transition={{ duration: 1, ease: 'easeInOut' }}
									style={{ backgroundImage: `url('${IMAGES_URL[3]}')`, rotateX: rotateX4 }}
									className="h-[50vh] md:h-[700px] max-w-[900px] w-full rounded-3xl flex flex-col justify-center overflow-hidden bg-no-repeat bg-cover"
								>
									<motion.div
										initial={width > 768 ? { y: 40, opacity: 0 } : {}}
										whileHover={width > 768 ? { y: 0, opacity: 1 } : {}}
										className="flex flex-col text-white p-12 w-full h-full bg-gradient-to-t from-amber-600 to-transparent justify-end"
									>
										{/**
										|--------------------------------------------------
										| Icon
										|--------------------------------------------------
										*/}
										<SiHelix className="mb-4 text-[#ffffff]" size={54} />

										<h1 className="text-xs md:text-base w-max font-semibold tracking-tighter py-2 px-6 mb-6 border border-white rounded-full">
											Our vision
										</h1>

										{/**
										|--------------------------------------------------
										| Header
										|--------------------------------------------------
										*/}
										<motion.h1 className="max-w-[600px] font-bold text-2xl md:text-6xl tracking-tighter">
											Personalized Health Insights
										</motion.h1>

										{/**
										|--------------------------------------------------
										| Description
										|--------------------------------------------------
										*/}
										<motion.p className="text-sm md:text-base font-medium md:text-justify max-w-[500px] mt-4">
											Use your DNA data to receive health tips based on genetics, ancestry, and
											lifestyle.
										</motion.p>
									</motion.div>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
