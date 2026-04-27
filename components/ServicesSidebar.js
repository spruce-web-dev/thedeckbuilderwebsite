class ServicesSidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <aside class="sp-sidebar">
                <div class="sb-widget">
                    <div class="sb-widget-title">Our Services</div>
                    <ul class="sb-tree">
                        <li>
                            <a href="./custom-decks.html" style="font-weight:600;color:var(--fg);"> Custom Decks</a>
                            <ul class="sub">
                                <li>
                                    <a href="./composite-decks.html" class="sb-deck-link" data-service="composite-decks">
                                        Composite Decks <i class="fas fa-chevron-right"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="./wood-decks.html" class="sb-deck-link" data-service="wood-decks">
                                        Wood Decks <i class="fas fa-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="./pergolas-covered-patios.html" style="font-weight:600;color:var(--fg);">
                                Pergolas &amp; Covered Patios <i class="fas fa-chevron-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="./outdoor-kitchens-firepits.html" style="font-weight:600;color:var(--fg);">
                                Outdoor Kitchens &amp; Firepits <i class="fas fa-chevron-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="./stamped-concrete-services.html" style="font-weight:600;color:var(--fg);">
                                Stamped Concrete <i class="fas fa-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="sb-cta">
                    <h3>Ready to Start?</h3>
                    <p>Free on-site quote · No obligation</p>
                    <a href="#contact" class="sb-cta-btn">Get a Free Quote</a>
                    <a href="tel:+13039488821" class="sb-cta-phone" onclick="return gtag_report_phone_conversion('tel:+13039488821');"><i class="fas fa-phone"></i> 303-948-8821</a>
                </div>
            </aside>
        `;
    }
}

customElements.define("services-sidebar", ServicesSidebar);





