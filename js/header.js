// Header inclusion and navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
});

async function loadHeader() {
  try {
    const response = await fetch('includes/header.html');
    const headerHTML = await response.text();
    
    // Find the body tag and insert header at the beginning
    const body = document.body;
    body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // After header is loaded, highlight current page
    highlightCurrentPage();

  // Sticky header participates in layout; no padding adjustments needed
  } catch (error) {
    console.error('Error loading header:', error);
    // Fallback: create header manually if file can't be loaded
    createFallbackHeader();
  }
}

function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pageName = currentPage.replace('.html', '') || 'index';
  
  // Map page names to nav IDs
  const pageMap = {
    'index': 'nav-home',
    'contact': 'nav-contact', 
    'nieuws': 'nav-nieuws',
    'smoelenboek': 'nav-smoelenboek',
    'speltaken': 'nav-speltaken',
    'verhuur': 'nav-verhuur'
  };
  
  const navId = pageMap[pageName];
  if (navId) {
    const navItem = document.getElementById(navId);
    if (navItem) {
      navItem.classList.add('active');
    }
  }
}

function createFallbackHeader() {
  const headerHTML = `
    <header>
      <div class="header-content">
        <div class="logo">
          <div class="logo-icon-container">
            <img src="afbeeldingen/Logo Die Wiltgraeff_Wit_Icoon.svg" alt="Die Wiltgraeff Logo" class="logo-svg">
          </div>
          <div class="logo-text">Die Wiltgraeff</div>
        </div>
        <nav>
          <a href="index.html" id="nav-home">Home</a>
          <a href="contact.html" id="nav-contact">Contact</a>
          <a href="nieuws.html" id="nav-nieuws">Nieuws</a>
          <a href="smoelenboek.html" id="nav-smoelenboek">Smoelenboek</a>
          <div class="dropdown">
            <a href="speltaken.html" id="nav-speltaken" class="dropdown-toggle">Speltakken</a>
            <div class="dropdown-menu" role="menu" aria-label="Speltakken submenu">
              <a href="#" role="menuitem">Bevers (5-7)</a>
              <a href="#" role="menuitem">Welpen (7-11)</a>
              <a href="#" role="menuitem">Scouts (11-15)</a>
              <a href="#" role="menuitem">Explorers (15-18)</a>
              <a href="#" role="menuitem">Rovers (18-21)</a>
              <a href="#" role="menuitem">Leiding & Vrijwilligers</a>
            </div>
          </div>
          <a href="verhuur.html" id="nav-verhuur">Verhuur</a>
        </nav>
      </div>
    </header>
  `;
  
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  highlightCurrentPage();
  // No padding adjustments needed for sticky header
}
