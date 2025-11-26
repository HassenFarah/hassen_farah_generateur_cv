/* ========================================
 Phase 1 : 20% - Initialisation et mise à jour temps réel
 PHASE 2 : 40% SUPPLÉMENTAIRE
 Total : 60% du JavaScript
 GESTION DES EXPÉRIENCES ET FORMATIONS
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
    setupButtonListeners();
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

// CONFIGURATION DES BOUTONS

function setupButtonListeners() {
    // Boutons d'ajout
    document.getElementById('add-experience-btn').addEventListener('click', addExperience);
    document.getElementById('add-education-btn').addEventListener('click', addEducation);
    document.getElementById('add-skill-btn').addEventListener('click', addSkill);
    
    // Event listener pour la touche Enter sur le champ compétence
    document.getElementById('skillInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill();
        }
    });
    
    console.log('✓ Boutons configurés');
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

 /*========================================
 CONFIGURATION DES BOUTONS PRINCIPAUX:
 Ces trois lignes servent à connecter les boutons HTML avec les fonctions JavaScript 
 qui ajoutent des éléments (expériences, formations, compétences) dans le CV.
========================================*/
document.getElementById('add-experience-btn').addEventListener('click', addExperience);
document.getElementById('add-education-btn').addEventListener('click', addEducation);
document.getElementById('add-skill-btn').addEventListener('click', addSkill);

// Event listener pour la touche Enter sur le champ compétence
/*Quand l’utilisateur écrit une compétence 
et appuie sur Enter, ton application ajoute 
directement cette compétence 
sans qu’il ait besoin de cliquer sur le bouton.*/
document.getElementById('skillInput').addEventListener('keypress',function(e){
    if(e.key =='Enter'){
        e.preventDefault();//Empêche l’input de faire l’action par défaut de Enter (comme valider un formulaire ou faire un saut de ligne).
        addSkill();
    }
});
/*========================================
 GESTION DES EXPÉRIENCES PROFESSIONNELLES
 ========================================*/
 /**
 * Ajoute une nouvelle expérience professionnelle
 */
function addExperience (){
    const id=Date.now(); // ID unique basé sur le timestamp
    const exp={
        id:id,
        company:'',
        position:'',
        startDate:'',
        endDate:'',
        description:''
    };
    experiences.push(exp);
    renderExperiences();
    updatePreview();

    console.log('✅ Expérience ajoutée. Total:', experiences.length);
}

/**
 * Affiche toutes les expériences dans le formulaire
 */

function renderExperiences(){
    const container =document.getElementById('experiences-container');//On va chercher la div dans le HTML où on veut afficher les expériences.
    container.innerHTML='';//On vide le conteneur avant d’ajouter les nouvelles➡️ Évite d’afficher les expériences en double

    //On parcourt toutes les expériences du tableau
    experiences.forEach((exp)=>{
        const expDiv =document.createElement('div'); //On crée une div pour cette expérience
        expDiv.className='dynamic-section';
        //remplir cette div avec du HTML fabriqué en JavaScript.
        expDiv.innerHTML=`
            <!--1️⃣ Le bouton supprimer sert à enlever une expérience du formulaire. -->
            <button class="btn btn-danger" onclick="removeExperience(${exp.id})">x</button> 
            <!-- 2️⃣ Champ "Entreprise" permet à l’utilisateur d’écrire le nom de l’entreprise.-->
            <div class="form-group">
                <label>Entreprise</label>
                <input type="text" value="${exp.company}"
                    onchange="updateExperience(${exp.id},'company',this.value)">
            </div>
            <!--3️⃣ Champ "Poste"-->
            <div class="form-group">
                <label>Poste</label>
                <input type="text" value="${exp.position}" 
                    onchange="updateExperience(${exp.id}, 'position', this.value)">
            </div>
            <!--4️⃣ Champ "Date de début" L’utilisateur choisit le mois de début de l’expérience.-->
            <div class="form-group">
                <label>Date de début</label>
                <input type="month" value="${exp.startDate}" 
                    onchange="updateExperience(${exp.id}, 'startDate', this.value)">
            </div>
            <!--5️⃣ Champ "Date de fin" Permet d’indiquer quand l’expérience s'est terminée.-->
            <div class="form-group">
                <label>Date de fin</label>
                <input type="month" value="${exp.endDate}" 
                    onchange="updateExperience(${exp.id}, 'endDate', this.value)">
            </div>
            <!--6️⃣ Zone de texte "Description" L’utilisateur peut écrire les missions, tâches, responsabilités.-->
            <div class="form-group">
                <label>Description</label>
                <textarea onchange="updateExperience(${exp.id}, 'description', this.value)">${exp.description}</textarea>
            </div>

        `;
        container.appendChild(expDiv);//On ajoute la div générée dans le conteneur
    });

    console.log('🔄 Expériences rendues:', experiences.length);//Affiche le nombre total d’expériences affichées.
}
/**
 * Met à jour un champ d'une expérience
 */
//➡️ Cette fonction est appelée depuis les inputs HTML avec onchange.
function updateExperience(id,field,value){
    //cherche dans le tableau l’expérience avec le même ID
    experiences=experiences.find(e=>e.id == id);
    if(exp){
        exxp[field]=value;
        updatePreview();
        console.log(`📝 Expérience ${id} mise à jour: ${field} = ${value}`);
    }
}
/**
 * Supprime une expérience
 */
//Cette fonction est appelée quand l’utilisateur clique sur le bouton “✕” d’une expérience
function removeExperience(id) {
    const initialLength = experiences.length;//On garde le nombre d’expériences avant suppression Utile pour le message de console qui dira combien restent
    experiences = experiences.filter(e => e.id !== id);//crée un nouveau tableau contenant toutes les expériences sauf celle avec l’ID donné
    renderExperiences();
    updatePreview();
    console.log(`🗑️ Expérience ${id} supprimée. Restantes: ${experiences.length}/${initialLength}`);
}

/**
 * Met à jour l'affichage des expériences dans le CV
 */
function updateExperiencesPreview() {
    const container = document.getElementById('preview-experiences');
    //Si le tableau experiences est vide → on affiche un message “Aucune expérience ajoutée”
    if (experiences.length === 0) {
        container.innerHTML = '<div class="empty-state">Aucune expérience ajoutée</div>';
        return;
    }
    //transforme chaque expérience en bloc HTML
    container.innerHTML = experiences.map(exp => `
        <div class="cv-item">
            <div class="cv-item-title">${exp.position || 'Poste'}</div>
            <div class="cv-item-subtitle">${exp.company || 'Entreprise'}</div>
            <div class="cv-item-date">${formatDate(exp.startDate)} - ${exp.endDate ? formatDate(exp.endDate) : 'Présent'}</div>
            <div class="cv-item-description">${exp.description || ''}</div>
        </div>
    `).join('');//combine tous les blocs en une seule chaîne de caractères
}

/* ========================================
 GESTION DES FORMATIONS
  ========================================*/
/**
 * Ajoute une nouvelle formation
 */
function addEducation() {
    const id = Date.now();
    const edu = {
        id: id,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        description: ''
    };
    
    education.push(edu);
    renderEducation();
    updatePreview();
    
    console.log('✅ Formation ajoutée. Total:', education.length);
}
/**
 * Affiche toutes les formations dans le formulaire
 */
function renderEducation() {
    const container = document.getElementById('education-container');
    container.innerHTML = '';
    
    education.forEach((edu) => {
        const eduDiv = document.createElement('div');
        eduDiv.className = 'dynamic-section';
        eduDiv.innerHTML = `
            <button class="btn btn-danger" onclick="removeEducation(${edu.id})">✕</button>
            <div class="form-group">
                <label>École/Université</label>
                <input type="text" value="${edu.school}" 
                    onchange="updateEducation(${edu.id}, 'school', this.value)">
            </div>
            <div class="form-group">
                <label>Diplôme</label>
                <input type="text" value="${edu.degree}" 
                    onchange="updateEducation(${edu.id}, 'degree', this.value)">
            </div>
            <div class="form-group">
                <label>Date de début</label>
                <input type="month" value="${edu.startDate}" 
                    onchange="updateEducation(${edu.id}, 'startDate', this.value)">
            </div>
            <div class="form-group">
                <label>Date de fin</label>
                <input type="month" value="${edu.endDate}" 
                    onchange="updateEducation(${edu.id}, 'endDate', this.value)">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea onchange="updateEducation(${edu.id}, 'description', this.value)">${edu.description}</textarea>
            </div>
        `;
        container.appendChild(eduDiv);
    });
    
    console.log('🔄 Formations rendues:', education.length);
}
/**
 * Met à jour un champ d'une formation
 */
function updateEducation(id, field, value) {
    const edu = education.find(e => e.id === id);
    if (edu) {
        edu[field] = value;
        updatePreview();
        console.log(`📝 Formation ${id} mise à jour: ${field} = ${value}`);
    }
}
/**
 * Supprime une formation
 */
function removeEducation(id) {
    const initialLength = education.length;
    education = education.filter(e => e.id !== id);
    renderEducation();
    updatePreview();
    console.log(`🗑️ Formation ${id} supprimée. Restantes: ${education.length}/${initialLength}`);
}
/**
 * Met à jour l'affichage des formations dans le CV
 */
function updateEducationPreview() {
    const container = document.getElementById('preview-education');
    
    if (education.length === 0) {
        container.innerHTML = '<div class="empty-state">Aucune formation ajoutée</div>';
        return;
    }

    container.innerHTML = education.map(edu => `
        <div class="cv-item">
            <div class="cv-item-title">${edu.degree || 'Diplôme'}</div>
            <div class="cv-item-subtitle">${edu.school || 'École/Université'}</div>
            <div class="cv-item-date">${formatDate(edu.startDate)} - ${edu.endDate ? formatDate(edu.endDate) : 'Présent'}</div>
            <div class="cv-item-description">${edu.description || ''}</div>
        </div>
    `).join('');
}

/* ========================================
GESTION DES COMPÉTENCES
========================================*/

/**
 * Ajoute une compétence
 */
function addSkill() {
    const input = document.getElementById('skillInput');
    const skillText = input.value.trim();
    
    if (skillText === '') {
        alert('⚠️ Veuillez entrer une compétence');
        return;
    }
    
    if (skills.includes(skillText)) {
        alert('⚠️ Cette compétence existe déjà');
        return;
    }
    
    skills.push(skillText);
    input.value = '';
    renderSkills();
    updatePreview();
    
    console.log('✅ Compétence ajoutée:', skillText, '- Total:', skills.length);
}
/**
 * Affiche toutes les compétences dans le formulaire
 */
function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';
    
    skills.forEach((skill, index) => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'dynamic-section';
        skillDiv.style.display = 'flex';
        skillDiv.style.justifyContent = 'space-between';
        skillDiv.style.alignItems = 'center';
        skillDiv.style.padding = '10px 15px';
        
        skillDiv.innerHTML = `
            <span>${skill}</span>
            <button class="btn btn-danger" onclick="removeSkill(${index})">✕</button>
        `;
        
        container.appendChild(skillDiv);
    });
    
    console.log('🔄 Compétences rendues:', skills.length);
}
/**
 * Supprime une compétence
 */
function removeSkill(index) {
    const removedSkill = skills[index];
    skills.splice(index, 1);
    renderSkills();
    updatePreview();
    console.log(`🗑️ Compétence supprimée: ${removedSkill} - Restantes: ${skills.length}`);
}
/**
 * Met à jour l'affichage des compétences dans le CV
 */
function updateSkillsPreview() {
    const container = document.getElementById('preview-skills');
    
    if (skills.length === 0) {
        container.innerHTML = '<div class="empty-state">Aucune compétence ajoutée</div>';
        return;
    }

    const skillsHTML = skills.map(skill => `<div class="skill-tag">${skill}</div>`).join('');
    container.innerHTML = `<div class="skills-grid">${skillsHTML}</div>`;
}
// ========================================
// LOGS DE CONFIRMATION
// ========================================
console.log('');
console.log('═══════════════════════════════════════════════');
console.log('✅ Phase 2 du JavaScript chargée (40% ajouté)');
console.log('📊 Progression totale: 60%');
console.log('═══════════════════════════════════════════════');
console.log('Fonctionnalités disponibles:');
console.log('  ✅ Ajout/suppression d\'expériences');
console.log('  ✅ Ajout/suppression de formations');
console.log('  ✅ Ajout/suppression de compétences');
console.log('  ✅ Mise à jour temps réel complète');
console.log('  ✅ Prévisualisation du CV dynamique');
console.log('');
console.log('À venir (40%):');
console.log('  ⏳ Sauvegarde des données (export JSON)');
console.log('  ⏳ Chargement des données');
console.log('  ⏳ Génération PDF');
console.log('  ⏳ Fonction d\'impression');
console.log('═══════════════════════════════════════════════');
console.log('');