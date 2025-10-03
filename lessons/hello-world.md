---
layout: default
title: Hello World
---
# Hello World
In the first lesson here, we'll learn the basics of Java.

## The First Program
Below[^1] is the famous hello world program for Java.

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

The code above, when ran, will display "Hello World" in the terminal. Although not the most exciting result, the code to do it might look intimidating. Let's discuss what is going on here.

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
This line puts what's between the parentheses onto the screen. In this case, `"Hello World"`, which is what we see when we run the program.

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
What it puts on the screen is the number `13`, which you probably guessed it would do. What you can learn from this is that you can do some math in java by using some basic symbols. Here's some more examples:
```java
System.out.println(5 * 3 + 1);         // Prints 16

System.out.println(6 / 2 * (1 + 2));   // Prints 9
```
## Comments
I've also included comments the previous example, any text put after a `//` will not be run. It's helpful for describing what code does inline without having to create a word doc or something. You'll see them all the time in code snippets to tell you what going on but later on, we'll start to not write as many because they will get redundant. In the robot's code, we'll normally write them to explain complicated logic or strange decisions. You can do multi line comments like so, if you would like.
```java
/* The following line will do the following:
1. Add 6 and 4 to create 10
2. Multiply that by 9 to create 90
3. Subtract 9 to create 81
4. Display 81 to the screen
*/
System.out.println(9 * (6 + 4) - 9);
```
It's `/*` to start a comment and `*/` to end the multi-line comment. Anything in-between will be a comment.

[^1]: (1) Code snippits - Something that always bothered me about learning to program was that they never put where the code actually went. I can see why in hindsight, but I figured I would tell you where code snippits go. In the first code snippit, it's the entire file, you can copy and paste that into a main.java and run it. But for the rest you can't just do that. The 2nd snippit of code is of a function definition, when you see code with definitions like that, you can assume it came from inside of a class. When you don't see any function definitions, it most likely came from inside of a function. In our case, besides the 1st and 2nd snippits, the rest is from within the main function.
