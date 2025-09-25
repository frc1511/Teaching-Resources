---
layout: default
title: Types
---

# Types

##### **So, what are types?**

Types are these indicators of, well, type. A real world example could be the type `Car`. You probably know what a car is, but there are many different cars out there. In programming, they might all have the type of `Car`. In code this might look something like this:

```java
Car toyota = new Car();
Car ford = new Car();
```

Ok, let's dive into this line. The start of the line is `Car`. That's our type. It tells the computer that this variable (`toyota` or `ford`) is going to be a car. Then comes the name, which is what the variable is called. Next is `=`, the assignment operator. It tells the computer that what comes next is what should be stored in the variable. Finally, the `new Car()`. This is a little more advanced, so let's talk about a different example with a simpler type.

```java
boolean correct = true;
```

This example's type is `boolean`. Boolean (or bool) values can hold either `true`, or `false`. This is seen with `= true`. Anything other than valid values on the right side of that `=` will probably cause an error. Let's go over some more simple types.

```java
int number = 3;
double decimal = 5.34;
String text = "Hello!";
```

These variables have names that explain what they hold, which is generally good practice. `number`, of type `int`, holds integer values, hence the type `int`. `decimal` of type `double` holds decimal values such as `3.14159` or `2.71828182`. Finally, `text` of type `String` holds text values, which **need** to be surrounded by quotation marks, preferable `"`.

You can set these variables to values of the same type after you have declared them like above.

```java
correct = false;
number = 8;
decimal = 4.999;
text = "Robots are cool";
```

Notice the absence of types at the start of the lines. This is because once you declare variables with a type, you don't need to tell the computer that it's that type anymore, it'll keep track of it on its own.