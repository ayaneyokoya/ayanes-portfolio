'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 }
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
} as const;

export default function ResumeSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
      <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
        >
            Résumé
        </motion.h2>
      {/* Actions */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        className="mt-6 flex flex-wrap items-center gap-3 justify-center"
      >
        
        <motion.a
          variants={itemVariants}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          View PDF
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="/resume.pdf"
          download
          className="text-sm px-4 py-2 border border-white/20 hover:bg-white/10 rounded-full transition-colors"
        >
          Download
        </motion.a>
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        className="mt-8 w-full max-w-5xl mx-auto border border-white/10 rounded-xl overflow-hidden bg-white/5"
      >
        <iframe
          src="/resume.pdf#view=FitH"
          title="Resume PDF Preview"
          className="w-full h-[100vh]"
        />
      </motion.div>
    </section>
  );
}