'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'SonoGest',
    description:
      'Gesture-controlled performance tool that lets musicians manipulate Ableton Live in real time using MediaPipe Hands + OpenCV, routed over AbletonOSC. I designed the gesture set, mapped effects/transport controls, and tuned the pipeline for reliable, low‑latency interaction.',
    image: '/ableton.png',
    demoUrl: 'https://drive.google.com/file/d/11pH_dHGolmcbrymaFBVNDPVZ2dqaryla/view?usp=sharing',
    githubUrl: 'https://github.com/ayaneyokoya/SonoGest',
  },
  {
    id: 2,
    title: 'AI Summarizer',
    description:
      'Lightweight web app that turns long‑form articles into concise summaries powered by OpenAI. Includes URL ingestion, robust error handling, and a clean UI for quick copy/share—deployed on Netlify for fast demos.',
    image: '/sumz.png',
    demoUrl: 'https://649f557f50d4bf483b7df634--prismatic-jelly-a68665.netlify.app/',
    githubUrl: 'https://github.com/ayaneyokoya/ai-summarizer',
  },
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Featured Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
						<div className="absolute inset-0 bg-black/80 group-hover:bg-black/30 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-300 mb-4">{project.description}</p>
							<div className="flex gap-4">
								<Link
									href={project.demoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
								>
									View Demo
								</Link>
								<Link href={project.githubUrl} className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
									GitHub
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
