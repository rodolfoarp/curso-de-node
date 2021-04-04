const express = require('express');
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router();

router.get('/', function(req,res){
    controller.getMessages()
        .then((messageList)=>{
            response.success(req,res,200,messageList)
        })
        .catch((err)=>{
            response.error(req,res,500,'Unexpected',err)
        })
});

router.post('/', function(req,res){
    controller.addMessage(req.body.user,req.body.message)
        .then((fullMessage) => {
            response.success(req, res , 201 , fullMessage)
        })
        .catch((err) => {
            response.error(req , res , 500 , "Información Inválida", "Error en el controlador")
        })
});

module.exports = router