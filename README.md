#Chat

Mise en place de notre application de chat (chatbot)

- Initialiser le dossier serveur
- Créer un fichier pour le serveur
- Importer express, body-parser, dotenv, ejs, mongoose, path
- Configurer le fichier server : 
    - Créer une constante pour les imports (attention à dotenv)
    - Créer une constante pour le serveur (utilisation de la fonction express())
    - Configurer les composants
    - Lancer le serveur

# Configuration serv

- Définir le moteur de rendu en ejs
- Définir un dossier "_www_" comme etant le _dossier client_
- Créer un fichier "_index.ejs_" dans le dossier "_www_"
- Créer les routes homepage
- Créer les  routes register
- Créer les routes login
- Créer le route chat

#Création de l'API

- Créer un fichier de routes pour l'api (cf. font.routes)
- Créer une route "/register"
- Créer une route "/login"

#Création des formulaires register/login

- Le formulaire d'inscription contient :
    - email
    - pseudo
    - password (x2)
    - cgu

    Le formulaire de connexion contient :
    - email
    - password

