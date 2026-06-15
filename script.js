const products = [
{
 name:"Laptop",
 category:"Electronics",
 price:50000
},
{
 name:"Shirt",
 category:"Clothing",
 price:1000
},
{
 name:"Watch",
 category:"Accessories",
 price:2000
}
];

const productDiv = document.getElementById("products");

function showProducts(items){

 productDiv.innerHTML="";

 items.forEach(product=>{

 productDiv.innerHTML += `
 <div class="card">
   <h3>${product.name}</h3>
   <p>${product.category}</p>
   <p>Rs.${product.price}</p>
 </div>
 `;
 });
}

showProducts(products);
const search = document.getElementById("search");

search.addEventListener("keyup",()=>{

 const text = search.value.toLowerCase();

 const filtered = products.filter(product =>
   product.name.toLowerCase().includes(text)
 );

 showProducts(filtered);

});
const category = document.getElementById("category");

category.innerHTML += `
<option>Electronics</option>
<option>Clothing</option>
<option>Accessories</option>
`;
category.addEventListener("change",()=>{

 const selected = category.value;

 if(selected===""){
   showProducts(products);
 }
 else{

 const filtered = products.filter(product =>
   product.category === selected
 );

 showProducts(filtered);
 }

});