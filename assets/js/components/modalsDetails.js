
function modalsDetails() {

     const btnDetailsList = document.querySelectorAll(".details__btn");
     const btnCloseModalList = document.querySelectorAll(".btn__modal--close");
  
     btnDetailsList.forEach(btnDetails => {
      const idBtnDetails = btnDetails.getAttribute("data-idbtndetails");
      const modal = document.querySelector(`.modal__details[data-idmodal="${idBtnDetails}"]`);
  
      btnDetails.addEventListener('click', () => {
        modal.showModal();
      });
     });
  
     btnCloseModalList.forEach(btnCloseModal => {
      const idBtnCloseModal = btnCloseModal.getAttribute("data-idbtnclosemodal");
      const modal = document.querySelector(`.modal__details[data-idmodal="${idBtnCloseModal}"]`);
  
      btnCloseModal.addEventListener('click', () => {
        modal.close();
      });
     });
    
  }
 

export default modalsDetails

