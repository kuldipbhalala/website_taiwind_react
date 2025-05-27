import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoSearchSharp, IoClose, IoChevronDown } from "react-icons/io5";
import { CgProfile, CgShoppingBag } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa6";

const Header = () => {
    const [click, setClick] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({}); // Added missing state
    const location = useLocation();
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const headerExclude = ["/Signup", "/"];

    const handleClick = () => {
        localStorage.removeItem("token");
    };

    // Added missing toggleDropdown function
    const toggleDropdown = (dropdownName) => {
        setDropdownOpen(prev => {
            const newState = { ...prev };
            // Close all other dropdowns and toggle the current one
            Object.keys(newState).forEach(key => {
                if (key !== dropdownName) {
                    newState[key] = false;
                }
            });
            newState[dropdownName] = !prev[dropdownName];
            return newState;
        });
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
        } else {
            const newPath = location.pathname === "/" ? "/home" : location.pathname;
            navigate(newPath);
        }
    }, [navigate, location.pathname]); // Added dependencies

    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [click]);

    // Added click outside handler for dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen({});
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setClick(!click);
        // Close all dropdowns when mobile menu is toggled
        setDropdownOpen({});
    };

    const closeMenu = () => {
        setClick(false);
        // Close all dropdowns when mobile menu is closed
        setDropdownOpen({});
    };

    const navigationItems = [
        {
            name: "Home",
            path: "/home"
        },

        {
            name: "About Us",
            path: "/product",
            // dropdown: [
            //     { name: "Our Story", path: "/about/story", icon: "📖" },
            //     { name: "Our Team", path: "/about/team", icon: "👥" },
            //     { name: "Careers", path: "/about/careers", icon: "💼" },
            //     { name: "Press & Media", path: "/about/press", icon: "📰" }
            // ]
        },


        {
            name: "Products",
            path: "/shop",
            dropdown: [
                {
                    name: "Necklaces",
                    path: "/jewellery/necklaces",
                    description: "Elegant & Designer Collection",
                    icon: "💎"
                },
                {
                    name: "Rings",
                    path: "/jewellery/rings",
                    description: "Wedding & Fashion Rings",
                    icon: "💍"
                },
                {
                    name: "Earrings",
                    path: "/jewellery/earrings",
                    description: "Studs, Hoops & Danglers",
                    icon: "✨"
                },
                {
                    name: "Bracelets",
                    path: "/jewellery/bracelets",
                    description: "Chain & Charm Collection",
                    icon: "🌟"
                },
                {
                    name: "Watches",
                    path: "/jewellery/watches",
                    description: "Luxury & Fashion Timepieces",
                    icon: "⌚"
                },
                {
                    name: "Jewelry Sets",
                    path: "/jewellery/sets",
                    description: "Complete Matching Sets",
                    icon: "💫"
                }
            ]
        },
        
        {
            name: "Services",
            path: "/services",
            // dropdown: [
            //     { name: "Custom Design", path: "/services/custom-design", icon: "🎨" },
            //     { name: "Consultation", path: "/services/consultation", icon: "💬" },
            //     { name: "Repair & Care", path: "/services/repair", icon: "🔧" },
            //     { name: "Gift Wrapping", path: "/services/gift", icon: "🎁" }
            // ]
        },
        {
            name: "Contact Us",
            path: "/contact"
        }
    ];

    return (
        !headerExclude.includes(location.pathname) && <>
            {/* Promotional Banner */}
            <div className="flex justify-center bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 items-center py-3 cursor-pointer relative overflow-hidden" style={{ backgroundColor: '#f5f2ed' }}>
                <div className="absolute inset-0 bg-gradient-to-r opacity-10" style={{ background: 'linear-gradient(90deg, #4b2d13, #432d12, #907353)' }}></div>
                <div className="mx-3 z-10">
                    <img src="/assets/Img/Vector.png" alt="" className="w-5 opacity-80" />
                </div>
                <div className="font-semibold me-4 z-10">
                    <p className="text-[12px] lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[10px] font-bold" style={{ color: '#4b2d13' }}>
                        30% off storewide — Limited time offer!
                    </p>
                </div>

                <button className="underline underline-offset-4 hover:opacity-80 transition-all duration-300 hidden sm:hidden md:flex items-center font-medium z-10" style={{ color: '#432d12' }}>
                    Shop Now
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>

                <div className="flex justify-end absolute right-5 z-10">
                    <button className="xs:text-[12px] lg:text-[20px] hover:scale-110 transition-transform duration-200">
                        <img src="/assets/Img/close.png" alt="" className="opacity-60 hover:opacity-100" />
                    </button>
                </div>
            </div>

            {/* Header */}
            <header>
                <div className='container mx-auto py-3 my-3'>
                    <div className='flex justify-between items-center'>
                        <div className='mx-4 md:mx-0'>
                            <h1 className='font-[500] text-[24px] cursor-pointer'>3legant.</h1>
                        </div>

                        <nav className="hidden md:flex" ref={dropdownRef}>
                            <ul className='flex justify-center items-center'>
                                {navigationItems.map((item, index) => (
                                    <li key={index} className='relative group'>
                                        {item.dropdown ? (
                                            <div className="relative">
                                                <button
                                                    onClick={() => toggleDropdown(item.name)}
                                                    className='mx-4 font-medium text-gray-700 cursor-pointer flex items-center transition-all duration-300 py-2 px-3 rounded-lg hover:bg-opacity-10 group'
                                                    style={{ color: '#4b2d13' }}
                                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#907353' + '20'}
                                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                                >
                                                    {item.name}
                                                    <IoChevronDown
                                                        className={`ml-2 transition-all duration-300 ${dropdownOpen[item.name] ? 'rotate-180' : ''
                                                            }`}
                                                        style={{ color: dropdownOpen[item.name] ? '#432d12' : '#907353' }}
                                                        size={16}
                                                    />
                                                </button>

                                                {/* Enhanced Dropdown Menu */}
                                                {dropdownOpen[item.name] && (
                                                    <div className="absolute top-full left-0 mt-2 w-full min-w-[380px] bg-white rounded-2xl shadow-2xl border overflow-hidden z-50 transform transition-all duration-300 ease-out opacity-100 scale-100" style={{ borderColor: '#907353' }}>
                                                        {/* Dropdown Header */}
                                                        <div className="px-6 py-4 border-b" style={{ backgroundColor: '#f5f2ed', borderColor: '#907353' }}>
                                                            <h3 className="text-lg font-bold flex items-center" style={{ color: '#4b2d13' }}>
                                                                {item.name === "Products" && "💎"}
                                                                {item.name === "About Us" && "🏢"}
                                                                {item.name === "Services" && "⚡"}
                                                                <span className="ml-2">{item.name}</span>
                                                            </h3>
                                                            <p className="text-sm mt-1" style={{ color: '#432d12' }}>
                                                                {item.name === "Products" && "Discover our exquisite jewelry collection"}
                                                                {item.name === "About Us" && "Learn more about our story"}
                                                                {item.name === "Services" && "Premium services for our customers"}
                                                            </p>
                                                        </div>

                                                        {/* Dropdown Items */}
                                                        <div className="py-2">
                                                            {item.dropdown.map((subItem, subIndex) => (
                                                                <NavLink
                                                                    key={subIndex}
                                                                    to={subItem.path}
                                                                    className="flex items-center px-6 py-4 text-gray-700 transition-all duration-300 group border-l-4 border-transparent hover:border-l-4"
                                                                    style={{
                                                                        color: '#4b2d13',
                                                                        '--hover-bg': '#907353' + '10',
                                                                        '--hover-border': '#432d12'
                                                                    }}
                                                                    onMouseEnter={(e) => {
                                                                        e.target.style.backgroundColor = '#907353' + '20';
                                                                        e.target.style.borderLeftColor = '#432d12';
                                                                        e.target.style.color = '#432d12';
                                                                    }}
                                                                    onMouseLeave={(e) => {
                                                                        e.target.style.backgroundColor = 'transparent';
                                                                        e.target.style.borderLeftColor = 'transparent';
                                                                        e.target.style.color = '#4b2d13';
                                                                    }}
                                                                    onClick={() => setDropdownOpen({})}
                                                                >
                                                                    <div className="flex items-center space-x-4 w-full">
                                                                        <div
                                                                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                                                                            style={{ backgroundColor: '#907353' + '20' }}
                                                                        >
                                                                            <span className="text-xl transition-colors duration-300">
                                                                                {subItem.icon || "✨"}
                                                                            </span>
                                                                        </div>
                                                                        <div className="flex-1">
                                                                            <div className="font-semibold text-base mb-1">
                                                                                {subItem.name}
                                                                            </div>
                                                                            {subItem.description && (
                                                                                <div className="text-sm opacity-75">
                                                                                    {subItem.description}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                                                            <svg className="w-5 h-5" style={{ color: '#432d12' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </NavLink>
                                                            ))}
                                                        </div>

                                                        {/* Dropdown Footer */}
                                                        {item.name === "Products" && (
                                                            <div className="px-6 py-4 border-t" style={{ backgroundColor: '#f5f2ed', borderColor: '#907353' }}>
                                                                <div className="flex items-center justify-center space-x-2 text-sm font-medium" style={{ color: '#432d12' }}>
                                                                    <span>🚚</span>
                                                                    <span>Free Shipping on Orders Above ₹2000</span>
                                                                    <span>✨</span>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Dropdown Arrow */}
                                                        <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t transform rotate-45" style={{ borderColor: '#907353' }}></div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <NavLink
                                                to={item.path}
                                                className={({ isActive }) =>
                                                    `mx-6 font-medium cursor-pointer transition-all duration-300 py-2 px-3 rounded-lg hover:bg-opacity-10 ${isActive ? "font-bold" : ""
                                                    }`
                                                }
                                                style={({ isActive }) => ({
                                                    color: isActive ? '#432d12' : '#4b2d13',
                                                    backgroundColor: isActive ? '#907353' + '20' : 'transparent'
                                                })}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#907353' + '20';
                                                    e.target.style.color = '#432d12';
                                                }}
                                                onMouseLeave={(e) => {
                                                    const isActive = e.target.getAttribute('aria-current') === 'page';
                                                    e.target.style.backgroundColor = isActive ? '#907353' + '20' : 'transparent';
                                                    e.target.style.color = isActive ? '#432d12' : '#4b2d13';
                                                }}
                                            >
                                                {item.name}
                                            </NavLink>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className='flex items-center'>
                            <IoSearchSharp className='mx-2 text-[25px] cursor-pointer hidden md:block' />
                            <NavLink to='/MyAccount'><CgProfile className='mx-3 text-[25px] cursor-pointer hidden md:block' /></NavLink>
                            <NavLink to='/Cart'><CgShoppingBag className='text-[25px] cursor-pointer hidden md:block mr-5' /></NavLink>
                            <div className='md:hidden mx-5' onClick={toggleMenu}>
                                {click ? <IoClose className='text-[25px]' /> : <GiHamburgerMenu className='text-[25px]' />}
                            </div>
                            {/* <div className='hidden md:flex justify-between my-1 mb-[8%]'>
                                <button
                                    className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none"
                                    type="button"
                                >
                                    <NavLink onClick={handleClick} to='/'>Log Out</NavLink>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {click && (
                <div className='h-[100vh] md:hidden bg-white overflow-y-auto'>
                    <div className='flex border-2 mx-5 border-[#6C7275] rounded-lg py-2 mb-5 mt-2'>
                        <IoSearchSharp className='mx-3 text-[25px]' />
                        <input type="text" placeholder='Search' className='outline-none w-full' />
                    </div>
                    <nav>
                        <ul className='z-10 md:hidden mb-[20%]'>
                            {navigationItems.map((item, index) => (
                                <li key={index} className='mx-5 my-2'>
                                    {item.dropdown ? (
                                        <div>
                                            <button
                                                onClick={() => toggleDropdown(`mobile-${item.name}`)}
                                                className='font-medium cursor-pointer flex items-center justify-between w-full py-3 px-4 rounded-xl transition-all duration-200 border border-transparent hover:bg-opacity-20'
                                                style={{
                                                    color: '#4b2d13',
                                                    backgroundColor: dropdownOpen[`mobile-${item.name}`] ? '#907353' + '20' : 'transparent',
                                                    borderColor: dropdownOpen[`mobile-${item.name}`] ? '#907353' : 'transparent'
                                                }}
                                            >
                                                <span className="flex items-center">
                                                    {item.name === "Products" && "💎"}
                                                    {item.name === "About Us" && "🏢"}
                                                    {item.name === "Services" && "⚡"}
                                                    <span className="ml-2">{item.name}</span>
                                                </span>
                                                <IoChevronDown
                                                    className={`transition-transform duration-300 ${dropdownOpen[`mobile-${item.name}`] ? 'rotate-180' : ''
                                                        }`}
                                                    style={{ color: dropdownOpen[`mobile-${item.name}`] ? '#432d12' : '#907353' }}
                                                />
                                            </button>

                                            {/* Mobile Dropdown Content */}
                                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropdownOpen[`mobile-${item.name}`] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                                }`}>
                                                <div className="mt-2 ml-4 border-l-2 pl-4 space-y-2" style={{ borderColor: '#907353' }}>
                                                    {item.dropdown.map((subItem, subIndex) => (
                                                        <NavLink
                                                            key={subIndex}
                                                            to={subItem.path}
                                                            onClick={closeMenu}
                                                            className="flex items-center py-3 px-3 rounded-lg transition-all duration-200 group"
                                                            style={{ color: '#6C7275' }}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.backgroundColor = '#907353' + '15';
                                                                e.target.style.color = '#432d12';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.backgroundColor = 'transparent';
                                                                e.target.style.color = '#6C7275';
                                                            }}
                                                        >
                                                            <div className="flex items-center space-x-3 w-full">
                                                                <div
                                                                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                                                                    style={{ backgroundColor: '#907353' + '20' }}
                                                                >
                                                                    <span className="text-sm">
                                                                        {subItem.icon || "✨"}
                                                                    </span>
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="font-medium text-sm">
                                                                        {subItem.name}
                                                                    </div>
                                                                    {subItem.description && (
                                                                        <div className="text-xs opacity-70 mt-1">
                                                                            {subItem.description}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                                                    <svg className="w-4 h-4" style={{ color: '#432d12' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    ))}

                                                    {/* Mobile Dropdown Footer */}
                                                    {item.name === "Products" && (
                                                        <div className="px-3 py-3 mt-3 rounded-lg" style={{ backgroundColor: '#f5f2ed' }}>
                                                            <div className="flex items-center justify-center space-x-2 text-xs font-medium" style={{ color: '#432d12' }}>
                                                                <span>🚚</span>
                                                                <span>Free Shipping on Orders Above ₹2000</span>
                                                                <span>✨</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <NavLink
                                            to={item.path}
                                            onClick={closeMenu}
                                            className={({ isActive }) =>
                                                `font-[400] text-[#6C7275] block py-3 px-4 rounded-lg transition-all duration-200 ${isActive ? "font-bold" : ""
                                                }`
                                            }
                                            style={({ isActive }) => ({
                                                color: isActive ? '#432d12' : '#6C7275',
                                                backgroundColor: isActive ? '#907353' + '20' : 'transparent'
                                            })}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = '#907353' + '20';
                                                e.target.style.color = '#432d12';
                                            }}
                                            onMouseLeave={(e) => {
                                                const isActive = e.target.getAttribute('aria-current') === 'page';
                                                e.target.style.backgroundColor = isActive ? '#907353' + '20' : 'transparent';
                                                e.target.style.color = isActive ? '#432d12' : '#6C7275';
                                            }}
                                        >
                                            {item.name}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className='mx-5'>
                        <div className='flex justify-between'>
                            <p className='text-[18px] font-[500] text-[#6C7275]'>Cart</p>
                            <NavLink to='/Cart' onClick={closeMenu}><CgShoppingBag className='text-[25px]' /></NavLink>
                        </div>
                        <div className='flex justify-between my-1 mb-[8%]'>
                            <p className='text-[18px] font-[500] my-2 text-[#6C7275]'>Wishlist</p>
                            <NavLink to='/Cart' onClick={closeMenu}><FaRegHeart className='text-[25px] my-2' /></NavLink>
                        </div>
                        {/* <div className='flex justify-between my-1 mb-[8%]'>
                            <button className="bg-black text-white font-bold py-2 px-4 rounded w-full" onClick={() => { handleClick(); closeMenu(); }}>
                                <NavLink to='/'>Log Out</NavLink>
                            </button>
                        </div> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;