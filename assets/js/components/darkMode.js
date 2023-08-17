
function darkMode(){
    const btnSwitch = document.querySelector(".btn--dark-mode")
    btnSwitch.addEventListener('click',()=>{
    document.body.classList.toggle('dark--mode')
    btnSwitch.classList.toggle('dark-mode--active');
})
}


export default darkMode