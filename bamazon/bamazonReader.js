/* 
I created a csv file and used this reader to import all of my products into the product table in my bamazon database.  I learned this 
technique in the Saturday class taught by Ollie during the Top5000 activity
*/
var mysql = require('mysql');


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PassWord!",
  database: "bamazon"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream('Bamazon.csv')
    });
    
    lineReader.on('line', function (line) {
      var data = line.split(",");
      var importObject = {
        product_name: data[0],
        department_name: data[1],
        price: parseFloat(data[2]),
        stock_quantity: parseInt(data[3]),
        
    }
      connection.query('insert into products set ?', importObject, function(err, res) {
          console.log(res + " products inserted!\n");
        })
    });
  });

