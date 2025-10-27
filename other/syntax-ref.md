---
layout: default
title: Syntax Reference
---
# Syntax Reference
Here you'll find a quick reference to some basic java syntax.

### Built-In Data Types
* `String` - Stores text, such as "Hello". String values are surrounded by double quotes.
* `int` - stores integers (whole numbers), without decimals, such as 123 or -123.
* `double` - stores floating point numbers, with decimals, like 19.99 or -3.14159265. Double values end with `d`. (for people with experience, we will not be using `float` in our code).
* `char` - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
* `boolean` - stores values with two states: `true` or `false`

### Variables
```java
type variableName = value;
```
Assignment:
```java
variableName = newValue;
```
Example:
```java
String greeting = "Hello World";
double treeHeight = 12.2d; // meters
int funnyNumber = 67;
funnyNumber = 41;          // funnyNumber is now 41
```

### Logic
Operators
 - `<`, `>`: Less than, Greater than
 - `<=`, `>=`: Less than or equal to, Greater than or equal to
 - `==`: Equivalent to
 - `!=`: Not equivalent to
 - `!`: Not (inverts any boolean after it, so true->false and vice-versa)
 - `&&`: And (True: `(1 == 1) && (2 == 2)`, checks if 1 is equal to 1 **and** 2 is equal to 2)
 - `||`: Or (True: `(1 == 1) || (2 != 2)`, checks if 1 is equal to 1 **or** 2 is equal to 2)

If Statements: 
```java
if (condition1) {
    // Runs if condition1 is true
} else if (condition2) {
    // Runs if condition1 is false but the 2nd condition is true
} else {
    // Run if condition1 is false and condition2 is false
}
```

### Classes and Functions
Classes need to be named according to the file name and must use a capital letter at the start
```java
class Car {
    private double speed = 0;

    public boolean isMoving() {
        return speed == 0;
    }

    public void accelerate() {
        speed += 1;
    }
    
    public void decelerate() {
        speed -= 1;
    }
}
```
- `public`: Accessable from instances of class and inside of its methods

- `private`: Only accessable from inside the class's methods 

Functions:
```java
modifiers reutrn_type function_name(argument_1_type arg1, arg_2_type arg2) {
 return return_type;
} 
```
Ex.:
```java
public double add(double number1, double number2) {
 return number1 + number2;
}
```
