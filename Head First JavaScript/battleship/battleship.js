let view = {
    displayMessage:function (msg) { //方法displayMessage接受一个参数——msg
        let messageArea = document.getElementById("messageArea"); //获取网页的元素messageArea
        messageArea.innerHTML = msg; //将元素messageArea的innerHTML设置为msg，以更新该元素的文本。
    },
    displayHit:function(location) {
        let cell = document.getElementById(location); //使用根据玩家猜测生成的id来获取要更新的元素
        cell.setAttribute("class", "hit"); //然后将这个元素的class特性设置为hit
        //设为hit将显示对应的战舰图像
    },
    displayMiss:function(location) {
        let cell = document.getElementById(location);//使用根据玩家猜测生成的id来获取要更新的元素
        cell.setAttribute("class", "miss");//然后将这个元素的class特性设置为miss
        //设为miss将显示对应的miss图标
    }
};

/*const ships = [//每一艘战舰都是一个对象，通过ships数组予以储存
    {localtions: ["10", "20", "30"], hits: ["", "", ""]},
    {localtions: ["32", "33", "33"], hits: ["", "", ""]},
    {localtions: ["63", "64", "65"], hits: ["", "", ""]}
    //每艘战舰均用两个数组表示，分别指出了战舰占据的位置以及被击中的部位。
];*/

const model = {
    boardSize: 7, //游戏板网格大小
    numShips: 3, //游戏包含的战舰数
    shipLength: 3, //每艘战舰占据多少个单元格
    shipsSunk: 0, //（游戏开始时呗初始化为0）指出玩家当前击沉了多少艘战舰。

    ship: [
        {localtions: ["06", "16", "26"], hits: ["", "", ""]},
        {localtions: ["24", "34", "44"], hits: ["", "", ""]},
        {localtions: ["10", "11", "12"], hits: ["", "", ""]}],

    fire: function (guess) {
        //这个方法接受一个参数——guess
        for (var i = 0; i < this.numShips; i++) {//迭代数组ships，每次检查一艘战舰
            const ship = this.ships[i]; //首先获取战舰
            /*localtions = ship.localtions; //然后获取战舰的位置（数组locations）
            const index = localtions.indexOf(guess); //再获取guess在数组locations中的索引。*/
            const index = ship.locations.indexOf(guess);
            if (index >= 0) { // 根据indexOf的使用方法，只要不返回=1既表示其击中了战舰
                // You been hit!
                ship.hits[index] = "hit"; //将相关元素设置为hit
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};