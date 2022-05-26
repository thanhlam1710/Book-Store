// Lấy chi tiết sản phẩm để hiện trong form
let params = new URLSearchParams(location.search);
let id = params.get("id");
url = `http://localhost:3000/categories/${id}`;
// console.log(url);

fetch(url).then(res => res.json())
    .then(slOne => {
        console.log(slOne);
        document.querySelector("#idLoai").value = slOne.id;
        document.querySelector("#nameSP").value = slOne.name;
});