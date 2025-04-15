/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

interface Props {
	id: string;
	className?: string;
	children: React.ReactNode;
}

const AnimatedSection = forwardRef<HTMLDivElement, Props>(({ children, id, className = '' }: Props, ref) => {
	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<motion.section
			id={id}
			ref={ref}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			initial={{ opacity: 0, y: 200 }}
			whileInView={{ opacity: 1, y: 0 }}
			className={`py-16 px-4 max-w-5xl mx-auto ${className}`}
		>
			{children}
		</motion.section>
	);
});

/**
|--------------------------------------------------
| Give the component a display name for debugging
| purposes
|--------------------------------------------------
*/
AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
