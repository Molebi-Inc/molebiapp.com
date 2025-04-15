'use client';
/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import Footer from './_components/Footer';
import AboutUs from './_components/AboutUs';
import Explore from './_components/Explore';
import HeroSection from './_components/HeroSection';
import WaitingList from './_components/WaitingList';
import Anticipation from './_components/Anticipation';

export default function LandingPage() {
	/**
	|--------------------------------------------------
	| Rendered View
	|--------------------------------------------------
	*/
	return (
		<div>
			{/**
			|--------------------------------------------------
			| Hero section
			|--------------------------------------------------
			*/}
			<HeroSection />

			{/**
			|--------------------------------------------------
			| About us sectkon
			|--------------------------------------------------
			*/}
			<AboutUs />

			{/**
			|--------------------------------------------------
			| Explore our vision
			|--------------------------------------------------
			*/}
			<Explore />

			{/**
			|--------------------------------------------------
			| Waiting list
			|--------------------------------------------------
			*/}
			<WaitingList />

			{/**
			|--------------------------------------------------
			| Anticipation
			|--------------------------------------------------
			*/}
			<Anticipation />

			{/**
			|--------------------------------------------------
			| Footer
			|--------------------------------------------------
			*/}
			<Footer />
		</div>
	);
}
