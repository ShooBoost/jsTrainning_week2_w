var apiObject = {
    dataArray: [],
    // 將後端資料存到本端
    getEnableDataAndShowTheData(){
        var myApiPath = 'https://course-ec-api.hexschool.io/';
        var myUUID = '1874925e-73c7-44be-80e4-108aedfb48f0';
        var vm = this;
        axios.get(`${myApiPath}api/${myUUID}/ec/products`)
        .then(function(response){
            vm.dataArray = response.data.data;
            vm.showData()
        })
        .catch(function(error){
            console.log(error)
        })
    },
    // 再來要做渲染囉～
    showData(){
        var productsList = this.dataArray;
        // 製作 productsList 的 HTML code
        var productHtmlStr = '';
        productsList.forEach(function(product){
            productHtmlStr += `
            <li class="card" id="${product.id}" class="col">
                <a href="#" class="text-decoration-none">
                    <img src="${product.imageUrl}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title text-info">${product.title}</h5>
                        <p class="card-text text-muted mb-4">${product.content}</p>
                        <a href="#" class="btn btn-info">add to Cart</a>
                    </div>
                </a>
            </li>`;
        });
        document.querySelector("#frontListId").innerHTML = productHtmlStr;
    }
}

apiObject.getEnableDataAndShowTheData();