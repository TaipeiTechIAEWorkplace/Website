var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

function isInsideButton(pos,rect){
    return pos.x >rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}

function drawButton(name, color, text){
    ctx.fillStyle = color;
    ctx.fillRect(name.x, name.y, name.width, name.height);
    ctx.fillStyle="black";
    ctx.fillText(text, 0, 0);
}

function getMousePos(canvas, event){
    var rect = canvas.getBoundingClientRect();
    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function question(text){
    this.x=canvas.width*0.1;
    this.y=canvas.height*0.8;
    this.width=canvas.width*0.5;
    this.height=canvas.height*0.2;
    this.text=text;
   
    this.draw=function(){
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      ctx.font="20px";
      ctx.fillStyle="black";
      ctx.fillText(this.text, 0, 0);
    }
    this.draw();
}

function result(text){
    this.x=canvas.width*0.1;
    this.y=canvas.height*0.8;
    width=canvas.width*0.5;
    height=canvas.height*0.2;
    ctx.strokeRect(x, y, width, height);
    ctx.font="20px";
    ctx.fillStyle="black";
    ctx.fillText(text, 0, 0);
}

canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
        if (isInsideButton(mousePos, button1)){
            console.log("hi");
            if (button1.choice == "false"){
              result("教室還沒開門，走廊的燈也壞掉了，被隱身的tobe嚇了一跳")
          }
        }
});


var button1 = {
    x: canvas.width*0.7,
    y: 180,
    width: canvas.width*0.3,
    height: 50,
    color: '#EFE7DC',
    choice: "false",
    text: "提前二十分鐘到",
};

question("今天要什麼時候到教室，你決定");
drawButton(button1, button1.color, button1.text);
