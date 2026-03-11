let galleryImages = [];
let galleryIndex = 0;
const GALLERY_BATCH = 6;

function displayGallery(filter = 'all', current = 'All Projects') {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    galleryGrid.innerHTML = "";
    galleryIndex = 0;

    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.trim() === current) {
            btn.classList.add('active');
        }
    });

    let items;

    if (filter === 'all') {
        items = Projects;
    } else {
        const filters = Array.isArray(filter) ? filter : [filter];

        items = Projects.filter(p =>
            p.categories.some(c => filters.includes(c))
        );
    }

    galleryImages = items.flatMap(p =>
        p.images.map(img => ({
            name: p.name,
            location: p.location,
            categories: p.categories,
            image: img
        }))
    );

    renderMoreGallery();

    loadMoreBtn.style.display =
        galleryImages.length > GALLERY_BATCH ? "block" : "none";
}

function renderMoreGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    const nextItems = galleryImages.slice(
        galleryIndex,
        galleryIndex + GALLERY_BATCH
    );

    galleryGrid.insertAdjacentHTML(
        "beforeend",
        nextItems.map(p => `
            <article class="gallery-item" data-type="${p.categories.join(' ')}">
                <div class="gallery-img-wrapper">
                <img src="/images/projects/${p.image}" alt="${p.name}" loading="lazy">
                </div>
                <div class="gallery-info">
                <h3>${p.name}</h3>
                <div class="gallery-meta">
                    <span>${p.location}</span>
                </div>
                </div>
            </article>
            `).join('')
    );

    galleryIndex += GALLERY_BATCH;

    if (galleryIndex >= galleryImages.length) {
        loadMoreBtn.style.display = "none";
    }
}