---
layout: default
title: Simple Triggers
---

# Simple Triggers
So, triggers. How can they be useful? This lab will explore how to use simple triggers.
MAKE SURE YOU (or your group) HAVE/HAS A LAPTOP!!!
### Prelab question:
1. What is a condition/Boolean? What values can it have?



### Lab:
You will be using digitalInput in the first part of this lab. Here is how you set that up:
```java
DigitalInput limitSwitch = new DigitalInput(0);
```

We’ll dive into this line further in a later lesson. For now, just know that it creates a `DigitalInput` object, which is usually some sort of sensor that can either be on or off. In this case, it’s a limit switch, which is basically just a clicky lever. For now, you just need to know that this creates limitSwitch as a variable of type `DigitalInput`. This object (we’ll talk more about objects later too) has a simple method: `.get()`. Methods are like functions you call from an object. You can then call `DigitalInput` methods from limitSwitch like so:
```java
bool isOn = limitSwitch.get();
```
This will store the value of whatever the limit switch thinks its state is in the variable isOn. Notice that this is quite similar to how we created the limit switch, with the type (`bool`) and the assignment, except this time there’s no new. The reason for that is kinda complicated, so I won’t explain it here, but you can ask if you want. It’s time to write some code!
Task: Create a limitSwitch object, then create a `Trigger` for when the limitSwitch trips.
> Hint: You need to use `limitSwitch::get()` at some point. (This returns a bool).

> [!NOTE]
> STOP!

At this point, stop what you are doing and raise your hand. Someone will be around shortly to check your work. We will move on once everyone reaches this point.

#### SmartDashboard
The `SmartDashboard` is a debugging tool that allows you to see the state of things in your code. It is helpful for debugging and feedback.
Our Use Case: We want to see the state of our `Trigger` we created.
Your simple line:
```java
SmartDashboard.putBoolean(“Limit Switch”, yourTriggerName.getAsBoolean());
```
This will go in your 
```java
teleopPeriodic () {
	//HERE
}
```
Ask for help if you can’t find this!
Then, it’s time to test! Raise your hand and let someone know you are ready to test your program! Someone will give you a lesson on Elastic.
Did it work?
If not, you can always edit your program to fix it! Ask for help if you get stuck, no one is judging you.
### Final Questions
1.	What type of function do triggers need when created?


2.	How can you see whether a trigger is triggered?
