import { showSection } from './section-loader.js';

export function initNavigation() {
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