
var url = "http://localhost:3000/order";
fetch(url).then(data => data.json())
    .then(order => {
        var list_donhang = document.querySelector("#listDonHang");
        console.log(order);
        list_donhang.innerHTML += order.map(dh => {
            return `
            <tr>
            <th scope="row">${dh.id}</th>
            <td>${dh.customer_name}</td>
            <td>${dh.customer_address}</td>
            <td>${dh.customer_email}</td>
            <td>${dh.customer_phone}</td>
            <td>${dh.create_date}</td>
            <td>${dh.status}</td>
            <td>
                <a href="chiTietDH.html?order_id=${dh.id}"><input type="button" name="chitiet" class="btn btn-primary" value="Chi tiết"></a>
                <a href="#" onclick="xoaDH(${dh.id})"><input type="button" name="xoa_sp" class="btn btn-danger" value="Xóa"></a>
            </td>
        </tr>
                    `
        })
    })

    function xoaDH(id) {
        // alert(id);
        const question = confirm("Bạn có muốn xóa");
        if (question == false) return;
        url = `http://localhost:3000/order/${id}`;
        fetch(url, {method:"delete"}).then(res => res.json()).then(listSP => {
            console.log(listSP);
            alert("Đã xóa");
            document.location = "listDH.html";
        })
    }
