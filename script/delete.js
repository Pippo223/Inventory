
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

// Init the delete confirmation box
const confirm = document.getElementById("confirm-delete")

// Get the button (icon) that opens the delete confirmation box
const btn = document.getElementById("delete-icon")

// Get the <span> element that closes the delete confirmation box
const span = document.getElementsByClassName("close2")[0]

//Get 'Yes' button after opening the delete confirmation box
let yes = document.getElementById("yes")
let tracker = 0
//Get 'No' button after opening the delete confirmation box
const no = document.getElementById("no")

trash.forEach(displayModal) 
//yes.forEach(deleteAndPush)

function displayModal(it,index) {
    trash[index].onclick = () => {
        confirm.style.display = "block"
        console.log(index)
        tracker = index
    }

    yes.onclick = () => {
        console.log("yes "+ tracker)
        localStorage.removeItem('item'+tracker)
        console.log("deleted item "+tracker)
        const lsl = localStorage.length
    
        for(i=tracker;i<=lsl-tracker;i++)
    {        
        let getNextItem = JSON.parse(localStorage.getItem('item'+[i+1]))
        console.log("next got")
         localStorage.setItem('item'+i, JSON.stringify(getNextItem))  
         console.log("moved item "+i+1 +"to item "+i)
         localStorage.removeItem('item'+[i+1])
    }
        location.reload()
    }

        span.onclick = function() {
            confirm.style.display = "none"
          }

no.onclick = function() {
    confirm.style.display = "none"
}

}

// function deleteAndPush(it,index) {

// }



