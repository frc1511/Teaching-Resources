---
layout: default
title: Variables
---
# Variables
In this lesson we'll introduce you to variables.

## What are Variables?
Variables are arguably the most important thing in programming any language. Variables consist of 3 main components:

1. The type  
This is what the variable stores, some examples are:
    * `String` - Stores text, such as "Hello". String values are surrounded by double quotes.
    * `int` - stores integers (whole numbers), without decimals, such as 123 or -123.
    * `double` - stores floating point numbers, with decimals, like 19.99 or -3.14159265 (for people with experience, we will not be using `float` in our code).
    * `char` - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
    * `boolean` - stores values with two states: `true` or `false`

2. The name  
This is what the value is stored to, you use this name to reference its value
3. The value  
This is what the variable stores, it will be of the same type of the variable

They get arranged like so:
```java
type name = value;
```

It's important to note that the value is optional and the following is also a valid format:
```java
type name;
```
If you use this, I would expect that you give it a value soon afterwards.


## Some Examples
If I wanted to make a variable called `message` with a type of `String` and a value of `Hello World` I could do the following.
```java
String message = "Hello World";
System.out.println(message);
```
The code above will print the value of the variable `message` which in this case is `"Hello World"`.

```java
double pi = 3.14159265;
System.out.println(pi); // Prints 3.14159265
```

```java
int number = 67;
System.out.println(number); // Prints 67
```

### Assigning Later
The following is a example of how you can give a variable a value after declaring it.
```java
int number;
number = 45;
System.out.println(number); // Prints 45
```
Notice how after declaring a variable, we don't need to put the type next to it when assigning it a value.
### Assigning Generally
We often find it useful to update a variable so here's a example, it's the exact same assigning syntax.
```java
int number = 12;
number = 41;                // Changes number to 41
System.out.println(number); // Prints 41

number = 67;                // Changes number to 67
System.out.println(number); // Prints 67
```