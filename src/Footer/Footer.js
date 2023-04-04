import React from "react";
import "./Footer.css"


function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Rick and Morty Extras</h4>
                        <ui className="list-unstyled">
                                <li><a href=" https://www.youtube.com/watch?v=jbofkcVpp5I" target="_blank" rel="noreferrer">
                                    First Episode
                                </a></li>
                                <li><a href="https://www.behindthevoiceactors.com/tv-shows/Rick-and-Morty/" target="_blank" rel="noreferrer">
                                    Real Voices
                                </a></li>
                                <li><a href="https://www.mentalfloss.com/article/501995/12-fascinating-facts-about-rick-and-morty" target="_blank" rel="noreferrer">
                                    Funny Facts
                                </a></li>
                            </ui>
                    </div>
                    <div className="col">
                        <h4>Social Media</h4>
                        <ui className="list-unstyled">
                            <li><a href="https://www.instagram.com/rickandmorty/" target="_blank" rel="noreferrer">
                                Instagram
                            </a></li>
                            <li><a href="https://twitter.com/RickandMorty" target="_blank" rel="noreferrer">
                                Twitter
                            </a></li>
                        </ui>
                    </div>
                    <div className="col">
                        <h4>Developers</h4>
                        <ui className="list-unstyled">
                            <li><a href="https://github.com/lucaspadueli" target="_blank" rel="noreferrer">
                                Lucas Padueli
                            </a></li>
                            <li><a href="https://github.com/AndreLimaPoli" target="_blank" rel="noreferrer">
                                Andre Poli
                            </a></li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Cohort 97 WDPT - SP/BRAZIL | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;