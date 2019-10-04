byte servo = 0;
byte arc = 0;

#include <Servo.h>

Servo servo1;
Servo servo2;

void setup() {
  Serial.begin(115200);
  servo1.attach(9);
  servo2.attach(8);
  servo1.write(0);
  servo2.write(0);
}

void loop() {
  while(Serial.available() < 2);
  
  servo = Serial.read();
  arc = Serial.read();

  if (servo == 1) {
    servo1.write(arc);
  } else if (servo == 2) {
    servo2.write(arc);
  }

  byte packet[2];
  packet[0] = servo;
  packet[1] = arc;
  
  Serial.write(packet, 2);
}
