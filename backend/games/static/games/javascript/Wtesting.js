var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var inGame = true;
var gameProcess = 0;
var showResult = false;
var gameCurrentChoice = 0;
var gameWrongChoice = false;
var gameCorrectChoice = [[0,1,0,0.8],[1,0,1],[0,1]];
var gameContent = [[['發現老師上課都在講幹話該怎麼辦?'],
                      ["睡覺","🗶你被老師點名了，因為你說夢話。"],
                      ["看書","✔恭喜你成功的在吸收考試內容"],
                      ["聽他說話","🗶他講的內容大部份跟考試無關，班代吃了100顆花生米但是還是沒聽懂"],
                      ["滑手機","✔你成功的享受了化學課上課時光","你太明顯被老師抓到了"]],
                   [["期中考是否要背名詞解釋還是化學原理"],
                      ["名詞解釋","✔沒錯他都考名詞解釋，你考了100分"],
                      ["化學原理","🗶很抱歉他完全沒考原理"],
                      ["當場再掰","✔老師覺得你掰得不錯，你考了70分"]],
                   [["期末考是否要背老師勾的習題"],
                      ["是","🗶瘋掉，結果老師完全沒有考習題內容，老師發考卷時臨時改變範圍"],
                      ["否","✔背名詞解釋爽爽過"]]];
var buttonAmount = gameCorrectChoice[0].length;
var button = {
  x: 1400,
  y: 10,
  width: 500,
  height: 250,
  color: "#FFBD9D"
};

function init() {
  window.requestAnimationFrame(draw);
}

function draw() {
  drawText();
  drawButton(button, button.color);
  window.requestAnimationFrame(draw);
}

function drawText(){
  ctx.save();
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  ctx.strokeRect(50, 850, 1300, 200);
  ctx.font = '36px serif';
  if(inGame == true){
    if(gameProcess >= gameCorrectChoice.length){
      buttonAmount = 0;
      ctx.fillText("恭喜你成功的度過了一門課", 60, 900);
    }else{
      if(showResult != true){
        ctx.fillText(gameContent[gameProcess][0], 60, 900);
      }else{
        ctx.fillText(gameContent[gameProcess][gameCurrentChoice][1], 60, 900);
      }
    }
  }else{
    if(gameWrongChoice == true){
      ctx.fillText(gameContent[gameProcess][gameCurrentChoice][1], 60, 900);
    }else{
      ctx.fillText(gameContent[gameProcess][gameCurrentChoice][2], 60, 900);
    }
  }
    
  
  ctx.restore();
}

function drawButton(b, color){
  for(var i = 0; i < buttonAmount; i++){
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = "black";
    ctx.fillRect(b.x, b.y+260*i, b.width, b.height);
    ctx.lineWidth = 4;
    ctx.strokeRect(b.x, b.y+260*i, b.width, b.height);
    ctx.restore();
    ctx.save();
    ctx.font = '48px serif';
    if(showResult != true){
      ctx.fillText(gameContent[gameProcess][i+1][0], b.x+200, b.y+260*i+135);
    }else if(inGame == true){
      if(gameProcess == gameCorrectChoice.length-1){
        ctx.fillText("成功", b.x+200, b.y+260*i+135);
      }else{
        ctx.fillText("下一關", b.x+200, b.y+260*i+135);
      }
    }else{
      ctx.fillText("再來一次", b.x+200, b.y+260*i+135);
    }
    ctx.restore();
  }
}

function isInsideButton(pos,rect){
  return pos.x >rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
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
  for(var i = 0 ; i < buttonAmount; i++){
    var buttonPlace = {
      x: 1400,
      y: 10+260*i,
      width: button.width,
      height: button.height
    };
    if (isInsideButton(mousePos, buttonPlace)){
      if(i == 0 && showResult == true){
        if(inGame == true){
          gameProcess += 1;
        }else{
          gameProcess = 0;
          inGame = true;
        }
        buttonAmount = gameCorrectChoice[gameProcess].length;
        showResult = false;
      }else{
        gameCurrentChoice = i+1;
        var result = gameCorrectChoice[gameProcess][i];
        if(result == 0){
          inGame = false;
          gameWrongChoice = true;
        }else if(Math.random() > result){
          inGame = false;
        }
        buttonAmount = 1;
        showResult = true;
        break;
      }
    }
  }
});

init();