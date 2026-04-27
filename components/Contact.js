class SiteContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container">
            <div class="contact-grid">

                <!-- LEFT SIDE INFO -->
                <div>
                    <p style="color:var(--accent);font-weight:600;margin-bottom:.5rem;">Get In Touch</p>
                    <h2 class="contact-info">Request Your Free Quote</h2><br>

                    <p class="text-muted" style="font-size:1.125rem;margin-bottom:2rem;">
                        Ready to upgrade your outdoor space? Fill out the form and we'll get back to you within 24 hours with a preliminary estimate.
                    </p>

                    <div class="contact-item">
                        <div class="icon-box">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="label">Phone</p>
                            <a href="tel:+13039488821">(303) 948-8821</a>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="icon-box">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                            </svg>
                        </div>
                        <div>
                            <p class="label">Email</p>
                            <a href="mailto:Richard@DeckBuilderofCO.com">Richard@DeckBuilderofCO.com</a>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="icon-box">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path stroke-linecap="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="label">Service Area</p>
                            <p>Denver metro & surrounding counties</p>
                        </div>
                    </div>
                </div>

                <!-- RIGHT SIDE FORM -->
                <div>
                    <form action="https://formsubmit.co/Richard@DeckBuilderofCO.com" method="POST" class="quote-form">
                        <!-- FormSubmit config -->
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_subject" value="New Quote Request">

                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input id="name" type="text" name="name" class="form-input" placeholder="Enter name..." required>
                            </div>

                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input id="phone" type="tel" name="phone" class="form-input" placeholder="Enter phone number..." required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input id="email" type="email" name="email" class="form-input" placeholder="Enter email..." required>
                        </div>

                        <div class="form-group">
                            <label for="projectType">Project Type</label>
                            <select id="projectType" name="projectType" class="form-input">
                                <option value="">Select a project type</option>
                                <option value="Wood Deck">Wood Deck</option>
                                <option value="Composite Deck">Composite Deck</option>
                                <option value="Pergola or Covered Patio">Pergola or Covered Patio</option>
                                <option value="Stamped Concrete">Stamped Concrete</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Project Details</label>
                            <textarea id="message" name="message" rows="4" class="form-input" placeholder="Anything else we should know?..."></textarea>
                        </div>

                        <button type="submit" class="btn-primary form-submit">
                            Get Quote
                        </button>
                    </form>
                </div>

            </div>
        </div>

        <!-- SUCCESS MODAL -->
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-icon">
                    <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                </div>

                <h3>Quote Request Sent</h3>

                <p>
                    Thanks for reaching out. We'll review your project details and get back to you within 24 hours.
                </p>

                <button class="btn-primary close-modal">Got It</button>
            </div>
        </div>
        `;

        const form = this.querySelector(".quote-form");
        const modal = this.querySelector(".modal-overlay");
        const closeBtn = this.querySelector(".close-modal");

        //form.addEventListener("submit", (e) => {
        //    modal.classList.add("active");
        //    form.reset();
        //});
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            let submitted = false;

            const submitForm = () => {
                if (submitted) return;
                submitted = true;
                e.target.submit();
            };

            gtag('event', 'conversion', {
                'send_to': 'AW-798596772/DhTaCLf1vqMcEKS95vwC',
                'event_callback': submitForm
            });

            // fallback (required, not optional)
            setTimeout(submitForm, 800);
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.remove("active");
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") modal.classList.remove("active");
        });
    }
}

customElements.define("site-contact", SiteContact);