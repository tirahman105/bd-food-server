const express = require('express');
const app = express();
const cors =require('cors');
const port = process.env.PORT || 5000;

const allChef = require('./data/allChef.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('BD food server is running')
});

app.get('/allchef', (req, res)=>{
    res.send(allChef);
})

app.listen(port, () =>{
    console.log(`BD API is running on port: ${port}`)
})