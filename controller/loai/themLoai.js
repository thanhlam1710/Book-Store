let insertLoai = document.querySelector("#insertLoai");
insertLoai.onclick = function () {
    url = "http://localhost:3000/categories";

    let nameSP = document.querySelector("#nameSP").value.trim();

    loai = {
        name: nameSP
    }

    console.log(loai);

    options = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loai)
    }

    fetch(url, options).then(res => res.json())
        .then(data => {
            console.log(data);
            alert("Đã thêm thành công");
            document.location("listLoai.html");
        });
}