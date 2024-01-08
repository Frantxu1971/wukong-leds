input.onButtonPressed(Button.A, function () {
    i += 1
    if (i > 10) {
        i = 0
    }
})
let i = 0
let leds = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
i = 0
basic.forever(function () {
    if (i == 1) {
        leds.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (i == 2) {
        leds.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (i == 3) {
        leds.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (i == 4) {
        leds.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (i == 5) {
        leds.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (i == 6) {
        leds.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (i == 7) {
        leds.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (i == 8) {
        leds.showColor(neopixel.colors(NeoPixelColors.Violet))
    } else if (i == 9) {
        leds.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        leds.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
