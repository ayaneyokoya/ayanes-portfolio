'use client';

import NavTabs from './components/NavTabs';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ResumeSection from './components/ResumeSection';
import ExperienceSection from './components/ExperienceSection';

export default function MinimalModernPortfolio() {
    return (
        <div className="min-h-screen bg-black text-white">
            <NavTabs />

            {/* each wrapper must have an id that matches NavTabs.SECTIONS */}
            <div id="hero" className="scroll-mt-24">
                <HeroSection />
            </div>

			<div id="experience" className="scroll-mt-24">
                <ExperienceSection />
            </div>

            <div id="projects" className="scroll-mt-24">
                <ProjectsSection />
            </div>

			<div id="skills" className="scroll-mt-24">
                <SkillsSection />
            </div>

            <div id="resume" className="scroll-mt-24">
                <ResumeSection />
            </div>

            <div id="contact" className="scroll-mt-24">
                <ContactSection />
            </div>
        </div>
    );
}
