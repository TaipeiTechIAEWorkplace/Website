//網頁大小1920*1080 按鈕顏色#ffe7d5
//init()：初始化物件與變數； draw()：更新畫面

//固定程式
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var ww = window.innerWidth;
var wh = window.innerHeight;
canvas.width = ww;
canvas.height = wh;

ctx.clearRect(0, 0, ww, wh);

//宣告變數
var gameStart = false
var Q = 0;

var topic = "化學課"


//放對話框
var questions = ["發現老師上課都在講幹話怎麼辦？", 
                 "期中考是否要背名詞解釋還是化學原理？", 
                 "期末考是否要背老師勾的習題？"];

var results = [["🗶你被老師點名了，因為你說夢話", 
                "✔恭喜你成功的在吸收考試內容", 
                "🗶他講的內容大部份跟考試無關，班代吃了100顆花生米但是還是沒聽懂", 
                "✔你成功的享受了化學課上課時光"], 
               ["✔沒錯他都考名詞解釋，你考了100分", 
                "🗶很抱歉他完全沒考原理", 
                "✔老師覺得你掰得不錯，你考了70分"], 
               ["🗶瘋掉，結果老師完全沒有考習題內容，老師發考卷時臨時改變範圍", 
                "✔背名詞解釋爽爽過"]]

var end = ["成功", "下一關", "再來一次"];

//放選項
var options = [["睡覺", "看書", "聽他說話", "滑手機"], 
               ["名詞解釋", "化學原理", "當場再掰"], 
               ["是", "否"]];


var button = {
    x: 1320,
    y: 16,
    width: 584, 
    height: 250, 
}

//開始遊戲
function start(){
    ctx.fillStyle = "rgba(122, 147, 211, 1)";
    ctx.fillRect(0, 0, ww, wh);
    ctx.font = '48px serif';
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillText(topic, (ww-48*topic.length)/2, 150);
    function start_animation(){
        var start_o = 1;
        var start_t = setInterval(function(){
            start_o -= 0.01;
            ctx.clearRect(0, 0, ww, wh);
            ctx.fillStyle = "rgba(122, 147, 211, " + start_o + ")";
            ctx.fillRect(0, 0, ww, wh);
            ctx.fillStyle = "rgba(255, 255, 255, " + start_o + ")";
            ctx.fillText(topic, (ww-48*topic.length)/2, 150);
            if(start_o <= 0){clearInterval(start_t)}
        }, 10);
        canvas.removeEventListener('click', start_animation);
    };
    canvas.addEventListener('click', start_animation);
    return gameStart = true
}

//start();


function init(){
    requestAnimationFrame(draw);
}

function draw(){

    requestAnimationFrame(draw);
}


//滑鼠是否位於按鈕（方塊）內部
function getMousePos(canvas, event){
    var rect = canvas.getBoundingClientRect();
    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top};
}
function isInsideButton(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

//繪出按鈕
function drawButton(btn, btnNum){
    ctx.save();
    ctx.translate(btn.x, btn.y);
    for(var i=0; i<btnNum; i++){
        ctx.translate(0, (btn.y+btn.height)*i);
        ctx.fillStyle = "#ffe7d5";
        ctx.fillRect(0, 0, btn.width, btn.height);
    }
    ctx.restore();
}

function drawQuestion(questionText){
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(20, 840, 1360, 1240);
    ctx.font = "36px serif";
    ctx.fillStyle = "#000000";
    ctx.fillText = (questionText, 100, 740);
}

/*start();
if(gameStart == true){
    
}*/

drawButton(button, 3);
drawQuestion(questions[Q]);