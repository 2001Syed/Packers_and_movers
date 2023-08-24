const charges = document.querySelectorAll("[name = 'charges']");
const quote = document.querySelector("#quote");
var slider = document.querySelector(".distance");
var output = document.querySelector("#demo")

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}



function result(){
    event.preventDefault()

    let i = 0;
    let totalcost = 0;

    while (i < charges.length) {
        if (charges[i].checked) {
            totalcost = totalcost + parseInt(charges[i].value);
        }
        i++;

    }

    quote.innerHTML = `${parseInt(slider.value) * totalcost}`;
}