'use client';
/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
|--------------------------------------------------
| Type definitions
|--------------------------------------------------
*/
type LeafType = {
	id: number;
	left: number;
	top: number;
	size: number;
	speedFactor: number;
	xDirection: number;
	rotateDirection: number;
};

/**
|--------------------------------------------------
| Leaf component (with smooth sine-wave swaying)
|--------------------------------------------------
*/
const Leaf = ({ leaf }: { leaf: LeafType }) => {
	const { scrollY } = useScroll();

	/**
	|--------------------------------------------------
	| Create a smooth, infinite sine-wave effect
	|--------------------------------------------------
	*/
	const wave = useTransform(scrollY, (v) => Math.sin(v / (200 / leaf.speedFactor)));

	const smoothWave = useSpring(wave, { damping: 10, stiffness: 50 });

	/**
	|--------------------------------------------------
	| Now map wave output (-1 to 1) to your desired
	| movement ranges
	|--------------------------------------------------
	*/
	const xMovement = useTransform(smoothWave, [-1, 1], [-30 * leaf.xDirection, 30 * leaf.xDirection]);
	const yMovement = useTransform(smoothWave, [-1, 1], [-20 * leaf.speedFactor, 20 * leaf.speedFactor]);
	const rotateMovement = useTransform(smoothWave, [-1, 1], [-10 * leaf.rotateDirection, 10 * leaf.rotateDirection]);

	return (
		<motion.img
			alt="leaf"
			style={{
				x: xMovement,
				y: yMovement,
				width: leaf.size,
				height: leaf.size,
				top: `${leaf.top}%`,
				left: `${leaf.left}%`,
				rotate: rotateMovement,
			}}
			className="absolute bg-green-600 rounded-full opacity-20 saturate-200"
			src="https://img.freepik.com/free-psd/3d-green-leaf-isolated-transparent-background_191095-16527.jpg?semt=ais_hybrid&w=740"
		/>
	);
};

/**
|--------------------------------------------------
| LeavesBackground component
|--------------------------------------------------
*/
const LeavesBackground = () => {
	const [leaves, setLeaves] = useState<LeafType[]>([]);

	/**
  |--------------------------------------------------
  | Generate random leaves on mount
  |--------------------------------------------------
  */
	useEffect(() => {
		const generatedLeaves = Array.from({ length: 12 }, (_, index) => {
			const randomSize = Math.random() * 80 + 20;
			const speedFactor = randomSize / 50;

			return {
				id: index,
				left: Math.random() * 100,
				top: Math.random() * 100,
				size: randomSize,
				speedFactor,
				xDirection: Math.random() > 0.5 ? 1 : -1,
				rotateDirection: Math.random() > 0.5 ? 1 : -1,
			};
		});

		setLeaves(generatedLeaves);
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			{leaves.map((leaf) => (
				<Leaf key={leaf.id} leaf={leaf} />
			))}
		</div>
	);
};

export default LeavesBackground;
