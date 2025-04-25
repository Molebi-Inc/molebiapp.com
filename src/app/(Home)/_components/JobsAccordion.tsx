/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

/**
|--------------------------------------------------
| Define the job data array - You can update this
| array, should there be more jobs
|--------------------------------------------------
*/
const JOB_ROLES = [
	{
		id: 'product-designer-mid-senior',
		title: 'Product Designer - Contract (Mid/Senior Level)',
		details: {
			about: `Molebi is a health-tech platform that helps to preserve cultural heritage. The goal is to create a perceptive, user-centric digital experience that allows users to build family trees and preserve cultural Narratives.

We're looking for a passionate and detail-oriented Product Designer to design our MVP. You will play a key role in crafting intuitive and impressive experiences. Partnering with a product manager and engineer, you'll transform complex abstract concepts into accessible designs.`,
			contributions: [
				'Own the user experience of our MVP from conception to launch.',
				'Collaborate with a product owner and technical team to create a buildable user interface.',
				'Help develop and iterate on Molebi’s basic design system.',
				'Cater to the attitudinal and behavioural needs of our wide range of users.',
				'Shape the design direction of our suite of applications.',
				'Function as an individual contributor.',
			],
			requirements: [
				'Uninterrupted power supply during work hours.',
				'Proven experience designing intuitive and visually compelling user interfaces.',
				'Proficiency in Figma, Framer or similar software: Including component creation, prototyping, and design system management.',
				'Experience with complex layouts and non-standard interface representations e.g. maps 2D/3D navigation, etc.',
				'Information Architecture & User Flow Design: Strong understanding of structuring complex relationships in a way that is visually engaging and user-friendly.',
				'Vector and Organic Shape Design: Experience in designing fluid, natural, and branching structures that can dynamically expand while maintaining clarity and usability.',
				'Collaboration with Engineers - Ability to prepare and deliver detailed design specifications, assets, and interactive prototypes for handoff to engineering teams.',
				'User-Centered Design Approach - Experience conducting user research, usability testing, and iterating based on feedback to enhance user experience.',
				'Adaptability and Innovation: Willingness to experiment with new design techniques and tools to push the boundaries of traditional UI design.',
			],
			compensation: 'This position is a two-month contract position with a pay range of NGN 1.2m - 1.5m total.',
		},
	},
];

export default function JobAccordion() {
	/**
    |--------------------------------------------------
    | Rendered View
    |--------------------------------------------------
    */
	return (
		<Accordion type="multiple" className="w-full max-w-[700px]">
			{JOB_ROLES.map((job) => (
				<AccordionItem key={job.id} value={job.id} className="border-b">
					{/**
                    |--------------------------------------------------
                    | Job title
                    |--------------------------------------------------
                    */}
					<AccordionTrigger className="text-lg flex items-center font-bold tracking-tighter">
						{job.title}
					</AccordionTrigger>

					{/**
                    |--------------------------------------------------
                    | Content
                    |--------------------------------------------------
                    */}
					<AccordionContent>
						<section className="space-y-4 mt-6">
							{/**
                            |--------------------------------------------------
                            | About the job
                            |--------------------------------------------------
                            */}
							<motion.h4
								className="text-xl font-semibold"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1.2, ease: 'easeInOut' }}
							>
								About the Job
							</motion.h4>
							<motion.p
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1.2, ease: 'easeInOut' }}
								className="whitespace-pre-line text-sm text-black text-justify"
							>
								{job.details.about}
							</motion.p>

							{/**
                            |--------------------------------------------------
                            | Contribution
                            |--------------------------------------------------
                            */}
							<motion.h4
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								className="text-xl font-semibold mt-4"
								transition={{ duration: 1.2, ease: 'easeInOut' }}
							>
								How You&apos;ll Contribute
							</motion.h4>
							<motion.ul
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1.2, ease: 'easeInOut' }}
								className="list-disc list-inside space-y-1 text-sm"
							>
								{job.details.contributions.map((item, idx) => (
									<li className="text-justify" key={idx}>
										{item}
									</li>
								))}
							</motion.ul>

							{/**
                            |--------------------------------------------------
                            | Requirements
                            |--------------------------------------------------
                            */}
							<motion.h4
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								className="text-xl font-semibold"
								transition={{ duration: 1.2, ease: 'easeInOut' }}
							>
								Requirements
							</motion.h4>
							<motion.ul
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1.2, ease: 'easeInOut' }}
								className="list-disc list-inside space-y-3 text-sm"
							>
								{job.details.requirements.map((item, idx) => (
									<li key={idx} className="text-justify">
										{item}
									</li>
								))}
							</motion.ul>

							{/**
                            |--------------------------------------------------
                            | Compensation
                            |--------------------------------------------------
                            */}
							<motion.h4
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								className="text-xl font-semibold"
								transition={{ duration: 1.2, ease: 'easeInOut' }}
							>
								Compensation
							</motion.h4>
							<motion.p
								initial={{ opacity: 0, x: -20 }}
								className="text-sm text-justify"
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1.2, ease: 'easeInOut' }}
							>
								{job?.details?.compensation ?? 'N/A'}
							</motion.p>
						</section>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
