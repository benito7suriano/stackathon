int analogPin = A0;

int sensorValue = 0;
int outputValue = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  sensorValue = analogRead(analogPin);

  Serial.print(sensorValue);
  Serial.print(",");
  delay(2000);
}
