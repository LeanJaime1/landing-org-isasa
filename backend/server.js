require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `Mensaje desde la landing`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje:\n${mensaje}`,
    });

    res.status(200).json({ message: "Mensaje enviado correctamente." });
  } catch (error) {
    console.error("Error al enviar:", error);
    res.status(500).json({ message: "Error al enviar el mensaje." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});
