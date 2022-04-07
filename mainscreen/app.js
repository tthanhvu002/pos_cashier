const noti = document.querySelectorAll('.noti')

const mainWrapper = document.querySelector('.main-wrapper')
const paymentWrapper = document.querySelector('.payment-wrapper')
const foodInfoWrapper = document.querySelector('.food-info-wrapper')
const items = document.querySelectorAll('.item')
const closeBtn = document.querySelector('.icon.close')
const closeFoodInfo = document.querySelector('.food-info-wrapper .icon.close')
const payment = document.querySelectorAll('.payment-info-menu .d-flex:first-child')
console.log(payment );
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


console.log(closeFoodInfo);
closeFoodInfo.onclick = () => {
    foodInfoWrapper.classList.toggle('active')
    mainWrapper.classList.toggle('active')
}
closeBtn.onclick = () => {
    paymentWrapper.classList.toggle('active')
    mainWrapper.classList.toggle('active')
}
Array.from(items).forEach(item => {
    item.onclick = () => {
        foodInfoWrapper.classList.toggle('active')
        mainWrapper.classList.toggle('active')
    }
})

const itemPayment = document.querySelectorAll('.payment-wrapper .item')
Array.from(itemPayment).forEach(item => {
    item.onclick = () => {
        item.querySelector('.remove').classList.toggle('active')

    }
})
const itemFood = document.querySelectorAll('.food-info-wrapper .list-food-info .item')
console.log(itemFood);
Array.from(itemFood).forEach(item => {
    item.onclick = () => {
        console.log(1);
        item.querySelector('.pen-icon').classList.toggle('active')

    }
})

const paymentInfo = document.querySelectorAll('.payment-info')
paymentInfo.forEach(item => {
    item.onclick =() => {
        item.querySelector('.payment-info-menu').classList.toggle('active')
    }
})
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

payment.forEach(item => {
    item.onclick = () => {
        paymentWrapper.classList.toggle('active')
        foodInfoWrapper.classList.toggle('active')

    }
})



