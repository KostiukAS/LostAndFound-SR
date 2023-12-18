function createProduct(obj, callback) {
    if(obj.id == null) {
        obj.id = Math.floor(Math.random() * 1000001);
    }
    callback(obj);
}

function logProduct(product) {
    console.log(product);
}

function logTotalPrice(product) {
    console.log(product.price * product.number);
}

const product = {
    name: "Груша",
    price: 12.99,
    number: 5
};

createProduct(product, logProduct);
createProduct(product, logTotalPrice);