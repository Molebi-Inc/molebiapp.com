/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import Anticipation from './Anticipation';
import { Button } from '@/components/ui/button';
import { BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';

export default function Footer() {
	/**
	|--------------------------------------------------
	| Component states
	|--------------------------------------------------
	*/

	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<React.Fragment>
			<Anticipation />
			<footer className="pt-20 text-center text-sm text-gray-900 snap-start bg-[#004000]">
				<div className="max-w-7xl mx-auto flex w-full justify-between sm:flex-row flex-col gap-5 border-b border-b-white pb-3">
					{/**
					|--------------------------------------------------
					| Header
					|--------------------------------------------------
					*/}
					<div className="flex flex-col">
						<Image
							src="/logo.svg"
							alt="molebi logo"
							width={50}
							height={50}
							className="w-[180px] h-auto mb-6 invert-100 grayscale-100 brightness-125 saturate-200 sepia-100"
						/>
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
						<div className="mr-auto text-white">
							<b>Email: </b>
							<a href="mailto:info@molebiapp.com" className="text-white text-sm">
								info@molebiapp.com
							</a>
						</div>
						<div className="mr-auto text-white">
							<b>Phone: </b>
							<a href="tel:+1-302-575-7318" className="text-white text-sm">
								+1-302-575-7318
							</a>
						</div>
					</div>

					<div className="flex gap-4 items-end">
						{['Home', 'About Us', 'Contact Us'].map((navigation) => {
							return (
								<Link
									key={navigation}
									href={`#${navigation}`}
									className="hover:text-amber-600 text-white text-start"
								>
									{navigation}
								</Link>
							);
						})}

						{/**
						|--------------------------------------------------
						| Action button
						|--------------------------------------------------
						*/}
						<Button className="text-[white] px-6 text-sm font-medium rounded-full bg-orange-200 mt-3 max-w-[200px]">
							<a
								href="https://forms.gle/Xo7rmTQ1J6cX18E58"
								className="text-sm text-orange-900 hover:underline hover:underline-offset-2"
							>
								Join the Waitlist
							</a>
						</Button>
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

				<p className="mt-8 w-full py-6 text-white">© 2025 Molebi. All rights reserved.</p>
			</footer>
		</React.Fragment>
	);
}
