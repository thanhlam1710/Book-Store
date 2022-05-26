
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

