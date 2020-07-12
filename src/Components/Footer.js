import React from 'react'

import "../styles/footer.css"

function Footer() {
    return (
        <div id="footer-container">
            <div className="footer-content">

                <div className="footer-section-about">
                    <h2 className="logo-text"><span>&copy; Nem</span>Udvikler</h2>
                    <p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <div className="contact">
                        <span><i className="fa fa-address-book" aria-hidden="true"> &nbsp; hello@nemudvikler.com</i></span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>

                <div className="footer-section-links">
                    <h2>Links</h2>
                    <br/>
                        <a href="#">
                            Forside
                        </a>
                        <a href="#">
                            Guides
                        </a>
                        <a href="#">
                            Kurser
                        </a>
                        <a href="#">
                            Opdag
                        </a>
                        <a href="#">
                            Community
                        </a>
                        <a href="#">
                            Privat-Politik
                        </a>
                        <a href="#">
                            Roadmap
                        </a>
                        <a href="#">
                            Kontakt
                        </a>
                </div>
                
                <div className="footer-section-contact-form">
                    <h2>Kontakt</h2>
                    <br/>
                    <form action="index.html" method="post">
                        <input type="email" name="email" className="text-input-contact" placeholder="E-mail.."/>
                        <textarea className="text-input-contact" name="message" placeholder="Besked"></textarea>
                        <button type="submit" className="submit-contact"><i className="fa fa-envelope"></i> Send</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; nemudvikler.dk | Asger Thistrup Kiehn
            </div>
        </div>
    )
}

export default Footer