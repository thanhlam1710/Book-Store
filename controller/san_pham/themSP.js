var insertSP = document.querySelector("#insertSP");
insertSP.onclick = function () {
    url = "http://localhost:3000/products";

    sp = {
        name: document.querySelector("#nameSP").value.trim(),
        image: document.querySelector("#imgSP").value.trim(),
        price: document.querySelector("#priceSP").value.trim(),
        detail: document.querySelector("#detailSP").value.trim(),
        cat_id: document.querySelector("#cat_id").value.trim()
    }
    console.log(sp);
    options = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sp)
    }

    fetch(url, options).then(res => res.json()).then(data => {
        console.log(data);
        alert("Đã thêm thành công");
        document.location = "listSP.html";
    })
}