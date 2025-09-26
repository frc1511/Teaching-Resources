---
layout: default
title: Hello World
---
# Hello World
> # WIP

In the first lesson here, we'll learn the basics of Java.

## The First Program
Below is the famous hello world program for Java. 

main.java
```java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```
Output
```text
Hello World
```

The code above, when run, will display "Hello World" in the terminal. Although not the most exciting result, the code to do it might look intimidating. Let's discuss what is going on here.

##### Curly Braces
Curly braces `{}` define code blocks. There are 2 sets of them in this program. They are meant to encapsulate code within a program.
##### Classes
Every line of code needs to reside within a class. Classes are named the same as the file they reside in. In our case, that's `Main`, for `main.java`, with a capital `M` because of the fact that classes must always start with a capital letter. It's also important to note that java is case sensitive, `Hello` and `hello` are not the same thing.
##### Main method
The main method is where code starts running.
```java
public static void main(String[] args) {
    // Code
}
```
For right now, don't worry about `public`, `static`, `void` and all the extra fluff. What's important right now is that you understand that code starts executing from inside the main method.
##### Statements
This is what you are probably thinking about when you think of code. It's what actually gets executed, it's the instructions that are run. In this program, we have exactly one:
```java
System.out.println("Hello World");
```
What this line does it put what's between the parentheses onto the screen. In this case `"Hello World"`, which is what we see when we run the program.

At the end of every statement, we put a semicolon `;` to tell the computer that our statement is complete.

## More?
One hello is kinda boring, but don't worry, you can add as many statements as you want to a code block. Like so,
```java
System.out.println("Hello World");
System.out.println("Goodbye World");
System.out.println("Me when I forgor the semicolon :(");
```
As you would expect the output follows suit,
```text
Hello World
Goodbye World
Me when I forgor the semicolon :(
```
Next, let's make it a bit more complicated. Look at the next piece of code, before I tell you what it does, take a guess at what it do.
```java
System.out.println(6 + 7);
```
What it puts on the screen is the number `13`, which you probably guessed it would do. What you can learn from this is that you can do some math in java like so.
### Comments rq
To leave a comment on a line of code in Java, you can put a `//` before it and the rest of line will be the comment.
```java
System.out.println(2 * 3); // Prints 6
System.out.println("Do I have rizz?"); 
// This code won't run because its in a comment
// System.out.println("I don't run");
```
### Quick intro to variables
We'll be exploring variables more in depth later (in fact it's the next lesson), but I'd like to at least introduce you to them.
```java
int x = 6 + 7;
System.out.println(x);
```
The code you see above achieves exactly the same result as before, printing `13`. However, as you can see, it assigns it to a variable first. We're going to skip the `int` part for now, but you can see that the variable x is assigned the result of the evaluated expression to the right. You can think of them as variables from math, except they always have a value.

Below here are a few more examples to get you used to them.
```java
int x = 5 * 3 + 1;
System.out.println(x);   // Prints 16

int y = 6 / 2 * (1 + 2); // Do it pemdas?
System.out.println(x);   // It does, prints 9

int sum = x + y;
System.out.println(sum); // Prints 25

String greeting = "Welcome to programming preseason";
System.out.println(greeting);
```
In the next lesson, you're going to learn about what the `int` and `String` are.