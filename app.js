
let resetB=document.querySelector('.btn');

//Tracking player 1 and player 2 turn
let turn0=true; //O will print


//Storing the winning patterns in array
const winPattern =[ [0,1,2], [0,3,6],  [0,4,8], [1,4,7], [2,5,8],[2,4,6],[3,4,5],[6,7,8],];
// on clicking any box, event should be performed 
let boxes=document.querySelectorAll('.box');

function handleBoxClick(event) 
{
    const box=event.target; // the exact box that was clicked.
    if (box.innerText !== "")
        return;  // prevent re-clicking a box
    if(turn0==true)     
    {
        box.innerText="O";
        turn0=false;
    }
    else
    {
        box.innerText="X";
        turn0=true;
    }
    checkWinner(); //after every click we will check for winner.
}
//Winner code
function checkWinner() {
    for (var i = 0; i < winPattern.length; i++) {
        var pattern = winPattern[i];
        var a = pattern[0];
        var b = pattern[1];
        var c = pattern[2];

        var val1 = boxes[a].innerText;
        var val2 = boxes[b].innerText;
        var val3 = boxes[c].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            // We have a winner!
            console.log("Winner is " + val1);

            // Disable all boxes to prevent more moves
            for (var j = 0; j < boxes.length; j++) {
                boxes[j].disabled = true;
            }

            return;
        }
    }
}
boxes.forEach((box) => {
    box.addEventListener('click', handleBoxClick);
});

resetB.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = true; // reset to O's turn
});
