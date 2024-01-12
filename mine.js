let boxes = document.querySelectorAll(".box");
let msgCont = document.querySelector(".msgCont")
let msg = document.querySelector(".msg")
let resetBtn = document.querySelector(".reset-btn")

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "X"
            turnO = false;
        }
        else {
            box.innerText = "O"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const disable = () => {
    for(let box of boxes){
        // console.log(box)
        box.disabled = true
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations 🎉🎉, Winner is ${winner}`
    msg.classList.remove("hide")   
    disable();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("Winner", pos1Val)
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener("click", () => {
    location.reload()
})