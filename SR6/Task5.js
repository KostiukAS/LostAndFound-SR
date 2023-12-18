const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

let fruitsOnSale = (objArray) => {
    objArray.forEach(elem => {
        if(elem.id == null) {
            elem.id = Math.floor(Math.random() * 1000001);
        }
        elem.price *= 0.8;
    });

    return objArray;
}

fruitsOnSale(fruits).forEach(elem => {
    console.log(elem);
});