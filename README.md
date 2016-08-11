# jQuery autoscale

jQuery autoscale est un petit plugin pour le moment très expérimental (juste pour tester l'idée...) qui permet d'adapter automatiquement un élément HTML à son parent pour qu'il prenne automatiquement toute la place possible.  

C'est généralement le comportement qu'on essai d'obtenir quand on fait un **background-size: contain** sur un background-image.

## Cas d'usage

J'ai une **div** de 1280px par 720px qui contient plein d'élements positionnés à la main ([Exemple](saracensmagazine.com/issues/2015-10/)). Je veux qu'il prenne le **plus de place possible dans ma fenêtre** et que cet ajustement sera **mis à jour au resize** de la fenêtre.

## Exemple

Vous trouverez un exemple dans **exemple/**. Much cool!

## Installation

Le script demande au minium jQuery >= 1.7.
Insérez ce plugin dans votre page et initialisez le ainsi :

```javascript
$('.element').autoscale();
```

Il n'y a pas d'options pour le moment !

## A venir

- Etudier d'autres alternatives à l'utilisation de **transform: scale()**
- Améliorer la compatibilité : pas testé sous IE, voir pour les préfixes CSS
- Améliorer les performances !
- Refactorer ce code... 

## A propos

Réalisé par [Marceau Casals](https://marceau.casals.fr).