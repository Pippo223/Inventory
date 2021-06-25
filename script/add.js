const itemName = document.getElementById('item-name')
const itemDesc = document.getElementById('text-area')
const cat = document.getElementById('cat')
const qty = document.getElementById('qty')
const price = document.getElementById('price')
const imgPreview = document.querySelector('#preview-pane')
const reader = new FileReader()
const addBtn = document.querySelector('#add-btn') 
const upload = document.getElementById('img')

const item = {
    name:'',
    desc: '',
    category:'',
    quantity:'',
    price:'',
    imageUrl:''
 }

 //Get Items from local storage into product array
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

 //convert image into base 64 string for storage
upload.addEventListener('change', () => {

    const file = upload.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
       item.imageUrl = base64String
        document.getElementById('preview-pane').style.background =`url(data:image/png;base64,${base64String})`;
        //reader.readAsDataURL(file);
      }
     reader.readAsDataURL(file);
  })

//Add/push products as an object into the array
  addBtn.onclick = () => {
    
        item.name = itemName.value
        item.desc= itemDesc.value
        item.category=cat.value
        item.quantity=qty.value
        item.price=price.value
    
 if(item.name === "" || item.desc === "" ||item.category === ""
    ||item.quantity === "" || item.price === "")
    {
        alert("All fields are required")
        return
    }
productArray.push(item)

//send the products back into local storage from the array
    for (i=0;i<productArray.length;i++)
    {
        if (localStorage.getItem('item'+[i]) == null)
        {
            localStorage.setItem('item'+[i], JSON.stringify(productArray[i]))
        }
    }

    alert("Item added successfully")
window.location.href = "view.html"
return false;
    
}


