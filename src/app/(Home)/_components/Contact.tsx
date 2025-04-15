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
import AnimatedSection from './AnimatedSection';

export default function Contact() {
	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<AnimatedSection id="contact">
			{/**
            |--------------------------------------------------
            | Header
            |--------------------------------------------------
            */}
			<h2 className="text-3xl font-bold mb-4 text-green-900">Contact Us</h2>
			<p className="mb-2 text-sm">Got questions, partnerships, or media inquiries?</p>
			<p className="mb-4 text-sm">Reach out to us, and we’ll respond as soon as possible.</p>

			{/**
            |--------------------------------------------------
            | Contacts
            |--------------------------------------------------
            */}
			<ul className="space-y-2">
				<li className="text-sm">
					Email:{' '}
					<a href="mailto:info@molebiapp.com" className="text-amber-600 text-sm">
						info@molebiapp.com
					</a>
				</li>
			</ul>
		</AnimatedSection>
	);
}
