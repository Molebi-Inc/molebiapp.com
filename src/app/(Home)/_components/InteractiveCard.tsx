/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
	title: string;
	description: string;
	icon?: React.ReactNode;
}

export default function InteractiveCard({ title, description }: Props) {
	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<motion.div
			whileHover={{ scale: 1.03 }}
			className="p-6 shadow-sm text-left hover:shadow-sm bg-cover bg-center cursor-pointer bg-amber-700/10 rounded-t-md"
		>
			{/**
            |--------------------------------------------------
            | Title
            |--------------------------------------------------
            */}
			<h4 className="text-base font-bold text-green-800 mb-2">{title}</h4>

			{/**
            |--------------------------------------------------
            | Description
            |--------------------------------------------------
            */}
			<p className="text-gray-700 text-sm">{description}</p>
		</motion.div>
	);
}
