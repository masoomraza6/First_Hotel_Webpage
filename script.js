const priceRange = document.querySelector('#priceRange');
const price = document.querySelector('#price');

const hotelsCount = 4;

const hotels = document.querySelector('.hotels');
const prices = [1500, 2000, 2500];

for (let i = 1; i < hotelsCount; i++) {
    hotels.innerHTML += `
    <div class="hotel" id="hotel${i}">
            <p>Hotel ${i}</p>
            <div class="img"></div>
            <div class="priceBx" id="hotelPrice1">Price : <span price>Rs${prices[i - 1]}</span></div>
        </div>
    `;
}
priceRange.addEventListener('input', (e) => {
    price.innerText = `Price: ( ${e.target.value} )`;
    // let i = 0;
    hotels.innerHTML = '';

    const count = prices.filter((f) => {
        return e.target.value >= f;
    });
    for (let i = 0; i < count.length; i++) {
        hotels.innerHTML += `
    <div class="hotel" id="hotel${i + 1}">
            <p>Hotel ${i}</p>
            <div class="img"></div>
            <div class="priceBx" id="hotelPrice1">Price : <span>Rs${count[i]}</span></div>
        </div>
    `;
    }
    const hotel = document.querySelectorAll('.hotel');
    const form2 = document.querySelector('#form2');

    hotel.forEach(elem => {
        resetInput();
        form2.classList.remove('active');
        elem.addEventListener('click', (e) => {
            resetInput();
            form2.classList.add('active');
            let priceTarget = Number(priceData(e).replace('Rs', ''));        
        guestData(priceTarget);
        });
    });
});

const hotel = document.querySelectorAll('.hotel');
const form2 = document.querySelector('#form2');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const price1 = document.querySelector('#price1');
const number = document.querySelector('#number');

hotel.forEach(elem => {
    resetInput();
    form2.classList.remove('active');
    elem.addEventListener('click', (e) => {
        resetInput();
        form2.classList.add('active');
        let priceTarget = Number(priceData(e).replace('Rs', ''));        
        guestData(priceTarget);

    });
});

function resetInput() {
    firstName.value = '';
    lastName.value = '';
    number.value = ''
    email.value = '';
    price1.value = '';
}

function priceData(price){
    return price.target.nextElementSibling.childNodes[1].innerText;
}
async function guestData(price) {
    const res = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=zfEKvh9bqxNTZs5svuYSTd1aw1OWqi2y2hg4AewBJHu8EmmRcE3DZEGQbZI76Ic5kWe2V14Xu8k0G8pKQIaBmXUCWlTCIMaHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO5YIJelJOrOGgiGwOkyQ-eRa8WbSnptyixr23B091BsRt3wDtevA8rJlnBoEryQ9v8RKfDoIM-h3Hu09sRE3o3EeabOQ74bGNz9Jw9Md8uu&lib=M3ZKyTv52YH9wsfiZoFAIRKjsqdjezalJ');
    const data = await res.json();
    const dataArr = data.content[0];

    for (let x = 0; x <= dataArr.length; x++) {

        if (x == 0) {
            firstName.value = dataArr[x];
        }
        if (x == 1) {
            lastName.value = dataArr[x];
        }
        if (x == 2) {
            number.value = dataArr[x];
        }
        if (x == 3) {
            email.value = dataArr[x];
        }
        if (x == 4) {
            price1.value = price;
        }
    }
}