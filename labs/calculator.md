---
layout: default
title: Simple Triggers
---
# Calculator
In this lab, you will create a primitive calculator using a <ps4, Xbox> controller. 
### Prelab question:
1.     How do you initialize a controller?


### Lab:
It’s time to learn about `Trigger` Binding. You’ve learned how to check if a `Trigger` is being triggered, but now you need to do something when the `Trigger` is triggered. You first need to write a function that will execute some code. Let’s call our function `coolFunc`. 

```java
void coolFunc() { 
	SmartDashboard.putString(“Cool String”, “Hello”); 
} 
```

Ok, now, how do we call it? Let’s first create a controller object, called `driverController`. This object has many methods, but we mainly care about the buttons, which are simple. 

`driverController.b()` is used to query the b button being held. However, you’ll notice it doesn’t return a `bool`, it returns a `Trigger`. This is very convenient, because `Trigger`s have some methods that let us use these things called `Commands`. `Command`s are the essential part of running a robot. We need to create a `Command` using our function, `coolFunc`. The easiest way to do this is through something called an `InstantCommand`. 

```java
InstantCommand coolCommand = new InstantCommand(coolFunc); 
```

This runs whatever function you pass in (in this case, coolFunc) and executes it instantly. However, there is another way you can create `InstantCommand`s that helps our situation better. It looks kinda wack though.

```java
new InstantCommand(() -> coolFunc()); 
```

(We’ll learn this syntax later) 

You can then throw this into one of our Trigger’s methods like so: 

```java
driverController.b().onTrue(new InstantCommand(()->coolFunc())); 
```

We'll do this in our `RobotContainer.java`, in `configureBindings`. This will bind the `Command` that runs our function, `coolFunc` to the start of the `b` button being held. There are a lot of methods similar to `Trigger.onTrue` to be used for any need. You can see `Trigger` documentation [here](https://github.wpilib.org/allwpilib/docs/release/java/edu/wpi/first/wpilibj2/command/button/Trigger.html).

Now for the hard part.

### Your task:
Create a basic calculator that allows for basic input using buttons on a controller. You can use any buttons you want, but the base functionality you need is:
 - An Add button
 - A Subtract button
 - A Multiply button
 - A Divide button
 - At least two number buttons OR at least two predefined numbers

Test your program! Does it work? Raise your hand if you need help.