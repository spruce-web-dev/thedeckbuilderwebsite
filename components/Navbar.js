class SiteNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <!-- Navigation -->
                <nav class="nav">
                    <div class="nav-inner">
                        <a href="./index.html" class="logo">
                            <img src="./images/logo.webp" alt="The Deck Builder">
                        </a>
                        <div class="nav-links">
                            <div class="dropdown">
                                <a href="#services">Services</a>
                                <div class="dropdown-content">
                                    <a href="/custom-decks.html">Custom Decks</a>
                                    <a href="./pergolas-covered-patios.html">Pergolas &amp; Covered Patios</a>
                                    <a href="#services">Outdoor Kitchens &amp; Firepits</a>
                                    <a href="./stamped-concrete-services.html">Stamped Concrete Services</a>
                                </div>
                            </div>
                            <a href="#gallery">Gallery</a>
                            <a href="#areas">Areas We Serve</a>
                            <a href="#about">About Us</a>
                            <div class="nav-phone">
                                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <a href="tel:+13039488821">303-948-8821</a>
                            </div>
                            <a href="#contact" class="btn-primary" style="color: var(--bg);">Contact Us</a>
                        </div>
                        <button id="menuBtn" class="mobile-menu-btn" aria-label="Open menu">
                            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>

                <!-- Mobile Menu -->
                <div id="mobileMenu" class="mobile-menu">
                    <button id="closeMenuBtn" class="mobile-menu-close" aria-label="Close menu">
                        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <nav>
                        <a href="#services">Services</a>
                        <a href="./custom-decks.html">Custom Decks</a>
                        <a href="./pergolas-covered-patios.html">Pergolas &amp; Covered Patios</a>
                        <a href="#services">Outdoor Kitchens &amp; Firepits</a>
                        <a href="./stamped-concrete-services.html">Stamped Concrete Services</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#process">Process</a>
                        <a href="#testimonials">Reviews</a>
                        <a href="#areas">Areas We Serve</a>
                        <a href="#about">About Us</a>
                        <a href="#contact" class="btn-primary" style="margin-top:1rem; text-align: center;">Contact Us</a>
                    </nav>
                </div>
            </div>
        `;
    }
}

customElements.define("site-navbar", SiteNavbar);
