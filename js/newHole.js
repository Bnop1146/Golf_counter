export default class NewHole {

    constructor() {
        const BtnAdd = document.querySelector(".btn-add");
        const DivContainer = document.getElementById("div-container");






        BtnAdd.addEventListener("click", AddNew);

        function AddNew() {
            const newDiv = document.createElement("div");
            console.log("add");
            newDiv.classList.add("div-shadow");
            DivContainer.appendChild(newDiv);
        }





    }




}