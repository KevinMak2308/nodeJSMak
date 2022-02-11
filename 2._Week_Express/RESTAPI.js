const express = require("express");
const api = express();

api.use(express.json());


//Exercise in class
api.get("/", (req, res) => {
    res.send({message : "Thunder"});
});

api.get("/welcome", (req, res) => {
    res.send({message: "Welcome Stranger"});
});

api.post("/mirror", (req, res) => {
    res.send(req.body);
});


//Homework
const beerArray = []

api.get('/beers', (req, res) => {
    res.json(beerArray);
});

api.get('/beers/:id', (req, res) => {
    const id = req.params.id;
     
    for(let beer of beerArray) {
         
        if(beer.id == id) {
             res.json(beer);
             return;

             } 
     }
        res.status(404).send('Beer was not found');

});

api.post('/beers', (req, res) => {
    const beer = req.body;
    beerArray.push(beer);
    res.send('Beer added to the Array')
});

api.put('/beers/:id', (req, res) => {
    const id = req.params.id;
    const newBeer = req.body;

    for (let i = 0; i < beerArray.length; i++) {
        let beer = beerArray[i]
        
        if(beer.id == id) {
            beerArray[i] = newBeer;
        }
    }

    res.send('Beer was updated');
});

api.patch('/beers/:id', (req, res) => {
    const id = req.params.id;
    const newBeer = req.body;

    for (let i = 0; i < beerArray.length; i++) {
        let beer = beerArray[i]
        
        if(beer.id == id) {
            beerArray[i] = newBeer;
        }
    }

    res.send('Beer was updated');
});

api.delete('/beers/:id', (req, res) => {
    const id = req.params.id;

    for (let i = 0; i < beerArray.length; i++) {
        let beer = beerArray[i];
        
        if(beer.id == id) {
            beerArray.splice(beerArray.indexOf(beer), 1);
        }
    }
    
    res.send('Ale was deleted');
});
  

api.listen(8080);

