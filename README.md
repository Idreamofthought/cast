# Cast

Site vitrine statique pour Cast, studio d'accessibilité audiovisuelle et de sous-titrage.

## Pages

- `index.html` : accueil
- `services.html` : prestations SDH/SME, traduction et contrôle qualité
- `portfolio.html` : projets
- `about.html` : présentation du studio
- `contact.html` : formulaire de contact

## Utilisation

Le site ne nécessite aucune dépendance de build. Ouvrir `index.html` dans un navigateur suffit. Pour le servir localement :

```bash
python3 -m http.server 8000
```

Les polices Manrope et DM Mono sont chargées depuis Google Fonts lorsque la connexion est disponible ; les polices de secours permettent au site de rester lisible hors ligne.
