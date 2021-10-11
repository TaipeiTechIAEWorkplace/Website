var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

function isInsideButton(pos,rect){
    return pos.x >rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}

function drawButton(name, color, text, textY){
    ctx.fillStyle = color;
    ctx.fillRect(name.x, name.y, name.width, name.height);
    ctx.font="bold 30px sans-serif";
    ctx.fillStyle="black";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    ctx.fillText(text, canvas.width*0.85, textY);
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
   
    this.draw=function(){
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      ctx.font="bold 28px sans-serif";
      ctx.fillStyle="black";
      ctx.textBaseline="middle";
      ctx.textAlign="center";
      ctx.fillText(text, canvas.width*0.35, canvas.height*0.9);
    }
    this.draw();
}

function result(text, choice){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    question(text);
    if (choice == 'true'){
      drawButton(next, next.color, next.text, next.textY);
    }   
    else{
      drawButton(again, again.color, again.text, again.textY);
    }
}

canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
        if (isInsideButton(mousePos, button1)){
            console.log("hi");
            result(button1.result, button1.choice)
        }
});

canvas.addEventListener('click', function(evt){
  var mousePos = getMousePos(canvas, evt);
      if (isInsideButton(mousePos, button2)){
          console.log("hi");
          result(button2.result, button2.choice)
      }
});

canvas.addEventListener('click', function(evt){
  var mousePos = getMousePos(canvas, evt);
      if (isInsideButton(mousePos, button3)){
          console.log("hi");
          result(button3.result, button3.choice)
      }
});

canvas.addEventListener('click', function(evt){
  var mousePos = getMousePos(canvas, evt);
      if (isInsideButton(mousePos, again)){
          console.log("hi");
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          question("今天要什麼時候到教室，你決定?");
          drawButton(button1, button1.color, button1.text, button1.textY);
          drawButton(button2, button2.color, button2.text, button2.textY);
          drawButton(button3, button3.color, button3.text, button3.textY);
      }
});

var button1 = {
    x: canvas.width*0.7,
    y: canvas.height*0.05,
    width: canvas.width*0.3,
    height: canvas.height*0.25,
    choice:'false',
    color: '#EFE7DC',
    result: "教室還沒開門，走廊的燈也壞掉了，被隱身的tobe嚇了一跳",
    text: "提前二十分鐘到",
    textY: canvas.height*0.175,
};

var button2={
    x: canvas.width*0.7,
    y: canvas.height*0.35,
    width: canvas.width*0.3,
    height: canvas.height*0.25,
    choice:'true',
    color: '#EFE7DC',
    result: "在摩斯漢堡等時間差不多再走，享受早上的寧靜時光",
    text: "準時壓線",
    textY: canvas.height*0.475,
}

var button3={
  x: canvas.width*0.7,
  y: canvas.height*0.65,
  width: canvas.width*0.3,
  height: canvas.height*0.25,
  choice:'true',
  color: '#EFE7DC',
  result: "你坐在最後一排，老師今天沒點名，你逃過一劫",
  text: "第二節才來",
  textY: canvas.height*0.775,
}

var next={
    x: canvas.width*0.7,
    y: canvas.height*0.375,
    width: canvas.width*0.3,
    height: canvas.height*0.25,
    color: '#EFE7DC',
    text: "下一關",
    textY: canvas.height*0.5,
}

var again={
  x: canvas.width*0.7,
  y: canvas.height*0.375,
  width: canvas.width*0.3,
  height: canvas.height*0.25,
  color: '#EFE7DC',
  text: "再來一次",
  textY: canvas.height*0.5,
}

question("今天要什麼時候到教室，你決定?");
drawButton(button1, button1.color, button1.text, button1.textY);
drawButton(button2, button2.color, button2.text, button2.textY);
drawButton(button3, button3.color, button3.text, button3.textY);