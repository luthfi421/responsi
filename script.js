document.getElementById('reservasi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const tipekamar = document.getElementById('tipe-kamar').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;

    const reservasiData = {
        nama: nama,
        email: email,
        tipekamar: tipe-kamar,
        checkIn: checkIn,
        checkOut: checkOut
    };

    fetch('/reserve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservasiData)
    })
    .then(response => response.text())
    .then(data => {
        alert('Reservasi Suksess!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Load reservation data for admin
if (window.location.pathname === '/admin.html') {
    fetch('/reservasi')
        .then(response => response.text())
        .then(data => {
            document.getElementById('data-reservasi').innerText = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
