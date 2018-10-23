const Recipe = require('./recipe')
const User = require('./user')
const Database = require('./database')

//recipes //
const allanorma = new Recipe ('Pasta alla Norma')
const omelette = new Recipe ('French Omelette')
const friedchicken = new Recipe ('Fried Chicken')

//ingredients (products) //

allanorma.addProduct("tomato sauce", 236, "ml")
allanorma.addProduct("eggplant", 2, "ea")
allanorma.addProduct("olive oil", 20, "ml")
allanorma.addProduct("pasta", 600, "g")

omelette.addProduct("eggs", 3, "ea")
omelette.addProduct("butter", 140, "ml")
omelette.addProduct("cheese", 400, 'g')

friedchicken.addProduct("chicken", 2, "kg")
friedchicken.addProduct("oil", 700, "ml")
friedchicken.addProduct("flour", 300, "g")
friedchicken.addProduct("pepper", 80, "g")
friedchicken.addProduct("garlic", 200, "g")


//users //
const gaia = new User("Gaia")
const alex = new User("Alex")
const lisa = new User("Lisa")


//user - product interaction //

gaia.addProduct("sugar", "kg", 3)
gaia.addProduct("olive oil", "ml", 300)
gaia.addProduct("pasta", 'g', 700)
gaia.addProduct("tomato sauce", 'ml', 400)

alex.addProduct("eggs", "ea", 12)
alex.addProduct("butter", "g", 300)
alex.addProduct("cheese", "g", 450)

lisa.addProduct("chicken", "kg", 3)
lisa.addProduct("oil", "ml", 400)
lisa.addProduct("garlic", "g", 300)



//gaia.haveIngredients(allanorma)

//console.log(gaia.inventory)

//alex.haveIngredients(omelette)

//console.log(alex.inventory[1].name)

//console.log(Chalk.green.bold(alex.inventory[1].name))

//friedchicken.instructions()

//lisa.haveIngredients(friedchicken)

Database.save(allanorma)
const loadedFile = Database.load()
console.log(loadedFile.ingredients)




