import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-12 lg:px-22">
                {/* Logo - centered on mobile, left on desktop */}
                <div className="flex flex-1 justify-center md:justify-start">
                    <a href="/" className="flex items-center">
                        {/* Replace with your actual logo (white version not needed here, use colored one) */}
                        <img
                            src="/logo.png"
                            alt="PolicySelect Logo"
                            width={250}
                            height={60}
                            className="object-contain"
                        />
                    </a>
                </div>
                {/* Right side - Log In button */}
                <div className="flex items-center">
                    <a
                        href="/login"
                        className={`
              group flex items-center justify-center gap-2 
              rounded-full border-2 border-[#8F49AA] 
              bg-transparent px-5 py-2.5 
              text-sm font-semibold tracking-wide 
              text-[#8F49AA] transition-all duration-300
              hover:bg-[#8F49AA] hover:text-white
              focus:outline-none focus:ring-2 focus:ring-[#8F49AA]/40
              active:scale-95
              md:px-6 md:py-3 md:text-base
            `}
                    >
                        Log In
                        {/* Optional user/profile icon (visible on desktop) */}
                        <FaRegCircleUser className="hidden md:block opacity-90 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;