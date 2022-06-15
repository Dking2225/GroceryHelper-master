// ****variables*****
let price_arr = [];
let quantity_arr =[];
let acc = 0; 
// *****select items******
const list1Btn = document.querySelector(".middle__lstBtns").children[0];
const list2Btn = document.querySelector(".middle__lstBtns").children[1];
const list3Btn = document.querySelector(".middle__lstBtns").children[2];
const middle_content = document.querySelector(".middle__content");
const middle_plus = document.querySelector(".middle__plus");
const middle_lowerContent = document.querySelector(".middle__lowerContent");
// *****event listeners********
// -listen to list buttons

// -listen to add button
middle_plus.children[0].addEventListener("click", addItems);
// -listen to delete button

// -listen to save button 
middle_lowerContent.children[3].children[0].addEventListener("click",saveItems);
// -listen to clear button
middle_lowerContent.children[1].children[0].addEventListener("click",clearItems);
// -listen to edit button 

// listen to calc button
middle_lowerContent.children[2].children[0].addEventListener("click",calcTotal);
// ****functions*********

function clearItems(){
// remove all items displayed
middle_content.innerHTML = ""; 
// remove items on the list array     
}

function saveItems(){
// Save items on the list array
// call the renderList function
// show the edit button
console.log("hqwe")
}

function deleteItems(e){
// remove the selected item on the list array
// remove the selected item on display
e.currentTarget.parentElement.parentElement.remove();
calcTotal();
// del_price = e.currentTarget.parentElement.parentElement.children[2].children[0].value; 
// del_quan =  e.currentTarget.parentElement.parentElement.children[1].children[0].children[1].value
// total -= parseInt(del_quan)*parseInt(del_price);
// middle_lowerContent.children[0].children[1].innerText = total;

// console.log(del_val);
}

function addItems(){
const middle_content_info = `
                    <div class="middle__column">
                        <input class="middle__product" type="text">
                    </div>
                    <div class="middle__column">
                        <div class="middle__btnContainer">
                            <button class="middle__decrease">-</button>
                            <input class="middle__quantity" type="text" >
                            <button class="middle__increase">+</button>
                        </div>
                       
                    </div>
                    <div class="middle__column">

                        <input class="middle__price" type="text">
                    </div>
                    <div class="middle__column">
                        <i class="fas fa-trash"></i>
                    </div>`;
const middle_content_element = document.createElement("div");
middle_content_element.classList.add("middle__list1");
middle_content_element.innerHTML = middle_content_info; 
renderInput(middle_content_element);


console.log("hello");

}

function editItems(){
// call renderinputs function
// show clear all and save button and add button to be displayed
}

function calcTotal(){
// get the value of quantity and price then set the total
const product_price = document.querySelectorAll(".middle__price");
const product_quantity = document.querySelectorAll(".middle__quantity");
price_arr = [];
    for(i=0; i<product_price.length; i++){
        if(isNaN(product_price[i].value)|| product_price[i].value ==""){
            product_price[i].value = 0; 
            price_arr.push(product_price[i].value)
        }
        else{
            price_arr.push(product_price[i].value);    
        }
        
    }
quantity_arr = [];
    for(i=0; i<product_quantity.length; i++){
        if(isNaN(product_quantity[i].value)|| product_quantity[i].value ==""){
            product_quantity[i].value = 0; 
            quantity_arr.push(product_quantity[i].value)
        }
        else{
            quantity_arr.push(product_quantity[i].value);    
        }
    }

// calculate total 
for(i=0; i<quantity_arr.length; i++){
    acc += parseInt(quantity_arr[i])*parseInt(price_arr[i]);
}
console.log(acc);
middle_lowerContent.children[0].children[1].innerHTML = acc; 
acc =0; 
console.log(price_arr);
console.log(quantity_arr);


}

function renderInput(middle_info){
    //displaying input line
    middle_content.appendChild(middle_info);
    const product_input = document.querySelectorAll(".middle__product");
    const product_quantity = document.querySelectorAll(".middle__quantity");
    const product_price = document.querySelectorAll(".middle__price");
    const delete_btn = document.querySelectorAll(".fa-trash"); 
    // listens to delete btn                                                                                                                                                                                                                                                                          
    Array.from(delete_btn).forEach(b=>{
        b.addEventListener("click",deleteItems);
    });
     

}

function renderList(){
// hide the save btn, clear, input, plus btn, delete btn, input boxes

}

function setUpItems(){

}



