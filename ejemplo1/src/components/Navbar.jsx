import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import { Darkmode } from "./Darkmode";

import "../Assets/navbar.css"

export const Navbar = () =>{

const navRef = useRef();

const showNavbar = () =>{
    navRef.current.classList.toggle("move_nav");
}

    return (
        <div>
            <header>
                <div>
                    <a><img src="#"></img></a>
                </div>

                <nav ref={navRef}>
                    <a href="/">Inicio</a>
                    <a href="/componente2">Next Component</a>
                    <a href="#">About us</a>
                    <a href="#">Login</a>
                <Darkmode></Darkmode>
                <button className="nava close" onClick={showNavbar}>
        <FaTimes/>

                </button>
                </nav>

                <button className="nava" onClick={showNavbar}>
                <FaBars></FaBars>

                </button>
            </header>
        </div>
    )
}