
window.onload = function() {
    
    let count = 0;
    let sum = 0;
    let packageProducts = [];
    let table = document.querySelector('.package');
    
    window.removeAllProducts = function () {
        if(count){
            for(let i = 0; i<packageProducts.length; i++){
                if(packageProducts[i]>=1){
                    removeProduct(i);
                }
            }
            count = 0;
            sum = 0;
            packageProducts = [];
            showInfo(count, sum);
        }
    }

    window.showInfo = function (countProducts, overPriceProducts) {
        document.getElementById('allCount').innerText = countProducts;
        document.getElementById('allPrice').innerText = overPriceProducts;
    }
    
    window.removeProduct = function (idProduct) {
        if(idProduct){
            let rowProduct = document.getElementById(`${idProduct}`);
            rowProduct.remove();
            sum -= (priceList[idProduct-1] * packageProducts[idProduct]);
            count -= packageProducts[idProduct];
            packageProducts[idProduct] = 0;
            showInfo(count, sum);
        }else {
            alert("Ошибка удаления товара из корзины!")
        }
    }
    
    window.addProduct = function (idProduct) {
        if(idProduct>=1){
            if(packageProducts[idProduct]){
                packageProducts[idProduct]++;
            }else{
                let tr = `<tr id="${idProduct}">
                <td>${titleList[idProduct-1]}</td>
                <td id="count${idProduct}">${packageProducts[idProduct]}</td>
                <td>${priceList[idProduct-1]}</td>
                <td id="overPrice${idProduct}">${priceList[idProduct-1]*packageProducts[idProduct]}</td>
                <td><button class="btn btn-outline-danger d-inline-flex align-items-center" type="button" onclick="removeProduct(${idProduct})">Удалить</button></td>
              </tr>`;
                table.innerHTML += tr;
                packageProducts[idProduct] = 1;
            }
            count++;
            
            let tdCount = document.getElementById(`count${idProduct}`);
            tdCount.innerHTML = packageProducts[idProduct];
            let tdOverPrice = document.getElementById(`overPrice${idProduct}`);
            tdOverPrice.innerHTML = priceList[idProduct-1]*packageProducts[idProduct];
            
            sum+=priceList[idProduct-1];
            
            for(let i = 0; i<packageProducts; i++) {

                if(packageProducts[i]){
                    count += packageProducts[i];
                    sum += (packageProducts[i]*priceList[i]);
                }
            }
            showInfo(count, sum);
        }else {
            alert("Ошибка добавления товара в корзину!")
        }
        
    }

    const products = [
        {
            id:1,
            title: "Яблоко",
            price: Math.round(Math.random() * (100 - 10) + 10),
            image: "ФотоЯблоко.webp"
        },
        {
            id:2,
            title: "Банан",
            price: Math.round(Math.random() * (100 - 10) + 10),
            image: "ФотоБанан.png"
        },
        {
            id:3,
            title: "Манго",
            price: Math.round(Math.random() * (100 - 10) + 10),
            image: "ФотоМанго.jpg"
        },
        {
            id:4,
            title: "Апельсин",
            price: Math.round(Math.random() * (100 - 10) + 10),
            image: "ФотоАпельсин.jpg"
        },
        {
            id:5,
            title: "Груша",
            price: Math.round(Math.random() * (100 - 10) + 10),
            image: "ФотоГруша.jpg"
        },
        {
            id:6,
            title: "Абрикос",
            price: Math.round(Math.random() * (100 - 10) + 10),
            image: "ФотоАбрикос.webp"
        },
        {
            id:7,
            title: "Мандарин",
            price: Math.round(Math.random() * (100 - 10) + 10),
            image: "ФотоМандарин.webp"
        },
        {
            id:8,
            title: "Грейпфрут",
            price: Math.round(Math.random() * (100 - 10) + 10),
            image: "ФотоГрейпфрут.webp"
        }
        ,
        {
            id:9,
            title: "Киви",
            price: Math.round(Math.random() * (100 - 10) + 10),
            image: "ФотоКиви.webp"
        }
    ];
    const titleList = products.map(product => product.title);
    const priceList = products.map(product => product.price);
    
    const strProduct = product => `<div>
        <img src="${product.image}" alt="" width="75px" height="75px">
        <h4>${product.title}</h4>
        <p>${product.price} руб/кг</p>
        <button class="btn btn-success rounded-pill px-3" type="button" onclick="addProduct(${product.id})">Добавить в корзину</button>
    </div>`
    const strProductList = list => {
        document.querySelector('.catalog').innerHTML = (list.map(product => strProduct(product))).join("");
    }
    strProductList(products);
}