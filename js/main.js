import { initNavigation } from './modules/nav.js';
import { loadSections } from './modules/section-loader.js';
import { initAnimations, initServicesToggle } from './modules/animations.js';
import { initContactForm } from './modules/contact.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Load navigation
        initNavigation();
        
        // Load all sections
        await loadSections();
        
        // Initialize animations
        initAnimations();
        initServicesToggle();
        
        // Initialize contact and devis forms
        initContactForm();
        
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});