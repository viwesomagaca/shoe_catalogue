var  searchbrands, colors, shoes, sizes;
searchbrands = document.getElementById('b');
colors = document.getElementById('c');
sizes = document.getElementById('s');

function search() {
    'use strict';
    var availableStock, template, searched, stock, stock1;
    
    function brands(input) {
        return searchbrands.value == input.brand;
    }
     
    
     function colour(input) {
        return colors.value == input.color;
    }
    function brandsizes(input) {
        return sizes.value == input.size;
    }
    
    if(searchbrands.value == ""){
        alert('Please Choose a Brand first!');
    }

    if (searchbrands.value !== "") {
        var stock = shoes.filter(brands);
    }
    
   if (colors.value !== "") {
     if (searchbrands.value !== "" ) {
            var stock = stock.filter(colour);
        } else {
            var stock = shoes.filter(brands);
        }  
    }
    if (sizes.value !== "")  {
        if (searchbrands.value !== "" || colors.value !== "") {
            var stock = stock.filter(brandsizes);
        } else {
            var stock = shoes.filter(brands);
        }
    } 
    
   

    
    
    availableStock = document.getElementById('shoesCat');
    template = Handlebars.compile(availableStock.innerHTML);
    searched = template({
        stock
                });
          document.getElementById("display").innerHTML = searched;
    
}

function addStock(){
    var addBrand = document.getElementById("brandAdd");
    var addColor = document.getElementById("colorAdd");
    var addQuantity = document.getElementById("quanityAdd");
    var addSize = document.getElementById("sizeAdd");
    
    var MoreStock ={}
    
     function createS (){
         
     }
}


var shoes = [
    {brand: "Nike", color : "Red", quantity: 100, price : 850, size: 1},
    {brand: "Nike", color : "Red", quantity: 1500, price : 850, size: 2},
    {brand: "Nike", color : "Red", quantity: 10, price : 850, size: 3},
    {brand: "Nike", color : "Red", quantity: 110, price : 850, size: 4},
    {brand: "Nike", color : "Red", quantity: 150, price : 850, size: 5},
    {brand: "Nike", color : "Red", quantity: 155, price : 1500, size: 6},
    {brand: "Nike", color : "Red", quantity: 100, price : 1500, size: 7},
    {brand: "Nike", color : "Red", quantity: 100, price : 1500, size: 8},
    {brand: "Nike", color : "Red", quantity: 190, price : 1500, size: 9},
    {brand: "Nike", color : "Red", quantity: 140, price : 1500, size: 10},
    
    {brand: "Nike", color: "White", quantity : 40, price : 1009, size : 1},
    {brand: "Nike", color: "White", quantity : 40, price : 1009, size : 2},
    {brand: "Nike", color: "White", quantity : 40, price : 1009, size : 3},
    {brand: "Nike", color: "White", quantity : 40, price : 1009, size : 4},
    {brand: "Nike", color: "White", quantity : 40, price : 1009, size : 5},
    {brand: "Nike", color: "White", quantity : 40, price : 1009, size : 6},
    {brand: "Nike", color: "White", quantity : 40, price : 1009, size : 7},
    {brand: "Nike", color: "White", quantity : 40, price : 1009, size : 8},
    {brand: "Nike", color: "White", quantity : 40, price : 1009, size : 9},
    {brand: "Nike", color: "White", quantity : 40, price : 1009, size : 10},
    
    {brand: "Nike", color : "Black", quantity: 106, price : 950, size: 1},
    {brand: "Nike", color : "Black", quantity: 401, price : 950, size: 2},
    {brand: "Nike", color : "Black", quantity: 100, price : 1500, size: 3},
    {brand: "Nike", color : "Black", quantity: 100, price : 1500, size: 4},
    {brand: "Nike", color : "Black", quantity: 100, price : 1500, size: 5},
    {brand: "Nike", color : "Black", quantity: 100, price : 1500, size: 6},
    {brand: "Nike", color : "Black", quantity: 100, price : 1500, size: 7},
    {brand: "Nike", color : "Black", quantity: 100, price : 1500, size: 8},
    {brand: "Nike", color : "Black", quantity: 100, price : 1500, size: 9},
    {brand: "Nike", color : "Black", quantity: 100, price : 1500, size: 10},
    
    {brand: "Adidas", color: "White", quantity : 40, price : 1009, size : 1},
    {brand: "Adidas", color: "White", quantity : 40, price : 1009, size : 2},
    {brand: "Adidas", color: "White", quantity : 40, price : 1009, size : 3},
    {brand: "Adidas", color: "White", quantity : 40, price : 1009, size : 4},
    {brand: "Adidas", color: "White", quantity : 40, price : 1009, size : 5},
    {brand: "Adidas", color: "White", quantity : 40, price : 1009, size : 6},
    {brand: "Adidas", color: "White", quantity : 40, price : 1009, size : 7},
    {brand: "Adidas", color: "White", quantity : 40, price : 1009, size : 8},
    {brand: "Adidas", color: "White", quantity : 40, price : 1009, size : 9},
    {brand: "Adidas", color: "White", quantity : 40, price : 1009, size : 10},
    
    {brand: "Adidas", color: "Black", quantity : 45, price : 1200, size : 1},
    {brand: "Adidas", color: "Black", quantity : 45, price : 1200, size : 2},
    {brand: "Adidas", color: "Black", quantity : 45, price : 1200, size : 3},
    {brand: "Adidas", color: "Black", quantity : 45, price : 1200, size : 4},
    {brand: "Adidas", color: "Black", quantity : 45, price : 1200, size : 5},
    {brand: "Adidas", color: "Black", quantity : 45, price : 1200, size : 6},
    {brand: "Adidas", color: "Black", quantity : 45, price : 1200, size : 7},
    {brand: "Adidas", color: "Black", quantity : 45, price : 1200, size : 8},
    {brand: "Adidas", color: "Black", quantity : 45, price : 1200, size : 9},
    {brand: "Adidas", color: "Black", quantity : 45, price : 1200, size : 10},
    
    {brand: "Adidas", color : "Red", quantity: 100, price : 1500, size: 1},
    {brand: "Adidas", color : "Red", quantity: 100, price : 1500, size: 2},
    {brand: "Adidas", color : "Red", quantity: 100, price : 1500, size: 3},
    {brand: "Adidas", color : "Red", quantity: 100, price : 1500, size: 4},
    {brand: "Adidas", color : "Red", quantity: 100, price : 1500, size: 5},
    {brand: "Adidas", color : "Red", quantity: 100, price : 1500, size: 6},
    {brand: "Adidas", color : "Red", quantity: 100, price : 1500, size: 7},
    {brand: "Adidas", color : "Red", quantity: 100, price : 1500, size: 8},
    {brand: "Adidas", color : "Red", quantity: 100, price : 1500, size: 9},
    {brand: "Adidas", color : "Red", quantity: 100, price : 1500, size: 10},
    
    {brand: "Puma", color: "Black", quantity: 100, price : 500, size: 1},
    {brand: "Puma", color: "Black", quantity: 100, price : 500, size: 2},
    {brand: "Puma", color: "Black", quantity: 100, price : 500, size: 3},
    {brand: "Puma", color: "Black", quantity: 100, price : 750, size: 4},
    {brand: "Puma", color: "Black", quantity: 100, price : 750, size: 5},
    {brand: "Puma", color: "Black", quantity: 100, price : 750, size: 6},
    {brand: "Puma", color: "Black", quantity: 100, price : 750, size: 7},
    {brand: "Puma", color: "Black", quantity: 450, price : 750, size: 8},
    {brand: "Puma", color: "Black", quantity: 450, price : 750, size: 9},
    {brand: "Puma", color: "Black", quantity: 450, price : 750, size: 10},
   
    {brand: "Puma", color: "White", quantity : 500, price : 1450, size: 1},
    {brand: "Puma", color: "White", quantity : 500, price : 1450, size: 2},
    {brand: "Puma", color: "White", quantity : 500, price : 1450, size: 3},
    {brand: "Puma", color: "White", quantity : 500, price : 1450, size: 4},
    {brand: "Puma", color: "White", quantity : 500, price : 1450, size: 5},
    {brand: "Puma", color: "White", quantity : 500, price : 1450, size: 6},
    {brand: "Puma", color: "White", quantity : 500, price : 1450, size: 7},
    {brand: "Puma", color: "White", quantity : 500, price : 1450, size: 8},
    {brand: "Puma", color: "White", quantity : 500, price : 1450, size: 9},
    {brand: "Puma", color: "White", quantity : 500, price : 1450, size: 10},
    
    {brand: "Puma", color: "Red", quantity :500, price : 1009, size : 1},
    {brand: "Puma", color: "Red", quantity :500, price : 1009, size : 2},
    {brand: "Puma", color: "Red", quantity :500, price : 1009, size : 3},
    {brand: "Puma", color: "Red", quantity :500, price : 1009, size : 4},
    {brand: "Puma", color: "Red", quantity :500, price : 1009, size : 5},
    {brand: "Puma", color: "Red", quantity :500, price : 1009, size : 6},
    {brand: "Puma", color: "Red", quantity :500, price : 1550, size : 7},
    {brand: "Puma", color: "Red", quantity :500, price : 1550, size : 8},
    {brand: "Puma", color: "Red", quantity :500, price : 1550, size : 9},
    {brand: "Puma", color: "Red", quantity :500, price : 785, size : 10},
    
    {brand: "Jordan", color: "White", quantity : 100, price : 650, size: 1},
    {brand: "Jordan", color: "White", quantity : 100, price : 650, size: 2},
    {brand: "Jordan", color: "White", quantity : 100, price : 650, size: 3},
    {brand: "Jordan", color: "White", quantity : 100, price : 650, size: 4},
    {brand: "Jordan", color: "White", quantity : 100, price : 650, size: 5},
    {brand: "Jordan", color: "White", quantity : 100, price : 650, size: 6},
    {brand: "Jordan", color: "White", quantity : 100, price : 650, size: 7},
    {brand: "Jordan", color: "White", quantity : 100, price : 650, size: 8},
    {brand: "Jordan", color: "White", quantity : 100, price : 650, size: 9},
    {brand: "Jordan", color: "White", quantity : 100, price : 650, size: 10},
    
    {brand: "Jordan", color: "Black", quantity : 50, price : 1990, size: 1},
    {brand: "Jordan", color: "Black", quantity : 50, price : 1990, size: 2},
    {brand: "Jordan", color: "Black", quantity : 50, price : 1990, size: 3},
    {brand: "Jordan", color: "Black", quantity : 50, price : 1990, size: 4},
    {brand: "Jordan", color: "Black", quantity : 50, price : 1990, size: 5},
    {brand: "Jordan", color: "Black", quantity : 50, price : 1990, size: 6},
    {brand: "Jordan", color: "Black", quantity : 50, price : 1990, size: 7},
    {brand: "Jordan", color: "Black", quantity : 50, price : 1990, size: 8},
    {brand: "Jordan", color: "Black", quantity : 50, price : 1990, size: 9},
    {brand: "Jordan", color: "Black", quantity : 50, price : 1990, size: 10},
    
    {brand: "Jordan", color: "Red", quantity : 500, price : 1050, size: 1},
    {brand: "Jordan", color: "Red", quantity : 500, price : 1050, size: 2},
    {brand: "Jordan", color: "Red", quantity : 500, price : 1050, size: 3},
    {brand: "Jordan", color: "Red", quantity : 500, price : 1050, size: 4},
    {brand: "Jordan", color: "Red", quantity : 500, price : 1050, size: 5},
    {brand: "Jordan", color: "Red", quantity : 500, price : 1050, size: 6},
    {brand: "Jordan", color: "Red", quantity : 500, price : 1050, size: 7},
    {brand: "Jordan", color: "Red", quantity : 500, price : 1050, size: 8},
    {brand: "Jordan", color: "Red", quantity : 500, price : 1050, size: 9},
    {brand: "Jordan", color: "Red", quantity : 500, price : 1050, size: 10},
    
    {brand: "Converse", color: "White", quantity : 50, price : 780, size: 1},
    {brand: "Converse", color: "White", quantity : 50, price : 780, size: 2},
    {brand: "Converse", color: "White", quantity : 50, price : 780, size: 3},
    {brand: "Converse", color: "White", quantity : 50, price : 780, size: 4},
    {brand: "Converse", color: "White", quantity : 50, price : 780, size: 5},
    {brand: "Converse", color: "White", quantity : 50, price : 780, size: 6},
    {brand: "Converse", color: "White", quantity : 50, price : 780, size: 7},
    {brand: "Converse", color: "White", quantity : 50, price : 780, size: 8},
    {brand: "Converse", color: "White", quantity : 50, price : 780, size: 9},
    {brand: "Converse", color: "White", quantity : 50, price : 780, size: 10},
    
    {brand: "Converse", color: "Black", quantity : 300, price : 650, size: 1},
    {brand: "Converse", color: "Black", quantity : 300, price : 650, size: 2},
    {brand: "Converse", color: "Black", quantity : 300, price : 650, size: 3},
    {brand: "Converse", color: "Black", quantity : 300, price : 650, size: 4},
    {brand: "Converse", color: "Black", quantity : 300, price : 650, size: 5},
    {brand: "Converse", color: "Black", quantity : 300, price : 650, size: 6},
    {brand: "Converse", color: "Black", quantity : 300, price : 650, size: 7},
    {brand: "Converse", color: "Black", quantity : 300, price : 650, size: 8},
    {brand: "Converse", color: "Black", quantity : 300, price : 650, size: 9},
    {brand: "Converse", color: "Black", quantity : 300, price : 650, size: 10},
    
    {brand: "Converse", color: "Red", quantity : 500, price : 600, size: 1},
    {brand: "Converse", color: "Red", quantity : 500, price : 600, size: 2},
    {brand: "Converse", color: "Red", quantity : 500, price : 600, size: 3},
    {brand: "Converse", color: "Red", quantity : 500, price : 600, size: 4},
    {brand: "Converse", color: "Red", quantity : 500, price : 600, size: 5},
    {brand: "Converse", color: "Red", quantity : 500, price : 600, size: 6},
    {brand: "Converse", color: "Red", quantity : 300, price : 650, size: 7},
    {brand: "Converse", color: "Red", quantity : 300, price : 650, size: 8},
    {brand: "Converse", color: "Red", quantity : 300, price : 650, size: 9},
    {brand: "Converse", color: "Red", quantity : 300, price : 650, size: 10}
    
    ]

