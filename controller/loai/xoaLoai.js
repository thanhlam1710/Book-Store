function xoaLoai(id) {
    // alert(id);
    const question = confirm("Bạn có muốn xóa");
    if (question == false) return;
    url = `http://localhost:3000/categories/${id}`;
    fetch(url, { method: "delete" }).then(res => res.json()).then(listLoai => {
        console.log(listLoai);
        alert("Đã xóa");
        document.location = "listLoai.html";
    });
}