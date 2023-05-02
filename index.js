const express = require('express');
const app = express();
const cors =require('cors');
const port = process.env.PORT || 5000;

const allChef = require('./data/allChef.json');
const recipe = require('./data/recipe.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('BD food server is running')
});

app.get('/allchef', (req, res)=>{
    res.send(allChef);
});
app.get('/recipe', (req, res)=>{
    res.send(recipe);
})

app.get('/recipe/:id', (req, res)=> {
    const id = req.params.id;
    console.log(id);
    const selectedRecipe = recipe.find(n => n._id === id);
    res.send(selectedRecipe);
})

app.listen(port, () =>{
    console.log(`BD API is running on port: ${port}`)
})