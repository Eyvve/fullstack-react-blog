## Préparation

### Font-end React

- Formulaire de connexion qui apparait si l'utilisateur n'est pas connecté;

- A la connexion, l'utilisateur est redirigé vers la page principal ou il reçoit dès le montage du composant tous les articles stockés en bdd;

- Il a la possibilité de poster un billet directement depuis un formulaire qui envoie les informations en post a la bdd qui les enregistre. A ce moment, le front indique au backend de refresh la méthode get pour re-récupérer les articles + le nouvel article

#### Composants :

- App : chargé de stocker l'application, il contient le router qui affiche
  - `<Authentification />` Qui est un formulaire d'inscription. Si l'utilisateur existe déjà, il peut remplacer le formulaire d'inscription par un formulaire de connexion
  - `<Blog />` qui est le conposant mère du blog, elle contient :
    - `<ArticleForm />` qui est le formulaire d'envoi de blog
    - `<Articles />` qui regroupera tous les composants :
      - `<Article />` composé d'un titre, d'un auteur et d'un contenu

#### Principales fonctions :

- handlePost[articleForm] : poste l'article dans la bdd puis recall le backend pour map les articles via handleRefresh
- handleRefresh[] : appelle le json distribué par le backend pour récupérer tous les articles
- handleDelete (en cas de feature de suppression)

## Backend

- 3 classes :
  - Une classe chargée d'authentifier l'utilisateur, si l'utilisateur est connecté, le back envoie au front de le rediriger vers la page principale de l'app
  - Une classe chargée de récupérer les informations de la bdd et de les transformer en JSON, elle sont ensuite map par le front pour display les articles
  - Une classe chargée de poster les informations du formulaire de blog directement dans la base de données, dès ce moment, le front end rafraichis l'appel de bdd pour map tous les articles

## BDD

Table 1 : Users ->

- User.id
- User.name
- user.password

Table 2 : Articles ->

- Article.id
- Article.title
- Article.authorId
- Article.content
