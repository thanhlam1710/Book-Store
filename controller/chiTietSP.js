// Lấy chi tiết sản phẩm để hiện trong form
let params = new URLSearchParams(location.search);
let id = params.get("id");
url = `http://localhost:3000/products/${id}`;
// console.log(url);

fetch(url).then(res => res.json())
    .then(slOne => {
        console.log(slOne);
        let productCT = document.querySelector("#productCT");
        productCT.innerHTML = `
        <div class="productCT-img">
            <img src="${slOne.image}" alt="">    
            </div>
            <div class="productCT-content">
                <h3 class="title">${slOne.name}</h3>
                <span class="price"><b>Giá:</b> ${slOne.price}</span>
                <div class="description">
                    <h2>MÔ TẢ</h2>
                    <p>${slOne.detail}</p>
                </div>
                <a href="#" class="btn btn-primary" onclick="themVaoGio(${slOne.id}, '${slOne.name}', '${slOne.price}', '${slOne.image}')">Mua ngay</a>
            </div>  
        `
    });

    function themVaoGio(id, ten, gia, hinh) {
        var cart = JSON.parse(localStorage.getItem("cart"));
        if (cart == null) {
            cart = [];
            cart.push({ id: id, name: ten, price: gia, image: hinh, quatity: 1 });
        } else {
            let item = cart.find(item => item.id === id);
            if (item) item.quatity++;
            else cart.push({ id: id, name: ten, price: gia, image: hinh, quatity: 1 })
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Đã thêm vào giỏ hàng");
    }
