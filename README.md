# Plateforme Officielle de la Chefferie Traditionnelle de Malentouen

> Une plateforme numérique institutionnelle dédiée à la préservation, à la valorisation et à la modernisation du patrimoine de la Chefferie Traditionnelle de Malentouen.

---

# Présentation

La Plateforme Officielle de la Chefferie Traditionnelle de Malentouen constitue le portail numérique officiel de l'institution.

Elle a pour vocation de :

- représenter officiellement la Chefferie ;
- préserver et transmettre son patrimoine historique et culturel ;
- diffuser les informations institutionnelles ;
- valoriser les projets de développement ;
- rapprocher la Chefferie de la population, de la diaspora et de ses partenaires.

Le projet est conçu comme un produit logiciel évolutif et non comme un simple site web.

---

# Vision

Construire une plateforme institutionnelle moderne capable de représenter durablement la Chefferie Traditionnelle de Malentouen tout en respectant son identité, son histoire et ses valeurs.

---

# Technologies

Le projet repose principalement sur :

- React
- TypeScript
- Material UI
- React Router
- Apollo Client
- i18next

---

# Structure générale

text
src/
├── @types/
├── api/
├── assets/
├── components/
├── constants/
├── contexts/
├── design/
├── hooks/
├── layouts/
├── navigations/
├── pages/
├── services/
├── theme/
└── utils/


Cette architecture privilégie :

- la séparation des responsabilités ;
- la réutilisation des composants ;
- la modularité ;
- la maintenabilité.

---

# Documentation

La documentation officielle du projet est disponible dans le dossier docs/.

Elle comprend notamment :

- 00_PROJECT_MANIFESTO.md
- 01_PRODUCT_VISION.md
- 02_ARCHITECTURE.md (en cours de finalisation)
- 03_RHDS.md
- 04_HOME_PAGE.md
- 05_COMPONENTS.md
- 06_TRANSLATIONS.md
- 07_DEVELOPMENT_RULES.md
- 08_PERFORMANCE.md
- 09_ACCESSIBILITY.md
- 10_ROADMAP.md
- CHANGELOG.md

Avant toute contribution, il est recommandé de consulter ces documents.

---

# Royal Heritage Design System (RHDS)

La plateforme repose sur un Design System dédié : le *Royal Heritage Design System (RHDS)*.

Le RHDS garantit :

- une identité visuelle cohérente ;
- une expérience utilisateur homogène ;
- une représentation institutionnelle fidèle à la Chefferie.

Toutes les interfaces doivent respecter ses principes.

---

# Internationalisation

La plateforme est conçue pour être multilingue.

Toutes les chaînes destinées aux utilisateurs passent par le système d'internationalisation.

Les textes ne doivent jamais être écrits directement dans les composants.

---

# Architecture des composants

Le projet privilégie des composants :

- réutilisables ;
- indépendants ;
- spécialisés ;
- cohérents avec le RHDS.

Les composants complexes, comme le Header et le Footer, sont organisés sous forme de modules composés de sous-composants, de hooks et de configurations.

---

# Contribuer

Avant toute modification :

1. Comprendre le besoin fonctionnel.
2. Vérifier les composants existants.
3. Respecter le RHDS.
4. Respecter les conventions de développement.
5. Vérifier le responsive.
6. Vérifier les traductions.
7. Documenter les évolutions importantes si nécessaire.

---

# Philosophie de développement

La plateforme privilégie :

- la qualité plutôt que la rapidité ;
- la simplicité plutôt que la complexité ;
- la réutilisation plutôt que la duplication ;
- la stabilité plutôt que les changements fréquents.

Chaque évolution doit renforcer le produit sans compromettre ses fondations.

---

# Licence

© Chefferie Traditionnelle de Malentouen.

Tous droits réservés.