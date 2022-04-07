const noti = document.querySelectorAll('.noti')

const mainWrapper = document.querySelector('.main-wrapper')
const paymentWrapper = document.querySelector('.payment-wrapper')
Array.from(noti).forEach(item => {
    item.onclick = () => {
        if(item.classList.contains('active')){

        } else{
            Array.from(noti).forEach(i => {
                if(i.classList.contains('active')){
                    i.classList.remove('active')
                    i.querySelector('.number').classList.remove('active')
                }
            })
            item.classList.add('active')
            item.querySelector('.number').classList.add('active')
        }
        if(item.classList.contains('payment')){
            document.querySelector('.list:last-child').style.display = 'none'
            document.querySelector('.list:nth-child(2)').style.display = 'block'
        } else{
            document.querySelector('.list:last-child').style.display = 'block'
            document.querySelector('.list:nth-child(2)').style.display = 'none'
        }
    }
})

const items = document.querySelectorAll('.item')
const closeBtn = document.querySelector('.icon.close')

closeBtn.onclick = () => {
    console.log(1);
    paymentWrapper.classList.toggle('active')
    mainWrapper.classList.toggle('active')
}
Array.from(items).forEach(item => {
    item.onclick = () => {
        paymentWrapper.classList.toggle('active')
        mainWrapper.classList.toggle('active')
    }
})

const itemFood = document.querySelectorAll('.payment-wrapper .item')
Array.from(itemFood).forEach(item => {
    item.onclick = () => {
        item.querySelector('.remove').classList.toggle('active')

    }
})


const paymentInfo = document.querySelector('.payment-info')
paymentInfo.onclick = () => {
    paymentInfo.querySelector('.payment-info-menu').classList.toggle('active')
}

const paymentBtn = document.querySelector('.payment-btn')
const popup = document.querySelector('.overlay')
paymentBtn.onclick = () => {
    popup.classList.toggle('active')
}
popup.onclick = (e) => {
    if(e.target.classList.contains('overlay')){
        popup.classList.toggle('active')
    }
}



