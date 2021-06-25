//update total product number on dashboard
const totalProduct = document.getElementById('tproduct')
totalProduct.textContent = localStorage.length

//Get items from local storage
let productArray = []

 if (localStorage.getItem('item0') == null) 
 {
    productArray = [] 
 }
  else  
{
    for (i=0;i<localStorage.length;i++)
    {
        productArray[i] = JSON.parse(localStorage.getItem('item'+[i]));
    }
 }

 //categorize item quantity into In-stock, Out-of-Stock and Almost out
 let inStock = 0
 let outOfStock = 0
 let almostOut = 0
 for (i=0;i<productArray.length;i++)
 {
     if (productArray[i].quantity == 0)
     {
         outOfStock++
     }

     else if (productArray[i].quantity > 0 && productArray[i].quantity <= 20 ) 
     {
        almostOut++
     }

     else if (productArray[i].quantity > 20) 
     {
         inStock++
     }
     else {
            alert("Could not retrieve data")
        }
 }

    console.log("out "+ outOfStock);
//    console.log("out "+ almostOut);
//    console.log("out "+ inStock);

//print these categorizations to screen
let getIn = document.getElementById('inStock') 
let getAlmost = document.getElementById('almostOut')
let getOut = document.getElementById('outOfStock') 

getIn.textContent = JSON.stringify(inStock)
getAlmost.textContent = JSON.stringify(almostOut)
getOut.innerText = JSON.stringify(outOfStock)