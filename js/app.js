/* ========================================
 Phase 1 : 20% - Initialisation et mise à jour temps réel
 ======================================== */

 // VARIABLES GLOBALES
    //variable tableau vide prêt à être utilisé
let experiences=[];
let education=[];
let skills=[];

// INITIALISATION AU CHARGEMENT DE LA PAGE

document.addEventListener('DOMContentLoaded',function(){
    console.log('🚀 Application Générateur de CV initialisée');
    console.log('📅 Date de chargement:', new Date().toLocaleString('fr-FR'));

    setupEventListeners();
    updatePreview(); //Son rôle est de mettre à jour tout l’aperçu du CV lorsque l’utilisateur modifie ses informations.

    console.log('✅ Événements configurés avec succès');
});

// CONFIGURATION DES EVENT LISTENERS

function setupEventListeners() {
    // Liste des champs d'informations personnelles
    const personalFields = [
        'fullName', 
        'jobTitle', 
        'email', 
        'phone', 
        'address', 
        'linkedin', 
        'summary'
    ];
    
    // Ajouter un event listener sur chaque champ
    personalFields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element) {
            element.addEventListener('input', updatePreview);
            console.log(`✓ Event listener ajouté sur: ${fieldId}`);
        }
    });
}

// MISE À JOUR DE LA PRÉVISUALISATION COMPLÈTE

function updatePreview() {
    updatePersonalInfo();  //Met à jour la section informations personnelles du CV (nom, email, téléphone…).
    updateExperiencesPreview();  //Met à jour la section expériences professionnelles.Elle peut récupérer les postes, entreprises, dates, et les afficher dans l’aperçu.
    updateEducationPreview();  //Met à jour la section formations / diplômes.Affiche les écoles, diplômes, années, etc.
    updateSkillsPreview();    //Met à jour la section compétences du CV.
}

// MISE À JOUR DES INFORMATIONS PERSONNELLES

function updatePersonalInfo() {
    // Récupérer les valeurs des champs ou valeurs par défaut
    const name = document.getElementById('fullName').value || 'Votre Nom';
    const title = document.getElementById('jobTitle').value || 'Votre Titre Professionnel';
    const email = document.getElementById('email').value || 'email@exemple.com';
    const phone = document.getElementById('phone').value || '+216 00 000 000';
    const address = document.getElementById('address').value || 'Votre Adresse';
    const linkedin = document.getElementById('linkedin').value || 'LinkedIn';
    const summary = document.getElementById('summary').value;

    // Mettre à jour les éléments du CV
    document.getElementById('preview-name').textContent = name;
    document.getElementById('preview-title').textContent = title;
    
    // Ajouter les icônes si elles ne sont pas déjà présentes
    document.getElementById('preview-email').textContent = 
        email.startsWith('📧') ? email : '📧 ' + email;
    document.getElementById('preview-phone').textContent = 
        phone.startsWith('📱') ? phone : '📱 ' + phone;
    document.getElementById('preview-address').textContent = 
        address.startsWith('📍') ? address : '📍 ' + address;
    document.getElementById('preview-linkedin').textContent = 
        linkedin.startsWith('🔗') ? linkedin : '🔗 ' + linkedin;

    // Gérer l'affichage de la section résumé
    const summarySection = document.getElementById('summary-section');
    if (summary && summary.trim() !== '') {
        summarySection.style.display = 'block';
        document.getElementById('preview-summary').textContent = summary;
    } else {
        summarySection.style.display = 'none';
    }
}

// MISE À JOUR PRÉVISUALISATION EXPÉRIENCES

function updateExperiencesPreview() {
    const container = document.getElementById('preview-experiences');
    
    if (experiences.length === 0) {
        container.innerHTML = '<div class="empty-state">Aucune expérience ajoutée</div>';
        return;
    }

    // TODO: À implémenter dans la phase suivante (80%)
    console.log('Expériences à afficher:', experiences.length);
}

// MISE À JOUR PRÉVISUALISATION FORMATIONS

function updateEducationPreview() {
    const container = document.getElementById('preview-education');
    
    if (education.length === 0) {
        container.innerHTML = '<div class="empty-state">Aucune formation ajoutée</div>';
        return;
    }

    // TODO: À implémenter dans la phase suivante (80%)
    console.log('Formations à afficher:', education.length);
}

// MISE À JOUR PRÉVISUALISATION COMPÉTENCES

function updateSkillsPreview() {
    const container = document.getElementById('preview-skills');
    
    if (skills.length === 0) {
        container.innerHTML = '<div class="empty-state">Aucune compétence ajoutée</div>';
        return;
    }

    // TODO: À implémenter dans la phase suivante (80%)
    console.log('Compétences à afficher:', skills.length);
}

// FONCTION UTILITAIRE - Formatage des dates

function formatDate(dateString) {
    if (!dateString) return '';
    
    const [year, month] = dateString.split('-');
    const months = [
        'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin',
        'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'
    ];
    
    return `${months[parseInt(month) - 1]} ${year}`;
}

// MESSAGES DE DEBUG

console.log('📦 Variables globales initialisées:');
console.log('  - experiences:', experiences);
console.log('  - education:', education);
console.log('  - skills:', skills);

// NOTE : 80% RESTANT À IMPLÉMENTER
// - Gestion des expériences (ajouter, modifier, supprimer)
// - Gestion des formations (ajouter, modifier, supprimer)
// - Gestion des compétences (ajouter, supprimer)
// - Sauvegarde des données
// - Génération PDF
// - Fonction d'impression
// ========================================

console.log('✅ app.js chargé avec succès - Phase 1 (20%)');
console.log('⏳ 80% du JavaScript restant à implémenter');