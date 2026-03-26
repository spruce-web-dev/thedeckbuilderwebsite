class ServicesContent extends HTMLElement {
    connectedCallback() {
        const galleryTitle = this.getAttribute("gallery-title") || "Our Work";
        const gallerySubtitle = this.getAttribute("gallery-subtitle") || "Past Projects";
        const galleryDescription = this.getAttribute("gallery-description") || "...";
        const galleryFilters = this.getAttribute("gallery-filters") || "all";

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
            <site-gallery 
                filters="${galleryFilters}" 
                gallery-title="${galleryTitle}" 
                gallery-subtitle="${gallerySubtitle}"
                gallery-description="${galleryDescription}"
            ></site-gallery>

            <testimonial-section></testimonial-section>

            <!-- Contact -->
            <section id="contact" class="section section-pattern">
                <site-contact></site-contact>
            </section>
        `;
    }
}

customElements.define("services-content", ServicesContent);
