var data = require('../products.json');

// Write your solutions below

//console.log(data.items);

//	2.) Print the title all items with a backorder availability in inventories.


for (i = 0; i < data.items.length; i++) {
	if (data.items[i].product.inventories["0"].availability == "backorder") {
		console.log("-  " + data.items[i].product.title);
	}
}









