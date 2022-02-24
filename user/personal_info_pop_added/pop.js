const openPopButtons = document.querySelectorAll('[data-pop-target]')  //querySelectorAll：選多個
const closePopButtons = document.querySelectorAll('[data-close-button]')  
const submitPopButtons = document.querySelectorAll("[data-submit-button]")
const overlay = document.getElementById("overlay")
const overlay2 = document.getElementById("overlay2")
// var profile_photo = document.getElementById("profile_photo").src
const elem3 = document.getElementById("pop_image")

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

overlay2.addEventListener('click', () =>{
    console.log("111")
    const Pops2 = document.querySelectorAll(".pop_image")
    Pops2.forEach(pop => {
        closePop2(pop)
    })
})

function closePop2(pop){
    // console.log("jdj")
    if(pop == null){
        return
        console.log("222")
    }
    console.log("333")
    elem3.classList.remove("active")
    overlay2.classList.remove("active")
}


closePopButtons.forEach(button => {
    button.addEventListener('click', () => {
        const pop = button.closest(".pop")
        closePop(pop)
        
    })
})

submitPopButtons.forEach(button => {
    button.addEventListener('click', () => {
        closePop(pop)
        $('#person_photo_div').children().remove()
        var elem4 = document.createElement("img")
        var user_photo = document.getElementById("user_photo").src
        elem4.setAttribute("src", user_photo)
        document.getElementById("person_photo_div").appendChild(elem4).setAttribute('id','person_photo')
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
document.getElementById("photo").appendChild(elem).setAttribute('id','user_photo')


function display_image(event){
    console.log(event.target.files[0])
    var image = URL.createObjectURL(event.target.files[0])
    var imageDiv = document.getElementById("photo_div")
    var newimg = document.createElement('img')
    newimg.src = image;
    newimg.style.height = '300px';
    newimg.style.width = '300px';
    var newdiv = document.createElement('div')
    $('.photo_div').children().remove()
    imageDiv.appendChild(newdiv).appendChild(newimg).setAttribute('id','user_photo')
}



var profile_photo = document.getElementById("photo_div")

profile_photo.addEventListener("click", () => {
    overlay2.classList.add("active")
    var elem3 = document.getElementById("pop_image")
    elem3.classList.add("active")
    var profile_photo_inner = document.getElementById("user_photo")
    // $('.pop_image').children().remove()
    var elem2 = document.createElement("img")
    var profile_photo_src = profile_photo_inner.src
    console.log(profile_photo_src)
    elem2.setAttribute("src", profile_photo_src)
    if ($('#enlarge_photo').length > 0) {
        $('#enlarge_photo').remove()
        console.log("68786876")
      }
    
    document.getElementById("pop_image").appendChild(elem2).setAttribute('id','enlarge_photo') 
})

