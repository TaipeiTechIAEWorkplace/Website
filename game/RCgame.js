var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);

function isInsideButton(pos,rect){
    return pos.x >rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}

function drawButton(name, color, text, textY){
    ctx.fillStyle = color;
    ctx.fillRect(name.x, name.y, name.width, name.height);
    ctx.fillStyle = "black";
    ctx.fillText(text, 860, textY);
}

function getMousePos(canvas, event){
    var rect = canvas.getBoundingClientRect();
    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function question(x, y, width, height){
	this.x = 0;
	this.y = 477;
	this.width = 700;
	this.height = 100;

	this.draw = function(){
		ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.font = '24px serif';
        ctx.fillStyle = "black";
        ctx.fillText('當你發現早八物理課要遲到了...', 10, 535);
	}
	this.draw();
}


canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
        if (isInsideButton(mousePos, button1)){
            console.log("hi");
        }
});

canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
        if (isInsideButton(mousePos, button2)){
            console.log("hi");
        }
});

canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
        if (isInsideButton(mousePos, button3)){
            console.log("hi");
        }
});

canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
        if (isInsideButton(mousePos, button4)){
            console.log("hi");
        }
});


var button1 = {
    x: 850,
    y: 10,
    width: 400,
    height: 131,
    color: '#EFE7DC',
    text: "繼續睡",
    textY: 75.5
};

var button2 = {
    x: 850,
    y: 151,
    width: 400,
    height: 131,
    color: '#EFE7DC',
    text: "趕去上課",
    textY: 206.5
};

var button3 = {
    x: 850,
    y: 292,
    width: 400,
    height: 131,
    color: '#EFE7DC'
};

var button4 = {
    x: 850,
    y: 433,
    width: 400,
    height: 131,
    color: '#EFE7DC'
};

question();
drawButton(button1, button1.color, button1.text, button1.textY);
drawButton(button2, button2.color, button2.text, button2.textY);
drawButton(button3, button3.color);
drawButton(button4, button4.color);
