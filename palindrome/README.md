# Palindrome

Exercice en JavaScript pour découvrir si un mot et un palindrom ou pas.

Voir la page wikipédia https://fr.wikipedia.org/wiki/Palindrome.

## Algoritme utilisé

- Prend un mot en paramètre
- stocké l'inverse du mot en paramètre
- vérifier sur les deux mot sont identique
- Si c'est identique, alors c'est un palindrome
- Sinon, ce n'est pas un palindrome

### exemple

Permier exemple :

- mot en paramètre : "eau"
- l'inverse : "uae"
- comparaison : "uae" pareil que "eau" ?
- pas un palindrome

Deuxième exemple :

- mot en paramètre : "kayak"
- l'inverse : "kayak"
- comparaison : "kayak" pareil que "kayak" ?
- c'est palindrome

### Détail de l'inversion d'un mot

- récupération d'un mot
- découper le mot en une liste ordonnée de lettres 
- je crée une nouvelle liste ordonnée 
- on prend la liste ordonnée par la fin, et tant que nous ne sommes pas à la première lettre, on passe à la suivant
    - j'ajoute à la nouvelle liste ordonnée
- la nouvelle liste ordonnée contient les lettres du mot à l'envers
- on rassemble les lettres dans un nouveau mot.  

### Un autre algoritme d'analyse

- récupération d'un mot

- tant qu'il reste des lettres au mot
    - retirer la première lettre du mot
        - si c'est la dernière, alors c'est un palindrome (sortie)
    - retirer la dernière lettre du mot
    - comparer les deux lettres
        - si égale, alors on passe à la suivante
        - Sinon, ce n'est pas un palindrome (sortie)

- 