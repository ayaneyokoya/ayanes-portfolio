'use client';

import { motion } from 'framer-motion';

const experiences = [
	{
		company: 'Meta',
		role: 'Software Engineer Intern',
		location: 'Seattle, WA',
		dates: 'May 2025 – Aug 2025',
		bullets: [
			'Built 1-click campaign conversion feature in Shopify Meta App, lowering cost per conversion by 6% in pilot tests',
			'Optimized advertiser workflows via GraphQL mutations & Mid-Flight Recommendation pipelines.',
			'Resolved cross-surface commerce ads issues by aligning SMA with Ads Manager and partner tools.',
		],
		tags: ['PHP', 'GraphQL', 'ReactJS', 'Jest', 'A/B testing', 'Cross-team Collaboration'],
	},
	{
		company: 'Amazon Web Services',
		role: 'Software Development Engineer Intern',
		location: 'Seattle, WA',
		dates: 'May 2024 – Aug 2024',
		bullets: [
			'Built a Self‑Service Tool (DynamoDB + CDK + GraphQL) removing manual business configuration updates for developers.',
			'Automated user contact creation across services to reduce onboarding time and added permission assignment logic.',
			'Implemented auditing for user creation and configuration changes to strengthen internal app security.',
		],
		tags: ['Typescript', 'Java', 'CDK', 'GraphQL', 'AWS Services', 'Security'],
	},
	{
		company: 'Waystar',
		role: 'Application Engineer Intern',
		location: 'Atlanta, GA',
		dates: 'Jan 2024 – May 2024',
		bullets: [
			'Led a 5‑person Scrum team to automate scheduled DB integrity checks via scripts and AWS Lambda.',
			'Modernized internal admin tools with ReactJS and fixed backend system errors.',
			'Integrated third‑party verification APIs with SQL to improve bank account verification by ~5%.',
		],
		tags: ['ReactJS', 'PHP', 'AWS Lambda', 'SQL', 'Agile Development', 'Automation'],
	},
];

export default function ExperienceSection() {
	return (
		<section
			id="experience"
			className="py-12 md:py-20 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent"
		>
			<motion.div
				initial={{ opacity: 0, y: 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="max-w-5xl mx-auto px-4"
			>
				<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
					Experience
				</h2>

				<div className="space-y-8">
					{experiences.map((exp, i) => (
						<motion.article
							key={exp.company + exp.dates}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: i * 0.1 }}
							className="bg-white/5 rounded-xl p-5 md:p-6 border border-white/8"
						>
							<div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold">
                                        {exp.role}{' '}
                                        <span className="text-gray-400">— {exp.company}</span>
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-400">
                                        {exp.location} ·{' '}
                                        <span className="font-mono text-sm md:text-base">
                                            {exp.dates}
                                        </span>
                                    </p>
                                </div>
                            </div>

							<ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
								{exp.bullets.map((b, idx) => (
									<li key={idx} className="text-base">
										{b}
									</li>
								))}
							</ul>

							{/* tags like SkillsSection */}
							<div className="mt-4 flex flex-wrap gap-2">
								{exp.tags.map((tag, tIdx) => (
									<motion.span
										key={tag}
										initial={{ opacity: 0, scale: 0.85 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.35, delay: 0.06 * tIdx + i * 0.04 }}
										className="text-sm px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
									>
										{tag}
									</motion.span>
								))}
							</div>
						</motion.article>
					))}
				</div>
			</motion.div>
		</section>
	);
}