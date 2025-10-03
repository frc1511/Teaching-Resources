---
layout: default
title: Logic
---
# Logic

> # WIP

##### If statements
`if` statements are used to check the status of variables. The simplest way to do this is with `boolean`s, because you can just use them by themselves. Other types require you to compare them in some way, so that the end result is `true` or `false`
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
// Reads like: "if one plus one equals two"
if (1 + 1 == 2) {
    System.out.println("Math is mathin'");
}

// Reads like: "if one plus one does not equal two"
if (1 != 2) {
    System.out.println("Cool bro");
}

// Reads like: "if one plus one equals two and three plus three equals six"
if (1 + 1 == 2 && 3 + 3 == 6) {
    System.out.println("Math is still mathin'");
}
```
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
### A Amendum for Non-Primative Types (For Those Who Care)
Due to the way that java works, when you compare a non-primative type to anything else you are not comparing the value of the variable, but insted the address to the memory of the variable. Some of the consequences of this are that code like `String("abc") == "abc"` are false (String is a non primative type). For strings and others, you can do `String("abc").equals("abc")` to get it to work.
##### For loops
You can use loops to run code more than once without copy+pasting 800 lines. A straightforward way to do this is a `for` loop. `for` loops run a pre-specified amount of times, defined in the parentheses after `for`. A common syntax you will see is defining a new variable (often `i`), then setting a condition (while `i` is less than `5`), and setting a rule to be followed every loop (commonly `i++`, which increments `i` by 1).

```java
for (int i = 0; i < 5; i++) {
    code; // Runs 5 times
}
```

##### While loops
`while` loops run the code within their brackets, then check their condition (a `boolean`). If `true`, the loop runs again and the cycle repeats. These are not often seen in robot code because it is very easy to lock up an entire robot system with a while loop.

```java
while (boolean) {
    code; // Runs until boolean == false
}
```

##### Switch statements
`switch` statements are like the cooler `if` statement. They compare a value to a series of `case`s, and use the matching `case`. The `break;` tells the compiler to stop reading code and exit the `switch` statement.

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
