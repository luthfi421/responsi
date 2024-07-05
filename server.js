const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/reserve', (req, res) => {
    const reservasiData = req.body;
    const TextReservasi = `
        Name: ${reservasiData.name}
        Email: ${reservasiData.email}
        Room Type: ${reservasiData.roomType}
        Check-in Date: ${reservasiData.checkIn}
        Check-out Date: ${reservasiData.checkOut}
        ---------------------------------------------
    `;

    fs.appendFile('reservasi.txt', TextReservasi, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error menyimpan reservasi.');
        } else {
            res.send('Reservasi Berhasil Dilakukan.');
        }
    });
});

app.get('/reservasi', (req, res) => {
    fs.readFile('reservasi.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error membaca data reservasi.');
        } else {
            res.send(data);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
