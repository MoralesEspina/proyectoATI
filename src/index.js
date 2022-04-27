const express = require('express');
const app = express();
const mysqlConnection = require('../configurations/db-conf');
const cors = require('cors');
const helmet = require('helmet')


app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(cors());
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));

app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
    );
    next();
  });

  
app.get("/", (req, res) => {
    res.send('Nombre: "Esdras Mefiboseth Morales Espina" , Carné: "0907-18-9909');
});

app.post("/user", (req, res) => {
    let doc = req.body;
    mysqlConnection.query('insert into usuarios (Nombre, Apellido) values (?,?)',
        [doc.Nombre, doc.Apellido], (err, result) => {
            if (!err) {
                console.log(result);
                res.status(201).send("Creado Correctamente");
            } else {
                console.log(err);
                res.send('Error' + err);
            }
        });
});

app.get("/user", (req, res) => {
    mysqlConnection.query('Select * from usuarios', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
});

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

