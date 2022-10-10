//GRABBERS

const submitBtn = document.querySelector(".submit-btn");
const ratingBtn = document.querySelectorAll(".rating");
const extContainer = document.querySelector(".external-container");
const thanksDiv = document.querySelector(".thank-you-div");
const selectedValue = document.querySelector(".selection-text")

let selection = "";

//ALTERNATIVE METHOD WITH FOREACH

// ratingBtn.forEach((btn,index) => {
//     btn.addEventListener("click", function(){
//         selection = index+1;
//     })
// })

for(let i=0; i<ratingBtn.length; i++){
    ratingBtn[i].addEventListener("click", function(){
        selection = i+1;
    });
};

submitBtn.addEventListener("click" , function(){
    if(selection == ""){
        alert("You must select a rating")
    }
    else{
    extContainer.classList.add("hide");
    thanksDiv.classList.remove("hide");
    selectedValue.innerHTML = selection;
    }
});

