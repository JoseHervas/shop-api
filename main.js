const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const productosController = require('./controllers/productos.controller');
const { check } = require('express-validator');

//Creo el servidor
const server = express();

//Middleware
server.use(helmet());
server.use(bodyParser.json());
//server.use(express.static('static'));

//Endpoints --> 5 por cada tabla
//Get ALL
server.get('/products', productosController.listProducts)
//Get detail
server.get('/products/:id', productosController.getSingleProduct)
//Añadir productos
server.post('/createSingleProduct', [
    check('nombre').isString().escape().trim(),
    check('precio').isFloat(),
    check('cantidad').isNumeric()
] , productosController.createSingleProduct)
//Modificar un producto existente
server.put('/updateSingleProduct', [
    check('nombre').isString().escape().trim(),
    check('precio').isFloat(),
    check('cantidad').isNumeric(),
    check('id').isNumeric()
], productosController.updateSingleProduct )

//Eliminar un producto
server.delete('/products/:id', productosController.deleteSingleProduct)

//listen
server.listen(3000, () => {console.log("Servidor listo en el puerto 3000!")})