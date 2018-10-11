DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon

CREATE TABLE products(
    id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price FLOAT (6,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (id)
)