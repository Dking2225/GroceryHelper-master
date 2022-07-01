// ****variables*****
let price_arr = [];
let quantity_arr =[];
let product_arr =[];
let acc = 0; 
let list1_pressed =false; 
let list2_pressed =false; 
let list3_pressed =false; 
let counter = 1
let counter2 = 1
let text = ""
let lists = [
    {
        id: 1,
        price: [],
        quantity: [],
        product:[],
        total: ""
    },
    {
        id: 2,
        price: [],
        quantity: [],
        product:[],
        total: ""
    },
    {
        id: 3,
        price: [],
        quantity: [],
        product:[],
        total: ""
    }
]
// *****select items******
const list1Btn = document.querySelector(".frameBtn1");
const list2Btn = document.querySelector(".frameBtn2");
const list3Btn = document.querySelector(".frameBtn3");
const middle_content = document.querySelector(".middle__content");
const middle_plus = document.querySelector(".middle__plus");
const middle_lowerContent = document.querySelector(".middle__lowerContent");
const middle_container = document.querySelector(".middle__container")
const middle_title = document.querySelector(".middle__title")
const home_btn = document.querySelector(".middle__homeBtn")
const frame1 = document.querySelector(".frame1")
const middle = document.querySelector(".middle")
// *****event listeners********
// -listen to list buttons

home_btn.addEventListener("click",function(){
    showFrame1()
    removeInputFrame()
    
})
list1Btn.addEventListener("click",function(e){
    // set the flags 
    list1_pressed = true;
    list2_pressed = false; 
    list3_pressed = false;
    // hide the other buttons
    list2Btn.classList.add("hide-element");
    list3Btn.classList.add("hide-element");
    // list1Btn.parentElement.style.display = "block"; 
    getListPressed();
    hideFrame1();
    text = e.currentTarget.innerText
    showInputFrame(text)
    home_btn.classList.add("hide-element");

    if( typeof lists[0].product[0] !== "undefined"){
        
        renderList(0)
        console.log("running list1 true")
        
    }
    else{
        addItems()
        console.log("running list1")
        if(middle_content.children[1]){
            middle_content.children[1].remove()
        }
        middle_lowerContent.children[0].children[1].innerText = 0
        middle_lowerContent.children[0].children[1].innerText = 0
        middle_lowerContent.style.bottom = `${30}px`
        middle.style.height = `${100}%`
        counter = 1
    }
    // Is there something save in local storage?
    // yes...call render list 
    // no... call render input
});
list2Btn.addEventListener("click",function(e){
    // set the flags 
    list1_pressed = false;
    list2_pressed = true; 
    list3_pressed = false;
    // hide the other buttons
    list1Btn.classList.add("hide-element");
    list3Btn.classList.add("hide-element");
    // list2Btn.parentElement.style.display = "block";
    getListPressed();
    hideFrame1();
    text = e.currentTarget.innerText
    showInputFrame(text)
    home_btn.classList.add("hide-element");

    if( typeof lists[1].product[0] !== "undefined"){
        renderList(1)
        console.log("running list1 true")
        
    }
    else{
        addItems()
        if(middle_content.children[1]){
            middle_content.children[1].remove()
        }
        counter = 1
        middle_lowerContent.children[0].children[1].innerText = 0
        middle_lowerContent.children[0].children[1].innerText = 0
        middle_lowerContent.style.bottom = `${30}px`
        middle.style.height = `${100}%`
        
    }
    

    // Is there something save in local storage?
    // yes...call render list 
    // no... call render input
});
list3Btn.addEventListener("click",function(e){
    // set the flags 
    list1_pressed = false;
    list2_pressed = false; 
    list3_pressed = true;
    // hide the other buttons
    list1Btn.classList.add("hide-element");
    list2Btn.classList.add("hide-element");
    // list3Btn.parentElement.style.display = "block"; 
    getListPressed();
    hideFrame1();
    text = e.currentTarget.innerText
    showInputFrame(text)
    home_btn.classList.add("hide-element");

    if( typeof lists[2].product[0] !== "undefined"){
        renderList(2)
        console.log("running list1 true")
    }
    else{
        
        // middle_content.children[0].remove()//input row
        addItems()
        if(middle_content.children[1]){
            middle_content.children[1].remove()
        }
        counter = 1
        middle_lowerContent.children[0].children[1].innerText = 0
        middle_lowerContent.style.bottom = `${30}px`
        middle.style.height = `${100}%`
        
    }

    // Is there something save in local storage?
    // yes...call render list 
    // no... call render input
});

// -listen to add button
middle_plus.children[0].addEventListener("click", addItems);
// -listen to delete button

// -listen to save button 
middle_lowerContent.children[3].children[0].addEventListener("touchstart",saveItems);
// -listen to clear button
middle_lowerContent.children[1].children[0].addEventListener("click",clearItems);
// -listen to edit button 
middle_lowerContent.children[4].addEventListener("click",editItems);

// listen to calc button
middle_lowerContent.children[2].children[0].addEventListener("click",calcTotal);
// ****functions*********

let items = JSON.parse(localStorage.getItem('list'))

window.onload = function(){
    if(items != null){
        lists = items
        console.log(lists)
        console.log("running onload")
    }
    
}


function clearItems(){
// remove all items displayed
middle_content.innerHTML = ""; 
// remove items on the list array     
}

function hideFrame1(){
    frame1.classList.add("hide-element");
}
function showInputFrame(btnText){
    middle_title.classList.remove("hide-element");
    middle_container.classList.remove("hide-element");
    middle_container.children[0].children[1].innerText =btnText
    middle_lowerContent.classList.remove("hide-element");
}

function showFrame1(){
    frame1.classList.remove("hide-element")
    list1Btn.classList.remove("hide-element");
    list2Btn.classList.remove("hide-element");
    list3Btn.classList.remove("hide-element");
    middle_title.classList.add("hide-element");
    middle_container.classList.add("hide-element");
    middle_lowerContent.classList.add("hide-element");
}

function saveItems(){
// Save items on the list array
product_arr = [];

const product_input = document.querySelectorAll(".middle__product");
for(i=0; i<product_input.length; i++){
    product_arr.push(product_input[i].value);
}
calcTotal();
console.log(acc)
if(list1_pressed){
    lists[0].price.push(price_arr);
    lists[0].quantity.push(quantity_arr);
    lists[0].product.push(product_arr);
    lists[0].total = acc
    renderList(0);
    console.log(lists[0].price[0][0])
}
if(list2_pressed){
    lists[1].price.push(price_arr);
    lists[1].quantity.push(quantity_arr);
    lists[1].product.push(product_arr);
    lists[1].total = acc
    renderList(1);
}
if(list3_pressed){
    lists[2].price.push(price_arr);
    lists[2].quantity.push(quantity_arr);
    lists[2].product.push(product_arr);
    lists[1].total = acc
    renderList(2);
}

// save to local storage

localStorage.setItem('list',JSON.stringify(lists))
console.log(localStorage.setItem('list',JSON.stringify(lists)))

home_btn.classList.remove("hide-element");
// list1Btn.classList.remove("hide-element");
// list2Btn.classList.remove("hide-element");
// // list3Btn.classList.remove("hide-element");
// list1Btn.parentElement.style.display = "flex"; 
// list2Btn.parentElement.style.display = "flex"; 
// list3Btn.parentElement.style.display = "flex"; 


console.log(lists);

// console.log(lists[0].id);
// console.log(product_arr);
// console.log(price_arr);
// console.log(quantity_arr);
// put the info into corresponding object
// call the renderList function
// show the edit button


}

function deleteItems(e){
// remove the selected item on the list array
// remove the selected item on display
e.currentTarget.parentElement.parentElement.remove();
const rect = middle_content.getBoundingClientRect();

console.log(rect);
if(rect.height>=110){
    // console.log("bigger than 110")
    let height = -50*(counter-2)
    let rect_lower_content = middle_lowerContent.getBoundingClientRect();
    middle_lowerContent.style.bottom = `${height +30}px`
    
    let rec_middle = middle.getBoundingClientRect();
    console.log(rec_middle.height)
    console.log(rect_lower_content.bottom)
    middle.style.height = `${rec_middle.height - 50}px`
    // console.log(height_middle)
    counter--
}
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
                        <input class="middle__product style-input" type="text">
                    </div>
                    <div class="middle__column">
                        <div class="middle__btnContainer">
                            <input class="middle__quantity style-input" type="text" >
                        </div>
                       
                    </div>
                    <div class="middle__column">

                        <input class="middle__price style-input" type="text">
                    </div>
                    <div class="middle__column">
                        <i class="fas fa-trash"></i>
                    </div>`;
const middle_content_element = document.createElement("div");
middle_content_element.classList.add("middle__list1");
middle_content_element.innerHTML = middle_content_info; 
const rect = middle_content.getBoundingClientRect();


console.log(rect);
renderInput(middle_content_element);
if(rect.height>=110){
    console.log("bigger than 110")
    let height = -50*counter
    let rect_lower_content = middle_lowerContent.getBoundingClientRect();
    middle_lowerContent.style.bottom = `${height +30}px`
    
    let rec_middle = middle.getBoundingClientRect();
    console.log(rec_middle.height)
    console.log(rect_lower_content.bottom)
    middle.style.height = `${rec_middle.height + 50}px`
    // console.log(height_middle)
    console.log(counter)
    counter++
}


}

function getListPressed(){
    if(list1_pressed) return 0
    else if(list2_pressed) return 1
    else return 2

}

function editItems(){
let list = getListPressed()
// call renderinputs function
console.log("running edit")
renderBox = document.querySelectorAll(".renderBox")
let content_input_arr = []
console.log(inputBox.length)
for(let i =0; i<(renderBox.length/3); i++){
    content_input_arr.push(`
    <div class="middle__list1">
        <div class="middle__column">
            <input class="middle__product style-input" type="text" value = "${lists[list].product[0][i]}">
        </div>
        <div class="middle__column">
            <div class="middle__btnContainer">
                <input class="middle__quantity style-input" type="text" value ="${lists[list].quantity[0][i]}" >
            </div>
        </div>
        <div class="middle__column">
            <input class="middle__price style-input" type="text" value = "${lists[list].price[0][i]}">
        </div>
        <div class="middle__column">
                        <i class="fas fa-trash"></i>
        </div>
    </div>`) ;
}

middle_content.innerHTML = content_input_arr.join(""); 
lists[list].price =[];
lists[list].quantity =[];
lists[list].product = [];
console.log(content_input_arr)
// listen to delete btn 
const delete_btn = document.querySelectorAll(".fa-trash"); 
    // listens to delete btn                                                                                                                                                                                                                                                                          
    Array.from(delete_btn).forEach(b=>{
        b.addEventListener("click",deleteItems);
    });
// show clear all and save button and add button to be displayed
middle_plus.children[0].classList.remove("hide-element");
middle_lowerContent.children[4].classList.add("hide-element");
middle_lowerContent.children[3].classList.remove("hide-element");//save
middle_lowerContent.children[2].classList.remove("hide-element");//calc
middle_lowerContent.children[1].classList.remove("hide-element");//clear
middle_lowerContent.style.bottom = `${-(middle_content.getBoundingClientRect().height -200)}px`
}

function calcTotal(){
// get the value of quantity and price then set the total
const product_price = document.querySelectorAll(".middle__price");
const product_quantity = document.querySelectorAll(".middle__quantity");
acc =0;
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

// console.log(price_arr);
// console.log(quantity_arr);


}

function renderInput(middle_info){
    //displaying input line
    const renderBox = document.querySelectorAll(".renderBox")
    console.log(renderBox.length)
    Array.from(renderBox).forEach(b=>{
        b.parentElement.parentElement.remove()
    })
    middle_content.appendChild(middle_info);
    const delete_btn = document.querySelectorAll(".fa-trash"); 
    // listens to delete btn                                                                                                                                                                                                                                                                          
    Array.from(delete_btn).forEach(b=>{
        b.addEventListener("click",deleteItems);
    });
    middle_plus.children[0].classList.remove("hide-element");
    middle_lowerContent.children[4].classList.add("hide-element");
    middle_lowerContent.children[3].classList.remove("hide-element");//save
    middle_lowerContent.children[2].classList.remove("hide-element");//calc
    middle_lowerContent.children[1].classList.remove("hide-element");//clear
    console.log("running render input")
     

}

function renderList(list){
// hide the save btn, clear, input, plus btn, delete btn, input boxes
// show the information in text format
console.log(list)
console.log(lists)
inputBox = document.querySelectorAll("input")
console.log(inputBox)

let content_render_arr = []
for(let i =0; i<(lists[list].product[0].length); i++){
    content_render_arr.push(`
    <div class="middle__list1">
        <div class="middle__column">
            <div class ="renderBox"><span">${lists[list].product[0][i]}</span></div>
            
        </div>
        <div class="middle__column">
            <div class="middle__btnContainer">
            <div class ="renderBox"><span">${lists[list].quantity[0][i]}</span></div>
            </div>
        </div>
        <div class="middle__column">
            <div class ="renderBox"><span">${lists[list].price[0][i]}</span></div>
        </div>
    </div>`) ;
}
middle_lowerContent.style.bottom = `${middle_content.getBoundingClientRect().y-30}px`
// middle_lowerContent.style.bottom = `${middle_y}px`
console.log(middle_lowerContent.style.bottom)
middle_content.innerHTML = content_render_arr.join(""); 
middle_lowerContent.children[0].children[1].innerText = lists[list].total
middle_plus.children[0].classList.add("hide-element");
middle_lowerContent.children[4].classList.remove("hide-element");
middle_lowerContent.children[3].classList.add("hide-element");
middle_lowerContent.children[2].classList.add("hide-element");
middle_lowerContent.children[1].classList.add("hide-element");

}

function setUpItems(){

}



