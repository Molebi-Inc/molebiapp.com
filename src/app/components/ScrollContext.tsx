'use client';
/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React, { createContext, useContext } from 'react';

/**
|--------------------------------------------------
| Interface
|--------------------------------------------------
*/
interface ScrollContextType {
	homeRef: React.RefObject<HTMLDivElement | null>;
	aboutRef: React.RefObject<HTMLDivElement | null>;
	contactRef: React.RefObject<HTMLDivElement | null>;
	scrollToSection: (sectionRef: React.RefObject<HTMLDivElement | null>) => void;
}

interface ScrollProviderProps {
	children: React.ReactNode;
}

/**
|--------------------------------------------------
| Scroll context
|--------------------------------------------------
*/
const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
	/**
    |--------------------------------------------------
    |  Create refs for each section
    |--------------------------------------------------
    */
	const homeRef = React.useRef<HTMLDivElement | null>(null);
	const aboutRef = React.useRef<HTMLDivElement | null>(null);
	const contactRef = React.useRef<HTMLDivElement | null>(null);

	/**
    |--------------------------------------------------
    | Function to scroll to a section
    |--------------------------------------------------
    */
	const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
		sectionRef.current?.scrollIntoView?.({ behavior: 'smooth' });
	};

	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<ScrollContext.Provider value={{ homeRef, aboutRef, contactRef, scrollToSection }}>
			{children}
		</ScrollContext.Provider>
	);
};

export default ScrollProvider;

/**
|--------------------------------------------------
| Use scroll function
|--------------------------------------------------
*/
export const useScroll = (): ScrollContextType => {
	const context = useContext(ScrollContext);

	/**
    |--------------------------------------------------
    | Error handler
    |--------------------------------------------------
    */
	if (!context) {
		throw new Error('useScroll must be used within a ScrollProvider');
	}

	/**
    |--------------------------------------------------
    | Returns the context
    |--------------------------------------------------
    */
	return context;
};
