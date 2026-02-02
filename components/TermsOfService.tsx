import React from "react";
import { Helmet } from "react-helmet-async";

const TermsOfService: React.FC = () => {
    return (
        <section className="container mx-auto px-6 py-20 text-zinc-300 font-syne">
            <Helmet>
                <title>Terms of Service | Sizzler Fx</title>
                <meta name="description" content="Terms of Service for Sizan Smith Lamichhane (Sizzler Fx). Read our terms and conditions for using this website." />
                <link rel="canonical" href="https://sizan-lamichhane.vercel.app/terms-of-service" />
            </Helmet>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Terms of Service
            </h1>
            <div className="prose prose-invert max-w-4xl text-zinc-400 font-inter leading-relaxed space-y-6">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-2xl font-bold text-white mt-8">1. Acceptance of Terms</h2>
                <p>
                    By accessing and using the website of Sizan Smith Lamichhane (Sizzler Fx),
                    you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">2. Intellectual Property</h2>
                <p>
                    The content, organization, graphics, design, compilation, magnetic translation,
                    digital conversion and other matters related to the Site are protected under
                    applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.
                    The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">3. Use of Content</h2>
                <p>
                    The tutorials, code snippets (including After Effects expressions), and resources provided on this site are for educational purposes.
                    You may use the code snippets in your personal or commercial projects, but you may not republish the tutorials or textual content
                    without explicit permission.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">4. Disclaimer</h2>
                <p>
                    The materials on Sizzler Fx's website are provided "as is". Sizzler Fx makes no warranties, expressed or implied,
                    and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability,
                    fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">5. Limitations</h2>
                <p>
                    In no event shall Sizzler Fx or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
                    or due to business interruption) arising out of the use or inability to use the materials on Sizzler Fx's website.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">6. Governing Law</h2>
                <p>
                    Any claim relating to Sizzler Fx's website shall be governed by the laws of Nepal without regard to its conflict of law provisions.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">7. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these terms at any time. You should check this page regularly. Your continued use of the Site
                    following any changes to these terms will constitute your acceptance of such changes.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">Contact</h2>
                <p>
                    If you have any questions about these Terms, you can contact me via the contact form on the home page.
                </p>
            </div>
        </section>
    );
};

export default TermsOfService;
