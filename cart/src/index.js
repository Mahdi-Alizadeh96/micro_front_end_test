const fakerModule = new Promise((resolve, reject) => {

    import('faker').then(faker => {

        resolve(faker);

    });

});

async function mount(el) {

    const faker = await fakerModule;
    
    el.innerHTML = `number of cart items is : ${faker.random.number()}`
    
};

if (process.env.NODE_ENV === 'development') {

    const element = document.getElementById("cart");

    if (element) {

        mount(element);

    }

}

export { mount };