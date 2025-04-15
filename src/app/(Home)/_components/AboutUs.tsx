/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import { motion } from 'framer-motion';
import { SiHelix } from 'react-icons/si';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import AnimatedSection from './AnimatedSection';
import { useScroll } from '@/app/components/ScrollContext';

export default function AboutUs() {
	const { aboutRef } = useScroll();

	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<AnimatedSection id="About Us" ref={aboutRef}>
			{/**
            |--------------------------------------------------
            | Header
            |--------------------------------------------------
            */}
			<h2 className="text-3xl font-bold text-green-900 mb-6 text-center">About Molebi</h2>

			<ul className="items-center justify-between gap-6 grid grid-cols-1 sm:grid-cols-2 min-h-[600px]">
				<li
					className="transition-transform duration-500 ease-in-out min-h-[400px] sm:min-h-auto hover:scale-105 flex relative flex-col justify-end p-6 gap-3 col-span-1 row-span-2 h-full bg-no-repeat bg-cover rounded-md overflow-hidden"
					style={{
						backgroundImage:
							"url('https://plus.unsplash.com/premium_photo-1676418571848-e09bc69c405d?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
					}}
				>
					{/**
					|--------------------------------------------------
					| Title header
					|--------------------------------------------------
					*/}
					<h2 className="text-2xl font-bold text-white z-[2]">Science-driven cultural platform</h2>

					{/**
					|--------------------------------------------------
					| Description
					|--------------------------------------------------
					*/}
					<p className="text-sm text-white font-normal max-w-[400px] z-[2]">
						Molebi is a science-driven cultural platform that protects and connects families through DNA,
						heritage, and health.
					</p>

					{/**
					|--------------------------------------------------
					| Overlay
					|--------------------------------------------------
					*/}
					<div className="bg-gradient-to-t from-amber-600/90 to-transparent absolute inset-0 isolate z-[1]" />
				</li>

				<li
					className="flex relative flex-col justify-end p-6 min-h-[400px] sm:min-h-auto gap-3 col-span-1 h-full bg-no-repeat bg-cover rounded-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105"
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
					}}
				>
					{/**
					|--------------------------------------------------
					| Title header
					|--------------------------------------------------
					*/}
					<h2 className="text-2xl font-bold text-white z-[2]">Largest private DNA database</h2>

					{/**
					|--------------------------------------------------
					| Description
					|--------------------------------------------------
					*/}
					<p className="text-sm text-white font-normal max-w-[400px] z-[2]">
						We’re building the largest private DNA database for the developing world—fuelled by love,
						memory, and the desire to preserve what matters most.
					</p>

					{/**
					|--------------------------------------------------
					| Overlay
					|--------------------------------------------------
					*/}
					<div className="bg-gradient-to-t from-blue-800/90 to-transparent absolute inset-0 isolate z-[1]" />
				</li>

				<li
					className="flex relative flex-col justify-end p-6 min-h-[400px] sm:min-h-auto gap-3 col-span-1 h-full bg-no-repeat bg-cover rounded-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105"
					style={{
						backgroundImage:
							"url('https://www.jotform.com/blog/wp-content/uploads/2022/02/niko-photos-tGTVxeOr_Rs-unsplash.jpg')",
					}}
				>
					{/**
					|--------------------------------------------------
					| Title header
					|--------------------------------------------------
					*/}
					<h2 className="text-2xl font-bold text-white z-[2]">Roots and legacy preservation</h2>

					{/**
					|--------------------------------------------------
					| Description
					|--------------------------------------------------
					*/}
					<p className="text-sm text-white font-normal max-w-[400px] z-[2]">
						By weaving together genetic science and the stories of our ancestors, we help you uncover your
						roots, understand your health, and preserve your legacy.
					</p>

					{/**
					|--------------------------------------------------
					| Overlay
					|--------------------------------------------------
					*/}
					<div className="bg-gradient-to-t from-sky-800/90 to-transparent absolute inset-0 isolate z-[1]" />
				</li>
			</ul>

			{/**
            |--------------------------------------------------
            | Why we exists
            |--------------------------------------------------
            */}
			<h3 className="text-3xl font-bold my-8 text-green-800 text-center mt-20">Why We Exist</h3>

			{/**
            |--------------------------------------------------
            | Points
            |--------------------------------------------------
            */}
			<ul className="list-none space-y-2 mt-3 text-sm grid sm:grid-cols-2 md:grid-cols-3 gap-4">
				{/**
				|--------------------------------------------------
				| Culture
				|--------------------------------------------------
				*/}
				<motion.li className="bg-gray-50 p-5" whileHover={{ scale: 1.03 }}>
					<div className="flex flex-col items-start justify-center">
						<SiHelix className="bg-[#0040001b] rounded-full p-3 mb-4" size={48} />

						<h3 className="font-bold text-base mr-auto mb-2 text-green-800 ">Culture</h3>
						<span>
							{' '}
							Because our culture deserves to be remembered and protected for future generations.
						</span>
					</div>
				</motion.li>

				{/**
				|--------------------------------------------------
				| Genetics
				|--------------------------------------------------
				*/}
				<motion.li className="bg-gray-50 p-5" whileHover={{ scale: 1.03 }}>
					<div className="flex flex-col items-start justify-center">
						<SiHelix className="bg-[#0040001b] rounded-full p-3 mb-4" size={48} />

						<h3 className="font-bold text-base mr-auto mb-2 text-green-800 ">Genetics</h3>
						<span>Because many don’t have access to their genetic data.</span>
					</div>
				</motion.li>

				{/**
				|--------------------------------------------------
				| Heritage
				|--------------------------------------------------
				*/}
				<motion.li className="bg-gray-50 p-5" whileHover={{ scale: 1.03 }}>
					<div className="flex flex-col items-start justify-center">
						<SiHelix className="bg-[#0040001b] rounded-full p-3 mb-4" size={48} />

						<h3 className="font-bold text-base mr-auto mb-2 text-green-800 ">Heritage</h3>
						<span>Because heritage is fading too fast.</span>
					</div>
				</motion.li>
			</ul>
		</AnimatedSection>
	);
}
