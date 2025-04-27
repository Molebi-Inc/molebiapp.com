'use client';

import React, { createContext, useContext } from 'react';

interface ScrollContextProps {
	homeRef: React.RefObject<HTMLDivElement | null>;
	aboutRef: React.RefObject<HTMLDivElement | null>;
	contactRef: React.RefObject<HTMLDivElement | null>;
	scrollTo: (section: 'home' | 'about' | 'contact') => void;
}

/**
|--------------------------------------------------
| Create context
|--------------------------------------------------
*/
const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

/**
|--------------------------------------------------
| Provider
|--------------------------------------------------
*/
export function ScrollProvider({ children }: { children: React.ReactNode }) {
	/**
    |--------------------------------------------------
    | component states
    |--------------------------------------------------
    */
	const homeRef = React.useRef<HTMLDivElement>(null);
	const aboutRef = React.useRef<HTMLDivElement>(null);
	const contactRef = React.useRef<HTMLDivElement>(null);

	/**
    |--------------------------------------------------
    | Scroll function
    |--------------------------------------------------
    */
	const scrollTo = (section: 'home' | 'about' | 'contact') => {
		const refs = {
			home: homeRef,
			about: aboutRef,
			contact: contactRef,
		};
		const ref = refs[section];
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	/**
    |--------------------------------------------------
    | Context Wrapper
    |--------------------------------------------------
    */
	return (
		<ScrollContext.Provider value={{ homeRef, aboutRef, contactRef, scrollTo }}>{children}</ScrollContext.Provider>
	);
}

/**
|--------------------------------------------------
| Custom hook to use the context
|--------------------------------------------------
*/
export const useScroll = () => {
	const context = useContext(ScrollContext);
	if (!context) {
		throw new Error('useScroll must be used within a ScrollProvider');
	}
	return context;
};
