# Installation Guide

Bienvenue dans le guide d'installation pour le projet `Angular_V17_initiation_Frontend`. Ce fichier contient toutes les instructions nécessaires pour configurer et exécuter le projet sur votre machine locale.

---

## Prérequis

Avant de commencer, assurez-vous que les outils suivants sont installés sur votre système :

- **Node.js** : Node.js est essentiel pour gérer nos dépendances et exécuter notre serveur de développement. Si vous ne l'avez pas déjà installé, vous pouvez le télécharger et l'installer depuis le site officiel de [Node.js](https://nodejs.org/en).
- **Angular CLI** : L'Interface de Ligne de Commande (CLI) Angular est un outil puissant qui facilite la création d'applications Angular. Elle est nécessaire pour exécuter les commandes de construction et de serveur. Pour installer Angular CLI, ouvrez un terminal et exécutez la commande suivante :

```bash copy
npm install -g @angular/cli
```
Une fois que Node.js et Angular CLI sont installés, clonez le projet depuis votre dépôt GitHub sur votre machine locale. Ensuite, naviguez dans le dossier du projet via un terminal et exécutez la commande suivante pour installer toutes les dépendances nécessaires listées dans `package.json` :

```bash copy
npm install
```

## Démarrage du serveur de développement

Pour démarrer le serveur de développement et accéder à votre application Angular, utilisez la commande suivante dans le dossier du projet :

```bash copy
ng serve
```

Par défaut, l'application sera accessible à l'adresse [http://localhost:4200](http://localhost:4200). Vous pouvez ouvrir cette adresse dans votre navigateur pour voir l'application en action.

## Configuration et lancement du serveur backend

Ce projet nécessite également un serveur backend pour fonctionner correctement. Nous utilisons `json-server` pour simuler une API RESTful à l'aide d'un fichier `db.json`.

Si vous n'avez pas `json-server` installé globalement sur votre machine, exécutez la commande suivante pour l'installer :

```bash copy
npm install -g json-server
```

Ensuite, pour démarrer le serveur backend, exécutez la commande suivante dans le dossier du projet :

```bash copy
json-server --watch db.json
```

Le serveur backend sera accessible à l'adresse [http://localhost:3000](http://localhost:3000), où vous pouvez accéder aux données simulées de l'API.

---

Félicitations, vous avez maintenant configuré avec succès le projet **Angular_V17_initiation_Frontend** sur votre machine locale ! Si vous rencontrez des problèmes, n'hésitez pas à consulter la documentation officielle ou à ouvrir un problème dans le dépôt GitHub du projet.
