/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import Link from 'next/link';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

export default function Anticipation() {
	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<AnimatedSection id="anticipation" className="bg-gray-50 text-center max-w-full !py-0 !px-0">
			<div className="w-full h-full py-40 bg-blend-screen">
				<h3 className="text-2xl font-bold text-green-900 mb-2">Launching soon.</h3>
				<p className="mb-4 text-green-900">Something powerful is coming. Stay close.</p>

				{/**
				|--------------------------------------------------
				| Call to action
				|--------------------------------------------------
				*/}
				<Button asChild className="bg-green-900 text-white rounded-[100px] p-6">
					<Link href="#waitlist">Join the Waitlist</Link>
				</Button>
			</div>
		</AnimatedSection>
	);
}
