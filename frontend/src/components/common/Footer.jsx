
const Footer = () => {
    // Navigation links data - easy to update or fetch later
    const aboutLinks = [
        { label: 'Our Mission', href: '/about#mission' },
        { label: 'Company History', href: '/about#history' },
        { label: 'Our Partners', href: '/about#partners' },
        { label: 'Our Process', href: '/about#process' },
        { label: 'Investor Relations', href: 'https://investors.policyselect.com' },
        { label: 'Newsroom', href: '/newsroom' },
        { label: 'Customer Reviews', href: '/reviews' },
    ];

    const supportLinks = [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Terms and Conditions', href: '/terms-conditions' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Licensing', href: '/licensing' },
        { label: 'Editorial Review Process', href: '/editorial-review' },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#442364] text-white">
            {/* Main content section */}
            <div className="flex flex-col border-b-4 border-[#8F49AA] px-4 pt-6 pb-10 text-sm md:px-10 md:pt-8 lg:flex-row lg:items-start lg:space-x-8">
                {/* Left - Navigation columns */}
                <div className="flex flex-col md:flex-row md:space-x-10 lg:space-x-12 w-full">
                    {/* About PolicySelect */}
                    <nav className="flex flex-col space-y-3 md:w-56 lg:w-64">
                        <p className="border-b border-[#8F49AA]/70 pb-3 font-semibold text-base">
                            About PolicySelect
                        </p>
                        {aboutLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="hover:underline hover:underline-offset-4 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Support */}
                    <nav className="flex flex-col space-y-3 md:w-56 lg:w-64 mt-8 md:mt-0">
                        <p className="border-b border-[#8F49AA]/70 pb-3 font-semibold text-base">
                            Support
                        </p>
                        {supportLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="hover:underline hover:underline-offset-4 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Disclaimer section */}
                <div>
                    <p className="border-b border-[#8F49AA]/70 pb-3 font-semibold text-base">
                        PolicySelect Disclaimer
                    </p>
                    <p className="my-4 text-xs leading-relaxed">
                        We do not offer every plan available in your area. Please contact{' '}
                        <a
                            href="https://www.medicare.gov/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-[#8F49AA] transition"
                        >
                            Medicare.gov
                        </a>
                        , 1-800-MEDICARE, or your local State Health Insurance Program for complete information on all your options.
                    </p>
                    <p className="my-4 text-xs leading-relaxed">
                        PolicySelect, LLC. All rights reserved. PolicySelect is not affiliated with or endorsed by any government entity. This is an advertisement for insurance products. Not all carriers or plans are available in all areas. Plans vary by state and region. Limitations, exclusions, and terms may apply. Plans may be insured by organizations with a Medicare contract and/or Medicare-approved Part D sponsor. Enrollment may be limited to specific periods unless you qualify for a Special Enrollment Period or Initial Enrollment Period. Enrollment depends on contract renewal.
                    </p>
                    {/* Add SSBCI or other disclaimers if needed */}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col items-start justify-between space-y-6 px-4 py-6 md:flex-row md:items-center md:space-y-0 md:px-10">
                <div className="flex flex-col space-y-2">
                    {/* Replace with your actual white logo */}
                    <img
                        src="/logo2.jpeg"
                        alt="PolicySelect Logo"
                        width={140}
                        height={28}
                        className="object-contain"
                    />
                    <p className="text-xs opacity-90">
                        Copyright © {currentYear} PolicySelect. All Rights Reserved
                    </p>
                </div>

                <div className="flex flex-col items-start text-xs md:items-end opacity-90">
                    <p>Your License / Plan ID Here</p>
                    <p>Last Updated Date: March 15, 2026</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;