class SiteGallery extends HTMLElement {
    connectedCallback() {
        const galleryTitle       = this.getAttribute("gallery-title");
        const gallerySubtitle    = this.getAttribute("gallery-subtitle");
        const galleryDescription = this.getAttribute("gallery-description");
        const filterAttr         = this.getAttribute("filters") || "all";

        const FILTER_MAP = {
            "all":               { label: "All Projects",            value: "all" },
            "wood-deck":         { label: "Wood Decks",              value: "wood-deck" },
            "composite-deck":    { label: "Composite Decks",         value: "composite-deck" },
            "pergola":           { label: "Pergolas & Covered Patios", value: "pergola" },
            "stamped-concrete":  { label: "Stamped Concrete",        value: "stamped-concrete" }
        };

        let filtersToRender = [];
        if (filterAttr === "none")       filtersToRender = [];
        else if (filterAttr === "all")   filtersToRender = Object.keys(FILTER_MAP);
        else filtersToRender = filterAttr.split(",").map(f => f.trim());

        const filterButtonsHTML = filtersToRender.map((key, i) => {
            const f = FILTER_MAP[key];
            if (!f) return "";
            return `<button
                        class="filter-btn ${i === 0 ? "active" : ""}"
                        data-filter="${f.value}"
                        data-label="${f.label}"
                    >${f.label}</button>`;
        }).join("");

        this.innerHTML = `
            <section id="gallery" class="section bg-white">
                <div class="container">
                    <div class="section-header" data-animate>
                        <p id="gallery-title"></p>
                        <h2 id="gallery-subtitle"></h2>
                        <p id="gallery-description"></p>
                    </div>

                    ${filtersToRender.length > 1 ? `
                        <div class="filter-bar" data-animate>
                            ${filterButtonsHTML}
                        </div>
                    ` : ""}

                    <div id="galleryGrid" class="gallery-grid" data-animate></div>

                    <div class="gallery-load-more">
                        <button id="loadMoreBtn" class="btn-primary"
                                onclick="renderMoreGallery()" style="display:none;">
                            Load More
                        </button>
                    </div>
                </div>
            </section>
        `;

        document.getElementById("gallery-title").innerText       = galleryTitle;
        document.getElementById("gallery-subtitle").innerText    = gallerySubtitle;
        document.getElementById("gallery-description").innerText = galleryDescription;

        // Manage active pill state & dispatch filter
        this.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                this.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                displayGallery(btn.dataset.filter, btn.dataset.label);
            });
        });

        // Initialise gallery with first filter
        if (filtersToRender.length) {
            const first = FILTER_MAP[filtersToRender[0]];
            displayGallery(first.value, first.label);
        } else {
            displayGallery("all", "All Projects");
        }
    }
}

customElements.define("site-gallery", SiteGallery);