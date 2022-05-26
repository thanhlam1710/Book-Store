
let params = new URLSearchParams(location.search);
let id = params.get("order_id");
var url = `http://localhost:3000/order_details/${id}`;
fetch(url).then(res => res.json())
    .then(slOne => {
        console.log(slOne);
        let chiTietDH = document.querySelector("#chiTietDonHang");
        chiTietDH.innerHTML += `
                <tr>
                <th scope="row">${slOne.id}</th>
                <td>${slOne.order_id}</td>
                <td>${slOne.product_id}</td>
                <td>${slOne.quantity}</td>
                <td>${slOne.unti_price}</td>
            </tr>
        `
    });
