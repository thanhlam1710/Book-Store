// XÓA SẢN PHẨM
function xoaSP(id) {
    // alert(id);
    const question = confirm("Bạn có muốn xóa");
    if (question == false) return;
    url = `http://localhost:3000/products/${id}`;
    fetch(url, {method:"delete"}).then(res => res.json()).then(listSP => {
        console.log(listSP);
        alert("Đã xóa");
        document.location = "listSP.html";
    })
}