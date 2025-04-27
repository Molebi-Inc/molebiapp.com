'use client';
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
import Footer from './_components/Footer';
import AboutUs from './_components/AboutUs';
import Waitlist from './_components/Waitlist';
import ContactUs from './_components/ContactUs';
import HeroSection from './_components/HeroSection';
import JoinOurTeam from './_components/JoinOurTeam';
import OurVisionSection from './_components/OurVision';
import LeavesBackground from './_components/LeavesBackground';

export default function LadningPage() {
	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<div className="flex h-screen isolate z-40 flex-col md:scroll-smooth md:snap-y md:snap-mandatory max-w-screen overflow-x-clip">
			{/**
            |--------------------------------------------------
            | Leaves
            |--------------------------------------------------
            */}
			<LeavesBackground />

			{/**
            |--------------------------------------------------
            | Hero section
            |--------------------------------------------------
            */}
			<HeroSection />

			{/**
            |--------------------------------------------------
            | About us
            |--------------------------------------------------
            */}
			<AboutUs />

			{/**
            |--------------------------------------------------
            | Our vision
            |--------------------------------------------------
            */}
			<OurVisionSection />

			{/**
            |--------------------------------------------------
            | Waitlist
            |--------------------------------------------------
            */}
			<Waitlist />

			{/**
            |--------------------------------------------------
            | Contact us
            |--------------------------------------------------
            */}
			<ContactUs />

			{/**
            |--------------------------------------------------
            | Join our team
            |--------------------------------------------------
            */}
			<JoinOurTeam />

			{/**
            |--------------------------------------------------
            | Footer
            |--------------------------------------------------
            */}
			<Footer />
		</div>
	);
}
