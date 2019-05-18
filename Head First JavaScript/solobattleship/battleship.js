const randomLoc = Math.floor(Math.random() * 5);
//random可以生成随机数，而floor则将向下取整最接近的整数
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;
//战舰坐标位置
let guess;
//用户猜测前，变量guess没有值，因此是未定义的
let hits = 0;
let guesses = 0;
//将变量hits和guesses的初始值均设为0
let isSunk = false;
//设置变量isSunk的初始值设为false，当击沉战舰后，将把变量设为true
while (isSunk == false) {
    guess = prompt("Ready,aim,fire!(enter a number 0-6):");
    //prompt是浏览器提供的内置函数，用于获取用户输入，prompt与alert很像，均是使用对话框形式进行
    if (guess < 0 || guess > 6) {
        //当输入的猜测数值小于0 ||(或) 大于6
        alert("Please enter a valid cell number!");
        //则警告输入正确值
    }  else {
        guesses++;
        //否则猜测次数+1
        if (guess == location1 || guess == location2 || guess == location3) {
            //如果猜测值 == (表示等于) 坐标1或2或3
            alert("HIT!");
            hits++;
            //则击中次数+1
            if (hits == 3) {
                //如果击中次数达到3次
                isSunk = true;
                //则将isSunk置为true
                alert("You sank my battleship!");
                //结束循环，并显示"You sank my battleship"
            }
        } else {
            alert("MISS!");
        }
    }
}
const stats = "You took" + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats)