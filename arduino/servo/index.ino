byte servo = 0;
byte arc = 0;

#include <Servo.h>

Servo servos[6];

void setup() {
  Serial.begin(115200);
  for(int i = 1; i < 6; ++i) {
    servos[i].attach(i+8);
    servos[i].write(0);
  }
}

void loop() {
  while(Serial.available() < 2);
    servo = Serial.read();
    arc = Serial.read();
    servos[servo].write(arc);
  byte packet[2];
  packet[0] = servo;
  packet[1] = arc;
  Serial.write(packet, 2);
}
