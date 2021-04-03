const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

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
    response.success(req, res, 200, 'Lista de mensajes');
    //res.send('Lista de mensajes');
});

router.post('/message', function(req,res){
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req , res , 400 , "Error captado", "Es solo una simulación de error.")    
    } else {
        response.success(req, res , 201 , "Creado correctamente")
    }
});

app.use('/app', express.static('public'))

//app.use('/', function(req, res){
  //  res.send('Hola');
//})

app.listen(3000);
console.log('La aplicación está escuchando en http://localhots:3000');