var data = require('../products.json');

// Write your solutions below

//console.log(data.items);

//	6.) Print all the products with their brand, price, and an image link


for (i = 0; i < data.items.length; i++) {
	var brand = data.items[i].product.brand;
	var price = data.items[i].product.inventories["0"].price;
	var imageLink = data.items[i].product.images["0"].link;

	console.log(i + ".   ");
	console.log("Brand: " + brand); 
	console.log("Price:  " + price);
	console.log("Image Link:  " + imageLink);

}
