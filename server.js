const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req,res){
    console.log(req.headers)
    res.header({
        "custom-header": "Nuestro valor personalizado",
    })
    res.send('Lista de mensajes');
});

router.post('/message', function(req,res){
    res.send('Mensaje añadido');
});

router.delete('/message', function(req,res){
    console.log(req.query);
    console.log(req.body);
    res.status(201).send([{error: " ", body: "creado correctamente"}]);
});

//app.use('/', function(req, res){
  //  res.send('Hola');
//})

app.listen(3000);
console.log('La aplicación está escuchando en http://localhots:3000');