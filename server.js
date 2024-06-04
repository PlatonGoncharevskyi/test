const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());  // Добавьте это

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, number, email, message, orderDetails, totalSum } = req.body;

  console.log('Received request:', req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gongarevskijplaton@gmail.com', // Your Gmail address
      pass: 'rprz orug ywbe xalv'   // App Password generated from Google
    }
  });

  const mailOptions = {
    from: 'gongarevskijplaton@gmail.com', // Your Gmail address (sender)
    to: 'gongarevskijplaton@gmail.com',   // Recipient's email address
    subject: `Замовлення ProSwissCar з сайту від: ${name}`,
    text: `Ім'я: ${name}\nНомер телефону: ${number}\nЗамовлення: ${orderDetails}\nЗагальна сума: ${totalSum} UAH\nПошта: ${email}\nКоментар: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  ws.on('message', (message) => {
    console.log('Received message:', message);
    ws.send('Message received');
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});


/*const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/send-email', (req, res) => {
  const { name, number, email, message, orderDetails, totalSum } = req.body;

  console.log('Received request:', req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gongarevskijplaton@gmail.com', // Your Gmail address
      pass: 'rprz orug ywbe xalv'   // App Password generated from Google
    }
  });

  const mailOptions = {
    from: 'gongarevskijplaton@gmail.com', // Your Gmail address (sender)
    to: 'gongarevskijplaton@gmail.com',   // Recipient's email address
    subject: `Замовлення ProSwissCar з сайту від: ${name}`,
    text: `Ім'я: ${name}\nНомер телефону: ${number}\nЗамовлення: ${orderDetails}\nЗагальна сума: ${totalSum} UAH\nПошта: ${email}\nКоментар: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent: ' + info.response);
  });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/