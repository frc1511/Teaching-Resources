---
layout: default
title: Functions in classes
---
# Functions n' Classes
In this lesson we will learn more about functions in Java and in particular, how they work in classes.
## Some Function Examples
```java
void function_name() {
    /*Code*/
}

public static void function_name() {
    /*Code*/
}

private boolean function_name(int argument1, double argument2) {
    /*Code*/
}
```
We can generalize the format of functions to the following:
```java
modifiers data_type function_name(data_type argument_name, ...) {
    /*Code*/
}
```
## Breakin' it down
#### Modifiers
The modifiers that functions can have in classes are the following:
- None: There are no modifiers, like the first example
- `public` / `private`: This is a mutually exclusive property (you can only set one or the other), it specifies weather the function (or variable) can be accessed from outside the functions within the class. If marked with public you can access the property from created objects. If marked with private, you can't and it can only be called from functions in the class.
- `static`: This function does not need a constructed version of the class to be called. It means that its function does not depended on any non-static variables or functions within the class.

#### Data_type
The data type specified tells us what the function returns.

You should already have been taught the data types; however, functions have a special one, __void__.
Void essentially means that the function does not return any data type, there's a void of information.

#### Arguments
Arguments, specified between the parentheses, are what variables the function will retrieve.

## A Function Example
```java
private boolean isGamePiecePresent() {
    return retroReflectiveGP.get();
}
```
Above is a example of how functions might be used. You can see that it will return a boolean of whatever the `retroReflectiveGP` sensor sees. Because it uses private, you would not be able to call this function to get weather the gp is present from outside the class.

## A Full Class
```java
public class Elevator extends SubsystemBase {
    private DigitalInput retroReflective = new DigitalInput(0);
    private Encoder encoder = new Encoder(1);

    private boolean isAtUpperLimit() {
        return retroReflective.get();
    }

    public boolean canMove() {
        boolean isAtBottom = encoder.get() <= 0;
        if (isAtUpperLimit() || isAtBottom) {
            return false;
        } else {
            return true;
        }
    }
}

...

void somewhereElseInTheCode()  {/* Somewhere else in the code */
    Elevator elevator = new Elevator();     // Constructing the class (we'll get there in a sec)
    boolean canItMove = elevator.canMove(); // All good (it's public)

    boolean smh = elevator.isAtUpperLimit(); // Error (it's private)
}
```
## Constructing Classes
In the example above, this line below might look a little familiar. 
```java
Elevator elevator = new Elevator();
```
It's creating a variable! The data type of the variable here is not one of the one's you've learned before, but instead one we defined ourselves. `Elevator` is the class that the variable is. In order to make it's value the class it expects, we have to construct a new instance of the class, aka a object.   
Constructing the object is done with the `new` word and then the class name with parentheses. What's happening here is that we are calling the class's constructor. We didn't declare a custom constructor, so it's going to use the default functionality of purely creating a new instance of the class.  
You may also notice that there are 2 other classes that we construct: `DigitalInput` and `Encoder`. We didn't create those classes, however, they are provided to us via libraries. We'll discuss libraries later. In their constructing, you can see them accepting arguments. 

### Objects
When one constructs a class, they are merely creating a new instance of the class. Let's look at another example to see what I mean.
```java
// Counter.java

class Counter {
    public int count = 0;
}

// Main.java
public class Main {
  public static void main(String[] args) {
    Counter counter1 = new Counter();
    Counter counter2 = new Counter();

    counter1.count = 67;
    counter2.count = 41;

    System.out.println(counter1.count);  // 67
    System.out.println(counter2.count);  // 41
  }
}
```
The `counter1` and `counter2` objects are diffrent instances of the counter class, and they each have their own memebers and functions. Although they are the same internally, the values of the variables within them are diffrent.

## Le Dot
We've been using this syntax in the examples here but I just haven't been saying anything about it yet.

The dot lets us get memebers and functions in objects. For example, we can access the `count` member (aka variable) of the `counter1` object by doing: `counter1.count`. We can then use it like any other variable, assigning values or reading its value. However this only works if the memeber was set to `public`. In cases where we don't want this functionality, we would mark it as `private`.  
You've also seen it when you do `System.out.println()`, you are calling the `println` function on the `out` object inside of the `System` object. We can make our own functions like so.

```java
// Counter.java
class Counter {
    private int count = 0;

    public void incrementCount() {
        count += 1;
    }

    public void decrementCount() {
        count -= 1;
    }

    public int getCount() {
        return count;
    }
}

// Main.java
public class Main {
  public static void main(String[] args) {
    Counter counter1 = new Counter();

    counter1.increment();
    System.out.println(counter1.getCount());  // 1

    counter1.decrement();
    System.out.println(counter1.getCount());  // 0

    counter1.decrement();
    System.out.println(counter1.getCount());  // -1
  }
}
```
Although it might seem like having memebers like `count` private just makes the code more complicated, I'd argue that it helps to protect features from unintended minipulation, particularly when we get to state machines.  

The next lesson will go into some details about how java strucutres things and we'll look at code that might resemble what our robots code might look like. 