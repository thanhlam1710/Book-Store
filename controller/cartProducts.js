// Tính tổng tiền
function tinhTongTien(){
    arrTien = document.getElementsByClassName("tien");
    tongTien = 0;
    for(let t of arrTien){
        tongTien += parseInt(t.innerText);
    }
    // console.log(tongTien);
    document.querySelector("#tongTien").innerText = tongTien + " VNĐ";
}   



// Tính tiền khi đổi số lượng
function tinhtien(gia, soluong, i){
    tien = gia*soluong;
    document.getElementsByClassName("tien")[i].innerText=tien + "VNĐ";
    tinhTongTien();
}


// LIST SẢN PHẨM
var cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) cart.forEach((sp, index) => {
            console.log(sp);
            document.querySelector("#tblcart").innerHTML += `
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="${sp.image}" alt="" />
                        <div class="content">
                            <p>${sp.name}</p>
                            <span class="gia">Giá: ${sp.price}</span>
                            <br />
                            <a href=""onclick="delete_cart(${sp.id})">Xóa</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="${sp.quatity}" min="0" onclick = "tinhtien(${sp.price}, this.value, ${index})" /></td>
                <td class="tien">${sp.quatity*sp.price} VNĐ</td>
            </tr> <hr>
            `
        });

        function delete_cart(id) {
            // alert(id);
            const question = confirm("Bạn có muốn xóa");
            if (question == false) return;
            var cart = JSON.parse(localStorage.getItem("cart"));
            fetch(cart.id, {method:"delete"}).then(res => res.json()).then(list_cart => {
                console.log(list_cart);
                alert("Đã xóa");
                document.location = "gioHang.html";
            })
        }      