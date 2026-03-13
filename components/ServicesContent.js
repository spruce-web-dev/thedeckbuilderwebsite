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
                <site-contact></site-contact>
            </section>
        `;

        document.getElementById("services-gallery-name").innerText = galleryName;
        document.getElementById("services-gallery-subtitle").innerText = gallerySubtitle;
    }
}

customElements.define("services-content", ServicesContent);
