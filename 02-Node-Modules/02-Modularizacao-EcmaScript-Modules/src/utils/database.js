const databaseType = {
    userType: "admin",
    typeData: "datalocal",
};

async function connectToDatabase(dataName) {
    // conexão
    console.log(`conectado ao banco ${dataName}`);
};

async function disconnectDatabase(params) {
    console.log("desconectando do banco de dados");
}

export {
    connectToDatabase, 
    disconnectDatabase,
    databaseType
};