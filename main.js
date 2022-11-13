async function getProducts(){
    const url = "https://jsonplaceholder.typicode.com/posts",
    response = await fetch(url);
    return await response.json();
}

async function renderProducts(){
    const products = await getProducts();
    let body = document.querySelector("#container")
    for(let product of products){
    let  card = document.createElement("div");
    card.classList.add('m-4', 'p-1')
    card.style="width: 18rem;display:inline-block;border:10px solid black";
        card.innerHTML = ` 
        <img
        class="card-img-top"
        src="https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg"
        alt="Card image cap"
        />
        <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.body}</p>
        <a href="#" class="btn btn-primary">${product.id}</a>
        </div>`;
        body.appendChild(card);
    }
}

renderProducts()