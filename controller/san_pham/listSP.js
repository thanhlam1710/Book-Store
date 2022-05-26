// DANH SÁCH SẢN PHẨM
url = "http://localhost:3000/products";
fetch(url).then(res => res.json()).then(listSP => {
    console.log(listSP);
    listSP.forEach(sp => {
        document.querySelector("#listSanPham tbody").innerHTML += `
            <tr>
                <th scope="row">${sp.id}</th>
                <td>${sp.name}</td>
                <td><img src="${sp.image}"></td>
                <td>${sp.detail}</td>
                <td>${sp.price} VNĐ</td>
                <td>
                    <a href="updateSP.html?id=${sp.id}"><input type="button" name="sua_sp" class="btn btn-primary" value="Sửa"></a>
                    <a href="#" onclick="xoaSP(${sp.id})"><input type="button" name="xoa_sp" class="btn btn-danger" value="Xóa"></a>
                </td>
            </tr>
            `
    });
})



