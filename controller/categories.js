var url = "http://localhost:3000/categories";
fetch(url).then(data => data.json())
    .then(categories => {
        console.log(categories);
        loai = categories.map(cat => {
            return `
            <a href="spTheoLoai.html?id=${cat.id}">${cat.name}</a>
                `
        })
        document.querySelector("#categories").innerHTML += loai;
})