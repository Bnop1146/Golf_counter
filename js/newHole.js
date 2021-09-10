export default class newHole {
    constructor() {
        this.enterButton = document.querySelector('#add-new button');
        this.input = document.querySelector('#inputArea input');
        this.ul = document.querySelector('ul#toDoList');



        this.enterButton.addEventListener('click', (e) => this.addListItem(e));


    }

    addListItem(e) {
        if (this.input.value.length > 0 && (e.key === 'click' || e.key === undefined)) {
            this.createListItem();
        }

    }

    createListItem() {
        const li = document.createElement('li');
        li.innerHTML = `${this.input.value} <div class="container" id="newHoleAdd" >
                                                <button class="minusBtn" >-</button>
                                                <input class="numberPlace" name="counter" type="number" value="0"/>
                                                <button class="plusBtn" >+</button>
                                                </div>`;
        this.ul.appendChild(li);
        this.input.value = '';


    }


}