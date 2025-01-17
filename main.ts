input.onButtonPressed(Button.A, function () {
    contador = 11
})
let contador = 0
contador = 11
basic.forever(function () {
    contador += -1
    basic.showNumber(contador)
    if (contador < 1) {
        contador = 11
    }
    basic.pause(1000)
})
