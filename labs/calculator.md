---
layout: default
title: Simple Triggers
---
# **WIP**{: style="color: #FF0000"}
# Calculator
In this lab, you will create a primitive calculator using a <ps4, Xbox> controller. 
### Prelab question:
1.     How do you initialize a controller?

```



```

### Lab:
It’s time to learn about `Trigger` Binding. You’ve learned how to check if a `Trigger` is being triggered, but now you need to do something when the `Trigger` is triggered. You first need to write a function that will execute some code. Let’s call our function `coolFunc`. 

```java
void  coolFunc() { 
	SmartDashboard.putString(“Cool String”, “Hello”); 
} 
```

Ok, now, how do we call it? Let’s first create a controller object, called `driverController`. This object has many methods, but we mainly care about the buttons, which are simple. 

`driverController.b()` is used to query the b button being held. However, you’ll notice it doesn’t return a `bool`, it returns a `Trigger`. This is very convenient.


`Trigger`s have some methods that let us use these things called `Commands`. `Command`s are the essential part of running a robot. We need to create a command using our function, `coolFunc`. The easiest way to do this is through something called an `InstantCommand`. 

```java
InstantCommand coolCommand = new InstantCommand(coolFunc); 
```

This runs whatever function you pass in (in this case, coolFunc) and executes it instantly. However, there is another way you can create commands that helps our situation better. It looks kinda wack though.

```java
new InstantCommand(() -> coolFunc()); 
```

(We’ll learn this syntax later) 

You can then throw this into one of our Trigger’s methods like so: 

```java
driverController.b().onTrue(new InstantCommand(()->coolFunc())); 
```