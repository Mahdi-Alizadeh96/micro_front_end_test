import faker from 'faker';

if (process.env.NODE_ENV === 'development') {

    const element = document.querySelector('#dev-products');

    if (element) {

        mount(element);

    }

};

function mount(el) {

    let products = '';
    
    for (let i = 0; i < 5; i++) {

        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;

    };
    
    el.innerHTML = products;
    
}

export {mount}