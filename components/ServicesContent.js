class ServicesContent extends HTMLElement {
    connectedCallback() {
        const galleryName = this.getAttribute("gallery-name");
        const gallerySubtitle = this.getAttribute("gallery-subtitle");

        this.innerHTML = `
            <!-- PROCESS -->
            <div class="sp-process" id="process">
                <div class="container">
                    <div class="sp-process-header">
                        <div class="eyebrow">How it works</div>
                        <h2>Here's How it Works</h2>
                        <p>Every home is a canvas. Here's our simple process to build your dream deck.</p>
                    </div>
                    <div class="process-step-row">
                        <div class="ps-number">1</div>
                        <div class="ps-body">
                            <h3>Contact</h3>
                            <p>
                                Call, text, or email us to schedule a free estimate.
                            </p>
                        </div>
                    </div>
                    <div class="process-step-row">
                        <div class="ps-number">2</div>
                        <div class="ps-body">
                            <h3>Meet & Plan</h3>
                            <p>
                                We meet at your home to discuss your new deck and determine the best materials and style for your budget.
                            </p>
                        </div>
                    </div>
                    <div class="process-step-row">
                        <div class="ps-number">3</div>
                        <div class="ps-body">
                            <h3>Final Quote & Agreement</h3>
                            <p>
                                We send you the project cost based on our discussion.
                            </p>
                        </div>
                    </div>
                    <div class="process-step-row">
                        <div class="ps-number">4</div>
                        <div class="ps-body">
                            <h3>Build</h3>
                            <p>
                                Once we receive HOA approval, we demolish and remove old decks if needed and build your new deck.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MID CTA -->
            <div class="mid-cta">
                <div class="container">
                    <h2>Ready to Transform Your Backyard?</h2>
                    <p>
                        Let’s work together to design a space that matches your vision and adds value to your home.
                    </p>
                    <a href="#contact" class="btn-white"><i class="fas fa-calendar-check"></i> Get a Free Quote</a>
                </div>
            </div>

            <!-- Gallery -->
            <section id="gallery" class="section bg-white">
                <div class="container">
                    <div class="section-header">
                        <p>Our Work</p>
                        <h2 id="services-gallery-name">Pergola Project Gallery</h2>
                        <p id="services-gallery-subtitle"></p>
                    </div>
                    <div id="galleryGrid" class="gallery-grid"></div>
                    <div class="gallery-load-more">
                        <button id="loadMoreBtn" class="btn-primary" onclick="renderMoreGallery()" style="display:none;">Load More</button>
                    </div>
                </div>
            </section>

            <testimonial-section></testimonial-section>

            <!-- Contact -->
            <section id="contact" class="section section-pattern">
                <div class="container">
                    <div class="contact-grid">
                        <div>
                            <p style="color:var(--accent);font-weight:600;margin-bottom:.5rem;">Get In Touch</p>
                            <h2 class="contact-info">Request Your Free Quote</h2><br>
                            <p class="text-muted" style="font-size:1.125rem;margin-bottom:2rem;">Ready to upgrade your outdoor
                                space? Fill out the form and we'll get back to you within 24 hours with a preliminary estimate.
                            </p>
                            <div class="contact-item">
                                <div class="icon-box"><svg fill="none" stroke="currentColor" stroke-width="1.5"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg></div>
                                <div>
                                    <p class="label">Phone</p><a href="tel:+13039488821">(303) 948-8821</a>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="icon-box"><svg fill="none" stroke="currentColor" stroke-width="1.5"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg></div>
                                <div>
                                    <p class="label">Email</p><a
                                        href="mailto:Richard@DeckBuilderofCO.com">Richard@DeckBuilderofCO.com</a>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="icon-box"><svg fill="none" stroke="currentColor" stroke-width="1.5"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg></div>
                                <div>
                                    <p class="label">Service Area</p>
                                    <p>Denver metro &amp; surrounding counties</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form id="quoteForm" class="quote-form">
                                <div class="form-row">
                                    <div class="form-group"><label for="name">Name</label><input type="text" id="name"
                                            name="name" class="form-input" placeholder="Your name" required></div>
                                    <div class="form-group"><label for="phone">Phone</label><input type="tel" id="phone"
                                            name="phone" class="form-input" placeholder="(555) 123-4567" required></div>
                                </div>
                                <div class="form-group"><label for="email">Email</label><input type="email" id="email"
                                        name="email" class="form-input" placeholder="you@example.com" required></div>
                                <div class="form-group">
                                    <label for="projectType">Project Type</label>
                                    <select id="projectType" name="projectType" class="form-input">
                                        <option value="">Select a project type</option>
                                        <option value="new-wood">New Wood Deck</option>
                                        <option value="new-composite">New Composite Deck</option>
                                        <option value="porch">Screened Porch / Enclosure</option>
                                        <option value="pergola">Pergola / Cover</option>
                                        <option value="repair">Deck Repair</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="form-group"><label for="message">Project Details</label><textarea id="message"
                                        name="message" rows="4" class="form-input"
                                        placeholder="Tell us about your project..."></textarea></div>
                                <button type="submit" class="btn-primary form-submit">Get My Free Quote</button>
                                <p class="form-note">We respond to all inquiries within 24 hours</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;

        document.getElementById("services-gallery-name").innerText = galleryName;
        document.getElementById("services-gallery-subtitle").innerText = gallerySubtitle;
    }
}

customElements.define("services-content", ServicesContent);
