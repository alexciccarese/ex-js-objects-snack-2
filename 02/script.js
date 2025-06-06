// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? "Salad"
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 3

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // "Salad"
console.log(secondBurger.ingredients[0]); // "Salad"
