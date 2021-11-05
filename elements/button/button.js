var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

function isInsideButton(pos,rect){
    return pos.x >rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}

function drawButton(name, color){
    ctx.fillStyle = color;
    ctx.strokeStyle = "black";
    ctx.fillRect(name.x, name.y, name.width, name.height);
    ctx.lineWidth = 4;
    ctx.strokeRect(name.x, name.y, name.width, name.height);
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
        if (isInsideButton(mousePos, button)){
            console.log("hi");
        }
});

var button = {
    x: 150,
    y: 180,
    width: 50,
    height: 50,
    color: "blue"
};

drawButton(button, button.color);
