const e = import('faker').then(faker => {
    
    function mount(el) {

        let products = '';
        
        for (let i = 0; i < 5; i++) {
    
          const name = faker.commerce.productName();
          products += `<div>${name}</div>`;
    
        };
        
        el.innerHTML = products;
        
    }

    if (process.env.NODE_ENV === 'development') {

        const element = document.querySelector('#dev-products');

        if (element) {

            mount(element);

        } else {

            throw new Error("dev-products element not found")

        }

    };

    return mount;

});

export { e }