import { useState, useEffect } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsShown(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full md:max-w-2lg text-[#000] top-0 fixed  z-10 bg-white]">
            <div className="flex justify-between items-center px-[1rem] md:pr-[3rem] md:pl-[3rem] pt-[10px] pb-[10px]">    
                {isShown && (            
                    <a href="/">
                        <img  src="/src/assets/logo.svg" className="hidden md:block md:w-[150px] md:h-[100px] md:px-5 " alt="Logo" />
                    </a>
                )}
                <a href="/">
                    <img  src="/src/assets/logo.svg" className="md:hidden w-[150px] h-[100px] px-5 " alt="Logo" />
                </a>
                <div className="px-5 w-[150px] h-[100px] "></div>
                <nav>
                    {/* Desktop Navigation Links */ }
                    <ul className="hidden md:flex space-x-4 mr-[60px] my-[20px]">                
                        <li><a href="#releases" className="text-[16px] text-[#000] uppercase font-semibold pr-2 hover:underline">releases</a></li>
                        <li><a href="#contact" className="text-[16px] text-[#000] uppercase font-semibold pr-2 hover:underline">contact</a></li>
                    </ul>

                    {/* Mobile Menu Button */ }
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation Links */ }
                    {isOpen && (
                        <ul className="md:hidden absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg ">
                            <li>
                                <a onClick={() => setIsOpen(false)} href="#releases" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Releases</a>
                            </li>
                            <li>
                                <a onClick={() => setIsOpen(false)} href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact</a>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
}