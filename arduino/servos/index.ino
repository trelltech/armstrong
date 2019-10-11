#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>
#include <LiquidCrystal.h>

#define SERVOS 6
#define MIN 100
#define MAX 600
#define SW_PIN 53
#define VRX_PIN 0
#define VRY_PIN 1

Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();
LiquidCrystal lcd(22, 24, 26, 28, 30, 32);

void setup() {
  pinMode(SW_PIN, INPUT);
  digitalWrite(SW_PIN, HIGH);

  lcd.begin(16, 3);
  lcd.setCursor(0, 0);
  lcd.print("hello, world!");

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
    sendPacket(servo, arc);
  }

  if (digitalRead(SW_PIN) == 0) {
    for (int i = 0; i < SERVOS; i++) {

        sendPacket(i, 180);
        pwm.setPWM(i, 0, map(180, 0, 180, MIN, MAX));
        delay(500);

        sendPacket(i, 0);
        pwm.setPWM(i, 0, map(0, 0, 180, MIN, MAX));
        delay(500);
    }
  }

  delay(10);
}

void sendPacket(unsigned int servo, unsigned int arc) {
    byte packet[2];
    packet[0] = servo;
    packet[1] = arc;
    Serial.write(packet, 2);
}
