# 06_TRANSLATIONS.md

# Internationalisation et Traductions

## Plateforme officielle de la Chefferie Traditionnelle de Malentouen

---

# 1. Objet

Ce document définit les conventions d'internationalisation (i18n) de la plateforme.

Son objectif est de garantir une gestion cohérente des contenus multilingues et de faciliter l'évolution de nouvelles langues sans modifier les composants.

---

# 2. Principe fondamental

Les composants React ne doivent pas contenir directement des textes appartenant au contenu métier.

Tous les textes destinés à l'utilisateur doivent provenir du système de traduction.

Cette règle garantit :

- la cohérence ;
- la maintenabilité ;
- la traduction de l'ensemble de la plateforme ;
- la séparation entre logique et contenu.

---

# 3. Source des traductions

Les traductions sont centralisées dans les fichiers de langues du projet.

Chaque langue possède son propre fichier.

Exemples :

- Français
- Anglais

L'ajout d'une nouvelle langue ne doit pas nécessiter la modification des composants.

---

# 4. Accès aux traductions

Les composants utilisent le système de traduction du projet.

Les chaînes affichées doivent être récupérées via le mécanisme d'internationalisation adopté par la plateforme.

Aucun texte métier ne doit être codé directement dans le JSX.

---

# 5. Organisation des clés

Les clés de traduction doivent être regroupées par domaine fonctionnel.

Exemples :

- home
- history
- culture
- news
- projects
- contact

Cette organisation facilite la maintenance et la recherche.

---

# 6. Contenu éditorial

Les contenus institutionnels doivent rester dans les fichiers de traduction.

Exemples :

- titres ;
- descriptions ;
- citations ;
- messages institutionnels.

Les composants ne doivent gérer que leur affichage.

---

# 7. Évolution

Toute nouvelle fonctionnalité introduisant du contenu utilisateur doit prévoir ses traductions avant son intégration.

Aucune fonctionnalité ne doit être considérée comme terminée si ses traductions ne sont pas disponibles.

---

# 8. Bonnes pratiques

- Éviter les chaînes dupliquées.
- Utiliser des clés explicites.
- Conserver une structure identique entre les langues.
- Ne jamais mélanger contenu et logique métier.

---

# 9. Principe final

Le système de traduction constitue une partie intégrante de l'architecture du projet.

Les langues doivent pouvoir évoluer indépendamment des composants et de la logique applicative.