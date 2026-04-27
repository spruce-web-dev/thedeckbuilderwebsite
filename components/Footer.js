class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="footer-grid">
                        <div>
                            <div class="footer-brand">
                                <img src="./images/logo-light.webp">
                            </div>
                            <p>Quality deck building and outdoor living construction since 1992. Licensed and insured.</p>
                        </div>
                        <div>
                            <h4>Services</h4>
                            <ul>
                                <li><a href="./custom-decks.html">Wood Decks</a></li>
                                <li><a href="./custom-decks.html">Composite Decks</a></li>
                                <li><a href="./outdoor-kitchens-firepits.html">Outdoor Kitchens & Firepits</a></li>
                                <li><a href="./pergolas-covered-patios.html">Pergolas & Covered Patios</a></li>
                                <li><a href="./stamped-concrete-services.html">Stamped Concrete Services</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Company</h4>
                            <ul>
                                <li><a href="./index.html#gallery">Our Work</a></li>
                                <li><a href="./index.html#testimonials">Reviews</a></li>
                                <li><a href="./about.html">About</a></li>
                                <li><a href="./index.html#areas">Areas We Serve</a></li>
                                <li><a href="./contact-us.html">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Contact</h4>
                            <ul>
                                <li>(303) 948-8821</li>
                                <li>Richard@DeckBuilderofCO.com</li>
                                <li>Mon – Fri: 7am – 7pm</li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>2026 The Deck Builder. All rights reserved.</p>
                        <div class="social-links">
                            <a href="https://www.facebook.com/deckbuilderofco" aria-label="Facebook"><svg fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg></a>
                            <a href="https://www.instagram.com/deckbuilderofco/" aria-label="Instagram">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4z"/>
                                    <circle cx="12" cy="12" r="3.2"/>
                                    <circle cx="17.2" cy="6.8" r="1.2"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define("site-footer", SiteFooter);
