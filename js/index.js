//Modal 

const opnBtn = document.querySelectorAll('.promo_btn'),
      modalWindow = document.querySelector('.modal'),
      modalOverlay = document.querySelector('.modal_overlay'),
      submitBtn = modalWindow.querySelector('.modal_btn'),
      closeModal = modalWindow.querySelector('.close_md');

setTimeout(open,7000);

//window.addEventListener('scroll',showByScroll);

opnBtn.forEach(btn => btn.addEventListener('click', () => {
    open();
}))

submitBtn.addEventListener('click', () => {
    let name = modalWindow.querySelector("#yourName").value,
          telephone = modalWindow.querySelector('#yourNumber').value;

    if(name === "" || telephone === ""){
        alert("Вы не ввели данные");
        close();
        return;
    }

    console.log("Name:" + name + ",Telephone:" + telephone);
    localStorage.setItem(name,telephone);
    close();
})

closeModal.addEventListener("click",() => close());

showByScroll = () => {
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        open();
        window.removeEventListener("scroll",showByScroll);
    }
}

function open(){
    modalWindow.classList.remove('closed');
    modalOverlay.classList.remove('closed');
}

function close(){
    modalWindow.classList.add('closed');
    modalOverlay.classList.add('closed');
}
