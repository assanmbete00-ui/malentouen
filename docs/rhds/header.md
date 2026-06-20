# Royal Heritage Design System (RHDS)

# Header

> Version : *1.0 RC (Release Candidate)*
>
> Projet : *Plateforme officielle de la Chefferie Traditionnelle de Malentouen*
>
> Statut : *En cours de certification RHDS*

---

# Vision

Le Header constitue le premier contact entre le visiteur et la plateforme.

Il représente l'identité institutionnelle de la Chefferie et accompagne l'utilisateur tout au long de sa navigation.

Le Header doit inspirer :

- la confiance ;
- l'élégance ;
- la modernité ;
- la simplicité.

Il doit permettre au visiteur de comprendre immédiatement où il se trouve et comment explorer la plateforme.

---

# Objectifs

Le Header permet de :

- présenter l'identité officielle de la Chefferie ;
- offrir une navigation claire ;
- donner accès aux principales actions ;
- garantir une excellente expérience sur tous les appareils.

---

# Philosophie RHDS

Le Header respecte quatre principes fondamentaux.

## Lisibilité

La navigation doit être claire et immédiatement compréhensible.

---

## Simplicité

Chaque élément possède une responsabilité unique.

Aucun élément décoratif inutile.

---

## Cohérence

Le Header partage la même identité graphique que le Footer.

Les couleurs, les espacements et la typographie sont harmonisés.

---

## Accessibilité

Le Header doit être utilisable sur :

- Mobile
- Tablette
- Desktop
- Grand écran

---

# Architecture


Header
│
├── TopBar
├── DesktopNavigation
├── HeaderActions
├── MobileButton
├── MobileDrawer
│
├── SearchTrigger
├── LanguageSelector
├── AdminButton
└── NavigationItem


Le Header est composé de plusieurs sous-composants indépendants.

Chaque composant possède une responsabilité unique.

---

# TopBar

## Responsabilité

Présenter les informations institutionnelles importantes.

Contenu :

- localisation ;
- téléphone ;
- email ;
- sélecteur de langue.

---

# DesktopNavigation

## Responsabilité

Afficher les principales rubriques du site.

Les données proviennent exclusivement de :


@constants/navigation


---

# NavigationItem

Responsable de l'affichage d'un lien de navigation.

Ce composant est partagé entre la navigation desktop et le Drawer mobile.

---

# HeaderActions

Regroupe les actions disponibles dans le Header.

Exemples :

- recherche ;
- langue ;
- administration.

---

# SearchTrigger

Le SearchTrigger ouvre le moteur de recherche.

Il ne contient pas la logique de recherche.

La recherche sera développée ultérieurement à travers le composant global :


components/search_bar


Le SearchTrigger constitue uniquement le point d'entrée vers cette fonctionnalité.

---

# LanguageSelector

Permet de changer la langue de la plateforme.

Les langues disponibles sont définies dans les constantes du projet.

---

# AdminButton

Permet d'accéder à l'espace d'administration.

Ce composant reste indépendant des autres actions.

---

# MobileButton

Bouton permettant d'ouvrir le Drawer mobile.

Il n'a qu'une seule responsabilité.

---

# MobileDrawer

Version mobile de la navigation.

Architecture interne :


MobileDrawer

├── DrawerHeader
├── DrawerNavigation
├── DrawerLanguage
├── DrawerAdmin
└── DrawerFooter


Le Drawer constitue une interface indépendante.

---

# Palette

Le Header utilise exclusivement les couleurs définies dans :


theme.ts


Aucune couleur codée en dur n'est autorisée.

---

# Typographie

Le Header privilégie :

- la lisibilité ;
- une hiérarchie claire ;
- une typographie sobre.

---

# Responsive

Le Header fonctionne sur :

- Mobile
- Tablette
- Desktop
- Grand écran

La navigation Desktop est automatiquement remplacée par le Drawer mobile.

---

# Animations

Les animations restent discrètes.

Autorisées :

- hover des liens ;
- transitions ;
- ouverture du Drawer.

Les animations ne doivent jamais ralentir la navigation.

---

# Règles RHDS

Le Header respecte les règles suivantes :

- Architecture modulaire.
- Responsabilité unique.
- Composants réutilisables.
- Respect du thème.
- Respect des constantes globales.
- Cohérence avec le Footer.

---

# Évolutions prévues

Les fonctionnalités suivantes seront intégrées ultérieurement :

- SearchBar globale.
- Recherche multi-contenus.
- Recherche patrimoniale.
- Recherche dans les actualités.
- Recherche dans les événements.
- Recherche dans la galerie.

Le SearchTrigger est déjà prévu pour accueillir ces évolutions.

---

# Checklist de certification

Le Header est certifié uniquement si les critères suivants sont validés.

- [ ] Architecture
- [ ] Responsive
- [ ] Accessibilité
- [ ] Performance
- [ ] Typographie
- [ ] Palette
- [ ] Espacements
- [ ] Animations
- [ ] Documentation
- [ ] Vision

---

# Version

*Version :* 1.0 RC

Statut :


En cours de certification


---

# Devise RHDS

> Accueillir avec élégance, guider avec simplicité et représenter dignement l'identité de la Chefferie.

---

# Signature

*Royal Heritage Design System*

Le Header est la première impression de la plateforme. Il doit donner envie d'explorer davantage.