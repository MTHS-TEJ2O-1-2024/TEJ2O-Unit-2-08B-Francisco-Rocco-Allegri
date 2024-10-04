/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco
 * Created on: Oct 2024
 * This program switches an RGB LED's colors
*/

//Sets Pins info and then shows a happy face
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
basic.showIcon(IconNames.Happy)

//Begins by turning the LED Red
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Blue")
    pins.digitalWritePin(DigitalPin.P15, 0)

//Turns LED Green
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString("Green")
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P14, 0)

//Turns LED red
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Red")
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.clearScreen()

//Turns LED Cyan
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString("Cyan")
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.clearScreen()

//Turns LED Yellow
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Yellow")
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.clearScreen()

//Turns LED Magenta
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Magenta")
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.clearScreen()

//Turn LED White
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("White")
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.clearScreen()


//Ends of by showing a happy face

    basic.showIcon(IconNames.Happy)

})
