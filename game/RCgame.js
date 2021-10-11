var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);

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

function drawButton(text){
    ctx.fillStyle = '#EFE7DC';
    ctx.fillRect(850, 10+141*i, 400, 131);
    ctx.fillStyle = "black";
    ctx.fillText(text, 860, 75.5+131*i);
}

function question(text){
    ctx.strokeRect(0, 477, 700, 100);
    ctx.font = '24px serif';
    ctx.fillStyle = "black";
    ctx.fillText(text, 10, 535);
}

var questions = ["發現老師上課都在講幹話該怎麼辦",
                 "期中考是否要背名詞解釋還是化學原理",
                 "期末考是否要背老師勾的習題"];
var choices = [["睡覺", "看書", "聽他說話", "滑手機"],
               ["名詞解釋", "化學原理", "我不知道啦當場再掰"],
               ["是", "否"]];
var results = [["你被老師點名了，因為你說夢話", "恭喜你成功的在吸收考試內容", "老師講的內容大部份跟考試無關，班代吃了100顆花生米但還是沒聽懂", "你成功的享受了化學課上課時光 (20%機率太明顯被抓到"],
               ["成功命中出題範圍，考了100分", "老師考了名詞解釋，但把背的原理拼湊上去後只有50分", "老師覺得你掰得不錯，拿到70分"],
               ["瘋掉，結果老師完全沒有考習題內容，老師發考卷時臨時改變範圍", "背名詞解釋爽爽過"]];
var trans = ["Next", "Try Again", "Exit to Menu"];

var k = 0;

question(questions[k]);

for(var i = 0; i < choices[k].length; i++){
    drawButton(choices[k][i]);
}

var i = 0;

canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas, evt);
    for(var ans = 0 ; ans < choices[k].length; ans++){
        var buttonPlace = {
            x: 850,
            y: 10+141*ans,
            width: 400,
            height: 131
        };
        if (isInsideButton(mousePos, buttonPlace)){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            if(ans == 0){
                question(results[k][ans]);
                for(i = 0; i < trans.length - 1; i++){
                    drawButton(trans[i+1]);
                }
            }
            else if(ans == 1){
                question(results[k][ans]);
                drawButton(trans[i]);
            }
            else if(ans == 2){
                question(results[k][ans]);
                for(i = 0; i < trans.length - 1; i++){
                    drawButton(trans[i+1]);
                }
            }
            else if(ans == 3){
                question(results[k][ans]);
                drawButton(trans[i]);
            }
        }
    }
});