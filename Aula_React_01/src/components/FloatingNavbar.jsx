import React, { useState, useEffect } from 'react';
import { Menu, X, ChevroDown } from 'lucide-react';


const FloatingNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
    { label: 'Inicio', href: '#home'},
    {
        label: 'Produtos',
        href: '#products',
        dropdown: [
        { label: 'Software', href: '#Software'},
        { label: 'Hardware', href: '#Hardware'},
        { label: 'Consultoria', href: '#Consulting'},
        ]
    },
    { label: 'Sobre', href: '#about'},
    { label: 'Blog', href: '#blog'},
    { label: 'Contato', href: '#contact'},
    ];

    const handleDropdownToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };


    return (
    <>
        <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl border border-gray-200/50'
        : 'bg-white/70 backdrop-blur-md shadow-lg border border-gray-100/30'
        } rounded-full px-6 py-3 w-[95%] max-w-6xl`}>

        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
            <span className='text-white font-bold text-sm'>L</span>
            </div>
            <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Logo
            </span>
        </div>

        <div className='hidden md:flex items-center space-x-1'>
            {menuItems.map((item, index) => (
                <div
                className='flex items-center space-x-1 px-4 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer'
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >

                    <span className='font-medium'>{item.label}</span>
                    {item.dropdown && (
                        <ChevroDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                    )}
                </div>
            ))}

        </div>

        </nav>
    </>
    )
}


