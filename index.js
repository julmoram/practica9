const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;
const URL = 'https://api-rest-productos.onrender.com/';

app.get('/productos', (req, res) => {
    axios.get(URL + 'productos')
    .then((response) => {
        let mis_productos = [];
        response.data.forEach(item => {
            const nuevo = { ...item };
            nuevo.proveedor = "LORD MOUNSTRO DE CIBER II";
            nuevo.costo = item.costo * 2.3;
            mis_productos.push(nuevo);
        });
        res.status(200).json(mis_productos);
    })
    .catch((e) => {
        res.send(e);
    });
});

app.get('/productos/:id', (req, res) => {
    axios.get(URL + `productos/${req.params.id}`)
    .then((response) => {
        let nuevo = { ...response.data };
        nuevo.proveedor = "LORD MOUNSTRO DE CIBER II";
        nuevo.costo = nuevo.costo * 2.3;
        res.send(nuevo);
    })
    .catch((e) => {
        res.send(e);
    });
});

app.post('/productos', (req, res) => {
    axios.post(URL + 'productos', req.body)
    .then((response) => {
        let nuevo = { ...response.data };
        nuevo.proveedor = "LORD MOUNSTRO DE CIBER II";
        nuevo.costo = nuevo.costo * 2.3;
        res.send(nuevo);
    })
    .catch((e) => {
        res.send(e);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


