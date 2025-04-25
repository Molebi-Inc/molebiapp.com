'use client';

/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/**
|--------------------------------------------------
| Parallax function
|--------------------------------------------------
*/
// function useParallax(value: MotionValue<number>, distance: number) {
// 	return useTransform(value, [0, 1], [-distance, distance]);
// }

/**
|--------------------------------------------------
| Section wrapper
|--------------------------------------------------
*/
function Section({ children }: { children: React.ReactNode }) {
	/**
    |--------------------------------------------------
    | Component states
    |--------------------------------------------------
    */
	const ref = React.useRef(null);

	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<section className="section-container">
			<div ref={ref}>{children}</div>
		</section>
	);
}

export default function Parallax({ sections }: { sections: Array<React.ReactNode> }) {
	/**
    |--------------------------------------------------
    | Scroll progress
    |--------------------------------------------------
    */
	const { scrollYProgress } = useScroll();

	/**
    |--------------------------------------------------
    | Scale for the progress
    |--------------------------------------------------
    */
	const scaleX = useSpring(scrollYProgress, {
		damping: 30,
		stiffness: 100,
		restDelta: 0.001,
	});

	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<div>
			{/**
            |--------------------------------------------------
            | Sections
            |--------------------------------------------------
            */}
			{sections.map((section, index) => (
				<Section key={`section ${index + 1}`}>{section}</Section>
			))}

			{/**
            |--------------------------------------------------
            | Progress bar
            |--------------------------------------------------
            */}
			<motion.div className="progress" style={{ scaleX }} />

			{/**
            |--------------------------------------------------
            | Styles
            |--------------------------------------------------
            */}
			<StyleSheet />
		</div>
	);
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
	return (
		<style>{`
        .section-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #8df0cc;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
	);
}
