const stockData = [
  { id: 1, 
    userId: 1, 
    name: "Ana Alfaro",
    username: "anamlfr",
    pin: "pass23", 
    name_stock: "HOLA", 
    quantity: 10, 
    price: 150, 
    monetaryValue: 150
  },

  { id: 2,
    userId: 2, 
    name: "Alexa Camacho",
    username: "alexcamacho", 
    name_stock: "GOOGL", 
    quantity: 5, 
    price: 2800, 
    monetaryValue: 2800 },

];

export function getStockData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stockData);
    }, 1000); 
  });
}

  getStockData()
  .then(data => {
    console.log("Datos de acciones obtenidos:", data);
  })
  .catch(error => {
    console.error("Error al obtener los datos de las acciones:", error);
  });
