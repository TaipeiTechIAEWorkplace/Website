const openPopButtons = document.querySelectorAll('[data-pop-target]')  //querySelectorAll：選多個
const closePopButtons = document.querySelectorAll('[data-close-button]')  
const submitPopButtons = document.querySelectorAll("[data-submit-button]")
const overlay = document.getElementById("overlay")


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
        
        closePop(pop)
        });
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





var p = document.getElementById('id')
var account_name = p.textContent
// document.write(text)
$("#account_name").text(account_name)

var p2 = document.getElementById('gmail')
var email = p2.textContent
// document.write(text);
$("#email").text(email)

// var user_photo = document.getElementById("profile_pic").src
// // document.getElementById('photo_box').appendChild(user_photo);
// user_photo.innerHTML = user_photo
// document.getElementById('photo_box').appendChild(user_photo)

// var user_phot0 = document.getElementById("profile_pic")/

// // document.write(text)
// $("#photo_box").text(user_photo)

var elem = document.createElement("img")
var user_photo = document.getElementById("profile_pic").src
elem.setAttribute("src", user_photo)
document.getElementById("photo").appendChild(elem)

function display_image(event){
    console.log(event.target.files[0])
    var image = URL.createObjectURL(event.target.files[0])
    var imageDiv = document.getElementById("photo_div")
    var newimg = document.createElement('img')
    newimg.src = image;
    newimg.style.height = '300px';
    newimg.style.width = '300px';
    $('.photo_div').children().remove();
    imageDiv.appendChild(newimg)
}