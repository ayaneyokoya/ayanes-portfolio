'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [open, setOpen] = useState(false);
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="h-screen flex items-center justify-center relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
			</div>

			<div className="relative z-10 text-center">
				<motion.h1
					initial={{ y: 50 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
				>
					Ayane Yokoya
				</motion.h1>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-lg md:text-xl text-gray-300 mb-8 px-4"
				>
					Software Engineer | B.S. in Computer Science @ Georgia Tech
				</motion.p>
				{/* 75–100 word biography (collapsible) */}
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-6 max-w-3xl mx-auto"
				>
					<div className="flex justify-center">
						<motion.button
							type="button"
							onClick={() => setOpen((v) => !v)}
							aria-expanded={open}
							aria-controls="bio-panel"
							className="text-sm md:text-base px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
							transition={{ type: 'spring', stiffness: 300, damping: 20 }}
						>
							<span className="inline-flex items-center gap-2">
								{open ? 'Hide bio' : 'Read bio'}
								<motion.svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									animate={{ rotate: open ? 180 : 0 }}
									transition={{ duration: 0.25, ease: 'easeInOut' }}
									className="opacity-80"
								>
									<path d="M6 9l6 6 6-6" />
								</motion.svg>
							</span>
						</motion.button>
					</div>

					<motion.div
						id="bio-panel"
						initial={false}
						animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
						transition={{ duration: 0.4, ease: 'easeInOut' }}
						className="overflow-hidden"
					>
						<div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-5">
							<p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                Hi! I’m a <strong>4th-year Computer Science major @ Georgia Tech</strong> concentrating in <strong>Information Internetworks and People</strong>. <br />
								<br />
								I’ve interned at <strong>Meta</strong>, <strong>Amazon</strong>, and <strong>Waystar</strong>, building tools that <strong>automate workflows</strong>, <strong>cut costs</strong>, and <strong>enhanced user experiences</strong>. 
								I like turning ideas into real products—designing <strong>gesture-controlled music interfaces</strong> or shipping <strong>full-stack web apps</strong>. <br />
								<br />
								My strengths include <strong>cloud platforms</strong>, <strong>modern web frameworks</strong>, and <strong>computer vision</strong>. 
								I value <strong>collaboration</strong>, <strong>learning from others</strong>, and making an impact as a <strong>software engineer</strong> focused on <strong>technical impact</strong> and <strong>human-centered design</strong>.
                            </p>
						</div>
					</motion.div>
				</motion.div>

			</div>
			

			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
			>
				<div className="animate-bounce">
					<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</motion.div>
		</motion.section>
	);
}
