export function initAnimations() {
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

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

export function initServicesToggle() {
    const personnelToggle = document.getElementById('personnel-toggle');
    const professionelToggle = document.getElementById('professionel-toggle');
    const servicesContent = document.getElementById('services-content');

    const personnelSolutionsToggle = document.getElementById('solutions-personnel-toggle');
    const professionelSolutionsToggle = document.getElementById('solutions-professionel-toggle');
    const solutionsContent = document.getElementById('solutions-content');

    // About section toggles
    const aboutPersonnelToggle = document.getElementById('about-personnel-toggle');
    const aboutProfessionelToggle = document.getElementById('about-professionel-toggle');
    const aboutContent = document.getElementById('about-content');

    function loadServicesContent(type) {
        if (!servicesContent) return;

        servicesContent.style.opacity = '0';
        servicesContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            servicesContent.innerHTML = getServicesContent(type);
            servicesContent.style.opacity = '1';
            servicesContent.style.transform = 'translateY(0)';
            servicesContent.style.transition = 'all 0.5s ease';
            initDetailButtons();
        }, 200);
    }

    function loadSolutionsContent(type) {
        if (!solutionsContent) return;

        solutionsContent.style.opacity = '0';
        solutionsContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            solutionsContent.innerHTML = getSolutionsContent(type);
            solutionsContent.style.opacity = '1';
            solutionsContent.style.transform = 'translateY(0)';
            solutionsContent.style.transition = 'all 0.5s ease';
            initDetailButtons();
        }, 200);
    }

    function loadAboutContent(type) {
        if (!aboutContent) return;

        aboutContent.style.opacity = '0';
        aboutContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            aboutContent.innerHTML = getAboutContent(type);
            aboutContent.style.opacity = '1';
            aboutContent.style.transform = 'translateY(0)';
            aboutContent.style.transition = 'all 0.5s ease';
        }, 200);
    }

    if (personnelToggle && professionelToggle) {
        personnelToggle.addEventListener('click', () => {
            personnelToggle.classList.add('bg-[#10B981]', 'text-white');
            personnelToggle.classList.remove('text-gray-600');
            professionelToggle.classList.remove('bg-[#10B981]', 'text-white');
            professionelToggle.classList.add('text-gray-600');
            loadServicesContent('personnel');
        });

        professionelToggle.addEventListener('click', () => {
            professionelToggle.classList.add('bg-[#10B981]', 'text-white');
            professionelToggle.classList.remove('text-gray-600');
            personnelToggle.classList.remove('bg-[#10B981]', 'text-white');
            personnelToggle.classList.add('text-gray-600');
            loadServicesContent('professionel');
        });

        // Load default content
        loadServicesContent('personnel');
    }

    if (personnelSolutionsToggle && professionelSolutionsToggle) {
        personnelSolutionsToggle.addEventListener('click', () => {
            personnelSolutionsToggle.classList.add('bg-[#10B981]', 'text-white');
            personnelSolutionsToggle.classList.remove('text-gray-600');
            professionelSolutionsToggle.classList.remove('bg-[#10B981]', 'text-white');
            professionelSolutionsToggle.classList.add('text-gray-600');
            loadSolutionsContent('personnel');
        });

        professionelSolutionsToggle.addEventListener('click', () => {
            professionelSolutionsToggle.classList.add('bg-[#10B981]', 'text-white');
            professionelSolutionsToggle.classList.remove('text-gray-600');
            personnelSolutionsToggle.classList.remove('bg-[#10B981]', 'text-white');
            personnelSolutionsToggle.classList.add('text-gray-600');
            loadSolutionsContent('professionel');
        });

        // Load default content
        loadSolutionsContent('personnel');
    }

    if (aboutPersonnelToggle && aboutProfessionelToggle) {
        aboutPersonnelToggle.addEventListener('click', () => {
            aboutPersonnelToggle.classList.add('bg-[#10B981]', 'text-white');
            aboutPersonnelToggle.classList.remove('text-gray-600');
            aboutProfessionelToggle.classList.remove('bg-[#10B981]', 'text-white');
            aboutProfessionelToggle.classList.add('text-gray-600');
            loadAboutContent('personnel');
        });

        aboutProfessionelToggle.addEventListener('click', () => {
            aboutProfessionelToggle.classList.add('bg-[#10B981]', 'text-white');
            aboutProfessionelToggle.classList.remove('text-gray-600');
            aboutPersonnelToggle.classList.remove('bg-[#10B981]', 'text-white');
            aboutPersonnelToggle.classList.add('text-gray-600');
            loadAboutContent('professionel');
        });

        // Load default content
        loadAboutContent('personnel');
    }

    // Add click handlers for home page buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('services-btn')) {
            e.preventDefault();
            if (window.showSection) {
                window.showSection('services');
            }
        }
        if (e.target.classList.contains('solutions-btn')) {
            e.preventDefault();
            if (window.showSection) {
                window.showSection('solutions');
            }
        }
    });

    // Add pricing form handler if it exists on the page
    const devisForm = document.getElementById('devis-form');
    if (devisForm) {
        devisForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // This is now handled in contact.js
        });
    }
}

function initDetailButtons() {
    // Add event listeners for detail buttons
    document.querySelectorAll('.detail-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            showDetailModal(serviceId);
        });
    });

    // Add content for missing data-services
}

function showDetailModal(serviceId) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 modal-backdrop';
    
    const details = {
        'prospection': {
            title: 'Prospection de projets',
            content: `
                <p class="mb-4">Notre service de prospection de projets est conçu pour vous faire gagner un temps précieux tout en maximisant vos chances de succès.</p>
                <h4 class="font-semibold text-[#10B981] mb-2">Ce que nous faisons pour vous :</h4>
                <ul class="list-disc list-inside mb-4 text-gray-600">
                    <li>Visite complète des projets sélectionnés selon vos critères</li>
                    <li>Évaluation détaillée de la viabilité de chaque projet</li>
                    <li>Photos, vidéos et rapports complets</li>
                    <li>Analyse de l'environnement et du potentiel</li>
                    <li>Vérification des documents administratifs</li>
                </ul>
                <h4 class="font-semibold text-[#10B981] mb-2">Avantages :</h4>
                <p class="text-gray-600 mb-4">Économisez des semaines de recherches, évitez les déplacements inutiles, et prenez des décisions éclairées grâce à notre expertise locale.</p>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Processus détaillé :</h4>
                <div class="bg-gray-50 p-4 rounded-lg mb-4">
                    <p class="text-gray-700 text-sm mb-2"><strong>Phase 1 :</strong> Analyse de vos critères et besoins spécifiques</p>
                    <p class="text-gray-700 text-sm mb-2"><strong>Phase 2 :</strong> Sélection rigoureuse des projets correspondants</p>
                    <p class="text-gray-700 text-sm mb-2"><strong>Phase 3 :</strong> Visites sur site avec check-list détaillée</p>
                    <p class="text-gray-700 text-sm mb-2"><strong>Phase 4 :</strong> Production de rapports complets avec photos/vidéos</p>
                    <p class="text-gray-700 text-sm"><strong>Phase 5 :</strong> Recommandations personnalisées et comparatif</p>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Délais et tarifs :</h4>
                <p class="text-gray-600">Délai moyen : 3-5 jours ouvrables. Tarif : 300 DH/heure, forfait 10 heures : 2 700 DH (10% de réduction)</p>
            `
        },
        'rencontres-promoteurs': {
            title: 'Rencontres avec promoteurs',
            content: `
                <p class="mb-4">Nous organisons et gérons vos rendez-vous avec les promoteurs. Programmation flexible et accompagnement personnalisé.</p>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Nos services inclus :</h4>
                <ul class="list-disc list-inside mb-4 text-gray-600">
                    <li>Contact et négociation avec les promoteurs</li>
                    <li>Planification des rendez-vous selon votre agenda</li>
                    <li>Préparation des questions et points à aborder</li>
                    <li>Accompagnement pendant les réunions</li>
                    <li>Compte-rendu détaillé de chaque rencontre</li>
                </ul>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Types de rencontres :</h4>
                <div class="space-y-3 mb-4">
                    <div class="border-l-4 border-[#10B981] pl-4">
                        <h5 class="font-medium">Rencontres d'introduction</h5>
                        <p class="text-gray-600 text-sm">Premiers contacts, présentation des projets, échange initial</p>
                    </div>
                    <div class="border-l-4 border-blue-500 pl-4">
                        <h5 class="font-medium">Rencontres techniques</h5>
                        <p class="text-gray-600 text-sm">Aspects techniques, faisabilité, plans détaillés</p>
                    </div>
                    <div class="border-l-4 border-orange-500 pl-4">
                        <h5 class="font-medium">Rencontres commerciales</h5>
                        <p class="text-gray-600 text-sm">Négociations, conditions financières, modalités de paiement</p>
                    </div>
                    <div class="border-l-4 border-purple-500 pl-4">
                        <h5 class="font-medium">Rencontres finales</h5>
                        <p class="text-gray-600 text-sm">Finalisation, signatures, derniers ajustements</p>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Avantages de notre accompagnement :</h4>
                <p class="text-gray-600">Gain de temps, meilleure préparation, négociation optimisée, compréhension culturelle, langues locales maîtrisées.</p>
            `
        },
        'dossier-suivi': {
            title: 'Dossier de suivi',
            content: `
                <p class="mb-4">Création complète de votre dossier de suivi de projet. Documentation complète et organisée selon les standards professionnels.</p>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Contenu du dossier :</h4>
                <ul class="list-disc list-inside mb-4 text-gray-600">
                    <li>Résumé exécutif du projet</li>
                    <li>Analyse SWOT détaillée</li>
                    <li>Planning et jalons clés</li>
                    <li>Budget prévisionnel complet</li>
                    <li>Étude de risques</li>
                    <li>Plan d'action et mitigation</li>
                </ul>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Format professionnel :</h4>
                <div class="bg-gray-50 p-4 rounded-lg mb-4">
                    <p class="text-gray-700 mb-2"><strong>Structure modulaire :</strong> Chaque section est indépendante et peut être mise à jour séparément</p>
                    <p class="text-gray-700 mb-2"><strong>Tableaux de bord :</strong> Indicateurs clés de performance visuels et compréhensibles</p>
                    <p class="text-gray-700 mb-2"><strong>Annexes détaillées :</strong> Tous les documents justificatifs, photos, plans</p>
                    <p class="text-gray-700"><strong>Mises à jour :</strong> Révisions mensuelles inclues dans le service</p>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Outils utilisés :</h4>
                <p class="text-gray-600">Microsoft Project, Excel avancé, Power BI, outils de gestion de projet collaboratifs. Compatible avec tous les formats standards.</p>
            `
        },
        'gestion-administrative': {
            title: 'Gestion administrative',
            content: `
                <p class="mb-4">Nous nous occupons de toutes les démarches administratives. Légalisation, traduction, authentification, nous gérons l'ensemble du processus.</p>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Services couverts :</h4>
                <ul class="list-disc list-inside mb-4 text-gray-600">
                    <li>Traduction officielle de documents (arabe, français, anglais, espagnol)</li>
                    <li>Légalisation aux autorités compétentes</li>
                    <li>Authentification de signatures et documents</li>
                    <li>Obtention de visas et autorisations</li>
                    <li>Enregistrement auprès des autorités locales</li>
                    <li>Ouverture de comptes bancaires professionnels</li>
                </ul>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Procédures spécifiques :</h4>
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <div class="border border-gray-200 p-3 rounded-lg">
                        <h5 class="font-medium text-red-600 mb-2">Procédure express</h5>
                        <p class="text-gray-600 text-sm">Traitement prioritaire en 48h (majoré de 50%)</p>
                    </div>
                    <div class="border border-gray-200 p-3 rounded-lg">
                        <h5 class="font-medium text-blue-600 mb-2">Procédure standard</h5>
                        <p class="text-gray-600 text-sm">Délai normal de 5-7 jours ouvrables</p>
                    </div>
                    <div class="border border-gray-200 p-3 rounded-lg">
                        <h5 class="font-medium text-green-600 mb-2">Forfait complet</h5>
                        <p class="text-gray-600 text-sm">Pack tout inclus pour création d'entreprise</p>
                    </div>
                    <div class="border border-gray-200 p-3 rounded-lg">
                        <h5 class="font-medium text-purple-600 mb-2">Service premium</h5>
                        <p class="text-gray-600 text-sm">Accompagnement personnalisé + suivi</p>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Partenaires officiels :</h4>
                <p class="text-gray-600">Ministères, ambassades, notaires, avocats, experts-comptables. Relations établies pour des délais optimisés.</p>
            `
        },
        'processus-complet': {
            title: 'Processus complet',
            content: `
                <p class="mb-4">Accompagnement du début à la fin de votre projet. Un seul interlocuteur pour tout gérer, de la conception à la réalisation.</p>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Nos phases d'accompagnement :</h4>
                <div class="space-y-4 mb-4">
                    <div class="flex items-start">
                        <div class="bg-[#10B981] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                        <div>
                            <h5 class="font-medium">Phase d'initiation</h5>
                            <p class="text-gray-600 text-sm">Compréhension complète de vos besoins, objectifs et contraintes</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="bg-[#10B981] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                        <div>
                            <h5 class="font-medium">Phase de planification</h5>
                            <p class="text-gray-600 text-sm">Établissement d'un plan détaillé, budget, planning et jalons</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="bg-[#10B981] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                        <div>
                            <h5 class="font-medium">Phase d'exécution</h5>
                            <p class="text-gray-600 text-sm">Mise en œuvre coordonnée de toutes les activités</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="bg-[#10B981] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                        <div>
                            <h5 class="font-medium">Phase de suivi</h5>
                            <p class="text-gray-600 text-sm">Contrôle qualité, ajustements, validation finale</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="bg-[#10B981] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">5</div>
                        <div>
                            <h5 class="font-medium">Phase de clôture</h5>
                            <p class="text-gray-600 text-sm">Livraison finale, documentation, support post-projet</p>
                        </div>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Avantages clés :</h4>
                <div class="grid md:grid-cols-2 gap-3 mb-4">
                    <div class="flex items-center"><i class="fas fa-user-tie text-[#10B981] mr-2"></i><span class="text-gray-700">Interlocuteur unique dédié</span></div>
                    <div class="flex items-center"><i class="fas fa-clock text-[#10B981] mr-2"></i><span class="text-gray-700">Coordination optimisée des délais</span></div>
                    <div class="flex items-center"><i class="fas fa-shield-alt text-[#10B981] mr-2"></i><span class="text-gray-700">Responsabilité globale</span></div>
                    <div class="flex items-center"><i class="fas fa-chart-line text-[#10B981] mr-2"></i><span class="text-gray-700">Optimisation des coûts</span></div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Garanties incluses :</h4>
                <p class="text-gray-600">Satisfaction garantie, modifications incluses, support technique 6 mois après livraison, assurance qualité, conformité légale vérifiée.</p>
            `
        },
        // Solutions Content
        'voulez-investir': {
            title: 'Vous cherchez à investir ?',
            content: `
                <p class="mb-4">Nous trouvons les meilleures opportunités pour vous. Analyse complète, rapport détaillé, accompagnement personnalisé du début à la réalisation de votre investissement.</p>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Types d'investissements :</h4>
                <ul class="list-disc list-inside mb-4 text-gray-600">
                    <li>Immobilier résidentiel (appartements, villas)</li>
                    <li>Immobilier commercial (locaux, bureaux)</li>
                    <li>Immobilier touristique (riads, hôtels)</li>
                    <li>Projets de développement</li>
                    <li>Terres agricoles</li>
                    <li>Entreprises locales</li>
                </ul>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Notre processus d'analyse :</h4>
                <div class="space-y-3 mb-4">
                    <div class="flex items-start">
                        <i class="fas fa-chart-line text-[#10B981] mr-3 mt-1"></i>
                        <div>
                            <h5 class="font-medium">Analyse de marché</h5>
                            <p class="text-gray-600 text-sm">Tendances, prix moyens, perspectives d'évolution</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <i class="fas fa-calculator text-[#10B981] mr-3 mt-1"></i>
                        <div>
                            <h5 class="font-medium">Analyse financière</h5>
                            <p class="text-gray-600 text-sm">Rentabilité, ROI, cash-flow, fiscalité</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <i class="fas fa-exclamation-triangle text-[#10B981] mr-3 mt-1"></i>
                        <div>
                            <h5 class="font-medium">Analyse des risques</h5>
                            <p class="text-gray-600 text-sm">Juridique, politique, économique, social</p>
                        </div>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Zones d'investissement à Dakhla :</h4>
                <div class="grid md:grid-cols-3 gap-3 mb-4">
                    <div class="text-center p-3 bg-blue-100 rounded-lg">
                        <h5 class="font-medium text-blue-800">Centre-ville</h5>
                        <p class="text-gray-600 text-sm">Commerce et services</p>
                    </div>
                    <div class="text-center p-3 bg-green-100 rounded-lg">
                        <h5 class="font-medium text-green-800">Zone touristique</h5>
                        <p class="text-gray-600 text-sm">Hôtels et loisirs</p>
                    </div>
                    <div class="text-center p-3 bg-orange-100 rounded-lg">
                        <h5 class="font-medium text-orange-800">Zone industrielle</h5>
                        <p class="text-gray-600 text-sm">Entrepôts et usines</p>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Garanties :</h4>
                <p class="text-gray-600">Analyse objective et impartiale, transparence totale, accompagnement juridique, suivi post-investissement, possibilité de revente assistée.</p>
            `
        },
        'voulez-creer-entreprise': {
            title: 'Vous voulez créer votre entreprise ?',
            content: `
                <p class="mb-4">Nous gérons toutes les démarches pour vous. De l'idée à l'implémentation, nous sommes à vos côtés pour transformer votre projet entrepreneurial en réalité.</p>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Types de structures :</h4>
                <ul class="list-disc list-inside mb-4 text-gray-600">
                    <li>SARL (Société à Responsabilité Limitée)</li>
                    <li>SA (Société Anonyme)</li>
                    <li>SNC (Société en Nom Collectif)</li>
                    <li>Société en commandite</li>
                    <li>Entreprise individuelle</li>
                    <li> succursales étrangères</li>
                </ul>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Étapes de création :</h4>
                <div class="space-y-3 mb-4">
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <h5 class="font-medium mb-2">1. Conception du projet</h5>
                        <p class="text-gray-600 text-sm">Étude de faisabilité, business plan, choix de la structure juridique</p>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <h5 class="font-medium mb-2">2. Formalités administratives</h5>
                        <p class="text-gray-600 text-sm">Réservation de raison sociale, rédaction des statuts</p>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <h5 class="font-medium mb-2">3. Immatriculation</h5>
                        <p class="text-gray-600 text-sm">Dépôt du capital, enregistrement au registre de commerce</p>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <h5 class="font-medium mb-2">4. Finalisation</h5>
                        <p class="text-gray-600 text-sm">Obtention du numéro ICE, inscription à la TVA</p>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Secteurs porteurs à Dakhla :</h4>
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <div class="flex items-center"><i class="fas fa-fish text-blue-500 mr-2"></i><span class="text-gray-700">Pêche et transformation</span></div>
                    <div class="flex items-center"><i class="fas fa-water text-green-500 mr-2"></i><span class="text-gray-700">Aquaculture</span></div>
                    <div class="flex items-center"><i class="fas fa-plane text-orange-500 mr-2"></i><span class="text-gray-700">Tourisme</span></div>
                    <div class="flex items-center"><i class="fas fa-industry text-purple-500 mr-2"></i><span class="text-gray-700">Industries portuaires</span></div>
                    <div class="flex items-center"><i class="fas fa-seedling text-green-600 mr-2"></i><span class="text-gray-700">Agriculture</span></div>
                    <div class="flex items-center"><i class="fas fa-laptop text-blue-600 mr-2"></i><span class="text-gray-700">Services numériques</span></div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Avantages Dakhla :</h4>
                <p class="text-gray-600">Zone franche avantageuse, accès aux marchés africains et européens, main d'œuvre qualifiée, infrastructures en développement, soutien gouvernemental.</p>
            `
        },
        'avez-besoin-reseau': {
            title: 'Vous avez besoin d\'un réseau ?',
            content: `
                <p class="mb-4">Nous vous connectons aux bons partenaires. Événements networking, introductions ciblées, relations durables pour développer votre activité à Dakhla.</p>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Types d'événements :</h4>
                <ul class="list-disc list-inside mb-4 text-gray-600">
                    <li>Petits-déjeuners d'affaires mensuels</li>
                    <li>Afterwork networking</li>
                    <li>Conférences et séminaires thématiques</li>
                    <li>Tables rondes sectorielles</li>
                    <li>Expositions et foires commerciales</li>
                    <li>Dîners de gala et événements officiels</li>
                </ul>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Profils de participants :</h4>
                <div class="space-y-3 mb-4">
                    <div class="flex items-start">
                        <i class="fas fa-user-tie text-[#10B981] mr-3 mt-1"></i>
                        <div>
                            <h5 class="font-medium">Dirigeants d'entreprises</h5>
                            <p class="text-gray-600 text-sm">PDG, directeurs généraux, entrepreneurs locaux</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <i class="fas fa-briefcase text-[#10B981] mr-3 mt-1"></i>
                        <div>
                            <h5 class="font-medium">Investisseurs</h5>
                            <p class="text-gray-600 text-sm">Business angels, fonds d'investissement, banquiers</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <i class="fas fa-handshake text-[#10B981] mr-3 mt-1"></i>
                        <div>
                            <h5 class="font-medium">Partenaires institutionnels</h5>
                            <p class="text-gray-600 text-sm">Représentants d'organismes publics et parapublics</p>
                        </div>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Secteurs représentés :</h4>
                <div class="grid md:grid-cols-3 gap-3 mb-4">
                    <div class="text-center p-2 bg-blue-100 rounded-lg">
                        <i class="fas fa-plane text-blue-600 text-xl mb-1"></i>
                        <h5 class="font-medium text-blue-800">Tourisme</h5>
                    </div>
                    <div class="text-center p-2 bg-green-100 rounded-lg">
                        <i class="fas fa-fish text-green-600 text-xl mb-1"></i>
                        <h5 class="font-medium text-green-800">Pêche</h5>
                    </div>
                    <div class="text-center p-2 bg-orange-100 rounded-lg">
                        <i class="fas fa-building text-orange-600 text-xl mb-1"></i>
                        <h5 class="font-medium text-orange-800">Immobilier</h5>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Formats d'événements :</h4>
                <p class="text-gray-600">Petits groupes de 10-15 personnes pour des échanges qualitatifs, grands rassemblements jusqu'à 100 participants, formats hybrides avec participation à distance.</p>
            `
        },
        // Personal Solutions
        'organisez-evenement': {
            title: 'Vous organisez un événement ?',
            content: `
                <p class="mb-4">Nous le planifions de A à Z. Anniversaires, fiançailles, célébrations, tout est possible avec une attention méticuleuse portée à chaque détail.</p>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Types d'événements :</h4>
                <ul class="list-disc list-inside mb-4 text-gray-600">
                    <li>Anniversaires et fêtes personnelles</li>
                    <li>Fiançailles et demandes en mariage</li>
                    <li>Mariages et cérémonies</li>
                    <li>Baby showers et gender reveal</li>
                    <li>Dîners de gala et réceptions</li>
                    <li>Événements corporatifs et team-building</li>
                </ul>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Services inclus :</h4>
                <div class="space-y-3 mb-4">
                    <div class="bg-pink-50 p-3 rounded-lg">
                        <h5 class="font-medium text-pink-800 mb-2">Décoration et ambiance</h5>
                        <p class="text-gray-600 text-sm">Thèmes personnalisés, fleurs, éclairage, accessoires</p>
                    </div>
                    <div class="bg-yellow-50 p-3 rounded-lg">
                        <h5 class="font-medium text-yellow-800 mb-2">Restauration et boissons</h5>
                        <p class="text-gray-600 text-sm">Menus sur mesure, cocktails, gâteaux personnalisés</p>
                    </div>
                    <div class="bg-purple-50 p-3 rounded-lg">
                        <h5 class="font-medium text-purple-800 mb-2">Animation et divertissement</h5>
                        <p class="text-gray-600 text-sm">DJ, groupes musicaux, spectacles, activités</p>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Lieux privilégiés :</h4>
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <div class="border border-gray-200 p-3 rounded-lg">
                        <h5 class="font-medium">Plages privées</h5>
                        <p class="text-gray-600 text-sm">Cérémonies au coucher du soleil</p>
                    </div>
                    <div class="border border-gray-200 p-3 rounded-lg">
                        <h5 class="font-medium">Riads traditionnels</h5>
                        <p class="text-gray-600 text-sm">Dîners intimes et authentiques</p>
                    </div>
                    <div class="border border-gray-200 p-3 rounded-lg">
                        <h5 class="font-medium">Hôtels de luxe</h5>
                        <p class="text-gray-600 text-sm">Réceptions grandioses</p>
                    </div>
                    <div class="border border-gray-200 p-3 rounded-lg">
                        <h5 class="font-medium">Désert et dunes</h5>
                        <p class="text-gray-600 text-sm">Expériences uniques et mémorables</p>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Forfaits événements :</h4>
                <p class="text-gray-600">Forfait Intime (2-10 personnes), Forfait Célébration (10-50 personnes), Forfait Grand Événement (50+ personnes). Personnalisation complète selon budget et préférences.</p>
            `
        },
        'souhaitez-explorer': {
            title: 'Vous souhaitez explorer ?',
            content: `
                <p class="mb-4">Nous vous guidons vers les meilleurs endroits. Circuits personnalisés, expériences uniques, souvenirs inoubliables de Dakhla et ses environs.</p>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Circuits proposés :</h4>
                <ul class="list-disc list-inside mb-4 text-gray-600">
                    <li>Visite de la ville et marchés locaux</li>
                    <li>Excursion dans le désert et dunes de sable</li>
                    <li>Découverte de l'oasis et palmeraies</li>
                    <li>Observation des oiseaux migrateurs</li>
                    <li>Exploration des plages sauvages</li>
                    <li>Rencontre avec les communautés locales</li>
                </ul>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Modes d'exploration :</h4>
                <div class="space-y-3 mb-4">
                    <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div>
                            <h5 class="font-medium">4x4 avec chauffeur</h5>
                            <p class="text-gray-600 text-sm">Confort et sécurité, accès aux endroits reculés</p>
                        </div>
                        <span class="text-[#10B981] font-semibold">800 DH/jour</span>
                    </div>
                    <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div>
                            <h5 class="font-medium">VTT et VTC</h5>
                            <p class="text-gray-600 text-sm">Sportif et écologique, liberté totale</p>
                        </div>
                        <span class="text-[#10B981] font-semibold">300 DH/jour</span>
                    </div>
                    <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div>
                            <h5 class="font-medium">Marche et randonnée</h5>
                            <p class="text-gray-600 text-sm">Doux et contemplatif, rythme adapté</p>
                        </div>
                        <span class="text-[#10B981] font-semibold">200 DH/jour</span>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Expériences uniques :</h4>
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <div class="text-center p-4 bg-orange-50 rounded-lg">
                        <i class="fas fa-sun text-orange-500 text-2xl mb-2"></i>
                        <h5 class="font-medium text-orange-800">Lever de soleil sur la lagune</h5>
                        <p class="text-gray-600 text-sm">Moment magique et apaisant</p>
                    </div>
                    <div class="text-center p-4 bg-yellow-50 rounded-lg">
                        <i class="fas fa-star text-yellow-500 text-2xl mb-2"></i>
                        <h5 class="font-medium text-yellow-800">Nuit dans le désert</h5>
                        <p class="text-gray-600 text-sm">Ciel étoilé et silence absolu</p>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Guides locaux :</h4>
                <p class="text-gray-600">Guides certifiés, multilingues, passionnés par leur région, connaissance approfondie de la faune, la flore, l'histoire et la culture locales.</p>
            `
        },
        'voulez-faire-shopping': {
            title: 'Vous voulez faire du shopping ?',
            content: `
                <p class="mb-4">Nous vous conseillons et vous accompagnons. Boutiques locales, artisanat, produits authentiques, pour des achats uniques et mémorables.</p>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Types de produits :</h4>
                <ul class="list-disc list-inside mb-4 text-gray-600">
                    <li>Artisanat traditionnel marocain (poterie, tissage)</li>
                    <li>Produits locaux (huile d'argan, épices, thé)</li>
                    <li>Vêtements et accessoires en cuir</li>
                    <li>Bijoux berbères traditionnels</li>
                    <li>Tapis et textiles artisanaux</li>
                    <li>Produits alimentaires locaux (datues, miel)</li>
                </ul>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Lieux de shopping :</h4>
                <div class="space-y-3 mb-4">
                    <div class="bg-pink-50 p-3 rounded-lg">
                        <h5 class="font-medium text-pink-800 mb-2">Souks traditionnels</h5>
                        <p class="text-gray-600 text-sm">Ambiance authentique, négociation, produits uniques</p>
                    </div>
                    <div class="bg-blue-50 p-3 rounded-lg">
                        <h5 class="font-medium text-blue-800 mb-2">Boutiques artisanales</h5>
                        <p class="text-gray-600 text-sm">Qualité supérieure, créations originales</p>
                    </div>
                    <div class="bg-green-50 p-3 rounded-lg">
                        <h5 class="font-medium text-green-800 mb-2">Coopératives féminines</h5>
                        <p class="text-gray-600 text-sm">Soutien aux communautés, produits éthiques</p>
                    </div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Services shopping :</h4>
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <div class="flex items-center"><i class="fas fa-user-tie text-[#10B981] mr-2"></i><span class="text-gray-700">Accompagnement personnalisé</span></div>
                    <div class="flex items-center"><i class="fas fa-percentage text-[#10B981] mr-2"></i><span class="text-gray-700">Négociation des prix</span></div>
                    <div class="flex items-center"><i class="fas fa-shipping-fast text-[#10B981] mr-2"></i><span class="text-gray-700">Livraison internationale</span></div>
                    <div class="flex items-center"><i class="fas fa-certificate text-[#10B981] mr-2"></i><span class="text-gray-700">Certificats d'authenticité</span></div>
                </div>
                
                <h4 class="font-semibold text-[#10B981] mb-2">Achats responsables :</h4>
                <p class="text-gray-600">Commerce équitable, produits durables, respect de l'environnement, soutien aux artisans locaux, emballages recyclables, certification bio quand disponible.</p>
            `
        }
    };

    const detail = details[serviceId] || { title: 'Détails', content: 'Contenu détaillé non disponible.' };
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 relative">
            <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition-colors duration-300" onclick="this.closest('.fixed').remove()">
                <i class="fas fa-times"></i>
            </button>
            <h3 class="text-2xl font-bold text-gray-800 mb-6 pr-8">${detail.title}</h3>
            <div class="text-gray-700 leading-relaxed">
                ${detail.content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function getAboutContent(type) {
    if (type === 'personnel') {
        return `
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h3 class="text-2xl font-semibold mb-6 text-center">Services Personnels</h3>
                <p class="text-gray-700 text-justify mb-6">
                    Votre vie personnelle mérite le même niveau d'attention que vos projets professionnels. Notre équipe dédiée aux services personnels vous accompagne dans tous vos besoins quotidiens et exceptionnels à Dakhla. De la recherche de logement à l'organisation de vos loisirs, nous transformons votre séjour en une expérience sans souci.
                </p>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-[#F8F6F0] p-6 rounded-lg">
                        <h4 class="font-semibold text-[#10B981] mb-3">Accompagnement quotidien</h4>
                        <p class="text-gray-600">Nous nous occupons de tous les aspects pratiques de votre vie quotidienne pour que vous puissiez profiter pleinement de votre temps.</p>
                    </div>
                    <div class="bg-[#F8F6F0] p-6 rounded-lg">
                        <h4 class="font-semibold text-[#10B981] mb-3">Services sur mesure</h4>
                        <p class="text-gray-600">Chaque client est unique, nos services sont adaptés à vos préférences personnelles et à votre mode de vie.</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h3 class="text-2xl font-semibold mb-6 text-center">Services Professionnels</h3>
                <p class="text-gray-700 text-justify mb-6">
                    Dans le monde des affaires, le temps c'est de l'argent. Notre service professionnel vous permet de vous concentrer sur votre cœur de métier pendant que nous gérons tous les aspects logistiques et administratifs de vos projets. Avec notre expertise locale et notre réseau solide, vos projets prennent vie plus rapidement et plus efficacement.
                </p>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-[#F8F6F0] p-6 rounded-lg">
                        <h4 class="font-semibold text-[#10B981] mb-3">Optimisation des processus</h4>
                        <p class="text-gray-600">Nous rationalisons vos démarches professionnelles pour maximiser l'efficacité et minimiser les délais.</p>
                    </div>
                    <div class="bg-[#F8F6F0] p-6 rounded-lg">
                        <h4 class="font-semibold text-[#10B981] mb-3">Réseau d'experts</h4>
                        <p class="text-gray-600">Accédez à notre vaste réseau de partenaires professionnels et d'experts locaux.</p>
                    </div>
                </div>
            </div>
        `;
    }
}

function getServicesContent(type) {
    if (type === 'professionel') {
        return `
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-search-location text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Prospection de projets</h3>
                    <p class="text-gray-600 mb-4">Nous visitons les projets immobiliers et d'investissement pour vous. Gain de temps garanti et analyses détaillées.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300" data-service="prospection">
                        Plus de détails
                    </button>
                </div>
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-chart-line text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Analyse du marché</h3>
                    <p class="text-gray-600 mb-4">Nous nous informons sur les tendances du marché et vous fournissons des rapports détaillés.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300" data-service="analyse-marche">
                        Plus de détails
                    </button>
                </div>
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-users text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Rencontres avec promoteurs</h3>
                    <p class="text-gray-600 mb-4">Nous organisons et gérons vos rendez-vous avec les promoteurs. Programmation flexible.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Plus de détails
                    </button>
                </div>
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-folder-open text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Dossier de suivi</h3>
                    <p class="text-gray-600 mb-4">Création complète de votre dossier de suivi de projet. Documentation complète et organisée.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Plus de détails
                    </button>
                </div>
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-file-alt text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Gestion administrative</h3>
                    <p class="text-gray-600 mb-4">Nous nous occupons de toutes les démarches administratives. Légalisation, traduction, authentification.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Plus de détails
                    </button>
                </div>
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-cogs text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Processus complet</h3>
                    <p class="text-gray-600 mb-4">Accompagnement du début à la fin de votre projet. Un seul interlocuteur pour tout gérer.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Plus de détails
                    </button>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-home text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Recherche de logement</h3>
                    <p class="text-gray-600 mb-4">Nous trouvons votre logement idéal selon vos critères. Appartements, villas, riads, nous avons tout ce qu'il vous faut.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Plus de détails
                    </button>
                </div>
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-plane text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Organisation de voyages</h3>
                    <p class="text-gray-600 mb-4">Planification complète de vos déplacements personnels. Vols, hébergement, itinéraires sur mesure.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Plus de détails
                    </button>
                </div>
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-car text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Location de véhicules</h3>
                    <p class="text-gray-600 mb-4">Véhicules adaptés à vos besoins personnels. Berlines, SUV, voitures de luxe, avec ou sans chauffeur.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Plus de détails
                    </button>
                </div>
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-utensils text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Réservations restaurants</h3>
                    <p class="text-gray-600 mb-4">Découvrez la gastronomie locale et réservez vos tables. Nous connaissons les meilleurs endroits.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Plus de détails
                    </button>
                </div>
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-spa text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Activités bien-être</h3>
                    <p class="text-gray-600 mb-4">Moments de détente et relaxation organisés pour vous. Spa, yoga, méditation, soins personnalisés.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Plus de détails
                    </button>
                </div>
                <div class="service-card bg-[#F8F6F0] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <i class="fas fa-camera text-4xl text-[#10B981] mb-4 mx-auto"></i>
                    <h3 class="text-xl font-semibold mb-3">Photographe personnel</h3>
                    <p class="text-gray-600 mb-4">Capturez vos moments précieux avec nos photographes professionnels. Séances photo, événements, portraits.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Plus de détails
                    </button>
                </div>
            </div>
        `;
    }
}

function getSolutionsContent(type) {
    if (type === 'professionel') {
        return `
            <div class="grid md:grid-cols-3 gap-8">
                <div class="solution-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="bg-[#10B981] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-search-dollar text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-center">Vous cherchez à investir ?</h3>
                    <p class="text-gray-600 text-center mb-4">Nous trouvons les meilleures opportunités pour vous. Analyse complète, rapport détaillé, accompagnement personnalisé.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 w-full">
                        Plus de détails
                    </button>
                </div>
                <div class="solution-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="bg-[#10B981] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-building text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-center">Vous voulez créer votre entreprise ?</h3>
                    <p class="text-gray-600 text-center mb-4">Nous gérons toutes les démarches pour vous. De l'idée à l'implémentation, nous sommes à vos côtés.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 w-full">
                        Plus de détails
                    </button>
                </div>
                <div class="solution-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="bg-[#10B981] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-network-wired text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-center">Vous avez besoin d'un réseau ?</h3>
                    <p class="text-gray-600 text-center mb-4">Nous vous connectons aux bons partenaires. Événements networking, introductions ciblées, relations durables.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 w-full">
                        Plus de détails
                    </button>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="grid md:grid-cols-3 gap-8">
                <div class="solution-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="bg-[#10B981] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-calendar-alt text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-center">Vous organisez un événement ?</h3>
                    <p class="text-gray-600 text-center mb-4">Nous le planifions de A à Z. Anniversaires, fiançailles, célébrations, tout est possible.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 w-full">
                        Plus de détails
                    </button>
                </div>
                <div class="solution-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="bg-[#10B981] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-route text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-center">Vous souhaitez explorer ?</h3>
                    <p class="text-gray-600 text-center mb-4">Nous vous guidons vers les meilleurs endroits. Circuits personnalisés, expériences uniques, souvenirs inoubliables.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 w-full">
                        Plus de détails
                    </button>
                </div>
                <div class="solution-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="bg-[#10B981] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-shopping-bag text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-center">Vous voulez faire du shopping ?</h3>
                    <p class="text-gray-600 text-center mb-4">Nous vous conseillons et vous accompagnons. Boutiques locales, artisanat, produits authentiques.</p>
                    <button class="detail-btn bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 w-full">
                        Plus de détails
                    </button>
                </div>
            </div>
        `;
    }
}