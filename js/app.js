//booleans 
let list1Pressed = false; 
let list2Pressed = false; 
let list3Pressed = false; 
let addInputPressed = false; 
let savedInfo = false; 
let delete_btn_pressed = false; 
let clear_btn_pressed = false; 
let save_btn_pressed = false; 
let edit_btn_pressed = false; 
// arrays
let middle_content_arr = [];

// elements
const list1Btn = document.querySelector(".middle__lstBtns").children[0];
const list2Btn = document.querySelector(".middle__lstBtns").children[1];
const list3Btn = document.querySelector(".middle__lstBtns").children[2];

const middle_section = document.querySelector(".middle__sections");
const middle_plus = document.querySelector(".middle__plus");
const middle_content = document.querySelector(".middle__content");
const middle_lower_content = document.querySelector(".middle__lowerContent");
// console.log(add_Input_Btn);
// listen to list 1 btn
list1Btn.addEventListener("click",function(){
    list1Pressed = true; 
    list2Pressed = false; 
    list3Pressed = false;
    
    displayAddItem();
    
      
    
    
    if(list1Pressed && savedInfo){
        console.log("display list");
        displayPage();
    }
    else{
        this.parentElement.parentElement.children[3].children[0].addEventListener("click",function(){
            addInputPressed = true; 
            displayInput(addInputPressed, list1Pressed);
        });
        // console.log("display input container")
        // displayInput();
    }
    console.log(list1Pressed); 
    console.log(list2Pressed); 
    console.log(list3Pressed); 
});

// listen to list 2 btn
list2Btn.addEventListener("click",function(){
    list1Pressed = false; 
    list2Pressed = true; 
    list3Pressed = false;
    console.log(list1Pressed); 
    console.log(list2Pressed); 
    console.log(list3Pressed);
});

// listen to list 3 btn
list3Btn.addEventListener("click",function(){
    list1Pressed = false; 
    list2Pressed = false; 
    list3Pressed = true;
    console.log(list1Pressed); 
    console.log(list2Pressed); 
    console.log(list3Pressed);
});

// functions
function displayAddItem(){
    // remove "choose list" then show add button
    middle_section.innerHTML = `
        <h3>Product</h3>
        <h3>Quantity</h3>
        <h3>Price</h3>`;
    middle_plus.innerHTML = `<i class="fas fa-plus "></i>`;
    console.log("GONE");
}
function displayInput(addInputBtn, listBtn){
// this displays the input to user to fill in info.
    // let middle_content_arr = [];
    middle_lower_content.innerHTML = `
    <div class="middle__totalBox">
                <h2 class="middle__total">Total</h2>
                <h1 class="middle__total">100</h1>
            </div>
            <div class="middle__clearBox">
                <button class="middle__btnClr">Clear All</button>
            </div>`;
    
    if(addInputBtn && listBtn){
        // const middle_content_arr = [];
        console.log("display input");
        middle_section.style.visibility = "visible";
        
        middle_content.style.opacity = 1; 
        // middle_content_arr = [];
        middle_content_arr.push(`<div class="middle__list1">
        <div class="middle__column">
            <input class="middle__product" type="text">
        </div>
        <div class="middle__column">
            <div class="middle__btnContainer">
                <button class="middle__decrease">-</button>
                <input class="middle__quantity" type="text">
                <button class="middle__increase">+</button>
            </div>
           
        </div>
        <div class="middle__column">

            <input class="middle__price" type="text">
        </div>
    </div>`);
        middle_content.innerHTML = middle_content_arr.join("");
        console.log(middle_content_arr.join());
        // make clear all btn and save btn show when user press add
    }
    // listen to clear all 
    // listen to press delete 
    // listen to save 
}
function displayPage(){
// shows the list for user once the user has saved the list
}
function deleteAllInputs(){
// delete inputs
}
function deleteInputLine(){
// delete selected input
}
function displayExistingInput(){
// this should allow user to edit the existing list. 
}





