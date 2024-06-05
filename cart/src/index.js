import('faker').then(faker => {

    document.getElementById("cart-container").innerHTML = `number of cart items is : ${faker.random.number()}`;

});