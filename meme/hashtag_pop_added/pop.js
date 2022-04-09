const openPopButtons = document.querySelectorAll('[data-pop-target]')  //querySelectorAll：選多個
const closePopButtons = document.querySelectorAll('[data-close-button]')  
const moreInputButtons = document.querySelectorAll('[data-moreinput-button]')
const lessInputButtons = document.querySelectorAll('[data-lessinput-button]')   
const submitPopButtons = document.querySelectorAll("[data-submit-button]")
const overlay = document.getElementById("overlay")
//const submitButton = document.getElementById("submit_button")

openPopButtons.forEach(button => {
    button.addEventListener('click', () => {
        const pop = document.querySelector(button.dataset.popTarget)
        openPop(pop)
        
    })
})

overlay.addEventListener('click', () =>{
    const Pops = document.querySelectorAll(".pop.active")
    Pops.forEach(pop => {
        closePop(pop)
        
    })
})

closePopButtons.forEach(button => {
    button.addEventListener('click', () => {
        const pop = button.closest(".pop")
        closePop(pop)
        
    })
})

submitPopButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.clear()
        closePop(pop)
        const elements2 = document.querySelectorAll('.hashtag_value');
        Array.from(elements2).forEach((element, index) => {
        console.log(element.value)
        });
    })
})

moreInputButtons.forEach(button => {
    button.addEventListener('click', () => {
        var newDiv = $('<div class="new_hashtag"><label for="new_hashtag">#</label><input class="new_hashtag hashtag_value" id="new_hashtag" type="text" class="input_hashtag"></div>');
      //newDiv.style.background = "#000";
       $('#hashtag_form').append(newDiv);
    })
})

lessInputButtons.forEach(button => {
    button.addEventListener('click', () => {
        $('.new_hashtag').children().last().remove();
        $('.new_hashtag').children().last().remove();
    })
})


function openPop(pop){
    // console.log("jdj")
    if(pop == null) return
    pop.classList.add("active")
    overlay.classList.add("active")
    // submitButton.classList.add("active")
}

function closePop(pop){
    // console.log("jdj")
    if(pop == null) return
    pop.classList.remove("active")
    overlay.classList.remove("active")
}


//按button不會重整頁面
document.querySelector('#openpop').addEventListener('click', function(event) {
    event.preventDefault();
  });