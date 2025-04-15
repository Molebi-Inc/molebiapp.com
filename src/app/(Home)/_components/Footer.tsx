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
import { useScroll } from '@/app/components/ScrollContext';
import { Button } from '@/components/ui/button';

export default function Footer() {
	/**
	|--------------------------------------------------
	| Component states
	|--------------------------------------------------
	*/
	const { contactRef, homeRef, aboutRef, scrollToSection } = useScroll();

	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<footer ref={contactRef} id="Contact Us" className="pt-20 mt-40 text-center text-sm text-gray-900 px-4">
			<div className="max-w-7xl mx-auto flex w-full justify-between sm:flex-row flex-col gap-5">
				{/**
				|--------------------------------------------------
				| Header
				|--------------------------------------------------
				*/}
				<div className="flex flex-col">
					<Image src="/logo.svg" alt="molebi logo" width={50} height={50} className="w-[180px] h-auto mb-6" />
					<p className="mb-1 text-sm text-start">Got questions, partnerships, or media inquiries?</p>
					<p className="mb-4 text-sm text-start">Reach out to us, and we’ll respond as soon as possible.</p>

					{/**
					|--------------------------------------------------
					| Contacts
					|--------------------------------------------------
					*/}

					<div className="mr-auto">
						<b>Email: </b>
						<a href="mailto:info@molebiapp.com" className="text-amber-600 text-sm">
							info@molebiapp.com
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<h2 className="text-xl font-bold mb-4 text-[#004000] text-start">Navigations</h2>
					{['Home', 'About Us', 'Contact Us'].map((navigation) => {
						return (
							<Link
								key={navigation}
								href={`#${navigation}`}
								onClick={() => {
									scrollToSection(
										navigation === 'Home'
											? homeRef
											: navigation === 'About Us'
											? aboutRef
											: contactRef
									);
								}}
								className="hover:text-amber-600 text-start underline underline-offset-2"
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
					<Button className="text-white px-6 text-sm font-semibold rounded-none bg-amber-600 mt-3 max-w-[200px]">
						<a
							href="https://forms.gle/Xo7rmTQ1J6cX18E58"
							className="text-sm text-amber-50 hover:underline hover:underline-offset-2"
						>
							Join the Waitlist
						</a>
					</Button>
				</div>
			</div>
			<p className="mt-8 w-full bg-gray-50 py-6">© 2025 Molebi. All rights reserved.</p>
		</footer>
	);
}
