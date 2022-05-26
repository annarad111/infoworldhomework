const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 9999;

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Helloooooooooooooo!')
});

app.get('/pacients', function(req, res) {
    const pacients = [
        {   nume: "Marley",
            prenume: "Bob",
            data_nasterii: "01/01/1966",
            sex:"M",
            CNP: "1903453389214",
            numar_telefon:"076544332",
            numar_ordine: "1"},

            {nume: "Monroe",
            prenume: "Marilyn",
            data_nasterii: "02/02/1967",
            sex:"F",
            CNP: "2903453389216",
            numar_telefon:"076534332",
            numar_ordine: "2"},
            
            {nume: "Presley",
            prenume: "Elvis",
            data_nasterii: "03/03/1965",
            sex:"M",
            CNP: "1902453389214",
            numar_telefon:"076744332",
            numar_ordine: "3"},

            {nume: "Reeves",
            prenume: "Keanu",
            data_nasterii: "07/07/1969",
            sex:"M",
            CNP: "1903453389256",
            numar_telefon:"077544832",
            numar_ordine: "4"},

            {nume: "Johansson",
            prenume: "Scarlett",
            data_nasterii: "09/09/1976",
            sex:"F",
            CNP: "2903453389264",
            numar_telefon:"076544341",
            numar_ordine: "5"},

            {nume: "Hathaway",
            prenume: "Anne",
            data_nasterii: "05/08/1986",
            sex:"F",
            CNP: "2903453379314",
            numar_telefon:"076567332",
            numar_ordine: "6"},

            {nume: "Portman",
            prenume: "Natalie ",
            data_nasterii: "11/11/1996",
            sex:"F",
            CNP: "2802453489214",
            numar_telefon:"073303134",
            numar_ordine: "7"},

            {nume: "Evans",
            prenume: "Chris",
            data_nasterii: "08/09/1992",
            sex:"M",
            CNP: "1903476380214",
            numar_telefon:"076544000",
            numar_ordine: "8"},

            {nume: "Leto",
            prenume: "Jared",
            data_nasterii: "03/09/1996",
            sex:"M",
            CNP: "1903253389114",
            numar_telefon:"076544114",
            numar_ordine: "9"},

            {nume: "Depp",
            prenume: "Jhonny",
            data_nasterii: "12/12/1956",
            sex:"M",
            CNP: "1903443309114",
            numar_telefon:"071534262",
            numar_ordine: "10"},
    ]
    res.json(pacients);    
  });

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});