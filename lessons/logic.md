---
layout: default
title: Logic
---
# Logic
> # WIP


##### If statements
If statements are used to check the status of variables. The simplest way to do this is with `boolean`s, because you can just use them by themselves. Other types require you to compare them in some way, so that the end result is `true` or `false`
```java
if (boolean) {
    code; // Runs if boolean == true
} else {
    code; // Otherwise runs this
}
```
Here are some comparison operators:
 - `<`, `>`: Less than, Greater than
 - `<=`, `>=`: Less than or equal to, Greater than or equal to
 - `==`: Equivalent to
 - `!=`: Not equivalent to
 - `!`: Not (inverts any boolean after it, so true->false and vice-versa)
 - `&&`: And (True: `(1 == 1) && (2 == 2)`, checks if 1 is equal to 1 **and** 2 is equal to 2)
 - `||`: Or (True: `(1 == 1) || (2 != 2)`, checks if 1 is equal to 1 **or** 2 is equal to 2)
 - `^`: Xor (True: `(1 == 1) ^ (2 != 2)`, True if **only one** of the conditions is true)

### Here's some examples:
```java
if (motorRunning && desiredMotorState == MotorState.kSTOP) {
    motor.Set(0);
    currentMotorState = MotorState.kSTOP;
}
```
```java
if (elevator.atBottomHardStop() || elevator.atUpperHardStop()) {
    motor.Set(0);
    currentMotorState = MotorState.kSTOP;
}
```
##### For loops
```java
for (int i = 0; i < 5; i++) {
    code; // Runs 5 times
}
```

##### While loops
```java
while (boolean) {
    code; // Runs until otherBoolean == true
    if (otherBoolean) {
        break;
    }
}
```

##### Switch statements
```java
int which = 2;
switch (which) {
    case 0:
        code;
        break;
    case 1:
        code;
        break;
    case 2:
        code; // This code runs
        break;
    case 3:
        code;
        break;
}
```
