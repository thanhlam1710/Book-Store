var insertSP = document.querySelector("#insertSP");
insertSP.onclick = function () {
    let params = new URLSearchParams(location.search);
    let id = params.get("id");
    url = `http://localhost:3000/products/${id}`;

    sp = {
        name: document.querySelector("#nameSP").value.trim(),
        image: document.querySelector("#imgSP").value.trim(),
        price: document.querySelector("#priceSP").value.trim(),
        detail: document.querySelector("#detailSP").value.trim(),
        cat_id: document.querySelector("#cat_id").value.trim()
    }
    console.log(sp);
    options = {
        method: "put",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sp)
    }

    fetch(url, options).then(res => res.json()).then(spOne => {
        // console.log(spOne);
        alert("Đã cập nhật thành công");
        document.location = "listSP.html";
    });
}