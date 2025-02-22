var productnameinput =  document.getElementById('productname');
var productpriceinput =  document.getElementById('productprice');
var productcategoryinput =  document.getElementById('productcategory');
var productmessageinput =  document.getElementById('productmessage');
var productimageinput =  document.getElementById('productimage');
var searchinput = document.getElementById('search');
var productlist = [];

var curri = 0;

if(localStorage.setItem("productcontainer") !== null)
    {
        productlist = JSON.parse(localStorage.setItem("productcontainer"));
        display();
    }


function addproduct()
{
    var product = {
        name: productnameinput.value.trim(),
        price:productpriceinput.value,
        category:productcategoryinput.value.trim(),
        message:productmessageinput.value.trim(),
        image:"footer-top-bg.png"

    };
    productlist.push(product);
    localStorage.setItem('productcontainer' , JSON.stringify(productlist))
    display();
    console.log(productlist)
    clear();

  
}


function clear()
{
    productnameinput.value = null;
    productpriceinput.value = null;
    productcategoryinput.value = null;
    productmessageinput.value = null;
}



function display()
{
    var cartona = '';
    for(var i=0; i<productlist.length; i++){
       cartona +=`<div class="col-md-3">
                    <div class="card" style="width: 18rem;">
                        <img src="footer-top-bg.png" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <span>index:${i}</span>
                              <h4>productname: ${productlist[i].name}</h4>
                              <p>productprice: ${productlist[i].price}</p>
                              <p>productcategoty: ${productlist[i].category}</p>
                              <p>productdecription: ${productlist[i].message}</p>
                        </div>
                        <div class="card-footer text-center">
                            <button onclick="Delete(${i})" class="btn btn-danger btn-sm">Delete</button>
                            <button onclick="update(${i})" class="btn btn-warning btn-sm">Update</button>
                        </div>
                      </div>
                    
                </div>`
    }

    document.getElementById("rowdata").innerHTML = cartona;
}

function Delete(index)
{
    productlist.splice(index , 1); 
    display();
}


function search()
{
    var term = searchinput.value;
    var cartona = '';
    for(var i=0; i<productlist.length; i++){
        if(productlist[i].name.toLowerCase().includes(term.toLowerCase()))
            {
                cartona+=`<div class="col-md-3">
                    <div class="card" style="width: 18rem;">
                        <img src="footer-top-bg.png" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <span>index:${i}</span>
                              <h4>productname: ${productlist[i].name}</h4>
                              <p>productprice: ${productlist[i].price}</p>
                              <p>productcategoty: ${productlist[i].category}</p>
                              <p>productdecription: ${productlist[i].message}</p>
                        </div>
                        <div class="card-footer text-center">
                            <button onclick="Delete(${i})" class="btn btn-danger btn-sm">Delete</button>
                            <button class="btn btn-warning btn-sm">Update</button>
                        </div>
                      </div>
                    
                </div>`
            }
    }

    document.getElementById("rowdata").innerHTML = cartona;
}



function update(index)
{
    curri = index;
    productnameinput.value = productlist[index].name;
    productpriceinput.value = productlist[index].price;
    productcategoryinput.value = productlist[index].category;
    productmessageinput.value = productlist[index].message;
}


function updateproduct()
{
    var product = {
        name: productnameinput.value,
        price:productpriceinput.value,
        category:productcategoryinput.value,
        message:productmessageinput.value,
        image:"footer-top-bg.png"
    };   
    productlist.splice(  curri , 1 , product);
    localStorage.setItem('productcontainer' , JSON.stringify(productlist))
    display();
}

