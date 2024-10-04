/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco
 * Created on: Oct 2024
 * This program switches an RGB LED's colors
*/

basic.clearScreen()
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Blue")
    pins.digitalWritePin(DigitalPin.P15, 0)

    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString("Green")
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P14, 0)

    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Red")
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.clearScreen()

    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString("Cyan")
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.clearScreen()

    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Yellow")
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.clearScreen()
    
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Magenta")
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.clearScreen()
})
