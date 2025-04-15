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
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';
import { GiFamilyTree, GiGlowingArtifact, GiLightningHelix } from 'react-icons/gi';

export default function Explore() {
	/**
    |--------------------------------------------------
    | Rendered view
    |--------------------------------------------------
    */
	return (
		<AnimatedSection id="vision" className="bg-gray-50 max-w-full py-20">
			{/**
            |--------------------------------------------------
            | Header
            |--------------------------------------------------
            */}
			<h2 className="text-3xl font-bold text-center text-green-900 mb-12">Explore Our Vision</h2>

			{/**
            |--------------------------------------------------
            | Vision
            |--------------------------------------------------
            */}
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
				{/**
				|--------------------------------------------------
				| DNA Helix
				|--------------------------------------------------
				*/}
				<div className="w-full">
					{/**
					|--------------------------------------------------
					| Text
					|--------------------------------------------------
					*/}
					<InteractiveCard
						title="DNA Helix"
						description="Discover how your genes can reveal health and lineage."
						icon={<GiLightningHelix className="bg-[#0040001b] rounded-full p-3 mb-4" size={48} />}
					/>

					{/**
					|--------------------------------------------------
					| Background image
					|--------------------------------------------------
					*/}
					<div
						className="w-full min-h-[200px] bg-cover bg-no-repeat rounded-b-md"
						style={{
							backgroundImage:
								"url('https://media.post.rvohealth.io/wp-content/uploads/sites/3/2022/06/DNA-autoradiogram-strip-thumb-732x549.jpg')",
						}}
					>
						<div className="w-full min-h-[200px] h-full bg-amber-900/30 flex" />
					</div>
				</div>

				{/**
				|--------------------------------------------------
				| Family tree
				|--------------------------------------------------
				*/}
				<div className="w-full">
					{/**
					|--------------------------------------------------
					| Text
					|--------------------------------------------------
					*/}
					<InteractiveCard
						title="Family Tree"
						description="See how families stay connected across generations."
						icon={<GiFamilyTree className="bg-[#0040001b] rounded-full p-3 mb-4" size={48} />}
					/>

					{/**
					|--------------------------------------------------
					| Background iamge
					|--------------------------------------------------
					*/}
					<div
						className="w-full min-h-[200px] bg-cover bg-no-repeat rounded-b-md overflow-hidden"
						style={{
							backgroundImage:
								"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImIDJLp6rDyTYGSTP0sbwA_L_LbtEn9-YvQ&s')",
						}}
					>
						<div className="w-full min-h-[200px] h-full bg-amber-900/30 flex" />
					</div>
				</div>

				{/**
				|--------------------------------------------------
				| Cultural Artifacts
				|--------------------------------------------------
				*/}
				<div className="w-full">
					{/**
					|--------------------------------------------------
					| Text
					|--------------------------------------------------
					*/}
					<InteractiveCard
						title="Cultural Artifacts"
						description="Explore disappearing traditions we’re protecting."
						icon={<GiGlowingArtifact className="bg-[#0040001b] rounded-full p-3 mb-4" size={48} />}
					/>

					{/**
					|--------------------------------------------------
					| Background iamge
					|--------------------------------------------------
					*/}
					<div
						className="w-full min-h-[200px] bg-cover bg-no-repeat rounded-b-md bg-amber-700 mix-blend-multiply"
						style={{
							backgroundImage:
								"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FFyFxnlT_mhfNY8tazX60DGUJnyN3gvMdCR5FGTFz2mZHQDtAzZo8VZQ55DGhWKQuKk&usqp=CAU')",
						}}
					/>
				</div>
			</div>
		</AnimatedSection>
	);
}
