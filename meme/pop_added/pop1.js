const openPopButtons = document.querySelectorAll("[data-pop-target]")
const closePopButtons = document.querySelectorAll("[data-close-button]")
const submitPopButtons = document.querySelectorAll("[data-submit-button]")
const overlay = document.getElementById("overlay")
const text = document.getElementById("textarea")
const checkbox = document.getElementById("checkbox").children
const max = 100

//flag=0時，代表只是驗證是否有勾選而已
//flag=1時，代表已驗證完，做資料輸出(在console印出使用者勾選的選項)
function validate(flag) {
    let a = 0
    for(var i = 1; i <= checkbox.length; i++) {
            var name = "".concat("cb",i)
            if (document.getElementById(name).checked) {
                if (flag==1){
                    console.log(name)
                }
                a+=1
            } 
        }
    if (a==0){          //判斷使用者使否至少勾選一個檢舉理由
        return false
    }
    else{
        return true
    }
}



openPopButtons.forEach(button => {
    // console.log("jdj")
    button.addEventListener("click", () => {
    const pop = document.querySelector(button.dataset.popTarget)   
    //button.dataset回傳所有button有的data attribute
    openPop(pop)
    })
})

closePopButtons.forEach(button => {
    // console.log("jdj")
    button.addEventListener("click", () => {
    const pop = button.closest(".pop")
    closePop(pop)
    })
})


function submit(pop){
    save(pop)
    validate(1)
    closePop(pop)
    $("#count").text(max)
    text.value = null
    for(var j = 1; j <= checkbox.length; j++) {
        var name = "".concat("cb",j)
        if (document.getElementById(name).checked){
            document.getElementById(name).checked = false;
        }
        
    }
}

submitPopButtons.forEach(button => {
    // console.log("jdj")
    button.addEventListener("click", () => {
    const pop = button.closest(".pop")     //從指定的這個button，向父元素找是否有叫pop的id
    if (text.value == ""){
        alert("請填寫說明欄喔！")
    }
    if (!(validate(0))){
        alert("請至少勾選一項檢舉原因")
    }
    if ((!(text.value == ""))&&(validate(0))){     
        if (swearDetect()){
            swal("禁止","請理性發言","error")
        }
        else{
            submit(pop)
        }
    }
    })
})


function openPop(pop){
    // console.log("jdj")
    if(pop == null) return
    pop.classList.add("active")
    overlay.classList.add("active")
}

function closePop(pop){
    // console.log("jdj")
    if(pop == null) return
    pop.classList.remove("active")
    overlay.classList.remove("active")
}

function save(pop){
    var content = text.value;
    console.log(content);
}

function countChar(textarea){
    length = textarea.value.length;
    if (length > max){
        textarea.value = textarea.value.substring(0,100);    
        //若使用者輸入超過100字，會自動擷取100字
    }
    else{
        $("#count").text(max - length);    //count這個id
    }
}

function swearDetect(){
    const textarea = document.getElementById("textarea")
    let swearwords = /幹|靠|媽的/gi     //g:全部   i:不分大小寫
    let text1 = textarea.value
    let text2 = text1.replace(swearwords,"##")      //將髒話部分換成##
    textarea.value = text2
    if (text2 == text1){
        return false
    }
    else{
        return true
    }
}