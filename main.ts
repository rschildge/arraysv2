input.onButtonPressed(Button.A, function () {
    checkButtonPress("L")
})
function checkButtonPress (letter: string) {
    if (patternList[index] == letter) {
        index += 1
        if (index == patternList.length) {
            basic.showIcon(IconNames.Yes)
            AddRandomToEnd()
            showPattern()
        }
    } else {
        GameOver()
    }
}
function NewGame () {
    patternList = []
    AddRandomToEnd()
    showPattern()
}
function AddRandomToEnd () {
    index = 0
    if (randint(0, 1) == 0) {
        patternList.push("L")
    } else {
        patternList.push("R")
    }
}
input.onButtonPressed(Button.B, function () {
    checkButtonPress("R")
})
function showPattern () {
    for (let value of patternList) {
        if (value == "L") {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
        }
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(200)
    }
    basic.clearScreen()
}
function GameOver () {
    basic.showString("Game Over! Try again.")
    NewGame()
}
let index = 0
let patternList: string[] = []
NewGame()
