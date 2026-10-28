// Manejo de búsqueda en subdirectorios
function handleSearch(event, basePath = './') {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) return;

    // Lógica simple de redirección según lo que busques
    if (query.includes('airline') || query.includes('aerolinea')) {
        window.location.href = basePath + 'airline/index.html';
    } else if (query.includes('aircraft') || query.includes('avion')) {
        window.location.href = basePath + 'aircraft/index.html';
    } else if (query.includes('airport') || query.includes('aeropuerto')) {
        window.location.href = basePath + 'airport/index.html';
    } else {
        alert('No results found / No se encontraron resultados para: ' + query);
    }
}

// Cambio de idioma simple (Español / English)
let currentLang = 'es';
function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.querySelectorAll('[data-es]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
    const btn = document.getElementById('langToggle');
    btn.textContent = currentLang === 'es' ? 'EN / ES' : 'ES / EN';
}
