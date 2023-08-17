
function modalsAlertNoMoreStock(){
    const alert = document.querySelector(".modal__no_more_stock")
    const btnCloseModal = document.querySelector(".btn__no_more_stock--close")
    
    alert.showModal()

    btnCloseModal.addEventListener('click',()=>{
        alert.close()
    })
}

function modalsAlertProductNoAvailable(){
    const alert = document.querySelector(".modal__product_no_available")
    const btnCloseModal = document.querySelector(".btn__product_no_available--close")
    
    alert.showModal()

    btnCloseModal.addEventListener('click',()=>{
        alert.close()
    })
}

function modalsAlertProductBought(){
    const alert = document.querySelector(".modal__product_bought")
    const btnCloseModal = document.querySelector(".btn__product_bought--close")
    
    alert.showModal()

    btnCloseModal.addEventListener('click',()=>{
        alert.close()
    })
}

function modalsAlertEmptyCar(){
    const alert = document.querySelector(".modal__empty_car")
    const btnCloseModal = document.querySelector(".btn__empty_car--close")
    
    alert.showModal()

    btnCloseModal.addEventListener('click',()=>{
        alert.close()
    })
}



export {
    modalsAlertNoMoreStock,
    modalsAlertProductNoAvailable,
    modalsAlertProductBought,
    modalsAlertEmptyCar
  };

