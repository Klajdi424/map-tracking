const express = require('express');
const app = express();

let driverLocation = { lat: 51.5074, lng: -0.1278 };

app.get('/driver-location', (req, res) => {
    res.json(driverLocation);
});

setInterval(() => {
    driverLocation.lat += (Math.random() - 0.5) * 0.001;
    driverLocation.lng += (Math.random() - 0.5) * 0.001;
}, 2000);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
