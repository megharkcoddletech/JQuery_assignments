$(document).ready(function () {
    let viewProduct = $('.viewProduct');
    let productMainArray = [];
    let Product = [];
    let itemCounter = 0;
    let length = 3;
    let n = 0;
    let np = [];
    let sum = 0;
    let buttonCounter = 0;
    $.ajax({
        type: 'GET',
        url: "https://dummyjson.com/products",
        success: function (data) {
            Product = data.products;
            console.log(Product);
            function displayProducts(products) {
                for (i = 0; i < 3; i++) {
                    createElement(products[i]);
                    itemCounter++;
                    if (itemCounter === 3) {
                        break;
                    }
                }
            }
            function loadMoreItems(Product) {
                for (i = 3; i < Product.length; i++) {
                    createElement(Product[i]);
                }
                if (i >= Product.length) {
                    $(window).off('scroll');
                }
            }

            $(window).scroll(scrollFunction)
            function scrollFunction() {
                length = Product.length;
                if ($(window).scrollTop() + $(window).height() + 200 >= $(document).height()) {
                    loadMoreItems(Product);
                }
            }
            function createElement(productData) {
                let productMain = $(document.createElement('div'));
                viewProduct.append(productMain);
                productMain.css({ "display": "flex", "background-color": "teal", "box-shadow": "1px 2px 10px", "padding": "50px" });
                productMainArray.push(productMain);
                let proImage = $(document.createElement('div'));
                productMain.append(proImage);
                let pro1 = $(document.createElement('div'));
                productMain.append(pro1);
                let pro = $(document.createElement('div'));
                pro1.append(pro);
                pro.css({ "display": "block", "margin": "0px 0px 0px 30px", "font-size": "20px", "font-weight": "bold" });
                let thumbnailImage = $(document.createElement('div'));
                proImage.append(thumbnailImage);
                thumbnailImage.css({ "width": "450px", "height": "250px" });
                let img = $(document.createElement('img'));
                thumbnailImage.append(img);
                img.css({ "width": "100%", "height": "100%", "object-fit": "contain" });
                let imgMain = $(document.createElement('div'));
                thumbnailImage.append(imgMain);
                imgMain.css({ "display": "flex" });
                $.each(productData.images, function (i, item) {
                    let imgcontainer = $(document.createElement('div'));
                    imgMain.append(imgcontainer);
                    imgcontainer.css({ "width": "100px", "height": "100px", "margin": "2px" });
                    let img1 = $(document.createElement('img'));
                    imgcontainer.append(img1);
                    img1.attr('src', item);
                    img1.css({ "width": "100%", "height": "100%", "object-fit": "cover", "margin": "5px", "box-shadow": "1px 1px 1px whitesmoke" });
                });
                let proHead = $(document.createElement('div'));
                pro.append(proHead);
                proHead.css({ "display": "flex", "align-items": "center", "justify-content": "spacebetween" })
                let proName = $(document.createElement('h4'));
                proHead.append(proName);
                let proBrand = $(document.createElement('h5'))
                proHead.append(proBrand);
                let description = $(document.createElement('p'));
                pro.append(description);
                let rating = $(document.createElement('p'));
                pro.append(rating);
                let price = $(document.createElement('div'));
                pro.append(price);
                price.css({ "dispaly": "flex", "flex-direction": "row", "flex-wrap": "no-wrap" });
                let oldPrice = $(document.createElement('p'));
                price.append(oldPrice);
                let discountPrice = $(document.createElement('p'));
                price.append(discountPrice);
                let discount = $(document.createElement('p'));
                pro.append(discount);
                let stock = $(document.createElement('p'));
                pro.append(stock);
                let button = $(document.createElement('button'));
                proHead.append(button);
                button.addClass('fa fa-shopping-cart');
                proName.text(productData.title);
                img.attr('src', productData.thumbnail);
                proBrand.text(productData.brand);
                description.text(productData.description);
                rating.text(productData.rating);
                rating.addClass("fa fa-star checked ")
                let poductPrice = productData.price;
                let discountRate = productData.discountPercentage / 100
                oldPrice.text(productData.price + " rs")
                oldPrice.css({ "text-decoration": "line-through" });
                let discountPriceRate = poductPrice * discountRate;
                let priceDiscount = poductPrice - discountPriceRate;
                console.log(poductPrice);
                discountPrice.text(priceDiscount + " rs");
                discount.text(productData.discountPercentage + " %" + "  Off")
                stock.text("Stock available " + productData.stock);

                let value = 1;
                button.click(function () {
                    $(".net").css({ "display": "block" })
                    buttonCounter++;

                    let netPrice = $('.netPrice');
                    netPrice.text("0");
                    $(".viewCartMain").show();
                    let viewCart = $(document.createElement('div'));
                    $(".viewCartMain").append(viewCart);;
                    viewCart.css({ "margin": "20px", "box-shadow": "1px 2px 10px ", "padding": "30px" });
                    let cartHead = $(document.createElement('div'));
                    viewCart.append(cartHead);
                    cartHead.css({ "display": "flex", "align-items": "center" })
                    let cartItem = $(document.createElement('h4'));
                    cartHead.append(cartItem);
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
                    cartItem.text(productData.title);
                    totalPrice.text(priceDiscount);
                    inputQuantity.text(value);
                    button.hide();
                    let n = totalPrice.text();
                    np.push(n);
                    console.log("or + " + np);
                    for (let i = 0; i < np.length; i++) {
                        if (i > 0) {
                            sum += parseInt(np[i]) - parseInt(np[i - 1])
                            netPrice.text(sum);
                        }
                        else {
                            sum += parseInt(np[i]);
                            netPrice.text(sum);

                        }

                    }

                    increment.click(function () {
                        value++;
                        inputQuantity.text(value);
                        totalPrice.text(priceDiscount * value);
                        sum = sum + parseInt(priceDiscount);
                        netPrice.text(sum);
                    });

                    decrement.click(function () {
                        value--;
                        inputQuantity.text(value);
                        totalPrice.text(priceDiscount * value);
                        sum = sum - parseInt(priceDiscount);

                        netPrice.text(sum)
                        if ((value === 0) && (sum === 0)) {
                            value = 1;
                            viewCart.hide();
                            button.show();

                        }

                        if ((value === 0) && (sum != 0)) {
                            value = 1;
                            button.show();
                            viewCart.hide();
                            $(this).totalPrice.text(priceDiscount);
                            sum -= priceDiscount;
                            netPrice.text(sum)

                            netPrice.text(sum);
                            np.splice($.inArray($(this).priceDiscount * value, np), 1);
                        }
                        if ($(".viewCartMain").children().length === 0) {
                            console.log("empty");
                        }
                    });

                    console.log("sum + " + sum);

                });

                $('.search').keyup(function () {
                    let search = $('.search').val().trim().toLowerCase();
                    proName.filter(function () {
                        if ($(this).text().toLowerCase().indexOf(search) > -1) {
                            productMain.show();
                        }
                        else {
                            productMain.hide();
                        }
                    })

                });
            }
            $(".criteria").change(function () {
                sortItems(Product);
                categoryfunction(Product);
            });
            $(".category").change(function () {
                sortItems(Product);
                categoryfunction(Product);
            });


            function sortItems() {
                let selectValue = $(".criteria").val();

                if (selectValue === "lowToHigh") {
                    Product.sort((a, b) => a.price - b.price);
                    viewProduct.empty();
                    displayProducts(Product);
                    loadMoreItems(Product);
                } else if (selectValue === "HighToLow") {
                    Product.sort((a, b) => b.price - a.price);
                    viewProduct.empty()
                    displayProducts(Product);
                    loadMoreItems(Product);

                } else if (selectValue === "rating") {
                    Product.sort((a, b) => a.rating - b.rating);
                    viewProduct.empty();
                    displayProducts(Product);
                    loadMoreItems(Product);
                }
                if (selectValue === "all") {
                    if (Product.sort((a, b) => a.rating - b.rating)) {

                    }
                    viewProduct.empty();
                    displayProducts(Product);
                    loadMoreItems(Product);
                }

            }

            function categoryfunction() {
                let selectCategory = $(".category").val();
                if (selectCategory === "all") {
                    displayProducts(Product);
                    loadMoreItems(Product);
                }

                else {
                    const filterCategory = Product.filter(item => item.category === selectCategory);
                    viewProduct.empty();
                    displayProducts(filterCategory);
                    loadMoreItems(filterCategory);
                }
            }

            displayProducts(Product);
        }
    });
}); 