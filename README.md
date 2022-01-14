# Tv-show Explorer

Ce projet a été généré avec Angular CLI version 13.0.4.

## Contexte :

Projet réalisé dans le cadre de ma formation DWWM (2021/2022).

## Enoncé :

L'application doit permettre de référencer des séries et de partager une critique autour de chaque série.

**Détails :**
- interface sécurisée par une page d’authentification
- une page permettant de lister les séries (id, nom, date)
- dans la liste, permettre d’accéder rapidement à la vue détaillée, à l'édition, à la suppression de chaque série
- une vue détaillée affichant la série et les commentaires associés
- possibilité de créer une nouvelle série sur une page dédiée
- une page d’erreur 404

## Réalisation :

### Structure du projet :

1. Les vues

```
ng g c views/tvshows-list
ng g c views/tvshow-details
ng g c views/tvshow-new
ng g c views/tvshow-edit
ng g c views/error
ng g c views/login
```

2. Les composants

```
ng g c components/tvshow-form
ng g c components/comment-form
ng g c components/errors-form
ng g c components/header
ng g c components/footer
```

3. Les modèles

```
mkdir src/app/models/
touch src/app/models/tvshow.model.ts
touch src/app/models/comment.model.ts
```

4. Les services

```
ng g s services/auth/auth
ng g s services/tvshow/tvshow
ng g s services/tvshow/comment
```

5. Le guard

```
ng g g guards/auth/auth --implements CanActivate
```

### Dépendances :

- Bootstrap

### Développement :

- Gérer l'authentification avec le auth.service, la vue login et le guard
- Ajouter un bouton de déconnexion
- Créer les modèles `tvshow` et `comment`
- Ajouter des fausses données (absence de BDD)
- Coder la vue principale avec la liste des séries
- Coder la vue "ajouter série" et le formulaire associé
- Ajouter la possibilité d'édition d'une série
- Coder la vue de "détail" d'une série et des commentaires associés
- Coder la partie "ajout de commentaire"

Bonus :
- Ajout d'un "voir plus" pour l'affichage des commentaires
- Ajout de la possibilité de supprimer les commentaires


