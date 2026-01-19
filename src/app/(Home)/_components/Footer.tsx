/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import Anticipation from './Anticipation';
import { Button } from '@/components/ui/button';
import { useScroll } from '../context/useScrollContext';

export default function Footer() {
	/**
	|--------------------------------------------------
	| Component states
	|--------------------------------------------------
	*/
	const { contactRef, scrollTo } = useScroll();

	const address = '3422 Old Capitol Trl, STE # 4028, Wilmington, Delaware, United States of America.';
	const encodedAddress = encodeURIComponent(address);
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<div className="snap-start">
			<Anticipation />
			<footer ref={contactRef} className="pt-4 text-center text-sm text-gray-900 snap-start bg-[#004000] px-[4%]">
				<div className="max-w-7xl mx-auto flex w-full justify-between sm:flex-row flex-col gap-5 border-b border-b-white pb-3">
					{/**
					|--------------------------------------------------
					| Header
					|--------------------------------------------------
					*/}
					<div className="flex flex-col">
						<Link href="/">
							<Image
								width={500}
								height={500}
								unoptimized
								alt="molebilogo"
								src="/molebi-white.png"
								className="w-[180px] h-auto mb-6 -translate-x-8 translate-y-12"
							/>
						</Link>
						<p className="mb-1 text-sm text-start text-white">
							Got questions, partnerships, or media inquiries?
						</p>
						<p className="mb-4 text-sm text-start text-white">
							Reach out to us, and we’ll respond as soon as possible.
						</p>

						{/**
						|--------------------------------------------------
						| Contacts
						|--------------------------------------------------
						*/}
						<div className="mr-auto text-white mb-2">
							<b>Email: </b>
							<a
								href="mailto:info@molebiapp.com"
								className="text-white text-sm underline underline-offset-4"
							>
								info@molebiapp.com
							</a>
						</div>
						<div className="mr-auto text-white mb-2">
							<b>Phone: </b>
							<a href="tel:+1-302-575-7318" className="text-white text-sm underline underline-offset-4">
								+1-302-575-7318
							</a>
						</div>
						<div className="mr-auto text-left text-white max-w-[400px]">
							<b>Address: </b>
							<a
								target="_blank"
								href={googleMapsUrl}
								rel="noopener noreferrer"
								className="text-white text-sm underline underline-offset-4"
							>
								3422 Old Capitol Trl, STE # 4028, Wilmington, Delaware, United States of America.
							</a>
						</div>
					</div>

					<div className="flex gap-4 items-end flex-wrap md:mt-0 mt-6">
						{['Home', 'About Us', 'Contact Us'].map((navigation) => {
							return (
								<a
									key={navigation}
									onClick={() =>
										scrollTo(
											navigation === 'Home'
												? 'home'
												: navigation === 'About Us'
												? 'about'
												: 'contact'
										)
									}
									className="hover:text-amber-600 text-white text-start px-4 py-2 bg-gray-50/20 rounded-full"
								>
									{navigation}
								</a>
							);
						})}

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
							<Button className="!overflow-hidden relative py-2 px-8 min-h-[30px] bg-[#DB6F23] btn btn-border-reveal rounded-full flex items-center gap-2">
								<motion.a
									variants={{
										rest: { x: 0 },
										hover: { x: -8 },
									}}
									transition={{ duration: 0.3 }}
									href="https://beta.molebiapp.com/welcome"
									className="isolate z-20 text-sm font-medium text-white"
								>
									Sign up now
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

				{/**
				|--------------------------------------------------
				| Socials
				|--------------------------------------------------
				*/}
				<div className="flex items-center justify-center gap-6 mx-auto mt-12">
					<a href="https://x.com/molebi_app" className="text-white text-[24px]">
						<BsTwitterX />
					</a>
					<a href="https://www.linkedin.com/company/molebi-inc/" className="text-white text-[24px]">
						<BsLinkedin />
					</a>
					<a href="https://www.instagram.com/molebi_app/" className="text-white text-[24px]">
						<BsInstagram />
					</a>
				</div>

				<div className="mt-8 flex flex-col items-center gap-4 py-6">
					<div className="flex gap-4 text-white text-sm">
						<Link href="/privacy-policy" className="hover:text-amber-600 underline underline-offset-4">
							Privacy Policy
						</Link>
						<span>|</span>
						<Link href="/terms-of-service" className="hover:text-amber-600 underline underline-offset-4">
							Terms of Service
						</Link>
					</div>
					<p className="text-white">© 2025 Molebi. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
