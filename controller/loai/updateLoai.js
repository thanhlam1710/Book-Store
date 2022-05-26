let updateLoai = document.querySelector("#updateLoai");
updateLoai.onclick = function () {
    let params = new URLSearchParams(location.search);
    let id = params.get("id");
    url = `http://localhost:3000/categories/${id}`;

    let nameSP = document.querySelector("#nameSP").value.trim();

    loai = {
        name: nameSP
    }

    console.log(loai);

    options = {
        method: "put",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loai)
    }

    fetch(url, options).then(res => res.json())
        .then(data => {
            console.log(data);
            alert("Đã cập nhật thành công");
            document.location("listLoai.html");
        });
}