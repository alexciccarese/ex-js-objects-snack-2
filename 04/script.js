// Qual è il metodo migliore per clonare l’oggetto chef, e perché? spread operator, perchè abbiamo una funziona all'interno
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché? structuredClone(), perchè abbiamo oggetti complessi "data"

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};