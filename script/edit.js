
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
let edit = []

for (i=0;i<localStorage.length;i++)
{
    edit[i] = document.createElement('i')
    edit[i].setAttribute('class', 'fa fa-edit')
    edit[i].setAttribute('id', 'e'+JSON.stringify(i))
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
    td7.appendChild(edit[i])

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)

    tbody.appendChild(tr) 
}
const updateLs = document.getElementById('update-ls')

let item = {
    name:'',
    desc: '',
    category:'',
    quantity:'',
    price:'',
    imageUrl:''
}
edit.forEach(editAndPush) 

function editAndPush(it,index) {

let getIndexRow = document.querySelectorAll('tr')

let td0 = document.createElement('input')
td0.setAttribute('type', 'file')
td0.setAttribute('id', 'newImg')

let td1 = document.createElement('input')
    td1.setAttribute('type', 'text')
    td1.setAttribute('id','newName')
    td1.value = productArray[index].name
    //td1.setAttribute('placeholder','Enter new name')

 let td2 = document.createElement('textarea')
    td2.setAttribute('id','newDesc')
   // td2.setAttribute('placeholder','Enter new desc')
    td2.value = productArray[index].desc

let td3 = document.createElement('select')
    td3.setAttribute('id','newCat')
    let td3_1 = document.createElement('option')
        td3_1.setAttribute('value', 'Adidas')
        td3_1.textContent = "Adidas"
    let td3_2 = document.createElement('option')
        td3_2.setAttribute('value', 'Nike')
        td3_2.textContent = "Nike"
    let td3_3 = document.createElement('option')
        td3_3.setAttribute('value', 'Puma')
        td3_3.textContent = "Puma"
    let td3_4 = document.createElement('option')
        td3_4.setAttribute('value', 'Other')
        td3_4.textContent = "Others"
    td3.appendChild(td3_1)
    td3.appendChild(td3_2)
    td3.appendChild(td3_3)
    td3.appendChild(td3_4)
    td3.value = productArray[index].category

let td4 = document.createElement('input')
    td4.setAttribute('type', 'number')
    td4.setAttribute('id', 'newQty')
   // td4.setAttribute('placeholder','Enter new quantity')
   td4.value = productArray[index].quantity

let td5 = document.createElement('input')
    td5.setAttribute('type', 'number')
    td5.setAttribute('id', 'newPrice')
    //td5.setAttribute('placeholder','Enter new price')
    td5.value = productArray[index].price

let save = document.createElement('button')
    save.setAttribute('id', 'saveBtn')
    save.textContent = "Save"

let editMsg = document.createElement('i')
    editMsg.setAttribute('class','edit-msg')
    editMsg.textContent = "Click individual attribute"
    
    const tdGetter = getIndexRow[index+1]

   // console.log(productArray[index])

    //Edit the table data 
    edit[index].addEventListener ('click', editTableData) 
    
   function editTableData() {

    updateLs.style.visibility = "visible"
    edit[index].replaceWith(editMsg)
     
       tdGetter.addEventListener('click', getterFunction) 

       function getterFunction (e) {
        
           
        if (e.target == tdGetter.children[0].children[0])
        {
            tdGetter.children[0].children[0].replaceWith(td0)
            td0.addEventListener('change', () => {

                const file = td0.files[0];
                  const reader = new FileReader();
                  reader.onload = () => {
                    const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
                    if(base64String!=null)
                   {
                       item.imageUrl = base64String
                   } 
                   else{
                       item.imageUrl = productArray[index].imageUrl
                   }
                   tdGetter.children[0].style.background =`url(data:image/png;base64,${base64String})`;
                   productArray[index].imageUrl = item.imageUrl
                  }
                 reader.readAsDataURL(file);
              })

        }
          else if (e.target == tdGetter.children[1])
            {
                tdGetter.children[1].appendChild(td1)
                tdGetter.children[1].appendChild(save)

                const newName = document.querySelector('#newName')
                save.onclick = () => {
                    if(newName.value!="") {
                    item.name = newName.value
                    }
                    else {
                        item.name = productArray[index].name
                    }
                    tdGetter.children[1].innerHTML = item.name
                    productArray[index].name = item.name
                }
            } 
            else if (e.target == tdGetter.children[2]) {
                tdGetter.children[2].appendChild(td2)
                tdGetter.children[2].appendChild(save)

                const newDesc = document.querySelector('#newDesc')
                 save.onclick = () => {
                    if(newDesc.value!="") {
                        item.desc = newDesc.value
                        }
                        else {
                            item.desc = productArray[index].desc
                        }
                   tdGetter.children[2].innerHTML = item.desc
                   productArray[index].desc = item.desc
                }
            }
            else if (e.target == tdGetter.children[3]) {
                tdGetter.children[3].appendChild(td3)
                tdGetter.children[3].appendChild(save)

                const newCat = document.querySelector('#newCat')
                 save.onclick = () => {
                    if(newCat.value!="") {
                        item.category = newCat.value
                        }
                        else {
                            item.category = productArray[index].category
                        }
                     tdGetter.children[3].innerHTML = item.category
                     productArray[index].category = item.category
                 }

            }
            else if (e.target == tdGetter.children[4]) {
                tdGetter.children[4].appendChild(td4)
                tdGetter.children[4].appendChild(save)

                const newQty = document.querySelector('#newQty')
                save.onclick = () => {
                    if(newQty.value!="") {
                        item.quantity = newQty.value
                        }
                        else {
                            item.quantity = productArray[index].quantity
                        }
                     tdGetter.children[4].innerHTML = item.quantity
                     productArray[index].quantity = item.quantity
                }
            }
            else if (e.target == tdGetter.children[5]) {
                tdGetter.children[5].appendChild(td5)
                tdGetter.children[5].appendChild(save)

                const newPrice = document.querySelector('#newPrice')
                save.onclick = () => {
                    if(newPrice.value!="") {
                        item.price = newPrice.value
                        }
                        else {
                            item.price = productArray[index].price
                        }
                    tdGetter.children[5].innerHTML = item.price
                    productArray[index].price = item.price
                    console.log(productArray[index])
                }
            }
            
        }
       

     }
    
  
    

}

   updateLs.onclick = () => {    
for (i=0;i<productArray.length;i++) {
    
       // localStorage.getItem('item'+[i])
        
        localStorage.setItem('item'+[i], JSON.stringify(productArray[i]))
        
    }
    location.href = "view.html"
    return false
   }
