# 05_COMPONENTS.md

# Architecture des composants

## Plateforme officielle de la Chefferie Traditionnelle de Malentouen

---

# 1. Objet du document

Ce document définit les principes de conception des composants de la plateforme officielle de la Chefferie Traditionnelle de Malentouen.

Son objectif est de garantir une architecture cohérente, réutilisable et évolutive.

Il décrit :

- l'organisation des composants ;
- leur classification ;
- leurs responsabilités ;
- leurs conventions de développement ;
- les règles d'évolution.

Ce document ne décrit pas le comportement fonctionnel de chaque composant. Il définit la manière dont les composants doivent être conçus et organisés.

---

# 2. Philosophie

L'interface est construite à partir de composants indépendants.

Chaque composant possède une responsabilité clairement définie.

Les composants doivent être :

- réutilisables ;
- découplés ;
- lisibles ;
- testables ;
- évolutifs.

Un composant ne doit jamais devenir responsable de plusieurs domaines fonctionnels différents.

---

# 3. Classification des composants

Les composants de la plateforme sont organisés en plusieurs catégories.

## 3.1 Composants de structure

Ils définissent l'organisation générale des pages.

Exemples :

- Container
- Section
- SectionTitle
- PageBanner

Ces composants assurent principalement :

- les espacements ;
- les largeurs ;
- les alignements ;
- la hiérarchie visuelle.

Ils ne doivent pas contenir de logique métier.

---

## 3.2 Composants d'interface

Ils fournissent des éléments réutilisables de l'interface utilisateur.

Exemples :

- Button
- Card
- Badge
- Modal
- Skeleton
- Loader
- LoadingScreen
- EmptyState
- TextLink

Ces composants doivent rester génériques afin de pouvoir être utilisés dans plusieurs pages.

---

## 3.3 Composants de navigation

Ils facilitent les déplacements dans la plateforme.

Exemples :

- Header
- Breadcrumb
- SearchBar

Ils assurent la navigation sans contenir de logique métier propre aux pages.

---

## 3.4 Composants métier

Ils représentent des contenus spécifiques à la plateforme.

Exemples :

- NewsCard
- EventCard
- ProjectsCard
- CultureCard
- GalleryCard
- ContactInfo
- AnnouncementBanner
- StatCard

Ils encapsulent la présentation d'un domaine métier particulier.

---

## 3.5 Composants média

Ils assurent l'affichage des médias.

Exemples :

- Logo
- MediaWithSkeleton

Ils centralisent les comportements liés aux images et aux médias.

---

# 4. Convention de structure

Deux organisations principales sont utilisées dans le projet.

---

## 4.1 Composant simple

La majorité des composants utilisent la structure suivante :

text
component/
├── index.tsx
├── styles.ts
└── types.ts


### index.tsx

Point d'entrée public du composant.

Il orchestre le rendu et expose l'API du composant.

### styles.ts

Contient les styles propres au composant.

Les styles sont isolés afin d'éviter leur dispersion dans plusieurs fichiers.

### types.ts

Déclare les interfaces et les types utilisés exclusivement par le composant.

---

## 4.2 Composant modulaire

Certains composants possèdent une architecture plus riche.

Ils suivent une organisation de ce type :

text
component/
├── config/
├── hooks/
├── sub_components/
├── index.tsx
└── styles.ts


Cette architecture est réservée aux composants ayant plusieurs responsabilités internes.

---

# 5. Modules composites

À ce jour, deux composants utilisent une architecture modulaire complète :

- Header
- Footer

Ces composants représentent de véritables modules d'interface.

Ils regroupent :

- une configuration ;
- des hooks locaux ;
- plusieurs sous-composants spécialisés ;
- un point d'entrée unique.

Cette architecture améliore la lisibilité et limite la complexité de chaque fichier.

---

# 6. Les sous-composants

Un sous-composant représente une partie interne d'un composant complexe.

Les sous-composants ne sont pas destinés à être utilisés directement par les pages.

Ils existent uniquement pour :

- réduire la taille du composant principal ;
- séparer les responsabilités ;
- faciliter la maintenance.

Ils doivent rester privés au composant auquel ils appartiennent.

---

# 7. Les hooks locaux

Lorsqu'un composant possède une logique suffisamment importante, celle-ci est isolée dans un dossier hooks.

Cette séparation permet de distinguer :

- la logique métier ou comportementale ;
- le rendu visuel.

Le composant principal reste ainsi concentré sur l'affichage.

---

# 8. Les configurations locales

Les données statiques propres à un composant peuvent être regroupées dans un dossier config.

On y retrouve notamment :

- les listes d'éléments ;
- les constantes propres au composant ;
- certaines configurations de navigation.

Cette organisation évite de mélanger données et logique.

---

# 9. Responsabilité unique

Chaque composant doit répondre à une seule responsabilité principale.

Lorsqu'un composant commence à gérer plusieurs domaines fonctionnels, il doit être réorganisé.

Les responsabilités supplémentaires doivent être déplacées vers :

- un sous-composant ;
- un hook ;
- une configuration locale.

---

# 10. Réutilisation

Avant de créer un nouveau composant, il convient de vérifier si un composant existant répond déjà au besoin.

La duplication de composants doit être évitée.

Lorsqu'une légère variation est nécessaire, il est préférable d'étendre le composant existant plutôt que d'en créer un nouveau.

---

# 11. Cohérence avec le RHDS

Tous les composants doivent respecter le Royal Heritage Design System.

Ils doivent notamment conserver :

- la palette de couleurs ;
- la hiérarchie typographique ;
- les espacements ;
- les rayons ;
- les comportements interactifs.

Un composant ne doit pas introduire sa propre identité graphique.

---

# 12. Indépendance

Les composants doivent rester aussi indépendants que possible.

Ils ne doivent pas dépendre directement :

- d'une page spécifique ;
- d'une autre section ;
- d'une logique propre à une seule fonctionnalité.

Cette indépendance facilite leur réutilisation.

---

# 13. Convention de nommage

Les composants utilisent une convention de nommage cohérente basée sur le rôle du composant.

Les noms doivent décrire clairement leur responsabilité.

Les noms vagues ou génériques doivent être évités.

---

# 14. Évolution

L'ajout d'un nouveau composant doit répondre à un besoin clairement identifié.

Avant toute création, les questions suivantes doivent être posées :

- Le besoin est-il réellement nouveau ?
- Un composant existant peut-il être réutilisé ?
- Le composant respecte-t-il le RHDS ?
- Sa responsabilité est-elle clairement définie ?
- Sa structure est-elle cohérente avec le reste du projet ?

---

# 15. Processus de création

Tout nouveau composant suit le processus suivant :

text
Identification du besoin
        ↓
Recherche d'un composant existant
        ↓
Définition de la responsabilité
        ↓
Choix de la structure
        ↓
Implémentation
        ↓
Intégration au RHDS
        ↓
Validation


---

# 16. Principe final

Les composants constituent les briques fondamentales de l'interface.

Leur qualité conditionne directement la qualité de l'ensemble de la plateforme.

Chaque composant doit être conçu pour durer, être compris facilement par un nouveau développeur et pouvoir évoluer sans remettre en cause l'architecture globale.

L'objectif n'est pas de multiplier les composants, mais de construire un système cohérent, maintenable et fidèle à l'identité institutionnelle de la Chefferie Traditionnelle de Malentouen.