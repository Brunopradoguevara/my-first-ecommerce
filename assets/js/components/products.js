function products(products) {
  const db = [...products];

  function printProducts() {
    const productsDOM = document.querySelector(".products__container");

    let htmlProduct = "";

    for (const product of db) {
      htmlProduct += `
        <article class="product">
          <div class="product__image">
            <figure>
              <img src="${product.image}"
              alt="${product.name}" 
            </figure>
          </div>
          <div class="product__content">
            <button type="button" class="details__btn open--to--modal" data-idbtndetails="${product.id}">
              <i class='bx bxs-detail'></i>
            </button>
            <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
              <i class="bx bx-cart-add"></i>
            </button>
            <span class="product__price">$${product.price}</span>
            <span class="product__stock">Disponibles: ${product.quantity}</span>
            <h3 class="product__title">
              ${product.name}
            </h3>
          </div>
        </article>
        <dialog class="modal__details" data-idmodal="${product.id}"> 
          <div class="container__modal__details">
            <article class="product">
              <div class="product__image">
                <figure>
                  <img src="${product.image}"
                   alt="${product.name}" 
                   loading="lazy"/>
                </figure>
                <div class="product__buttons">
                    <button class="btn__modal--close" data-idbtnclosemodal = "${product.id}">
                      <i class='bx bx-x'></i>
                    </button>
                    <button class="btn__modal__product add--to--cart" data-id="${product.id}">  
                      <i class="bx bx-cart-add"></i>
                    </button>
                </div>  
              </div>
              
              <div class="product__content">
                  <span class="product__price">$${product.price}</span>
                  <span class="product__stock">Disponibles: ${product.quantity}</span>
                  <h3 class="product__title">${product.name}</h3>
                  <p class="product__description">${product.description}</p>
              </div>

            </article>  
          </div>    
        </dialog>
      `;
    }
    productsDOM.innerHTML = htmlProduct
  }

  printProducts()

  return {
    db,
    printProducts
  }
}

export default products;
