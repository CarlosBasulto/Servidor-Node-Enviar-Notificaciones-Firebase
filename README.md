# Servidor-Node-Enviar-Notificaciones-Firebase

Este servidor de BackEnd en Node, nos permitirá lanzar notificaciones en firebase para nuestros clientes, es un servicio básico para pruebas.

Requisitos:
- Tener una cuenta en firebase, recuerda generar el par de claves de credenciales desde la configuración del proyecto en Firebase.Configuración de proyecto-> Cuentas de servicio, al generarlas descargará un fichero, debes sustituirlo por el de credenciales.json de este proyecto

- También hacemos uso de:

const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');  

- Para lanzarlo simplemente lanza por consola: 

    node app.js


- Hay una get llamada: 

 Hay que enviarle, el título de la petición, el cuerpo y el token del usaurio. 

app.post('/enviar-notificacion', (req, res) => {
    const { title, body, token } = req.body;

   
    
    https://github.com/CarlosBasulto/Angular16-NotificacionesPush-Firebase.git

 - Tenemos otra llamada para pruebas:

Esta get lanza una petición a un token que definas de usuario.

app.get('/enviar-notificaciontest', (req, res) => {
const registrationToken = 'dsfsdfsdf:APA91bG3DdXBWo-sdfdsfsdf-sddsfdsf-WAncuP6bARl6h4o1KXV1kjMDdRZrZb3KhRKlpQcH_lGikAKz-MhHAQQ'; //Reemplázalo con el token real del dispositivo
  

