var shop = {
    customerName: "John",
    totalPrice: 0,
    products: [
        "Pizza",
        "Naan",
        "Sourdough",
        "Foccacia",
        "iPhone X"
    ],
    price: [40, 10, 20, 80, 1000],

    displayCustomerName: function(){
        var customerElement = document.getElementById("customer-name");
        customerElement.innerHTML = this.customerName;
    },

    displayProductList: function(){
        var productsText = "";
        var productElement = document.getElementById("product-list");

        for(var i = 0; i < 5; i++) {
            productsText = productsText + "<li class='list-group-item'>" + this.products[i] 
            + "<span class='badge badge-pill badge-secondary float-right'>$" + this.price[i] + "</span></li>"
        }

        productElement.innerHTML = productsText;
    },

    calculateTotalPrice: function(){
        var totalPrice = 0;
        var totalPriceElemet = document.getElementById("price");

        for(var j = 0; j < 5; j++) {
            totalPrice += this.price[j];
        }

        totalPrice -= totalPrice/4;
        totalPriceElemet.innerHTML = "$" + totalPrice;
    }
}

shop.displayCustomerName();
shop.displayProductList();
shop.calculateTotalPrice();

