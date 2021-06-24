
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

edit.forEach(editAndPush) 
 function editAndPush(it,index) {
    edit[index].onclick = () => {


     let getIndexRow = document.querySelectorAll('tr')
     getIndexRow[index+1].style.backgroundColor = "grey"
     
     let td1 = document.createElement('input')
        td1.setAttribute('type', 'text')
        td1.setAttribute('id','newName')
        td1.setAttribute('placeholder','Enter new name')

     let td2 = document.createElement('textarea')
        td2.setAttribute('id','newDesc')
        td2.setAttribute('placeholder','Enter new desc')

    let td3 = document.createElement('select')
        td3.setAttribute('id','newCat')
        let td3_1 = document.createElement('option')
            td3_1.setAttribute('value', 'Adidas')
        let td3_2 = document.createElement('option')
            td3_2.setAttribute('value', 'Nike')
        let td3_3 = document.createElement('option')
            td3_3.setAttribute('value', 'Puma')
        let td3_4 = document.createElement('option')
            td3_4.setAttribute('value', 'Other')
        td3.appendChild(td3_1)
        td3.appendChild(td3_2)
        td3.appendChild(td3_3)
        td3.appendChild(td3_4)

    let td4 = document.createElement('input')
        td4.setAttribute('type', 'number')
        td4.setAttribute('id', 'newQty')

    let td5 = document.createElement('input')
        td5.setAttribute('type', 'number')
        td5.setAttribute('id', 'newPrice')
    
    let td6 = document.createElement('button')
        td6.setAttribute('value', 'Save Changes')
        td6.setAttribute('id', 'saveBtn')
        
        let checker = false
      
       const tdGetter = getIndexRow[index+1]
      // console.log(tdGetter) 
       tdGetter.addEventListener('click', getterFunction) 
       function getterFunction (e) {
            if (e.target == tdGetter.children[index+1])
            {
                tdGetter.children[index+1].replaceWith(td1)
            } 
            else if (e.target == tdGetter.children[index+2]) {
                tdGetter.children[index+2].replaceWith(td2)
            }
            else if (e.target == tdGetter.children[index+3]) {
                tdGetter.children[index+3].replaceWith(td3)
            }
            else if (e.target == tdGetter.children[index+4]) {
                tdGetter.children[index+4].replaceWith(td4)
            }
            else if (e.target == tdGetter.children[index+5]) {
                tdGetter.children[index+5].replaceWith(td5)
            }

       } 
          

    //   getIndexRow[index+1].children[index+3].onclick = () => {
    //     getIndexRow[index+1].children[index+3].replaceWith(td3)
    //   }

    //   getIndexRow[index+1].children[index+4].onclick = () => {
    //     getIndexRow[index+1].children[index+4].replaceWith(td4)
    //   }

    //   getIndexRow[index+1].children[index+5].onclick = () => {
    //     getIndexRow[index+1].children[index+5].replaceWith(td5)
    //   }

    //   getIndexRow[index+1].children[index+6].onclick = () => {
    //     getIndexRow[index+1].children[index+6].replaceWith(td6)
    //   }

    
    }
 }



//         localStorage.removeItem('item'+[index])
//         const lsl = localStorage.length

//         for(i=index;i<lsl-index;i++)
//     {        
//         let getNextItem = JSON.parse(localStorage.getItem('item'+[i+1]))
//          localStorage.setItem('item'+[i],JSON.stringify(getNextItem))  
//          localStorage.removeItem('item'+[i+1])
//     }
//         location.reload()
// }
// }



