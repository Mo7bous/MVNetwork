// Navigation handling
const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'qui-sommes-nous', label: 'Qui sommes-nous' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'pricing', label: 'Tarifs' },
    { id: 'tourisme', label: 'Tourisme' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
];

// Generate desktop navigation
const desktopNav = document.querySelector('.hidden.md\\:flex.space-x-8');
if (desktopNav) {
    desktopNav.innerHTML = navLinks.map(link => 
        `<a href="#${link.id}" class="nav-link text-gray-700 hover:text-[#10B981] transition-all duration-300 transform hover:scale-105">${link.label}</a>`
    ).join('');
}

// Generate mobile navigation
const mobileNav = document.getElementById('mobile-menu');
if (mobileNav) {
    mobileNav.innerHTML = navLinks.map(link => 
        `<a href="#${link.id}" class="block py-2 text-gray-700 hover:text-[#10B981] transition-all duration-300">${link.label}</a>`
    ).join('');
}

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
        mobileNav.classList.toggle('hidden');
    });
}

// Navigation click handler
document.querySelectorAll('.nav-link, #mobile-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        // Show target section
        showSection(targetId);

        // Close mobile menu if open
        if (mobileNav && !mobileNav.classList.contains('hidden')) {
            mobileNav.classList.add('hidden');
        }

        updateActiveNavLink(this);
    });
});

// Auto-hide mobile menu on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (mobileNav && !mobileNav.classList.contains('hidden')) {
        if (Math.abs(scrollTop - lastScrollTop) > 50) {
            mobileNav.classList.add('hidden');
        }
    }

    lastScrollTop = scrollTop;
});

// Set active nav link for accueil on load
const accueilLink = document.querySelector('a[href="#accueil"]');
if (accueilLink) {
    updateActiveNavLink(accueilLink);
}

function updateActiveNavLink(activeLink) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link, #mobile-menu a').forEach(link => {
        link.classList.remove('active');
        // Reset transform
        link.style.transform = '';
    });

    // Add active class to clicked link
    activeLink.classList.add('active');
    
    // Add highlight animation
    activeLink.style.transform = 'scale(1.1)';
    setTimeout(() => {
        activeLink.style.transform = 'scale(1)';
    }, 200);
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            section.classList.add('hidden');
            section.style.display = 'none';
            
            // Show target section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                targetSection.style.display = 'block';
                targetSection.style.opacity = '0';
                targetSection.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    targetSection.style.opacity = '1';
                }, 50);
                
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    });
}

// Make showSection available globally for home buttons
window.showSection = showSection;

// Toggle functionality for services, solutions, and about
function setupToggles() {
    // Services toggle
    const personnelToggle = document.getElementById('personnel-toggle');
    const professionelToggle = document.getElementById('professionel-toggle');
    const servicesContent = document.getElementById('services-content');
    
    if (personnelToggle && professionelToggle) {
        personnelToggle.addEventListener('click', () => {
            personnelToggle.classList.add('bg-[#10B981]', 'text-white');
            personnelToggle.classList.remove('text-gray-600');
            professionelToggle.classList.remove('bg-[#10B981]', 'text-white');
            professionelToggle.classList.add('text-gray-600');
        });

        professionelToggle.addEventListener('click', () => {
            professionelToggle.classList.add('bg-[#10B981]', 'text-white');
            professionelToggle.classList.remove('text-gray-600');
            personnelToggle.classList.remove('bg-[#10B981]', 'text-white');
            personnelToggle.classList.add('text-gray-600');
        });
    }

    // Solutions toggle
    const solutionsPersonnelToggle = document.getElementById('solutions-personnel-toggle');
    const solutionsProfessionelToggle = document.getElementById('solutions-professionel-toggle');
    const solutionsContent = document.getElementById('solutions-content');
    
    if (solutionsPersonnelToggle && solutionsProfessionelToggle) {
        solutionsPersonnelToggle.addEventListener('click', () => {
            solutionsPersonnelToggle.classList.add('bg-[#10B981]', 'text-white');
            solutionsPersonnelToggle.classList.remove('text-gray-600');
            solutionsProfessionelToggle.classList.remove('bg-[#10B981]', 'text-white');
            solutionsProfessionelToggle.classList.add('text-gray-600');
        });

        solutionsProfessionelToggle.addEventListener('click', () => {
            solutionsProfessionelToggle.classList.add('bg-[#10B981]', 'text-white');
            solutionsProfessionelToggle.classList.remove('text-gray-600');
            solutionsPersonnelToggle.classList.remove('bg-[#10B981]', 'text-white');
            solutionsPersonnelToggle.classList.add('text-gray-600');
        });
    }

    // About toggle
    const aboutPersonnelToggle = document.getElementById('about-personnel-toggle');
    const aboutProfessionelToggle = document.getElementById('about-professionel-toggle');
    const aboutContent = document.getElementById('about-content');
    
    if (aboutPersonnelToggle && aboutProfessionelToggle) {
        aboutPersonnelToggle.addEventListener('click', () => {
            aboutPersonnelToggle.classList.add('bg-[#10B981]', 'text-white');
            aboutPersonnelToggle.classList.remove('text-gray-600');
            aboutProfessionelToggle.classList.remove('bg-[#10B981]', 'text-white');
            aboutProfessionelToggle.classList.add('text-gray-600');
        });

        aboutProfessionelToggle.addEventListener('click', () => {
            aboutProfessionelToggle.classList.add('bg-[#10B981]', 'text-white');
            aboutProfessionelToggle.classList.remove('text-gray-600');
            aboutPersonnelToggle.classList.remove('bg-[#10B981]', 'text-white');
            aboutPersonnelToggle.classList.add('text-gray-600');
        });
    }
}

// Contact form handling
function setupContactForms() {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendEmail(this, 'contact');
        });
    }

    // Devis form
    const devisForm = document.getElementById('devis-form');
    if (devisForm) {
        devisForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendEmail(this, 'devis');
        });
    }
}

function sendEmail(form, type) {
    const formData = new FormData(form);
    const randomId = Math.floor(10000000 + Math.random() * 90000000);
    
    let emailContent, subject;
    
    if (type === 'devis') {
        const name = formData.get('name');
        const email = formData.get('email');
        const service = formData.get('service');
        const details = formData.get('details');
        
        subject = `DEVIS-${randomId} - Demande de devis`;
        
        emailContent = `Cher(e) ${name},

Nous avons bien reçu votre demande de devis via notre plateforme Morocco Venture Network.

Service demandé: ${service}
Détails du projet: ${details}

Notre équipe vous contactera dans les plus brefs délais.

Cordialement,
Morocco Venture Network
contact@moroccoventure.com`;
    } else {
        const name = formData.get('name');
        const email = formData.get('email');
        const subjectField = formData.get('subject');
        const message = formData.get('message');
        
        const subjectSelect = document.getElementById('subject');
        const subjectText = subjectSelect.options[subjectSelect.selectedIndex].text;
        
        subject = `${randomId} - ${subjectText}`;
        
        emailContent = `Cher(e) ${name},

Nous avons bien reçu votre demande via notre plateforme Morocco Venture Network.

Sujet: ${subjectText}
Message: ${message}

Notre équipe vous contactera dans les plus brefs délais.

Cordialement,
Morocco Venture Network
contact@moroccoventure.com`;
    }
    
    const mailtoLink = `mailto:contact@gmail.com?subject=${subject}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    form.reset();
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Mobile menu handling
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Auto-hide mobile menu on scroll
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (!mobileMenu.classList.contains('hidden')) {
                if (Math.abs(scrollTop - lastScrollTop) > 50) {
                    mobileMenu.classList.add('hidden');
                }
            }
            lastScrollTop = scrollTop;
        });
    }
}

// Navigation click handler
function setupNavigation() {
    document.querySelectorAll('.nav-link, #mobile-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Show target section
            showSection(targetId);

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }

            updateActiveNavLink(this);
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    setupToggles();
    setupContactForms();
    setupMobileMenu();
    setupNavigation();
    
    // Set active nav link for accueil on load
    const accueilLink = document.querySelector('a[href="#accueil"]');
    if (accueilLink) {
        updateActiveNavLink(accueilLink);
    }
    
    // Add click handlers for home page buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('services-btn')) {
            e.preventDefault();
            showSection('services');
        }
        if (e.target.classList.contains('solutions-btn')) {
            e.preventDefault();
            showSection('solutions');
        }
    });
});

