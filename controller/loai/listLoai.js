url = "http://localhost:3000/categories";
fetch(url).then(res => res.json())
    .then(listLoai => {
        console.log(listLoai);
        listLoai.forEach(loai => {
            document.querySelector("#listLoai tbody").innerHTML += `
                    <tr>
                        <th scope="row">${loai.id}</th>
                        <td>${loai.name}</td>
                        <td>
                            <a href="updateLoai.html?id=${loai.id}"><input type="button" name="sua_loai" class="btn btn-primary" value="Sửa"></a>
                            <a href="#" onclick="xoaLoai(${loai.id})"><input type="button" name="xoa_loai" class="btn btn-danger" value="Xóa"></a>
                        </td>
                    </tr>
            `
        });
    });