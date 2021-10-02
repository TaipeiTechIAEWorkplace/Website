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
      ctx.fillText('老師正在講必考的習題，你選擇?', 60, 80);
    }
    window.requestAnimationFrame(draw);
  }
  function emit(t) {
    if(t == 1){
        window.requestAnimationFrame(Newdraw1);
    }
    else if(t == 2){
      window.requestAnimationFrame(Newdraw2);
    }
    else if(t == 3){
        window.requestAnimationFrame(Newdraw3);
    }
  }
  
  function Newdraw1() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle='red';
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.strokeRect(50, 50, 400, 200);
      ctx.font = '20px serif';
      ctx.fillText('拍的七零八落', 65, 90);
      ctx.fillText('看著照片也一頭霧水', 65, 115);
      ctx.fillText('因為拍照還輸掉了排位', 65, 140);
    }
    window.requestAnimationFrame(Newdraw1);
  }

  function Newdraw2() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle='black';
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.strokeRect(50, 50, 400, 200);
      ctx.font = '20px serif';
      ctx.fillText('有人整理好的就是香', 65, 90);
    }
    window.requestAnimationFrame(Newdraw2);
  }

  function Newdraw3() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.strokeRect(50, 50, 400, 200);
      ctx.font = '20px serif';
      ctx.fillStyle='red';
      ctx.fillText('影片太多，好不容易找到的時候i學園爆掉了', 65, 90);
    }
    window.requestAnimationFrame(Newdraw3);
  }
  init();