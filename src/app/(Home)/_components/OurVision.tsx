/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import { SiHelix } from 'react-icons/si';
import { AnimatePresence, motion } from 'framer-motion';

/**
|--------------------------------------------------
| Images
|--------------------------------------------------
*/
const IMAGES_URL = ['/family_tree.png', '/helix_two.png', '/heritage.png', '/insights_two.png'];

export default function OurVision() {
	/**
	|--------------------------------------------------
	| Component states
	|--------------------------------------------------
	*/
	const [imageIndex, setImageIndex] = React.useState<number>(0);

	/**
    |--------------------------------------------------
    | Rendered veiw
    |--------------------------------------------------
    */
	return (
		<section className="snap-start w-screen">
			<div className="w-full mx-auto pt-28 pr-[4%] max-w-7xl">
				<div className="mx-auto">
					<motion.h1
						initial={{ y: -50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 2, ease: 'easeInOut' }}
						className="font-bold text-7xl tracking-tighter mt-6 max-w-[750px] text-black"
					>
						Think We’re Just Another Family App?
					</motion.h1>
				</div>

				{/**
				|--------------------------------------------------
				| Text
				|--------------------------------------------------
				*/}
				<div className="relative mt-8">
					<div className="text-left mb-12 mx-auto">
						<h2 className="text-4xl font-bold mb-2 tracking-tighter max-w-[700px]">
							Get Ready for Something Extraordinary!{' '}
						</h2>
						<p className="text-base max-w-[600px] text-gray-700 font-medium">
							Here’s a sneak peek to show you how we’re connecting roots, traditions, and real-time health
							like never before.
						</p>
					</div>

					{/**
					|--------------------------------------------------
					| Sticky scroll
					|--------------------------------------------------
					*/}
					<div className="grid grid-cols-2 gap-12 mx-auto">
						{/**
						|--------------------------------------------------
						| Left view
						|--------------------------------------------------
						*/}
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.3, ease: 'easeInOut' }}
							className="top-0 sticky h-[100vh] flex flex-col col-span-1"
						>
							<AnimatePresence mode="wait" initial={true}>
								<motion.div
									exit={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									key={`our_vision-${imageIndex}`}
									transition={{ duration: 1, ease: 'easeInOut' }}
									style={{ backgroundImage: `url('${IMAGES_URL[imageIndex]}')` }}
									className="h-[90%] rounded-2xl bg-green-800 my-auto bg-center hover:scale-105 transition-all duration-700"
								/>
							</AnimatePresence>
						</motion.div>

						{/**
						|--------------------------------------------------
						| Right view
						|--------------------------------------------------
						*/}
						<div className="w-full flex flex-col col-span-[1.5] gap-12 snap-mandatory snap-y scroll-smooth">
							<motion.div
								initial={{ y: 40, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								onViewportEnter={() => setImageIndex(0)}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className="h-[100vh] w-full snap-center flex flex-col justify-center"
							>
								{/**
								|--------------------------------------------------
								| Icon
								|--------------------------------------------------
								*/}
								<SiHelix className="mb-4 text-[#004000]" size={54} />

								<h1 className="text-base w-max font-semibold tracking-tighter py-2 px-6 mb-6 border border-black rounded-full">
									Our vision
								</h1>

								{/**
								|--------------------------------------------------
								| Header
								|--------------------------------------------------
								*/}
								<h1 className="max-w-[600px] font-bold text-6xl tracking-tighter">
									Build Your Family Tree
								</h1>

								{/**
								|--------------------------------------------------
								| Description
								|--------------------------------------------------
								*/}
								<p className="text-sm font-medium text-justify max-w-[500px] mt-4">
									Map your lineage across generations to uncover the roots of your ancestry. Preserve
									your family’s oral traditions, cultural practices, and treasured memories. Create a
									lasting legacy that connects past, present, and future generations.
								</p>
							</motion.div>
							<motion.div
								initial={{ y: 40, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								onViewportEnter={() => setImageIndex(1)}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className="h-[100vh] w-full snap-center flex flex-col justify-center"
							>
								{/**
								|--------------------------------------------------
								| Icon
								|--------------------------------------------------
								*/}
								<SiHelix className="mb-4 text-[#004000]" size={54} />

								<h1 className="text-base w-max font-semibold tracking-tighter py-2 px-6 mb-6 border border-black rounded-full">
									Our vision
								</h1>

								{/**
								|--------------------------------------------------
								| Header
								|--------------------------------------------------
								*/}
								<h1 className="max-w-[600px] font-bold text-6xl tracking-tighter">
									DNA + Heritage Integration
								</h1>

								{/**
								|--------------------------------------------------
								| Description
								|--------------------------------------------------
								*/}
								<p className="text-sm font-medium text-justify max-w-[500px] mt-4">
									Get personalized DNA insights that reflect your unique cultural identity. Explore
									connections between your genetic makeup, ancestral roots, and health traits.
									Discover how your heritage shapes who you are—inside and out.
								</p>
							</motion.div>
							<motion.div
								initial={{ y: 40, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								onViewportEnter={() => setImageIndex(2)}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className="h-[100vh] w-full snap-center flex flex-col justify-center"
							>
								{/**
								|--------------------------------------------------
								| Icon
								|--------------------------------------------------
								*/}
								<SiHelix className="mb-4 text-[#004000]" size={54} />

								<h1 className="text-base w-max font-semibold tracking-tighter py-2 px-6 mb-6 border border-black rounded-full">
									Our vision
								</h1>

								{/**
								|--------------------------------------------------
								| Header
								|--------------------------------------------------
								*/}
								<h1 className="max-w-[600px] font-bold text-6xl tracking-tighter">
									{/**
									|--------------------------------------------------
									| Description
									|--------------------------------------------------
									*/}
									Preserve Your Intangible Cultural Heritage
								</h1>
								<p className="text-sm font-medium text-justify max-w-[500px] mt-4">
									Record cherished stories, native languages, timeless folklore, and ancestral
									traditions. Molebi serves as a living archive, safeguarding the voices and values of
									your heritage. Keep your cultural wealth alive and pass it on for generations to
									come.
								</p>
							</motion.div>
							<motion.div
								initial={{ y: 40, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								onViewportEnter={() => setImageIndex(3)}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className="h-[100vh] w-full snap-center flex flex-col justify-center"
							>
								{/**
								|--------------------------------------------------
								| Icon
								|--------------------------------------------------
								*/}
								<SiHelix className="mb-4 text-[#004000]" size={54} />

								<h1 className="text-base w-max font-semibold tracking-tighter py-2 px-6 mb-6 border border-black rounded-full">
									Our vision
								</h1>

								{/**
								|--------------------------------------------------
								| Header
								|--------------------------------------------------
								*/}
								<h1 className="max-w-[600px] font-bold text-6xl tracking-tighter">
									Personalized Health Insights
								</h1>

								{/**
								|--------------------------------------------------
								| Description
								|--------------------------------------------------
								*/}
								<p className="text-sm font-medium text-justify max-w-[500px] mt-4">
									Use your DNA data to unlock personalized health tips tailored to your genetic
									profile. Gain insights that connect your ancestry, genetic traits, and daily habits.
									Take proactive steps toward wellness with guidance rooted in who you are.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
