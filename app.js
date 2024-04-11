const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');

app.use(cors());

const mediaDirectory = path.join(__dirname, 'media');

// Middleware para servir archivos estáticos desde la carpeta 'media'
app.use('/media', express.static(mediaDirectory));

// Ruta para obtener la lista de archivos multimedia
app.get('/media-list', (req, res) => {
  fs.readdir(mediaDirectory, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al leer la carpeta de medios.' });
    } else {
      const mediaFiles = files.filter(file => {
        const fileExtension = path.extname(file).toLowerCase();
        // Puedes personalizar las extensiones que deseas incluir en la lista
        return ['.jpg', '.jpeg', '.png', '.gif', '.mp4'].includes(fileExtension);
      });
      res.json({ mediaFiles });
    }
  });
});

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Servidor multimedia en funcionamiento!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

