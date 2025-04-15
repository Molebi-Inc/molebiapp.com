/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

export default function WaitingList() {
	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<AnimatedSection id="waitlist" className="py-40 bg-green-900 text-white text-center px-4 max-w-full">
			{/**
            |--------------------------------------------------
            | Header
            |--------------------------------------------------
            */}
			<h2 className="text-3xl font-bold mb-4">Be Among the First to Experience Molebi</h2>

			<p className="mb-6 max-w-2xl mx-auto">
				We’re almost there. Want to be the first to know when we launch? Join our waitlist and stay connected to
				the future of ancestry, science, and culture.
			</p>

			{/**
            |--------------------------------------------------
            | Call to action
            |--------------------------------------------------
            */}
			<Button asChild className="bg-amber-600 text-amber-50 rounded-[100px] p-6">
				<a href="https://forms.gle/your-google-form-link" target="_blank">
					Join the Waitlist
				</a>
			</Button>
		</AnimatedSection>
	);
}
