import NewHole from "./newHole.js";


export default class ScoreBoard  {


    constructor() {
        const minusBtn = document.querySelectorAll(".minusBtn");
        const plusBtn = document.querySelectorAll(".plusBtn");




// let container = document.querySelectorAll(".container");


minusBtn.forEach((minusBtn) => {
    minusBtn.addEventListener("click",function(e){
        if(e.target.nextElementSibling.value > 0){
            e.target.nextElementSibling.value--;
        } else {
            // delete the item, etc
        }
        getTotal();

    })
})
plusBtn.forEach((minusBtn) => {
    minusBtn.addEventListener("click",function(e){
        e.target.previousElementSibling.value++;
        getTotal();
    })
    getTotal();

})



    function getTotal (){
        const arr = document.querySelectorAll('.numberPlace')
        let total = 0;
        for (let i =0; i < arr.length; i++) {
            if (parseInt(arr[i].value)) {
                total += parseInt(arr[i].value);
            }
        }

        document.getElementById('total').value = total;

    }






/*
window.sumInputs = function() {
    let inputs = document.getElementsByName("counter"),
        result = document.getElementById('total'),
        sum = 0;

    for (let i = 0; i < inputs.length; i++) {
        const ip = inputs[i];

        if (ip.name && ip.name.indexOf("total") < 0) {
            sum += parseInt(ip.value) || 0;
        }

    }

    result.value = sum;
}
*/



}
}





/*
function Sum()
{
    let total = 0;
    for(let i = 1; i <= row_no; ++i)
    {
        const x = document.getElementById("desc" + i).value;
        const y = document.getElementById("itemno" + i).value;
        const subtotal = x * y;
        total += subtotal;
        document.getElementById("ourcost" + i).value = subtotal;
    }
    document.getElementById("total").value = total;
}

*/





































    /*window.onload=function(){
        this.minusBtn = document.querySelector(".minus")
            this.plusBtn = document.querySelector(".plus")
            this.numberPlace = document.querySelector(".numberPlace")
            this.number = 0 /// number value
            this.min = 1 /// min number
            this.max = 15; /// max number

        minusBtn.onclick = function(){
            if (number>min){
                number = number-1; /// Minus 1 of the number
                numberPlace.innerText = number ; /// Display the value in place of the number

            }
            if(number === min) {
                setTimeout(function(){numberPlace.style.color= "black"},500)
            }



        }
        plusBtn.onclick = function(){
            if(number<max){
                number = number+1;
                numberPlace.innerText = number ; /// Display the value in place of the number
            }


        }


    }



*/
