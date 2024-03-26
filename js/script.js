const cards = document.querySelectorAll('.card');
//console.log(cards);

let titleCount =1;
let totalPrice = 0;


for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    //console.log(element);
    card.addEventListener("click", function(){
     console.log('Clicked')

    //get the tittle
    const title = card.querySelector("h3").innerText;
    //console.log(title.innerText);

    const price = parseFloat(card.querySelector('span').innerText.split(" ")[1]);
    //console.log(price, title);
    console.log(price);

    const titleContainer = document.getElementById('title-container');
    console.log(titleContainer);

    const p = document.createElement('p');
    p.innerText = titleCount + '. ' + title;
    titleContainer.appendChild(p);
    titleCount++;


    //calculate price
    totalPrice += price;
    //console.log(totalPrice);
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    });
}

const btn = document.getElementById('apply-btn');
btn.addEventListener("click", function(){
    console.log('clicked');

    //get the value form input
    const couponElement = document.getElementById("input-field").value;
    console.log(couponElement); //when we take value input field , in that case we get it by .value
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    console.log(couponCode);
    if(totalPrice >= 200){
        if(couponCode === "SELL200"){
            //discount calculation
            const discountElement = document.getElementById("discountPrice");
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            //rest total calculation
            const restTotal = document.getElementById("total");
            restTotal.innerText = totalPrice - discountAmount.toFixed(2);
            document.getElementById("input-field").value = "";
        }
        else{
            alert("Invalid Coupone");
            document.getElementById('input-field').value = "";
        }
    }
    else{
        alert('Sorry! You have to purchase minimum $200');
        document.getElementById('input-field').value = "";
    }
});
