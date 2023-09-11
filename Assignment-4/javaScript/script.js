$(document).ready(function () {
    const items = [
        {
            name: 'chair',
            price: 200,
            description: 'Single Shair',
            Image: "images/chair.jpeg"
        },
        {
            name: 'drawer',
            price: 350,
            description: 'Carlton Solid Wood',
            Image: "images/Tiny table.avif"
        },
        {
            name: 'single Set Sofa',
            price: 100,
            description: 'One seater fabric recliner',
            Image: "images/grey sofa.jpeg"
        },
        {
            name: 'single Chair',
            price: 200,
            description: 'Single chair',
            Image: "images/chair2.avif"
        },
        {
            name: 'tea Table',
            price: 200,
            description: 'Tea table with four chair',
            Image: "images/teetable.jpeg"
        },
        {
            name: 'red Sofa',
            price: 200,
            description: 'Double seat red sofa',
            Image: "images/red sofa.jpeg"

        },
        {
            name: 'dining Set',
            price: 200,
            description: 'Table with eight chair',
            Image: "images/dining.jpeg"
        },
        {
            name: 'two Chair',
            price: 200,
            description: 'Two wood chair',
            Image: "images/two chair.jpeg"
        },
        {
            name: 'study Table',
            price: 200,
            description: 'Long study table',
            Image: "images/studt table.jpeg"
        },
        {
            name: 'tea Table Set',
            price: 200,
            description: 'Wooden tea table',
            Image: "images/table.jpeg"
        },
    ];
    let viewProduct = $('.viewProduct');
    
    for (let i = 0; i < items.length; i++) {
        createElement(i);
    }
    function createElement(index) {
        let value = 1;
        let pro = $(document.createElement('div'));
        viewProduct.append(pro);
        pro.css({ "max-width": "450px", "height": "300px", "background-color": "teal", "box-shadow": "1px 2px 10px ", "margin": "20px", "padding": "50px", "font-size": "20px", "font-weight": "bold" });
        let proHead = $(document.createElement('div'));
        pro.append(proHead);
        let proName = $(document.createElement('h2'));
        proHead.append(proName);
        proName.text(items[index].name);
        let button = $(document.createElement('button'));
        proHead.append(button);
        let btn = button.addClass('btn' + index);
        button.addClass('fa fa-shopping-cart')
        proHead.addClass('proHead');
        let imgcontainer = $(document.createElement('div'));
        pro.append(imgcontainer);
        imgcontainer.css({ "width": "250px", "height": "180px" })
        let img = $(document.createElement('img'));
        imgcontainer.append(img);
        img.css({ "width": "100%", "height": "100%", "object-fit": "contain" })
        img.attr('src', items[index].Image);
        let price = $(document.createElement('p'));
        pro.append(price);
        price.text(items[index].price + "rs")
        let description = $(document.createElement('p'));
        pro.append(description);
        description.text(items[index].description);

        button.click(function () {
            $(".viewCartMain").show();
            let viewCart = $(document.createElement('div'));
            $(".viewCartMain").append(viewCart);;
            viewCart.css({ "margin": "20px", "box-shadow": "1px 2px 10px ", "padding": "30px" });
            let cartHead = $(document.createElement('div'));
            viewCart.append(cartHead);
            cartHead.css({ "display": "flex", "align-items": "center" })
            let cartItem = $(document.createElement('h4'));
            cartHead.append(cartItem);
            let remove = $(document.createElement('button'));
            cartHead.append(remove);
            remove.text('Remove')
            let row = $(document.createElement('div'));
            viewCart.append(row);
            row.css({ "display": "flex", "align-items": "center" })
            let quantity = $(document.createElement('p'));
            row.append(quantity);
            quantity.text('Quantity :   ');
            let inputQuantity = $(document.createElement('span'));
            quantity.append(inputQuantity);
            let increment = $(document.createElement('button'));
            row.append(increment);
            increment.text("+");
            let decrement = $(document.createElement('button'));
            row.append(decrement);
            decrement.text("-");
            let cartPrice = $(document.createElement('p'));
            viewCart.append(cartPrice);
            cartPrice.text('Price in rs :   ')
            let totalPrice = $(document.createElement('span'));
            cartPrice.append(totalPrice);
            cartItem.text(items[index].name);
            totalPrice.text(items[index].price);
            inputQuantity.text(value);
            button.hide();
            increment.click(function () {
                value++;
                inputQuantity.text(value);
                totalPrice.text(items[index].price * value);
            });

            decrement.click(function () {
                value--;
                inputQuantity.text(value);
                totalPrice.text(items[index].price * value);
                if (value === 0) {
                    value = 1;
                    button.show();
                    viewCart.hide();
                    totalPrice.text(items[index].price);
                }
            });

            remove.click(function () {
                viewCart.hide();
                value = 1;
                button.show();
            })        
        });

    $('.search').keyup(function () {
        let search = $('.search').val().trim().toLowerCase();
        proName.filter(function(){
          if( $(this).text().toLowerCase().indexOf(search) > -1){
            pro.show();
          }
          else{
            pro.hide();
          }
        })
     
});
    }
}); 
