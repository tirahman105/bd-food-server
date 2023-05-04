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
    const selectedChef = allChef.find(n => n.id === id);
    const selectedRecipe = recipe.filter(n => n.chef_id === id);
    console.log('tareq', selectedChef, allChef)
    
    res.send({selectedRecipe, selectedChef});
})

app.get('/allchef/:id', (req, res) => {
    // const id = parseInt(req.params.id);
    // const chefRecipe= recipe.filter(n => parseInt(n.chef_id) === id);
    // res.send(chefRecipe);

    const id = req.params.id;
    const selectedChef = allChef.find(n => n.id === id);
    const selectedRecipe = recipe.filter(n => n.chef_id === id);
    // console.log('tareq', selectedChef, allChef)
    
    res.send({selectedRecipe, selectedChef});
})


app.listen(port, () =>{
    console.log(`BD API is running on port: ${port}`)
})