import { Link } from "react-router-dom"
import React from "react";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="main-navbar">
            <nav id="home-nav-bar">

                <ul className="nav-list">

                    <li> <Link to="/characters"> List Of Characters </Link> </li>
                    <li> <Link to="/featured-episodes"> Featured Episodes </Link> </li>
                    <li> <Link to="/gallery"> Gallery </Link> </li>
                    <li> <Link to="/news"> News </Link> </li>

                </ul>
            </nav>
        </div >
    )


}

export default NavBar;

