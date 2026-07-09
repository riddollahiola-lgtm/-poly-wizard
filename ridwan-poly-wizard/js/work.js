/* ============================================================
   WORK PAGE — category filter
   Cards are static HTML with a data-cat attribute ("product" / "character").
   Supports deep-linking: work.html?filter=character
   ============================================================ */

const filterButtons = document.querySelectorAll('.filter-btn[data-cat]');
const cards = document.querySelectorAll('#workGrid .card');

function applyFilter(cat) {
  cards.forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? '' : 'none';
  });
  filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.cat === cat));
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.cat));
});

// initial state from URL, e.g. work.html?filter=product
const params = new URLSearchParams(window.location.search);
const initial = params.get('filter');
applyFilter(initial && ['product', 'character'].includes(initial) ? initial : 'all');
