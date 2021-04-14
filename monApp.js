const express = require ('express') // en récupère le module express que nous avons installé graçe a (npm install express)
const app = express()// utilisation de ce module pour la création du serveur réferencer dans la VAR = app

app.set('views','./views'); //définir le dossier pour les views
app.set('view engine', 'ejs'); //définir ejs comme outil pour utiliser les views
app.use('/public',express.static('public')); //permet l'utilisation de fichiers statiques dans public

app.get('/PageGames',(req , res)=> {
    res.render('PageGames');
});
app.get('/UpcomingFeatures',(req , res)=> {
    res.render('UpcomingFeatures');
});
app.get('/PageCarousel',(req , res)=> {
    res.render('PageCarousel');
});
app.get('/ComposantThumbnails',(req , res)=> {
    res.render('ComposantThumbnails');
});
app.get ('/',(req , res)=>{ //req demande la page web
    const nom =req.params.nom;
    res.render('index', {userName: nom});
});

app.listen (3015,()=>{ //le serveur attend les requete sur le port 3000
    console.log ("j'écoute le port 3015 !");
});
//3015 mon port