
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

let getter = {}
let trash = []

for (i=0;i<localStorage.length;i++)
{
    trash[i] = document.createElement('i')
    trash[i].setAttribute('class', 'fa fa-trash-o')
    trash[i].setAttribute('id', 'a'+JSON.stringify(i))
 }


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
    const td7 = document.createElement('td')

    const img = document.createElement('img')
    img.setAttribute('id', 'for-img')
    img.setAttribute('src', "data:image/jpg;base64,"+getter.imageUrl)
    img.setAttribute('alt', 'product-image')


    td1.appendChild(img)
    td2.innerHTML = getter.name
    td3.innerHTML = getter.desc
    td4.innerHTML = getter.category
    td5.innerHTML = getter.quantity
    td6.innerHTML = getter.price
    td7.appendChild(trash[i])

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)

    tbody.appendChild(tr) 


}

trash.forEach(deleteAndPush) 
function deleteAndPush(it,index) {
    trash[index].onclick = () => {

        localStorage.removeItem('item'+[index])
        const lsl = localStorage.length

        for(i=index;i<lsl-index;i++)
    {        
        let getNextItem = JSON.parse(localStorage.getItem('item'+[i+1]))
         localStorage.setItem('item'+[i],JSON.stringify(getNextItem))  
         localStorage.removeItem('item'+[i+1])
    }
        location.reload()
}
}



