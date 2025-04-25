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

export default function LadningPage() {
	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<div className="flex h-screen isolate z-40 flex-col scroll-smooth snap-y snap-mandatory">
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
