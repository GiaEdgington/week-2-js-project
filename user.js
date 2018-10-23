const Product = require('./product')
const Recipe = require('./recipe')

module.exports = class User {
    constructor(name){
    this.name = name,
    this.inventory = []
    }

    addProduct(name, unit, quantity) {
        this.inventory.push(new Product(name, unit, quantity));
    }

    haveIngredients(recipe) {
        
        let missingIngredients = []
        
        for (let i = 0; i < recipe.ingredients.length; i++){
            let found = false
            for (let y = 0; y < this.inventory.length; y++){
                if(recipe.ingredients[i].name == this.inventory[y].name){
                        found = true
                }
            }

            if (!found){
                missingIngredients.push(recipe.ingredients[i])
            }
        }


        let shoppingList = "";

        for(let i = 0; i < missingIngredients.length; i++){
            shoppingList += missingIngredients[i].name + ", ";
        }
            
        if(shoppingList == ""){
            console.log("You have all the ingredients! Start Cooking!")
        }
        else {
            console.log("To make " + recipe.title + ", you are missing the following ingredients: " + shoppingList);
        }

    }
}