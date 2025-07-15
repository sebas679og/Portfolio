'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
if (testimonialsItem.length && modalContainer && modalCloseBtn && overlay) {
  const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

      testimonialsModalFunc();
    });
  }

  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Mapeo de textos en español a categorías en inglés
const filterMapping = {
  'todo': 'all',
  'all': 'all',
  'apis': 'apis',
  'aplicaciones': 'applications',
  'applications': 'applications',
  'program logic': 'program_logic',
  'en desarrollo': 'under_development',
  'under development': 'under_development',
  'colaborativo': 'collaborative',
  'collaborative': 'collaborative'
};

// Función para normalizar el texto del filtro
const normalizeFilterText = function(text) {
  return text.toLowerCase().trim();
};

// Función para obtener el valor del filtro
const getFilterValue = function(element) {
  // Primero intenta usar data-filter si existe
  if (element.dataset.filter) {
    return element.dataset.filter;
  }
  
  // Si no, mapea el texto del botón
  const normalizedText = normalizeFilterText(element.innerText);
  return filterMapping[normalizedText] || normalizedText.replace(/\s+/g, '_');
};

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = getFilterValue(this);
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
    
    // Update URL with portfolio filter
    updateUrlHash('portfolio:' + selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {  
  for (let i = 0; i < filterItems.length; i++) {
    const categories = filterItems[i].dataset.category.split(" ");    
    if (selectedValue === "all" || categories.includes(selectedValue)) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = getFilterValue(this);
    if (selectValue) {
      selectValue.innerText = this.innerText;
    }
    filterFunc(selectedValue);

    if (lastClickedBtn) {
      lastClickedBtn.classList.remove("active");
    }
    this.classList.add("active");
    lastClickedBtn = this;
    
    // Update URL with portfolio filter
    updateUrlHash('portfolio:' + selectedValue);
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
if (form && formInputs.length && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Function to navigate to a specific section
const navigateToSection = function(targetSection) {
  for (let j = 0; j < pages.length; j++) {
    if (targetSection === pages[j].dataset.page) {
      pages[j].classList.add("active");
      // Find the corresponding navigation link
      for (let k = 0; k < navigationLinks.length; k++) {
        if (navigationLinks[k].getAttribute("data-nav") === targetSection) {
          navigationLinks[k].classList.add("active");
        } else {
          navigationLinks[k].classList.remove("active");
        }
      }
      window.scrollTo(0, 0);
    } else {
      pages[j].classList.remove("active");
    }
  }
};

// Function to update URL hash
const updateUrlHash = function(section) {
  if (history.pushState) {
    history.pushState(null, null, '#' + section);
  } else {
    location.hash = '#' + section;
  }
};

// Function to get current hash from URL
const getCurrentHash = function() {
  return location.hash.slice(1) || 'about'; // Default to 'about' if no hash
};

// Function to handle subsection navigation
const handleSubsectionNavigation = function(hash) {
  // Check if it's a subsection (contains a dot like 'resume.education')
  if (hash.includes('.')) {
    const [section, subsection] = hash.split('.');
    
    // First navigate to the main section
    navigateToSection(section);
    
    // Then scroll to the subsection after a brief delay to ensure section is loaded
    setTimeout(() => {
      const subsectionElement = document.getElementById(subsection);
      if (subsectionElement) {
        subsectionElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
    
    return true; // Indicates this was a subsection navigation
  }
  return false; // Not a subsection
};

// Function to handle portfolio filter navigation
const handlePortfolioFilterNavigation = function(hash) {
  // Check if it's a portfolio filter (like 'portfolio:apis' or 'portfolio:all')
  if (hash.includes(':')) {
    const [section, filter] = hash.split(':');
    
    if (section === 'portfolio') {
      // First navigate to portfolio section
      navigateToSection('portfolio');
      
      // Then apply the filter after a brief delay
      setTimeout(() => {
        applyPortfolioFilter(filter);
      }, 100);
      
      return true; // Indicates this was a portfolio filter navigation
    }
  }
  return false; // Not a portfolio filter
};

// Function to apply portfolio filter and update UI
const applyPortfolioFilter = function(filterValue) {
  // Apply the filter
  filterFunc(filterValue);
  
  // Update filter buttons active state
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].classList.remove("active");
    const btnFilterValue = getFilterValue(filterBtn[i]);
    if (btnFilterValue === filterValue) {
      filterBtn[i].classList.add("active");
      lastClickedBtn = filterBtn[i];
      
      // Update select value if it exists
      if (selectValue) {
        selectValue.innerText = filterBtn[i].innerText;
      }
    }
  }
};

// Handle hash changes (back/forward browser buttons)
window.addEventListener('hashchange', function() {
  const currentHash = getCurrentHash();
  
  // Check if it's a portfolio filter navigation
  if (handlePortfolioFilterNavigation(currentHash)) {
    return;
  }
  
  // Check if it's a subsection navigation
  if (!handleSubsectionNavigation(currentHash)) {
    // If not a subsection, handle as normal section navigation
    navigateToSection(currentHash);
  }
});

// Load correct section on page load
window.addEventListener('DOMContentLoaded', function() {
  const currentHash = getCurrentHash();
  
  // Check if it's a portfolio filter navigation
  if (handlePortfolioFilterNavigation(currentHash)) {
    return;
  }
  
  // Check if it's a subsection navigation
  if (!handleSubsectionNavigation(currentHash)) {
    // If not a subsection, handle as normal section navigation
    navigateToSection(currentHash);
  }
});

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const navTarget = this.getAttribute("data-nav");
    navigateToSection(navTarget);
    
    // If going to portfolio, set default filter to 'all'
    if (navTarget === 'portfolio') {
      updateUrlHash('portfolio:all');
      // Apply default filter after navigation
      setTimeout(() => {
        applyPortfolioFilter('all');
      }, 100);
    } else {
      updateUrlHash(navTarget);
    }
  });
}