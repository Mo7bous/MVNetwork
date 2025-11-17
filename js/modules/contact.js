export function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendEmail(this, 'contact');
        });
    }

    // Add devis form handler
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
        const duree = formData.get('duree');
        const urgence = formData.get('urgence');
        const details = formData.get('details');
        const budget = formData.get('budget');
        const delai = formData.get('delai');
        
        subject = `DEVIS-${randomId} - Demande de devis`;
        
        emailContent = `Cher(e) client(e),

Nous avons bien reçu votre demande de devis via notre plateforme Morocco Venture Network.

INFORMATIONS DE CONTACT:
========================
Nom: ${name}
Email: ${email}
Numéro de devis: MVN-DEVIS-${randomId}

DÉTAILS DE VOTRE DEMANDE:
========================
Service demandé: ${service}
Durée estimée: ${duree || 'Non spécifiée'}
Urgence: ${urgence}
Budget estimé: ${budget || 'Non spécifié'}
Délai souhaité: ${delai || 'Non spécifié'}

DESCRIPTION DU PROJET:
=======================
${details}

NOTRE ENGAGEMENT:
================
Notre équipe commerciale préparera un devis détaillé dans les 24 heures ouvrables. Vous recevrez:
• Une analyse détaillée de vos besoins
• Une proposition tarifaire transparente
• Un planning d'exécution précis
• Les conditions générales de service

ESPACE CLIENT:
==============
Si vous êtes déjà client, connectez-vous à votre espace personnel:
🔗 https://contact.app/morocco-venture
(Identifiant: votre email)

PROCHAINES ÉTAPES:
=================
1. Analyse de votre demande par notre équipe
2. Établissement d'un devis personnalisé
3. Validation et signature électronique
4. Démarrage du projet

URGENCES:
========
Pour les demandes urgentes, contactez-nous via:
• WhatsApp Business: +212 5 28 XX XX XX
• Email prioritaire: urgent@moroccoventure.com

Cordialement,

L'équipe Morocco Venture Network
📍 Boulevard de l'Atlantique, Dakhla
🌐 www.moroccoventure.com
📧 contact@moroccoventure.com
📱 +212 5 28 XX XX XX

---
Ce message est généré automatiquement. Merci de ne pas y répondre directement.
Pour toute question: support@moroccoventure.com
`;
    } else {
        // Existing contact form logic
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone') || 'Non fourni';
        const subjectField = formData.get('subject');
        const message = formData.get('message');
        
        const subjectSelect = document.getElementById('subject');
        const subjectText = subjectSelect.options[subjectSelect.selectedIndex].text;
        
        subject = `${randomId} - ${subjectText}`;
        
        emailContent = `Cher(e) client(e),

Nous avons bien reçu votre demande via notre plateforme Morocco Venture Network et nous vous en remercions.

INFORMATIONS DE CONTACT:
========================
Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Sujet: ${subjectText}
Numéro de référence: MVN-${randomId}

VOTRE MESSAGE:
==============
${message}

NOTRE ENGAGEMENT:
================
Notre équipe multilingue traite votre demande avec la plus haute priorité. Vous recevrez une réponse détaillée dans les 2 heures ouvrables.

ESPACE CLIENT EXCLUSIF:
=======================
Si vous êtes déjà client chez Morocco Venture Network, nous vous invitons à vous connecter sur notre plateforme sécurisée:
🔗 https://contact.app/morocco-venture
(Identifiant: votre email | Mot de passe: créé lors de votre inscription)

SERVICES COMPLÉMENTAIRES:
========================
• Suivi en temps réel de votre projet
• Chat vidéo avec votre conseiller dédié
• Partage sécurisé de documents
• Notifications instantanées

PROCHAINES ÉTAPES:
==================
1. Analyse de votre demande par notre équipe spécialisée
2. Attribution d'un conseiller dédié
3. Proposition de solutions personnalisées
4. Mise en œuvre rapide et efficace

URGENCES:
=========
Pour les demandes urgentes, contactez-nous via:
• WhatsApp Business: +212 5 28 XX XX XX
• Email prioritaire: urgent@moroccoventure.com

Nos bureaux à Dakhla sont ouverts du lundi au samedi, 8h-20h.

Avec nos salutations distinguées,

L'équipe Morocco Venture Network
📍 Boulevard de l'Atlantique, Dakhla
🌐 www.moroccoventure.com
📧 contact@moroccoventure.com
📱 +212 5 28 XX XX XX

---
Ce message est généré automatiquement. Merci de ne pas y répondre directement.
Pour toute question: support@moroccoventure.com
`;
    }
    
    const mailtoLink = `mailto:contact@gmail.com?subject=${subject}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    form.reset();
}