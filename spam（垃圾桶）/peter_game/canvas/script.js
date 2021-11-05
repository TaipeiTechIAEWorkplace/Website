var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

function isInsideButton(pos,rect){
    return pos.x >rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}


function put_ques(content){
    this.x=canvas.width*0.1;
    this.y=canvas.height*0.04;
    this.width=canvas.width*0.5;
    this.height=canvas.height*0.2;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.font="50px Arial";
    ctx.textBaseline = 'middle';
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.fillText(content, canvas.width*0.35, canvas.height*0.1);
}
put_ques("最喜歡的課");

function drawButton(name, color, text, text_xpos, text_ypos){
    ctx.fillStyle = color;
    ctx.fillRect(name.x, name.y, name.width, name.height);
    ctx.font="40px Arial";
    ctx.fillStyle="blue";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    ctx.fillText(text, text_xpos, text_ypos);
}

function drawBtnSet() {
    drawButton(btn1, btn1.color, btn1.text, btn1.text_xpos, btn1.text_ypos);
    drawButton(btn2, btn2.color, btn2.text, btn2.text_xpos, btn2.text_ypos);
    drawButton(btn3, btn3.color, btn3.text, btn3.text_xpos, btn3.text_ypos);
}

function getMousePos(canvas, event){
    var rect = canvas.getBoundingClientRect();
    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
    if ((isInsideButton(mousePos, btn1))){
        if((btn1.correct)){
            console.log("click_btn");
        }else{
            ctx.clearRect(0,0,5000,5000);
            drawButton(try_again, try_again.color, try_again.text, try_again.text_xpos, try_again.text_ypos);
        }
    }
});

canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
    if ((isInsideButton(mousePos, btn2))){
        if((btn2.correct)){
            console.log("click_btn2");
        }else{
            ctx.clearRect(0,0,5000,5000);
            drawButton(try_again, try_again.color, try_again.text, try_again.text_xpos, try_again.text_ypos);
        }
    }
});

canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
    if ((isInsideButton(mousePos, btn3))){
        if((btn3.correct)){
            console.log("click_btn3");
            ctx.clearRect(0,0,5000,5000);
            drawButton(next_ques, next_ques.color, next_ques.text, next_ques.text_xpos, next_ques.text_ypos);
        }else{
            ctx.clearRect(0,0,5000,5000);
            drawButton(try_again, try_again.color, try_again.text, try_again.text_xpos, try_again.text_ypos);
        }
    }
});


canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
    if (isInsideButton(mousePos, try_again)){
        console.log("click_try_again");
        ctx.clearRect(0,0,5000,5000);
        drawBtnSet();
        put_ques("最喜歡的課");
    }
});

var try_again = {
    x: canvas.width*0.4,
    y: canvas.height*0.4,
    text_xpos:canvas.width*0.5,
    text_ypos: canvas.height*0.5,
    width: 275,
    height: 140,
    color: "#808080",
    text:"Try Again!!"
}

var btn1 = {
    x: canvas.width*0.75,
    y: canvas.height*0.05,
    text_xpos:canvas.width*0.85,
    text_ypos: canvas.height*0.18,
    width: 270,
    height: 180,
    color: "#808080",
    text:"深度學習",
    correct:false
};

var btn2 = {
    x: canvas.width*0.75,
    y: btn1.y + canvas.height*0.35,
    text_xpos:canvas.width*0.85,
    text_ypos: canvas.height*0.54,
    width: 270,
    height: 180,
    color: "#808080",
    text:"邏輯設計",
    correct:false
};

var btn3 = {
    x: canvas.width*0.75,
    y: btn2.y + canvas.height*0.35,
    text_xpos:canvas.width*0.85,
    text_ypos: canvas.height*0.88,
    width: 270,
    height: 180,
    color: "#808080",
    text:"電子學",
    correct:true
};

var next_ques = {
    x: canvas.width*0.4,
    y: canvas.height*0.4,
    text_xpos:canvas.width*0.5,
    text_ypos: canvas.height*0.5,
    width: 275,
    height: 140,
    color: "#808080",
    text:"下一題"
}


drawBtnSet();

