var data = require('../products.json');

// Write your solutions below

//console.log(data.items);

//	Print the title all items with more than one image link.

for (i = 0; i < data.items.length; i++) {
	if (data.items[i].product.images.length > 1) {
		console.log("-   " + data.items[i].product.title);
	}
}

