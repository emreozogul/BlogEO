"use client"

import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";



const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (

        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href="/"><Logo /></Link>
            </div>
            <div className="flex-none px-4">
                <ul className="menu menu-horizontal px-4">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>
                                Parent
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
                <ThemeSwitcher />


            </div>
        </div>


    );
};

export default Navbar;