/*
Vytvor app_logic.js subor, toto je kontrakt

v UI sa pyta pre pocet policok v hre, ked ziskas N tak vrat 0 alebo 1:
    #1 dostanem N a vratim 0 alebo 1 
    - 0 ak N je akceptovbaltelne tak posielam 0 a jozef zobrazi rovno hru s polickami 
    - 1 je pre neplatne cislo


Potom sa zobrazuje UI pre ziskanie cisla od uzivatela co je na rade:
    #2 a posielam 0, 1 alebo 2 
    - 0 ked cakam na input dalsieho hraca
    - 1 ked posledny hrac vyhral
    - 2 error message ( cislo mimo range, alebo je tam uz krizik)
*/



//game sets up 
var BoardLength = 0;
exports.setUpGame = (boardLen) => {
    console.log('Calling setUpGame in app_logic.js');
    if ((3 < boardLen) && (boardLen <= 20)) {
        BoardLength = Number(boardLen);
        console.log('Value given in BoardLength inside setUpGame is ', BoardLength);        
        global.gameBoard = new Array(BoardLength).fill(0);
        console.log(global.gameBoard);
        return 0;
    } else {
        return 1;
    }
}

// 2.0 vytvor array z $BoardLength
// 2.1 skontroluj ci je cislo od 0 do 20 cez funkciu isInRange()
// 2.2 pripis cislo do array $gameBoard na spravny index
// 2.3 skontroluj ci hrac vyhral ak ma 3 po sebe cez zvlast funkciu function checkLimit(ArrayData)

var totalOnes = 0;
console.log('Value given in BoardLength is ', BoardLength);
// global.gameBoard = new Array(BoardLength).fill(0);     // 2.0 vytvor array z $BoardLength

exports.checkWinningCondintion = (GivenNumber) => {
    if ((0 < GivenNumber) && (GivenNumber < 21)){   // 2.1 skontroluj ci je cislo od 0 do 20 cez funkciu isInRange()
        global.gameBoard[GivenNumber - 1] = 1;             // 2.2 pripis cislo do array $gameBoard na spravny index
        function checkLimit() {                     // 2.3 skontroluj ci hrac vyhral ak ma 3 po sebe cez zvlast funkciu function checkLimit(ArrayData)
            for (var i = 0; i < gameBoard.length; i++) {
                if (gameBoard[i] == 1) {
                    totalOnes ++;
                    if (totalOnes == 3) {
                        return 1;
                    }
                } else {
                    totalOnes = 0;
                }
            }
            return 0;
        }
    } else {
        return 2 ;
    }
}
