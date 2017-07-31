 
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

var ddowns = document.querySelector(".dropdown").innerHTML;
var myTemplate = Handlebars.compile(ddowns);

function brandUnique() {
    'use strict';
    var uniqueT = [];
    var map = {};
    
    for (var i=0; i < shoes.length; i++){
        var brandN = shoes[i];
        
        if(map[brandN.brand] === undefined){
          map[brandN.brand] = brandN.brand;
           uniqueT.push(brandN.brand)
        } 
    }
  document.querySelector(".brands").innerHTML = myTemplate({brand: uniqueT});
}
brandUnique();

function UniqueColor(){
    var uniColor = [];
    var mapColor = {};
    
    for (var i=0;  i < shoes.length; i++){
        var shoeColor = shoes[i];
        
        if(mapColor[shoeColor.color] === undefined){
            mapColor[shoeColor.color] = shoeColor.color;
            uniColor.push(shoeColor.color);
        }
    }
    document.querySelector(".colors").innerHTML = myTemplate({color:uniColor});
}
UniqueColor();


function UniqueSize(){
    var uniSize = [];
    var mapSize = {};
    
    for(var i=0; i < shoes.length; i++){
        var shoeSize = shoes[i];
        if(mapSize[shoeSize.size] === undefined){
            mapSize[shoeSize.size] = shoeSize.size;
            uniSize.push(shoeSize.size);
        }
    }
    document.querySelector(".sizes").innerHTML = myTemplate({size:uniSize});
}
UniqueSize();


function search(){
var brandFilter = document.querySelector(".brands");
var colorFilter = document.querySelector(".colors");
var sizeFilter = document.querySelector(".sizes")
    
 function brands(input) {
        return brandFilter.value == input.brand;
    }
    
 function colour(input) {
        return colorFilter.value == input.color;
    }
    
   function brandsizes(input) {
        return sizeFilter.value == input.size;
    }
   
    
    if(brandFilter.value !== ""){
        var stock = shoes.filter(brands);
        }
    
    if (colorFilter.value !== "") {
    if (brandFilter.value !== "" ) {
            var stock = stock.filter(colour);
        } else {
            var stock = shoes.filter(colour);
        }  
    
    }
    
     if (sizeFilter.value !== "")  {
        if (brandFilter.value !== "" || colorFilter.value !== "") {
            var stock = stock.filter(brandsizes);
        } else {
            var stock = shoes.filter(brandsizes);
        }
    } 
     

    
 var availableStock = document.getElementById('shoesCat').innerHTML;
   var template = Handlebars.compile(availableStock);
   var searched = template({
        stock : stock
                });
          document.getElementById("display").innerHTML = searched;
  
    if(stock === undefined){
        document.getElementById("display").innerHTML = "Please select atleast one Option";  
    }
}

function addingStock(){
    var addBrand = document.getElementById("brandAdd");
    var addColor = document.getElementById("colorAdd");
    var addQuantity = parseInt(document.getElementById("quantityAdd").value);
	var addPrice = parseInt(document.getElementById("priceAdd").value);
    var addSize = parseInt(document.getElementById("sizeAdd").value);
    
    var moreStock ={}
       
		createProperty("brand", addBrand.value);
		createProperty("color", addColor.value);
		createProperty("quantity", addQuantity);
		createProperty("price", addPrice);
		createProperty("size", addSize);
         
	
     function createProperty(propertyName,PropertyValue){
        moreStock[propertyName] = PropertyValue;
     }
		shoes.push(moreStock);
    
    if(addBrand.value ===""){
    document.getElementById('error').innerHTML ="Please enter your text below";
 }
   
    var brandOption = document.querySelector(".brands");
    var curlOpt = document.createElement("option");
    curlOpt.text = brandAdd.value;
    brandOption.add(curlOpt);
    brandUnique();
    
    
    
    
    var colorOption = document.querySelector(".colors");
    var anoOpt = document.createElement("option");
    anoOpt.text = colorAdd.value;
    colorOption.add(anoOpt);
    UniqueColor();
    
    var sizeOption = document.querySelector(".sizes");
    var anoOption = document.createElement("option");
    anoOption.text = sizeAdd.value;
    sizeOption.add(anoOption);
    UniqueSize();
    
 if(addBrand.value ===""){
    document.getElementById('error').innerHTML ="Please enter your text below";
 }

addBrand.value = "";
addColor.value = "";
addQuantity.value = "";
addPrice.value = "";
addSize.value = "";
}

function showAll(){

document.getElementById("addStock").style.display ="block"
}



