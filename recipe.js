const Product = require('./product')

module.exports = class Recipe {
    constructor(title) {
    this.title = title,
    this.ingredients = []
    }
    instructions(){
        let ingredients= []
        for(let i = 0; i < this.ingredients.length; i++){
            ingredients += this.ingredients[i].name + ", ";
        }
        console.log("The recipe " + this.title + " requires the following ingredients " + ingredients);
    }
    addProduct(name, unit, quantity) {
        this.ingredients.push(new Product(name, unit, quantity));
    }
}