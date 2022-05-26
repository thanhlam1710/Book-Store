
const list_products = document.getElementById("list-products");
const search_products = document.getElementById("search-box");

let hpBook = [];
search_products.addEventListener('keyup', (e) => {
    var searchString = e.target.value;
    var searchProducts = hpBook.filter((search) => {
        return (
            search.nameProduct.toLowerCase().includes(searchString)
        );
    });
    displayBook(searchProducts);
});

const loadBook = async () => {
    try {
        const res = await fetch("http://localhost:3000/products");
        hpBook = await res.json();
        displayBook(hpBook);
        console.log(hpBook);
    } catch (error) {
        console.error(err);
    }
};

const displayBook = (products) => {
    const list_book = products
        .map((sp) => {
            return `
                <div class="swiper-slide box">
                    <div class="icons">
                        <a href="#" class="fas fa-search"></a>
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <div class="image">
                        <img src="${sp.image}" alt="">
                    </div>
                    <div class="content">
                        <h3>${sp.name}</h3>
                        <div class="price">$${sp.price} <span>$${sp.price_new}</span></div>
                        <div class="btn-a">
                            <a href="SanPhamCT.html?id=${sp.id}"><input type="button" name="sua_sp" class="btn btn-primary" value="Xem chi tiết"></a>
                            <a href="#" id="add" class="btn btn-primary" onclick="themVaoGio(${sp.id}, '${sp.name}', '${sp.price}', '${sp.image}')" >Mua ngay</a>
                        </div>      
                    </div>
                </div>
            `;
        })
  

    const slide_book = products
    .map((sp) => {
        return `
            <a href="SanPhamCT.html?id=${sp.id}" class="swiper-slide"><img src="${sp.image}" alt=""></a>
        `;
    })
  
    list_products.innerHTML = list_book;
    slider_products.innerHTML = slide_book;
}

loadBook();

let addCart = document.querySelector("#add");
for (let i=0; i < addCart.leng; i++){
    addCart[i].addEventListener('click', () =>{
        console.log("add");
    })
}


// const url = "http://localhost:3000/products";
// fetch(url).then(data => data.json())
//     .then(products => {
//         var search_products = document.querySelector("#search-box");
//         var list_products = document.querySelector("#list-products");
//         var slider_products = document.querySelector("#slider-banner");
//         search_products.addEventListener('keyup', (e) => {
//             var searchString = e.target.value;
//             var searchProducts = products.filter((search) => {
//                 return (
//                     search.name.includes(searchString)
//                 );
//             });
//             console.log(searchProducts);
//         });
//         console.log(products);

//         list_products.innerHTML += products.map(sp => {
//             return `
//                     <div class="swiper-slide box">
//                         <div class="icons">
//                             <a href="#" class="fas fa-search"></a>
//                             <a href="#" class="fas fa-heart"></a>
//                             <a href="#" class="fas fa-eye"></a>
//                         </div>
//                         <div class="image">
//                             <img src="${sp.image}" alt="">
//                         </div>
//                         <div class="content">
//                             <h3>${sp.name}</h3>
//                             <div class="price">$${sp.price} <span>$${sp.price_new}</span></div>
//                             <div class="btn-a">
//                                 <a href="SanPhamCT.html?id=${sp.id}"><input type="button" name="sua_sp" class="btn btn-primary" value="Xem chi tiết"></a>
//                                 <a href="#" class="btn btn-primary" onclick="themVaoGio(${sp.id}, '${sp.name}', '${sp.price}', '${sp.image}')" >Mua ngay</a>
//                             </div>      
//                         </div>
//                     </div>
//                     `
//         })
//         slider_products.innerHTML += products.map(sp => {
//             return `
//                 <a href="#" class="swiper-slide"><img src="${sp.image}" alt=""></a>
//             `
//         })
//     })

