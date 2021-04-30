
var ProductName = document.getElementById('ProductName');
var ProductCategory = document.getElementById('ProductCategory');
var ProductPrice= document.getElementById('ProductPrice');
var ProductDescription = document.getElementById('ProductDescription');
document.getElementById("myUpdateBTN").style.display="none"
var currentIndex;
var products =[]
if(localStorage.getItem('product')==null){
  products=[]
}else{
    products=JSON.parse(localStorage.getItem('product')) 
    display()
}
function getData(){
    var ProductName = document.getElementById('ProductName').value;
    var ProductCategory = document.getElementById('ProductCategory').value;
    var ProductPrice= document.getElementById('ProductPrice').value;
    var ProductDescription = document.getElementById('ProductDescription').value;

var product={
name:ProductName,
cate:ProductCategory,
price:ProductPrice,
desc:ProductDescription
}
products.push(product)
localStorage.setItem('product', JSON.stringify(products))
display()
clear()


}
// var products =[
//     {name:"ProductName", cate:"ProductCategory", ptice:"ProductPrice", desc:"ProductDescription"},
//     {name:"ProductName", cate:"ProductCategory", ptice:"ProductPrice", desc:"ProductDescription"},
//     {name:"ProductName", cate:"ProductCategory", ptice:"ProductPrice", desc:"ProductDescription"}
// ]
function display (){
    var copaya="";
for (var i=0; i<products.length ;i++){

copaya+=` <tr>
<td>${i}</td>
<td>${products[i].name}</td>
<td>${products[i].cate}</td>
<td>${products[i].price}</td>
<td>${products[i].desc}</td>
<td><button onclick="Dlete(${i})" class="btn btn-danger">Delete</button></td>
<td><button onclick="showUpdateData(${i})" class="btn btn-info">Update</button></td>

</tr>`
}

  document.getElementById("demo").innerHTML=copaya;
}

function Dlete(index){
products.splice (index,1)
localStorage.setItem('product', JSON.stringify(products))
display()
}

function clear (){
  ProductName.value="";
  ProductCategory.value="";
  ProductPrice.value="";
  ProductDescription.value="";

}
function showUpdateData(index){
  currentIndex = index
  ProductName.value= products[index].name
  ProductCategory.value= products[index].cate
  ProductPrice.value= products[index].price
  ProductDescription.value= products[index].desc
  document.getElementById("myAddBtn").style.display="none"
  document.getElementById("myUpdateBTN").style.display="block"


 
}
function saveUpdate(){
  products[currentIndex].name= ProductName.value
  products[currentIndex].cate= ProductCategory.value
  products[currentIndex].price=  ProductPrice.value
  products[currentIndex].desc= ProductDescription.value
  display();
  localStorage.setItem('product' ,JSON.stringify(products))
  clear()
  document.getElementById("myAddBtn").style.display="block"
  document.getElementById("myUpdateBTN").style.display="none"




}
function search(){
  var search= document.getElementById ('search').value;
  for(var i=0 ;i<products.length; i++){
  if(products[i].name.toLowerCase().includes(search.toLowerCase()) ){
console.log("yes",i)
    }
  }
}