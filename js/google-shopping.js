var data = require('../products.json');

// Write your solutions below

//console.log(data.items);


// 1

var shoppingProduct = [];

// for (i = 0; i < data.items.length; i++) {
// 	if (data.kind === "shopping#products") {
// 		shoppingProduct.push(data[i]);
// 	}
// }

// console.log(shoppingProduct.length);



// 2

// for (i = 0; i < data.items.length; i++) {
// 	if (data.items[i].product.inventories["0"].availability == "backorder") {
// 		console.log("-  " + data.items[i].product.title);
// 	}
// }

// for (i = 0; i < data.items.length; i++) {
// 	if (data.items[i].product.inventories["0"].availability == "backorder") {
// 		console.log(i + ".)    " + data.items[i].product.title);
// 	}
// }



// 3

// for (i = 0; i < data.items.length; i++) {
// 	if (data.items[i].product.images.length > 1) {
// 		console.log(data.items[i].product.title);
// 	}
// }



// 4

// for (i = 0; i < data.items.length; i++) {
// 	if (data.items[i].product.brand == "Canon") {
// 		console.log(data.items[i].product.title);
// 	}
// }



// 5

// for (i = 0; i < data.items.length; i++) {
// 	if (data.items[i].product.brand == "Canon" 
// 		&& data.items[i].product.author.name.includes("eBay")) {
// 		console.log((i + 1) + ".   " + data.items[i].product.title);
// 	}
// }



// 6

// for (i = 0; i < data.items.length; i++) {
// 	var brand = data.items[i].product.brand;
// 	var price = data.items[i].product.inventories["0"].price;
// 	var imageLink = data.items[i].product.images["0"].link;

// 	console.log(i + ".   ");
// 	console.log("Brand: " + brand); 
// 	console.log("Price:  " + price);
// 	console.log("Image Link:  " + imageLink);

// }






