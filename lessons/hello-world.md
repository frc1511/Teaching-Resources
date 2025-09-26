# Hello World
> # WIP
In the first lesson here, we'll learn the basics of Java syntax.

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

At the end of every statement, we put a semi-colon `;` to tell the computer (_technically the compiler_) that our statement is over.

