import React from "react";

const PrivacyPolicy: React.FC = () => {
    return (
        <section className="container mx-auto px-6 py-20 text-zinc-300 font-syne">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Privacy Policy
            </h1>
            <div className="prose prose-invert max-w-4xl text-zinc-400 font-inter leading-relaxed space-y-6">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-2xl font-bold text-white mt-8">Introduction</h2>
                <p>
                    At Sizan Smith Lamichhane's Portfolio, accessible from
                    https://sizan-lamichhane.vercel.app/, one of our main priorities is
                    the privacy of our visitors. This Privacy Policy document contains
                    types of information that is collected and recorded by us and how we
                    use it.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">
                    Google AdSense & DoubleClick Cookie
                </h2>
                <p>
                    Google, as a third-party vendor, uses cookies to serve ads on our
                    Service. Google's use of the DART cookie enables it to serve ads to
                    our users based on their visit to our site and other sites on the
                    Internet. Users may opt-out of the use of the DART cookie by visiting
                    the Google ad and content network privacy policy at the following URL:{" "}
                    <a
                        href="https://policies.google.com/technologies/ads"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand hover:underline"
                    >
                        https://policies.google.com/technologies/ads
                    </a>
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">
                    Cookies and Web Beacons
                </h2>
                <p>
                    Like any other website, we use "cookies". These cookies are used to store
                    information including visitors' preferences, and the pages on the
                    website that the visitor accessed or visited. The information is used
                    to optimize the users' experience by customizing our web page content
                    based on visitors' browser type and/or other information.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">Privacy Policies</h2>
                <p>
                    You may consult this list to find the Privacy Policy for each of the
                    advertising partners of Sizan Smith Lamichhane's Portfolio.
                </p>
                <p>
                    Third-party ad servers or ad networks use technologies like cookies,
                    JavaScript, or Web Beacons that are used in their respective
                    advertisements and links that appear on this website, which are sent
                    directly to users' browser. They automatically receive your IP address
                    when this occurs. These technologies are used to measure the
                    effectiveness of their advertising campaigns and/or to personalize the
                    advertising content that you see on websites that you visit.
                </p>
                <p>
                    Note that we have no access to or control over these cookies that are
                    used by third-party advertisers.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">
                    Third Party Privacy Policies
                </h2>
                <p>
                    Our Privacy Policy does not apply to other advertisers or websites.
                    Thus, we are advising you to consult the respective Privacy Policies
                    of these third-party ad servers for more detailed information. It may
                    include their practices and instructions about how to opt-out of
                    certain options.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8">Consent</h2>
                <p>
                    By using our website, you hereby consent to our Privacy Policy and
                    agree to its Terms and Conditions.
                </p>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
