import React from "react";
import "./Style.css";


function Footer() {
    return (
        <footer>
            <span className="intro"> Extra info about Rick & Morty</span>
            <span className="link1">
                <a href=" https://www.youtube.com/watch?v=jbofkcVpp5I" target = "_blank" rel="noreferrer">
                    First Episode
                </a>
            </span> 
            <span className="link2">   
                <a href= "https://www.behindthevoiceactors.com/tv-shows/Rick-and-Morty/" target = "_blank" rel="noreferrer">
                    Real Voices
                </a>
            </span>
        </footer>
    )
}

export default Footer;