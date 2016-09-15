var data = require('../products.json');

// Write your solutions below

//console.log(data.items);

//	4.) Print all "Canon" products in the items (careful with case sensitivity).


for (i = 0; i < data.items.length; i++) {
	if (data.items[i].product.brand == "Canon") {
		console.log("-   " + data.items[i].product.title);
	}
}







