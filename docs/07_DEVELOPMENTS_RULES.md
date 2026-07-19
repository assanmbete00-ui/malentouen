# 07_DEVELOPMENT_RULES.md

# Règles de Développement

## Plateforme officielle de la Chefferie Traditionnelle de Malentouen

---

# 1. Objet

Ce document définit les règles de développement applicables à l'ensemble du projet.

Son objectif est de garantir :

- une architecture cohérente ;
- une qualité de code constante ;
- une maintenance facilitée ;
- une évolution maîtrisée de la plateforme.

Tous les développeurs doivent respecter ces règles avant toute nouvelle contribution.

---

# 2. Philosophie

Le projet privilégie la qualité, la lisibilité et la stabilité plutôt que la rapidité de développement.

Chaque modification doit améliorer le projet sans compromettre son architecture.

Le code doit être pensé pour être compris, maintenu et faire évoluer la plateforme sur le long terme.

---

# 3. Responsabilité unique

Chaque composant, hook, fonction ou module doit répondre à une responsabilité clairement définie.

Lorsqu'un fichier devient trop complexe, il doit être restructuré plutôt qu'étendu indéfiniment.

---

# 4. Réutilisation

Avant de créer un nouveau composant, il convient de vérifier si un composant existant peut répondre au besoin.

La duplication de logique ou d'interface doit être évitée.

Le projet privilégie l'évolution des composants existants plutôt que leur multiplication.

---

# 5. Architecture

L'organisation du projet doit respecter la structure définie par l'architecture globale.

Les responsabilités des dossiers ne doivent pas être mélangées.

Chaque nouvelle fonctionnalité doit s'intégrer naturellement à l'organisation existante.

---

# 6. Composants

Les composants doivent respecter les principes définis dans le RHDS et dans le document d'architecture des composants.

Ils doivent être :

- réutilisables ;
- lisibles ;
- indépendants ;
- cohérents avec le Design System.

---

# 7. Styles

Les styles propres à un composant doivent rester dans son fichier dédié.

Les modifications globales ne doivent être effectuées que lorsqu'elles concernent réellement toute l'application.

Un problème local ne doit jamais être résolu par une modification globale du thème.

---

# 8. Traductions

Tout contenu destiné à l'utilisateur doit utiliser le système de traduction du projet.

Les textes ne doivent pas être écrits directement dans les composants.

---

# 9. TypeScript

Le projet privilégie un typage explicite.

Les interfaces doivent être utilisées lorsque cela améliore la compréhension du code.

L'utilisation de any doit rester exceptionnelle et être justifiée.

---

# 10. React

Les composants doivent rester simples.

La logique complexe doit être déplacée dans des hooks ou des modules spécialisés.

Les composants doivent principalement se concentrer sur le rendu.

---

# 11. Material UI

Material UI constitue la base de l'interface utilisateur.

Les composants MUI doivent être privilégiés avant l'introduction de nouvelles dépendances.

Les personnalisations doivent rester cohérentes avec le RHDS.

---

# 12. Responsive

Toute nouvelle interface doit être pensée pour :

- ordinateur ;
- tablette ;
- mobile.

Une fonctionnalité n'est pas considérée comme terminée tant que son comportement responsive n'a pas été validé.

---

# 13. Performance

Les optimisations doivent être réalisées lorsqu'elles apportent un bénéfice réel.

La lisibilité du code ne doit pas être sacrifiée au profit d'optimisations prématurées.

---

# 14. Accessibilité

Les interfaces doivent rester accessibles.

Chaque nouvelle fonctionnalité doit vérifier :

- les contrastes ;
- les libellés ;
- les états interactifs ;
- la navigation clavier lorsque nécessaire.

---

# 15. Gestion des dépendances

Une nouvelle bibliothèque ne doit être ajoutée qu'après avoir vérifié qu'une solution existante dans le projet ou dans Material UI ne répond pas déjà au besoin.

Limiter les dépendances contribue à la stabilité et à la maintenabilité du projet.

---

# 16. Revue avant validation

Avant toute intégration, chaque modification doit être vérifiée selon les points suivants :

- cohérence avec l'architecture ;
- respect du RHDS ;
- réutilisation des composants existants ;
- conformité des traductions ;
- qualité du responsive ;
- absence de duplication ;
- lisibilité du code.

---

# 17. Évolution du projet

Les évolutions doivent respecter les fondations définies dans :

- PROJECT_MANIFESTO ;
- PRODUCT_VISION ;
- RHDS ;
- COMPONENTS ;
- ARCHITECTURE.

Aucune fonctionnalité ne doit remettre en cause ces fondations sans décision explicite.

---

# 18. Principe final

Chaque ligne de code doit contribuer à rendre la plateforme plus robuste, plus cohérente et plus simple à faire évoluer.

La qualité d'un projet ne se mesure pas au nombre de fonctionnalités développées, mais à la capacité de les maintenir durablement.