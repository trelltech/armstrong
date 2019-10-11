#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>
Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();

#define SERVOS 6
#define MIN 100
#define MAX 600
#define SW_PIN 2
#define VRX_PIN 0
#define VRY_PIN 0

void setup() {
  Serial.begin(115200);
  pwm.begin();
  pwm.setPWMFreq(50);
  for (int i = 0; i <= SERVOS; i++) {
    pwm.setPWM(i, 0, MIN);
  }
}

void loop() {
  if (Serial.available() >= 2) {
    unsigned int servo = (unsigned int)Serial.read();
    unsigned int arc = (unsigned int)Serial.read();

    pwm.setPWM(servo, 0, map(arc, 0, 180, MIN, MAX));

    byte packet[2];
    packet[0] = servo;
    packet[1] = arc;

    Serial.write(packet, 2);
  }

  if (digitalRead(SW_PIN)) {
    pwm.setPWM(0, 0, map(90, 0, 180, MIN, MAX));
  }
}