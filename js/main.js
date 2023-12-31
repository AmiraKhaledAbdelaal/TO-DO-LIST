var productname=document.getElementById('prodname')
var productprice=document.getElementById('prodprice')
var productdesc=document.getElementById('proddesc')
var productarray=[]


if(localStorage.getItem("products") != null){
    productarray=JSON.parse(localStorage.getItem("products"))
    display()
}
function addproduct(){
   
    var productrobject={
        name:productname.value,
        price:productprice.value,
        description:productdesc.value
    }
    productarray.push(productrobject)
    localStorage.setItem('products',JSON.stringify(productarray))
    display()
    clear()
}



function display(){
    var data=``
    for(var i=0;i<productarray.length;i++){
        data+=`
         <tr>
             <td>${productarray[i].name}</td>
             <td>${productarray[i].price}</td>
             <td>${productarray[i].description}</td>
             <td><button onclick="changbutton(${i})" class="btn btn-info">update</button></td>
             <td><button onclick="deleteproduct(${i})" class="btn btn-danger">DELETE</button></td>
         </tr> 
 
      `
     }
     document.getElementById('demo').innerHTML=data

}
function deleteproduct(index){
    productarray.splice(index,1)
    localStorage.setItem('products',JSON.stringify(productarray))
    display()
    
}

function clear(){
    productname.value=""
    productprice.value=""
    productdesc.value=""
}
function search(ser){
    var data=``
    for(var i=0;i<productarray.length;i++){
        if(productarray[i].name.toLowerCase().includes(ser.toLowerCase())){
            data+=`
            <tr>
                <td>${productarray[i].name.replace(ser,`<span>${ser}</span>`)}</td>
                <td>${productarray[i].price}</td>
                <td>${productarray[i].description}</td>
                <td><button" class="btn btn-info">update</button></td>
                <td><button onclick="deleteproduct(${i})" class="btn btn-danger">DELETE</button></td>
            </tr>
        
            `
        }
    }
    document.getElementById('demo').innerHTML=data

}
var number=0
function changbutton(i){
    number=i
    // document.getElementById('btn1').style="display:none"
    // document.getElementById('btn2').style="display:block"
    document.getElementById('btn1').classList.replace('d-block','d-none')
    document.getElementById('btn2').classList.replace('d-none','d-block')

    productname.value=productarray[i].name
    productprice.value=productarray[i].price
    productdesc.value=productarray[i].description
}
 function changecontent(){
    document.getElementById('btn1').classList.replace('d-none','d-block')
    document.getElementById('btn2').classList.replace('d-block','d-none')
    // console.log(number)
    productarray[number].name=productname.value
    productarray[number].price=productprice.value
    productarray[number].description=productdesc.value
    display()
    clear()
    localStorage.setItem('products',JSON.stringify(productarray))

 }





