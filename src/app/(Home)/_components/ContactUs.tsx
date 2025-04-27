/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function ContactUs() {
	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<section className="w-full grid xl:grid-cols-2 snap-start gap-12">
			<motion.div
				className="col-span-1"
				initial={{ opacity: 0, x: -40 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.2, ease: 'easeInOut' }}
			>
				<Image
					alt="contact"
					width={10000}
					height={10000}
					src="/molebi_logo.jpg"
					className="w-full xl:h-screen h-[40vh] object-cover sepia-10 saturate-200 brightness-125 grayscale-25"
				/>
			</motion.div>

			{/**
            |--------------------------------------------------
            |
            |--------------------------------------------------
            */}
			<motion.div
				initial={{ x: 40, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1.2, ease: 'easeInOut' }}
				className="col-span-1 flex flex-col justify-center items-start px-[4%]"
			>
				<h1 className="text-base font-semibold tracking-tighter py-2 px-6 mb-6 border border-black rounded-full">
					Contact us
				</h1>

				{/**
                |--------------------------------------------------
                | Header
                |--------------------------------------------------
                */}
				<h2 className="font-bold tracking-tighter text-4xl md:text-7xl max-w-[700px]">
					Got questions, partnerships, or media inquiries?
				</h2>

				{/**
                |--------------------------------------------------
                | Subtext
                |--------------------------------------------------
                */}
				<p className="font-medium text-sm max-w-[600px] mt-4 md:text-justify">
					Reach out to us with any questions, feedback, or support needs you may have. Our team is always
					ready to listen and provide the help you need. We aim to respond as quickly as possible to ensure a
					smooth experience.
				</p>

				<div className="flex flex-wrap gap-4 mt-8 w-full">
					{/**
                    |--------------------------------------------------
                    | Email Button
                    |--------------------------------------------------
                    */}
					<motion.a
						whileTap={{ scale: 0.98 }}
						whileHover={{ scale: 1.05 }}
						href="mailto:info@molebiapp.com"
						className="px-6 py-3 rounded-full flex items-center gap-2 bg-[#004000] text-white text-sm font-medium shadow hover:shadow-md transition"
					>
						<Mail /> info@molebiapp.com
					</motion.a>

					{/**
                    |--------------------------------------------------
                    | Phone Button
                    |--------------------------------------------------
                    */}
					<motion.a
						href="tel:+13025757318"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
						className="px-6 py-3 flex items-center gap-2 rounded-full bg-[#004000] text-white text-sm font-medium shadow hover:shadow-md transition"
					>
						<Phone /> +1-302-575-7318
					</motion.a>
				</div>
			</motion.div>
		</section>
	);
}
