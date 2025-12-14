// TKWIN+ - JavaScript Principal
// Gestion des animations et interactions

document.addEventListener('DOMContentLoaded', function() {
    // Animation de révélation au scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Animation des compteurs
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Smooth scrolling pour la navigation
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation de la barre de navigation au scroll
    const navbar = document.querySelector('nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll vers le bas
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Animation des cartes au hover
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                translateY: -8,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });

        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                translateY: 0,
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });

    // Animation du texte gradient
    const gradientTexts = document.querySelectorAll('.gradient-text');
    gradientTexts.forEach(text => {
        anime({
            targets: text,
            backgroundPosition: ['0% 50%', '100% 50%'],
            duration: 3000,
            easing: 'easeInOutSine',
            loop: true,
            direction: 'alternate'
        });
    });

    // Gestion du menu mobile
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'md:hidden bg-white shadow-lg rounded-lg mt-2 py-2';
    mobileMenu.innerHTML = `
        <a href="#accueil" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Accueil</a>
        <a href="#cours" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cours</a>
        <a href="#simulateurs" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Simulateurs</a>
        <a href="#communication" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Communication</a>
        <button onclick="window.location.href='dashboard.html'" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
            Connexion
        </button>
    `;
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const menu = document.querySelector('.md\\:hidden .bg-white');
            if (menu) {
                menu.remove();
            } else {
                mobileMenuButton.parentNode.appendChild(mobileMenu);
            }
        });
    }

    // Fonction pour animer les compteurs
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 100) {
                element.textContent = Math.floor(current) + (target === 95 ? '%' : '+');
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    }

    // Parallax effect pour les images flottantes
    const floatingImages = document.querySelectorAll('.floating-animation');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingImages.forEach(img => {
            img.style.transform = `translateY(${rate}px)`;
        });
    });

    // Animation d'apparition des sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        anime({
            targets: section,
            opacity: [0, 1],
            translateY: [50, 0],
            delay: index * 100,
            duration: 800,
            easing: 'easeOutQuart'
        });
    });
});

// Fonction utilitaire pour le smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Gestion de la connexion (simulation)
function handleLogin() {
    // Simulation de connexion réussie
    localStorage.setItem('tkwin_user', JSON.stringify({
        name: 'Étudiant TKWIN+',
        email: 'etudiant@tkwin.plus',
        progress: 65,
        courses: ['Word', 'Excel', 'PowerPoint']
    }));
    
    // Redirection vers le tableau de bord
    window.location.href = 'dashboard.html';
}

// Vérification de l'état de connexion
function checkAuth() {
    const user = localStorage.getItem('tkwin_user');
    return user ? JSON.parse(user) : null;
}

// Déconnexion
function handleLogout() {
    localStorage.removeItem('tkwin_user');
    window.location.href = 'index.html';
}

// Animation de chargement pour les boutons
function showLoading(button) {
    const originalText = button.textContent;
    button.textContent = 'Chargement...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Gestion des erreurs
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Gestion des succès
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Support des raccourcis clavier
document.addEventListener('keydown', function(e) {
    // Ctrl + K pour ouvrir la recherche
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        // Ouvrir la recherche
        console.log('Recherche ouverte');
    }
    
    // Ctrl + / pour ouvrir l'aide
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        // Ouvrir l'aide
        console.log('Aide ouverte');
    }
});

// Gestion du mode sombre (optionnel)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDark);
}

// Chargement du mode sombre sauvegardé
const savedDarkMode = localStorage.getItem('dark-mode');
if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
}

// Performance: Lazy loading des images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Analytics et tracking (simulation)
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    // Ici on pourrait envoyer les données à un service d'analytics
}

// Tracking des interactions
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('button_click', {
            text: button.textContent,
            href: button.getAttribute('onclick')
        });
    });
});

// Initialisation des tooltips
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'absolute bg-gray-900 text-white px-2 py-1 rounded text-sm z-50';
    tooltip.textContent = e.target.dataset.tooltip;
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.absolute.bg-gray-900');
    if (tooltip) {
        tooltip.remove();
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initTooltips();
    trackEvent('page_view', {
        page: window.location.pathname
    });
});

// Export des fonctions pour une utilisation globale
window.tkwin = {
    scrollToSection,
    handleLogin,
    handleLogout,
    checkAuth,
    showError,
    showSuccess,
    toggleDarkMode,
    trackEvent
};