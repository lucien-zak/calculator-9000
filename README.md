Bienvenue sur ma super calculatrice.

Le projet est compatible avec "https://github.com/mattrayner/docker-lamp".

- Le dossier /App contient le projet build.
- Le dossier /mysql contient la bdd. (pour la persistance).

Pour le lancer : 

docker run -i -t -p "80:80" -v ${PWD}/app:/app -v ${PWD}/mysql:/var/lib/mysql mattrayner/lamp:latest

Compatible ARM :) (Pas testé sur X86_64)

Il contient les fonctionnalités demandés et dipose d'un desing à couper le souffle mais sera amélioré tout au long de la semaine.

