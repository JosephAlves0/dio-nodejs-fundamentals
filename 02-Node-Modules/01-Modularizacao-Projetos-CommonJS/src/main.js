const {getFullName, productType } = require("./services/products");
const products = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {

    console.log("Carrinho compras");

    getFullName("1", "teclado");
    products.getFullName("1", "teclado");
    console.log(productType)
    

    // product.getFullName("408", "mousepad");
    // product.getFullName("508", "mouse");
    // product.getProductLabel("mousepad");

    database.connectToDatabase("mysql");
    database.disconnectDatabase();

}

main()