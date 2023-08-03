basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P2) - 620,
    1023 - 620
    )
})
