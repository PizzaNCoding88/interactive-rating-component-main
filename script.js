//GRABBERS

const submitBtn = document.querySelector(".submit-btn");
const ratingBtn = document.querySelectorAll(".rating");
const extContainer = document.querySelector(".external-container");
const thanksDiv = document.querySelector(".thank-you-div");
const selectedValue = document.querySelector(".selection-text")

let selection = "";

ratingBtn.forEach((btn,index) => {
    btn.addEventListener("click", function(){
        selection = index+1;
    })
})

submitBtn.addEventListener("click" , function(){
    // console.log(selection);
    extContainer.classList.add("hide");
    thanksDiv.classList.remove("hide");
    selectedValue.innerHTML = selection;
});

