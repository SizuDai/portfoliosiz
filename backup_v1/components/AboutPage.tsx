import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from './About';

const AboutPage: React.FC = () => {
    return (
        <main className="bg-dark min-h-screen">
            <Helmet>
                <title>About Me | Sizzler Fx</title>
                <meta name="description" content="Learn more about Sizan Smith Lamichhane, a Motion Graphics Designer utilizing AI Agentic Workflows." />
                <link rel="canonical" href="https://sizan-lamichhane.vercel.app/about" />
            </Helmet>
            {/* Reuse the existing About section component which is already well-styled */}
            <About />
        </main>
    )
}

export default AboutPage;
