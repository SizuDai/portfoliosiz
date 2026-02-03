import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
    title = "Sizan Smith | Motion Graphics Designer",
    description = "Portfolio of Sizan Smith Lamichhane, a Principal Motion Designer specializing in interaction design, 3D motion, and visual storytelling.",
    image = "https://sizan-lamichhane.vercel.app/og-image.jpg", // Default OG image
    url = "https://sizan-lamichhane.vercel.app/",
    type = "website",
    schema
}) => {
    const siteTitle = title === "Sizan Smith | Motion Graphics Designer" ? title : `${title} | Sizan Smith`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
