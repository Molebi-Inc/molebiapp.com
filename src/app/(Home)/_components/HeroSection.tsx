/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import HeroCarousel from './HeroCarousel';

export default function HeroSection() {
	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<section id="home" className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
			<HeroCarousel />
		</section>
	);
}
