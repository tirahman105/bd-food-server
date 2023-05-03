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
    const selectedRecipe = recipe.find(n => n._id === id);
    
    res.send(selectedRecipe);
})

app.get('/allchef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chefRecipe= recipe.filter(n => parseInt(n.chef_id) === id);
    res.send(chefRecipe);
})

app.listen(port, () =>{
    console.log(`BD API is running on port: ${port}`)
})