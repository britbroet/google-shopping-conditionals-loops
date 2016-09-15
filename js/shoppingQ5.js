var data = require('../products.json');

// Write your solutions below

//console.log(data.items);

//	5.) Print all items that have an author name of "eBay" and are brand "Canon".


for (i = 0; i < data.items.length; i++) {
	if (data.items[i].product.brand == "Canon" 
		&& data.items[i].product.author.name.includes("eBay")) {
		console.log(data.items[i].product.title);
		console.log("(" + data.items[i].product.author.name + ")");
	}
}







