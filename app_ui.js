function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// ------------------------
// ----  app_ui.js
// ------------------------

const logic = require ('./app_logic');
var round = 0;     // even is player A, odd is player B

const readline = require('readline');
const { exit } = require('process');
var rli = readline.createInterface(process.stdin, process.stdout);
    // rli.setPrompt('Zadej velikost hraciho planu: ');
    rli.question('Zadej velikost hraciho planu: ', function(size) {
        console.log('We are in with value: ', size);
        if (!isNaN(size)) {
            if ( logic.setUpGame(size) == 0 ) {
                console.log('We have setup the game');
                
                var flag = true;
                while(flag) {
                    flag = false;
                    rli.question(setPromptInGame(round) + '|  Zadej tah: ', function(turn) {
                        console.log('We are going to check winning conditions in round: ', round, ' and turn: ', turn);
                        if (logic.checkWinningCondintion(turn) == 0) {
                            console.log('checkWC returned: ', 0);
                            round++; //sleep(1000); //continue;
                        }
                        else if (logic.checkWinningCondintion(turn) == 1) {
                            console.log('checkWC returned: ', 1);
                            console.log(writePlayer(rnd) + ' won!');
                            return;
                        }
                        else if (logic.checkWinningCondintion(turn) == 2) {
                            console.log('checkWC returned: ', 2);
                            console.log('Chybny vstup.');
                            //sleep(1000);
                            // continue;
                        }
                    });
                }
            }
        }
    });
                




    rli.prompt();
    rli.on('line', function(size) {
        console.log('We are in');
        if (!isNaN(size)) {

            if ( setUpGame(size) == 0 ) {
                rli.setPromp(setPromptInGame(round));
                rli.prompt();
                rli.on('line', function() {
                    console.log('Hey ho');
                    rli.close();
                });
            }
        }
    }).on('close', function() {
        process.exit(0);
    });
            



// rl.setPrompt('guess> ');
// rl.prompt();
// rl.on('line', function(line) {
//     if (line === "right") rl.close();
//     rl.prompt();
// }).on('close',function(){
//     process.exit(0);
// });




function getForPlaygroundSize (rli) {
    while (true) {  
        rli.setPrompt('Zadej velikost hraciho planu: ');
        rli.prompt();
        rli.on('line', function(size) {
            if (!isNaN(size))
                continue;
            else    //size is number
                return size;
        });
    };
};

function setPromptInGame(rnd) {
        return (writePlayer(rnd) + ' => ' + writeBoard());
}


function writePlayer(rnd) {
    if ( rnd % 2 == 0 )
        return ('Player A');
    else
        return ('Player B');
}


function writeBoard () {
    var out = '|';
    console.log('Size of gameBoard is ', gameBoard.length);
    for ( var i = 0; i < gameBoard.length; i++ )
        out += gameBoard[i] + '|';
    return out;
}
//console.log(getForPlaygroundSize());
// getForPlaygroundSize(rl);
// rli.close();