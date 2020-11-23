let productList = ['Iphone','Samsung'];

makeHTML();
document.getElementById('addProduct').addEventListener('click',addProduct);
console.log(productList);


function makeHTML () {
    let strHTML = '';
    strHTML += '<tr>' +
        '<th>STT</th>' +
        '<th><b>Product Name</b></th>' +
        '</tr>';
    for (let i = 0; i < productList.length; i++) {
        strHTML += '<tr>' +
            '<td style="text-align: center">'+parseInt(i+1)+'</td>'+
            '<td style="width: 300px;height: 40px">' + productList[i] + '</td>' + '<td><button onclick="editProduct('+i+')">Edit</button></td>' +
        '<td><button onclick="deleteProduct('+i+')">Delete</button></td>'
        '</tr>'
    }
    document.getElementById('productTable').innerHTML = strHTML;
}

function addProduct () {
    let inputProduct = document.getElementById('inputProduct').value;
    productList.push(inputProduct);
    makeHTML();
}

function editProduct (index) {
    let newProduct = prompt('Enter the name of new product: ');
    productList[index] = newProduct;
    makeHTML();
}

function deleteProduct (index) {
    productList.splice(index,1);
    makeHTML();
}