# TKWIN+ - Design System Éducatif Moderne

## Philosophie de Design

### Langage Visuel
- **Aesthetic**: Design moderne épuré inspiré des meilleures pratiques UX/UI éducatives
- **Palette de Couleurs**: Bleu professionnel (#2563eb) comme couleur principale, avec accents de couleur chaleureux
- **Typographie**: Inter pour les titres, Source Sans Pro pour le corps de texte
- **Iconographie**: Icônes flat design avec épaisseur de ligne cohérente

### Effets Visuels
- **Animations de Révélation**: Apparition progressive des éléments au scroll
- **Micro-interactions**: Effets de survol subtils sur les boutons et cartes
- **Transitions fluides**: 300ms ease-out pour toutes les transitions
- **États de chargement**: Skeleton screens et spinners animés

## Schéma de Couleurs

### Couleurs Principales
- **Primaire**: #2563eb (Bleu professionnel)
- **Secondaire**: #7c3aed (Violet pour les accents)
- **Succès**: #059669 (Vert pour les validations)
- **Attention**: #d97706 (Orange pour les avertissements)
- **Erreur**: #dc2626 (Rouge pour les erreurs)

### Couleurs Neutres
- **Fond principal**: #f8fafc (Gris très clair)
- **Surface**: #ffffff (Blanc pur)
- **Bordure**: #e2e8f0 (Gris clair)
- **Texte principal**: #1e293b (Gris foncé)
- **Texte secondaire**: #64748b (Gris moyen)

### États Interactifs
- **Survol**: Élévation de 4px avec ombre portée
- **Actif**: Couleur primaire avec 20% de transparence
- **Focus**: Bordure de 2px avec couleur primaire
- **Désactivé**: Opacité à 50% et curseur non autorisé

## Typographie

### Hiérarchie des Titres
- **H1**: 2.5rem (40px), font-weight: 700, line-height: 1.2
- **H2**: 2rem (32px), font-weight: 600, line-height: 1.3
- **H3**: 1.5rem (24px), font-weight: 600, line-height: 1.4
- **H4**: 1.25rem (20px), font-weight: 500, line-height: 1.4
- **Corps**: 1rem (16px), font-weight: 400, line-height: 1.6
- **Petit**: 0.875rem (14px), font-weight: 400, line-height: 1.5

### Familles de Polices
- **Titres**: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
- **Corps**: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif
- **Code**: 'JetBrains Mono', 'Fira Code', monospace

## Système de Mise en Page

### Grille Responsive
- **Container max-width**: 1200px avec padding horizontal de 24px
- **Colonnes**: 12-colonnes sur desktop, 8 sur tablette, 4 sur mobile
- **Gouttières**: 24px entre les colonnes
- **Breakpoints**: 
  - Mobile: 320px - 768px
  - Tablette: 768px - 1024px
  - Desktop: 1024px - 1200px
  - Large: 1200px+

### Espacement
- **Base**: 4px (0.25rem)
- **Petit**: 8px (0.5rem)
- **Moyen**: 16px (1rem)
- **Grand**: 24px (1.5rem)
- **Extra grand**: 32px (2rem)
- **Massif**: 48px (3rem)

## Composants de l'Interface

### Cartes de Cours
- **Fond**: Blanc avec bordure subtile
- **Ombre**: 0 1px 3px rgba(0, 0, 0, 0.1)
- **Border-radius**: 12px
- **Padding**: 24px
- **Survol**: Élévation et ombre accrue

### Boutons
- **Primaire**: Bleu avec texte blanc, hover avec bleu plus foncé
- **Secondaire**: Blanc avec bordure bleue, texte bleu
- **Texte**: Sans fond, texte bleu avec soulignement au hover
- **Tailles**: Petit (32px), Moyen (40px), Grand (48px)

### Formulaires
- **Champs**: Bordure grise, focus avec bordure bleue
- **Labels**: Texte secondaire au-dessus du champ
- **Validation**: Message d'erreur en rouge sous le champ
- **Date picker**: Calendrier intégré avec navigation intuitive

## Effets d'Animation

### Révélation au Scroll
- **Trigger**: Élément visible à 20% dans le viewport
- **Animation**: Opacité 0 à 1 avec translation de 20px vers le haut
- **Durée**: 300ms avec délai progressif entre les éléments
- **Easing**: cubic-bezier(0.4, 0.0, 0.2, 1)

### Micro-interactions
- **Boutons**: Changement de couleur avec scale(1.02) au hover
- **Cartes**: Rotation de 2 degrés et élévation au hover
- **Icônes**: Animation de rotation pour les états de chargement
- **Onglets**: Slide smooth entre les onglets actifs

### Transitions de Page
- **Fade**: Opacité de 0 à 1 sur 300ms
- **Slide**: Translation de 100px avec fade
- **Zoom**: Scale de 0.95 à 1 avec fade
- **Stagger**: Animation en cascade des éléments enfants

## Éléments Spécifiques à l'Éducation

### Barre de Progression
- **Forme**: Rectangle arrondi avec remplissage progressif
- **Couleurs**: Bleu pour en cours, vert pour complété, gris pour verrouillé
- **Animation**: Smooth transition lors de la progression
- **Label**: Pourcentage affiché au centre ou à droite

### Badges de Réussite
- **Formes**: Ronds, hexagonaux, ou étoiles selon le type
- **Couleurs**: Doré pour les réussites, argent pour les participations
- **Animations**: Rotation au déblocage avec effet de lumière
- **Collection**: Affichage dans le profil utilisateur

### Indicateurs de Niveau
- **Design**: Barre de progression verticale ou circulaire
- **Couleurs**: Dégradé du bleu au violet selon le niveau
- **Icônes**: Symboles représentant les compétences acquises
- **Animation**: Pulse effect pour les niveaux récemment atteints

### Simulateurs Bureautiques
- **Interface**: Réplique fidèle des logiciels Microsoft
- **Ruban**: Onglets fonctionnels avec icônes et tooltips
- **Zoom**: Navigation dans le document avec raccourcis clavier
- **Feedback**: Messages contextuels pour guider l'apprentissage

## Accessibilité

### Navigation au Clavier
- **Tab order**: Logique et prévisible
- **Focus visible**: Bordure bleue de 2px sur tous les éléments interactifs
- **Raccourcis**: Ctrl+N pour nouveau, Ctrl+S pour sauvegarder, etc.
- **Skip links**: Liens d'évitement pour accéder directement au contenu

### Support des Lecteurs d'Écran
- **ARIA labels**: Descriptions appropriées pour tous les éléments
- **Live regions**: Annonces dynamiques pour les mises à jour
- **Alt text**: Descriptions des images et icônes
- **Semantic HTML**: Structure correcte avec les bonnes balises

### Préférences Utilisateur
- **Taille de police**: Support du zoom jusqu'à 200%
- **Contraste**: Mode haute contrastabilité disponible
- **Animations**: Respect de prefers-reduced-motion
- **Couleurs**: Mode sombre avec palette adaptée

## Design Responsive

### Mobile First
- **Navigation**: Menu hamburger avec drawer latéral
- **Cours**: Vidéo en plein largeur avec contrôles adaptés
- **Formulaires**: Champs empilés verticalement avec labels au-dessus
- **Boutons**: Taille minimale de 44px pour faciliter le touch

### Tablette
- **Split view**: Navigation à gauche, contenu à droite
- **Simulateurs**: Mode paysage recommandé pour les exercices
- **Tactile**: Support des gestes de swipe pour la navigation
- **Stylus**: Optimisation pour la prise de notes manuscrites

### Desktop
- **Multi-fenêtres**: Possibilité d'ouvrir plusieurs modules
- **Raccourcis clavier**: Support complet des combinaisons
- **Grand écran**: Utilisation optimale de l'espace avec sidebar
- **Souris**: Hover states et tooltips détaillés