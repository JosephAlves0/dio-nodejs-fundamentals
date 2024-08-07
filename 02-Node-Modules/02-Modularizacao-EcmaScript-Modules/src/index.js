//import connectToDatabase from "./utils/database.js";
//import * as database from "./utils/database.js";
import { connectToDatabase } from "./utils/database.js";
import { disconnectDatabase } from "./utils/database.js";
import { databaseType } from "./utils/database.js";


import { getDataFromApi } from "./utils/api.js";
import * as api from "./utils/api.js"

//connectToDatabase("my-database");

//database.connectToDatabase("my-database"); 
//database.disconnectDatabase();

connectToDatabase("my-database");
disconnectDatabase();

console.log(databaseType);
console.log(databaseType.userType);

getDataFromApi();

console.log(api.key)