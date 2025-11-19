# Générateur de CV Dynamique

## 👨‍💻 Informations du Projet
- **Nom :** Hassen
- **Prénom :** Farah
- **Email :** Farahhassen00@gmail.com
- **Cours :** Développement Web - FST

## 📝 Description
Application web interactive permettant de créer un CV professionnel en temps réel. L'utilisateur remplit un formulaire et voit son CV se générer instantanément avec des animations élégantes.

## 🔗 Lien GitHub Pages
🚀 **Démonstration en ligne :** [Bientôt disponible]

_(Le lien sera ajouté après activation de GitHub Pages)_

## 🛠️ Technologies Utilisées
- **HTML5** : Structure sémantique et formulaires
- **CSS3** : Design moderne, animations, responsive design 
- **JavaScript ES6** : Manipulation du DOM et interactivité _(à venir)_

## ✨ Fonctionnalités Principales
1. ✅ Formulaire d'informations personnelles
2. ✅ Section expériences professionnelles dynamique
3. ✅ Section formations
4. ✅ Gestion des compétences
5. ✅ Prévisualisation en temps réel
6. ✅ Export et impression du CV
7. ✅ Design responsive

## 📂 Structure du Projet
```
nom_prenom_generateur_cv/
│
├── index.html          # Page principale (✅ Actuelle)
├── css/
│   └── style.css      # Styles CSS (✅ 100% complété)
├── js/
│   └── app.js         # JavaScript (🔄 20% complété)
├── assets/
│   └── screenshots/   # Captures d'écran
└── README.md          # Documentation
```

## 📖 Nouveautés Explorées

### Phase 1 - HTML (✅ 99% Complétée)
- ✅ Structure HTML5 sémantique
- ✅ Formulaires avec validation
- ✅ Organisation en sections
- ✅ Accessibilité (labels, placeholders)

### Phase 2 - CSS (✅ 98% Complétée)
**Styles de base :**
- ✅ Reset CSS et styles globaux
- ✅ CSS Grid pour le layout deux colonnes
- ✅ Styles des formulaires avec focus states
- ✅ Design de l'en-tête du CV avec gradient
- ✅ Typographie et hiérarchie visuelle

**Styles avancés :**
- ✅ **Animations CSS** : slideIn, fadeIn, slideUp, popIn
- ✅ **Effets hover** : transform, box-shadow sur boutons
- ✅ **Sections dynamiques** : styles avec border et background
- ✅ **Tags de compétences** : design avec gradient et animation
- ✅ **Scrollbar personnalisée** : style webkit
- ✅ **Responsive mobile** : media queries complètes
- ✅ **Print styles** : optimisation pour impression/PDF
- ✅ **Transitions globales** : fluidité des interactions
- ✅ **Accessibilité** : focus-visible pour navigation clavier

### Phase 3 - JavaScript (🔄 En cours - 20%)
**Ce qui est fait :**
- ✅ Initialisation de l'application au chargement
- ✅ Configuration des event listeners
- ✅ Mise à jour en temps réel des informations personnelles
- ✅ Fonction de prévisualisation du CV
- ✅ Fonction utilitaire de formatage des dates
- ✅ Structure des variables globales (tableaux)
- ✅ Messages de debug dans la console

**À venir (80%) :**
- ⏳ Ajout/suppression dynamique d'expériences
- ⏳ Ajout/suppression dynamique de formations
- ⏳ Gestion des compétences (ajouter/supprimer)
- ⏳ Affichage dynamique dans la prévisualisation
- ⏳ Sauvegarde des données (export JSON)
- ⏳ Fonction de génération PDF
- ⏳ Fonction d'impression

## 🔧 Difficultés Rencontrées et Solutions

### Phase 1 - Structure HTML

#### Difficulté 1 : Organisation du formulaire
**Problème :** Comment structurer un formulaire complexe avec plusieurs sections dynamiques (expériences, formations, compétences).

**Solution :** 
- Utilisation de `div` avec des IDs spécifiques (`experiences-container`, `education-container`)
- Séparation claire entre le formulaire et la prévisualisation
- Utilisation de Grid pour le layout deux colonnes

#### Difficulté 2 : Prévisualisation du CV
**Problème :** Comment organiser la prévisualisation pour qu'elle ressemble à un vrai CV.

**Solution :**
- Structure en-tête (header) avec informations de contact
- Corps (body) avec sections distinctes
- Utilisation de classes CSS préparées pour le styling futur

#### Difficulté 3 : Accessibilité
**Problème :** Rendre le formulaire accessible et facile à utiliser.

**Solution :**
- Tous les `input` ont des `label` associés
- Placeholders informatifs
- Types d'input appropriés (email, tel, month)

### Phase 2 - CSS 

#### Difficulté 1 : Layout responsive avec Grid
**Problème :** Comment créer un layout deux colonnes qui s'adapte automatiquement sur mobile.

**Solution :** 
- Utilisation de CSS Grid avec `grid-template-columns: 1fr 1fr`
- Media query à 1024px pour passer en une colonne sur tablette/mobile
- Gap de 30px pour espacer les panels

**Code utilisé :**
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

@media (max-width: 1024px) {
    .container {
        grid-template-columns: 1fr;
    }
}
```

#### Difficulté 2 : États de focus des inputs
**Problème :** Améliorer l'accessibilité et l'expérience utilisateur lors de la saisie.

**Solution :**
- Transition sur tous les champs de formulaire
- Border-color change au focus
- Box-shadow subtile pour indiquer le champ actif
- Outline enlevé mais remplacé par un effet visuel

**Code utilisé :**
```css
input:focus {
    outline: none;
    border-color: #6e0606;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}
```

#### Difficulté 3 : Cohérence de la palette de couleurs
**Problème :** Maintenir une cohérence visuelle dans tout le CV.

**Solution :**
- Couleur principale : Rouge sombre / Bordeaux ➡️ #6e0606
(+ parfois ses variantes comme #6b0404 ou #760404)
- Gradient utilisé pour l'arrière-plan et l'en-tête du CV
- Même couleur pour les titres et bordures
- Création d'une hiérarchie visuelle claire

### Phase 3 - JavaScript (20% complété)

#### Difficulté 1 : Mise à jour en temps réel
**Problème :** Comment détecter les changements dans les champs et mettre à jour instantanément le CV.

**Solution :** 
- Utilisation de l'événement `input` plutôt que `change` ou `keyup`
- L'événement `input` se déclenche à chaque modification de valeur
- Attachement des listeners via `addEventListener` sur chaque champ
- Appel d'une fonction centrale `updatePreview()` qui orchestre toutes les mises à jour

**Code utilisé :**
```javascript
personalFields.forEach(fieldId => {
    const element = document.getElementById(fieldId);
    if (element) {
        element.addEventListener('input', updatePreview);
    }
});
```

#### Difficulté 2 : Valeurs par défaut dans la prévisualisation
**Problème :** Afficher des valeurs de placeholder dans le CV quand les champs sont vides.

**Solution :**
- Utilisation de l'opérateur OR (`||`) pour définir des valeurs par défaut
- Vérification avec `.trim()` pour le résumé (ignorer les espaces)
- Affichage/masquage conditionnel de sections

**Code utilisé :**
```javascript
const name = document.getElementById('fullName').value || 'Votre Nom';
if (summary && summary.trim() !== '') {
    summarySection.style.display = 'block';
} else {
    summarySection.style.display = 'none';
}
```

#### Difficulté 3 : Organisation du code JavaScript
**Problème :** Structurer le code de manière lisible et maintenable.

**Solution :**
- Séparation claire en sections avec commentaires
- Variables globales au début
- Fonctions spécialisées pour chaque tâche
- Convention de nommage cohérente (camelCase)
- Logs de debug pour faciliter le développement

#### Difficulté 4 : Ajout automatique d'icônes
**Problème :** Ajouter des émojis aux informations de contact sans les dupliquer.

**Solution :**
- Vérification avec `startsWith()` avant d'ajouter l'icône
- Ternaire pour ajouter l'icône seulement si absente
- Assure que l'icône n'est jamais dupliquée même après plusieurs mises à jour

**Code utilisé :**
```javascript
document.getElementById('preview-email').textContent = 
    email.startsWith('📧') ? email : '📧 ' + email;
```

## 📚 Ressources Utilisées
- Support du cours de Développement Web - FST
## 📊 Progression du Projet
- [x] Structure HTML - 99%
- [x] Styles CSS - 98%
  - [x] Reset et styles globaux
  - [x] Layout Grid
  - [x] Formulaires
  - [x] En-tête CV
  - [x] Animations
  - [x] Sections dynamiques
  - [x] Print styles
- [x] JavaScript - 20%
  - [x] Initialisation
  - [x] Event listeners
  - [x] Mise à jour temps réel (infos personnelles)
  - [ ] Gestion expériences (à venir)
  - [ ] Gestion formations (à venir)
  - [ ] Gestion compétences (à venir)
  - [ ] Export/Sauvegarde (à venir)
- [ ] Tests et optimisations - 0%

## 📝 Journal de Développement

### Commit 1/2 - [08/11/2025]
**Ajout :** Structure HTML 
- Formulaire avec tous les champs nécessaires
- Zone de prévisualisation du CV
- Organisation en sections logiques
- README initial avec documentation

### Commit 2 - [15/11/2025]
**Ajout :** Styles CSS - Phase 1 (40%)
- Implémentation du layout Grid deux colonnes
- Styles des formulaires avec états de focus
- Design de l'en-tête du CV avec gradient
- Typographie et hiérarchie visuelle
- Responsive basique pour tablette
- Palette de couleurs cohérente

### Commit 3 - [18/11/2025]
**Ajout :** Finalisation CSS (100%)
**CSS (60% ajouté) :**
- Animations complexes (slideIn, fadeIn, slideUp, popIn)
- Effets hover interactifs sur tous les boutons
- Styles complets des sections dynamiques
- Design des tags de compétences avec gradient
- Scrollbar personnalisée
- Responsive mobile complet (< 768px)
- Print styles pour impression/PDF
- Transitions globales pour fluidité
- Amélioration de l'accessibilité (focus-visible)

### Commit 4 - [19/11/2025]
**Ajout :** JavaScript Phase 1 (20%)
**JavaScript (20%) :**
- Initialisation complète de l'application
- Configuration des event listeners sur champs personnels
- Mise à jour en temps réel de la prévisualisation
- Gestion des valeurs par défaut
- Fonction de formatage des dates
- Structure des données (variables globales)
- Logs de debug

**Dernière mise à jour :** [19/11/2025]
