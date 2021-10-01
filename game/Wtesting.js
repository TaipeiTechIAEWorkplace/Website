function init() {
  window.requestAnimationFrame(draw);
}

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.strokeRect(50, 50, 400, 200);
    ctx.font = '24px serif';
    ctx.fillText('1 + 1 = ?', 60, 80);
  }
  window.requestAnimationFrame(draw);
}
function emit(t) {
  if(t == 2){
    window.requestAnimationFrame(Newdraw);
  }
}

function Newdraw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.strokeRect(50, 50, 400, 200);
    ctx.font = '48px serif';
    ctx.fillText('Correct', 65, 90);
  }
  window.requestAnimationFrame(Newdraw);
}
init();