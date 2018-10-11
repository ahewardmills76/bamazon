/* This is as far as I got in creating this app.  At the time, I was much stronger with MySQL and queries than I was with the inquirer npm package.
When I revvisit this homework, I will look through the inquirer npm documentation and manipulate the MySQL queries through node.  I feel like
I understand how this app is supposed to work and have a good starting point.
*/


var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "PassWord!",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    console.log('connected as id:' + connection.threadId)
  });
});

  function showInventory() {
    connection.query('SELECT * FROM products', function (err, result) {
      if (err) throw err;
      console.log('-------------------------------------------------------------------------------------------------------------------------------------------');
      console.log('---------------------------------------------------------------------Current Stock---------------------------------------------------------');
      console.log('-------------------------------------------------------------------------------------------------------------------------------------------');


      for (var i = 0; i < result.length; i++) {
        console.log(
          "Item ID:", result[i].id,
          "| Product Name:", result[i].product_name,
          "| Dept. :", result[i].department_name,
          "| Price (USD):", "$" + result[i].price,
          "| Qty. In Stock:", result[i].stock_quantity,
        )}
        console.log('-------------------------------------------------------------------------------------------------------------------------------------------');
        // placeOrder();
      })
    };
//     var placeOrder = function () {
//       message: "Please enter the Item ID of the product you would like to purchase.",
//       type: "input",
//       name: "productSelector",
//     }
     
        
//         function validateItemId()
// {
//    var isValid = !_.isNaN(parseFloat(age));
//    return isValid || "Item ID should be a number!";
// }



showInventory()
    
        
  







