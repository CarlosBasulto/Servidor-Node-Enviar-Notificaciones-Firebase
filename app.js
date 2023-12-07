// app.js
const express = require('express');
const admin = require('firebase-admin');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;


// Configura las credenciales de Firebase Admin
const serviceAccount = require('./credenciales.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});



app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});



const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.get('/enviar-notificaciontest', (req, res) => {
    const registrationToken = 'dHzLG9SidEoVdvnPCGCaMF:APA91bG3DdXBWo-ay7_bXWfXeP1QSsnFTZosK2meqxPsqSgl9knkmAlO0kvL-0aWSJ0FHqS_1kpo5m76x3aP-WAncuP6bARl6h4o1KXV1kjMDdRZrZb3KhRKlpQcH_lGikAKz-MhHAQQ'; // Reemplázalo con el token real del dispositivo
  
    const message = {
      data: {
        title: 'Holaaaa',
        body: 'Cuerpo del mensaje',
      },
      token: registrationToken,
    };
  
    admin.messaging().send(message)
      .then((response) => {
        console.log('Notificación enviada:', response);
        res.send('Notificación enviada');
      })
      .catch((error) => {
        console.error('Error al enviar la notificación:', error);
        res.status(500).send('Error al enviar la notificación');
      });
  });



  app.post('/enviar-notificacion', (req, res) => {
    const { title, body, token } = req.body;
  
    if (!title || !body || !token) {
      return res.status(400).send('Faltan parámetros requeridos');
    }
  
    const message = {
      data: {
        title,
        body,
      },
      token,
    };
  
    admin.messaging().send(message)
      .then((response) => {
        console.log('Notificación enviada:', response);
        res.send('Notificación enviada');
      })
      .catch((error) => {
        console.error('Error al enviar la notificación:', error);
        res.status(500).send('Error al enviar la notificación');
      });
  });
  

app.get('/saludo', (req, res) => {
  res.send('¡Hola desde la ruta de saludo!');
});