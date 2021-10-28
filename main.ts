let conteo = 0
let X = 0
let Y = 0
input.onButtonPressed(Button.A, function () {
    conteo = 9
    while (conteo >= 1) {
        basic.showNumber(conteo)
        if (conteo % 3 == 0) {
            music.playTone(131, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
        if (conteo % 5 == 0) {
            music.playTone(440, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
        conteo += -1
    }
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    X = 4
    Y = 0
    while (X >= 0) {
        led.plot(X, Y)
        basic.pause(500)
        led.unplot(X, Y)
        basic.pause(500)
        X += -1
        Y += 1
    }
    Y = 4
    while (Y >= 0) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
        }
        Y += -1
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
