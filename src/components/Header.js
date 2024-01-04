import './css/Header.css';
import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { CgSearch } from "react-icons/cg";
import clsx from 'clsx';

export default function Header() {
    document.addEventListener('scroll', () => {
        const header = document.querySelector('nav');
        if(window.scrollY > 0){
            header.classList.add('scrolled');
        } else{
            header.classList.remove('scrolled');
        }
    })
    const[isSideMenuOpen, setMenu] = useState(false);
    const navLinks = [
        {
            label: "Trending",
            link: "#"
        },
        {
            label: "Technology",
            link: "#"
        },
        {
            label: "Games",
            link: "#"
        }
        ,{
            label: "Contact",
            link: "/contact"
        }
    ];
    const moreLinks = [
        {
            label: "Support",
            link: "#"
        },
        ,{
            label: "Portfolio",
            link: "#"
        }
    ];
    const socialLinks = [
        {
            label: "Instagram",
            link: "#"
        },
        {
            label: "Twitter",
            link: "#"
        },
        {
            label: "Pinterest",
            link: "#"
        },
        {
            label: "Email",
            link: "mailto:shivshank019@gmail.com"
        }
    ];
  return (
    <>
        <nav className="flex justify-between items-center">
            <section className="flex item-center gap-3">
                {/* logo */}
                <a id="logo" href="/" className="text-3xl font-mono font-semibold">
                    <span>sedbuzz</span>
                </a>
            </section>
            {/* mobile menu */}
            <div className={clsx("fixed h-full w-screen lg:hidden top-0 right-0 translate-x-full transform duration-500", isSideMenuOpen && "-translate-x-0 transform duration-500")}>
                <section id="side-nav" className={clsx("text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 z-5 flex items-end", isSideMenuOpen && "shadow-xl")}>
                        <IoClose onClick={() => setMenu(false)} className="mt-0 mb-8 text-3xl cursor-pointer"/>
                        <h2>NAVIGATE</h2>
                        {navLinks.map((d, i) => (
                            <Link id="side-nav-items" key={i} onClick={() => setMenu(false)} className="text-4xl font-base hover:italic" to={d.link}>
                                <span id="nav_item_text">{d.label}</span>
                            </Link>
                        ))}
                        <br/>
                        <h2>MORE</h2>
                        {moreLinks.map((d, i) => (
                            <a id="more-nav-items" key={i} onClick={() => setMenu(false)} className="text-xl font-base hover:italic" href={d.link}>
                                {d.label}
                            </a>
                        ))}
                        <br/>
                        <h2>CONNECT</h2>
                        {socialLinks.map((d, i) => (
                            <a id="social-nav-items" key={i} className="text-xl font-base hover:italic" href={d.link}>
                                {d.label}
                            </a>
                        ))}
                </section>
            </div>
            <div className="flex item-center gap-8">
                {/* menu */}
                {navLinks.map((d, i) => (
                    <Link key={i} id="nav-links" className="hidden lg:block text-grey-400 hover:text-black" to={d.link}>
                        <span id="nav_item_text">{d.label}</span>
                    </Link>
                ))}
                <section className="flex item-center gap-6">
                    <CgSearch className="text-2xl cursor-pointer" id="search"/>
                    <CgMenuLeft onClick={() => setMenu(true)} className="text-2xl cursor-pointer lg:hidden" id="menu-toggler"/>
                </section>
            </div>
        </nav>
        <Outlet />
    </>
  )
}