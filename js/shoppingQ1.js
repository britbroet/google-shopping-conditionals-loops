var data = require('../products.json');

// Write your solutions below

//console.log(data.items);

//	1.) Go through the items and find all results that have kind of shopping#product. 
//		Print the count of these results. Where else is this count information stored in the 
//		search results?


var shoppingProduct = [];

for (i = 0; i < data.items.length; i++) {
	if (data.kind === "shopping#products") {
		shoppingProduct.push(data[i]);
	}
}

console.log(shoppingProduct.length);








