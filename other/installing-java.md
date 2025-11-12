---
layout: default
title: Installing Java
---
# Installing Java + Maven
There are many ways of compiling and running java projects, but this will walk you through one of the simpler ones to use once you have it setup. You'll be installing the JDK and Maven.
1. Download the JDK installer from [here](https://www.oracle.com/java/technologies/downloads/)
2. From here, run the installer and install java. More detailed instructions are available [here](https://docs.oracle.com/en/java/javase/25/install/overview-jdk-installation.html)
3. Pop a terminal and run `java -version` to make sure it's installed properly
4. Next download the maven binary from here `https://maven.apache.org/download.cgi` 

If you are mac, I would suggest just using `brew install maven` if you have homebrew

5. If your on windows, I would suggest following [this](https://stackoverflow.com/a/63884663), just take note that the version may have changed, so update accordingly
6. Pop a terminal and run `mvn -v` to confirm it's downloaded successfully
7. Open VSCode and install the java extension pack 

### To create a java project
0. Open VSCode
1. Enter `ctrl + shift + P` and search for Java: Create Java Project
2. Select Maven for the project type
3. Select No Archetype, or whatever archetype resembles Simple, Blank, Quickstart, Empty, Basic, no extras
4. For the group id, make it `com.` then something unique, its generally the reverse of a web domain, but that's just a convention. Just make it unique so it doesn't clash with something like `com.apple` (for apple.com). For example, our team's code will be `org.frc1511`
5. The artifact id will be your project name
6. Then select where you want your project to be created.
7. Then navigate to Main.java and press play in the top right to execute your code!