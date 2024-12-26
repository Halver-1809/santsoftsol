const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Configuración de CORS
const corsOptions = {
  origin: '*', 
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};
app.use(cors(corsOptions));

// Middleware para parsear el cuerpo de la solicitud
app.use(bodyParser.json());

// Ruta para manejar el formulario de contacto
pp.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
  
    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const mailOptions = {
        from: email,
        to: 'destinatario@gmail.com',
        subject: subject || 'Sin asunto',
        text: `Mensaje de ${name} (${email}):\n\n${message}`,
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar correo:', error);
      res.status(500).json({ error: 'Error al enviar el correo' });
    }
  });

// Iniciar servidor
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
