
//const productArray = localStorage.getItem('item0') == null ? [] : JSON.parse(localStorage.getItem('item'));
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

if (productArray.length == 0 && localStorage.length == 0)
{
  document.getElementById('nothing').style.display = "block"
}
else {
  document.getElementById('nothing').style.display = "none"
}

let getter = {}

for (i=0;i<productArray.length;i++)
// for ( let i of productArray)
{    
    getter = productArray[i]   
    
    const tbody = document.querySelector('tbody')
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')
    const td5 = document.createElement('td')
    const td6 = document.createElement('td')

    const img = document.createElement('img')
    img.setAttribute('id', 'for-img')
    img.setAttribute('src', "data:image/jpg;base64,"+getter.imageUrl)
    img.setAttribute('alt', 'product-image')

    const trash = document.createElement('i')
    trash.setAttribute('class', 'fa fa-trash-o')

    td1.appendChild(img)
    td2.innerHTML = getter.name
    td3.innerHTML = getter.desc
    td4.innerHTML = getter.category
    td5.innerHTML = getter.quantity
    //Color label of quantity
    if (Number(getter.quantity) == 0) {
      td5.style.color = "red"
    }
    else if (Number(getter.quantity) > 0 && getter.quantity <= 20) {
      td5.style.color = "orange"
    }
    else {
      td5.style.color = "green"
    }

    td6.innerHTML = getter.price

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    //tr.appendChild(td7)

    tbody.appendChild(tr) 

}



