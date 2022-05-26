// Lấy chi tiết sản phẩm để hiện trong form
let params = new URLSearchParams(location.search);
let id = params.get("id");
url = `http://localhost:3000/products/${id}`;
// console.log(url);

fetch(url).then(res => res.json())
    .then(slOne => {
        console.log(slOne);
        document.querySelector("#nameSP").value = slOne.name;
        document.querySelector("#imgSP").value = slOne.image;
        document.querySelector("#priceSP").value = slOne.price;
        document.querySelector("#detailSP").value = slOne.detail;
        document.querySelector("#cat_id").value = slOne.cat_id;
});