---
layout: default
title: Functions in classes
---
# Functions in classes
> # WIP

In this lesson we will learn more about functions in Java and in particular, how they work in classes.
## Let's look at some functions
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
Analyze the code seen above, can you see a pattern?

You should see that it follows the pattern of:
```java
modifiers data_type function_name(data_type argument_name, ...) {
    /*Code*/
}
```
## Breakin' it down
#### Modifiers
The modifiers that functions can have in classes are the following:
- None: There are no modifiers, like the first example
- `public` / `private`: This is a exclusive property (you can only set one or the other), it specifies weather the function (or variable) can be accessed from outside the functions within the class. If marked with public you can access the property from created objects. If marked with private, you can't and it can only be called from functions in the class.
- `static`: This function (or variable) does not need a constructed version of the class to be called. It means that its function does not depended on any variables within the class.

#### Data_type
The data type specified tells us what the function returns.

You should already have been taught the data types; however, functions have a special one, __void__.
Void essentially means that the function does not return any data type, there's a void of information.

#### Arguments
Arguments, specified between the parentheses, are what variables the function will retrieve. We're going to go more into this later.

## More examples 🤯
```java
private boolean isGamePiecePresent() {
    return retroReflectiveGP.get();
}
```
Above is a example of how functions might be used. You can see that it will return a boolean of whatever the `retroReflectiveGP` sensor sees. Because it uses private, you would not be able to call this function to get weather the gp is present from outside the class.

```java
public class Elevator extends SubsystemBase {
    private DigitalInput retroReflective;
    private Encoder encoder;

    Elevator() {
        retroReflective = new DigitalInput(0);
        encoder = new Encoder(1);
    }

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
    Elevator elevator = new Elevator();
    boolean canItMove = elevator.canMove(); // All good (it's public)

    boolean smh = elevator.isAtUpperLimit(); // Error (it's private)
}
```

Above is a example of a class with public and private variables and functions. 
