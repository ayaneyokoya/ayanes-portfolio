'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
	'React',
	'TypeScript',
	'SwiftUI',
	'GraphQL',
	'Python',
	'PHP',
	'Java',
	'HTML/CSS',
	'AWS',
	'Firebase',
	'OpenCV',
	'... And More!',
];

// devicon CDN icons (jsDelivr)
const ICON_MAP: Record<string, string | undefined> = {
	react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
	typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
	swiftui: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
	graphql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
	python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
	php: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
	java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
	htmlcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
	aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
	firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
	opencv: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg'
};

export default function SkillsSection() {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
				>
					Skills & Technologies
				</motion.h2>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{skills.map((skill, index) => {
						const key = skill.toLowerCase().replace(/[^a-z0-9]/g, '');
						const icon = ICON_MAP[key];
						const hasIcon = Boolean(icon);

						return (
							<motion.div
								key={skill}
								onMouseEnter={() => setHovered(index)}
								onMouseLeave={() => setHovered(null)}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ 
                                    duration: 0.35,
                                    delay: index * 0.05,
                                    scale: { duration: 0.2, delay: 0 } 
                                }}
								whileHover={{ scale: 1.05 }}
								className="relative bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-colors flex items-center justify-center"
								style={{ minHeight: 96 }}
							>
								<motion.h3
									animate={{
										// only hide/move the text when an icon exists for this skill
										opacity: hasIcon && hovered === index ? 0 : 1,
										y: hasIcon && hovered === index ? -6 : 0,
									}}
									transition={{ duration: 0.18 }}
									className="text-lg font-semibold select-none"
								>
									{skill}
								</motion.h3>

								{hasIcon ? (
									<motion.img
										src={icon!}
										alt={`${skill} logo`}
										aria-hidden={hovered !== index}
										initial={{ opacity: 0, scale: 0.9, y: 6 }}
										animate={{
											opacity: hovered === index ? 1 : 0,
											scale: hovered === index ? 1 : 0.9,
											y: hovered === index ? 0 : 6,
										}}
										transition={{ duration: 0.18 }}
										className="w-12 h-12 object-contain absolute"
									/>
								) : null}
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
