---
title: "How to Learn Coding"

date: 2023-12-27

draft: false

tags: ["coding"]

thumbnail: '/img/how_to_learn_coding.png'

slug: "how-to-learn-coding"

description: "Start coding with these 3 steps! Learn to code in a browser, explore the terminal, and dive into an IDE like VS Code. Follow hands-on exercises and build a bilingual project"
---

# Start to Code in These 3 Steps

You probably landed this page because you want to learn to code, which is great! Most people still didn't figure out what they want to do in their life, but you already did the hardest part. The coding is truly powerful skill. It enables you to write instructions to the machine which in turn builds stuff like websites, mobile applications, rocket missiles launching systems and many more.

As Data Scientists we use Coding skills to access, process and manage raw data, build graphs to visually comprehend the nature of dataset we ended-up working with, and eventually develop a statistical and machine learning models to predict the likelihood of certain events depending on the given task.

In this article we will focus on how to start coding immediately, without too much of a theory behind it. We will run a decent amount of lines of code by following the best practices of learning by doing. Please enjoy.

## Step 1: Learn to Code in a Browser

As you read this article through a webpage, you already have the tools at your fingertips. Press **Ctrl** + **Shift** + **J** if running on Windows or **Command** + **Option** + **J** if running on MacOS. It will open the console which appears to be on the right side of the browser in my case. It might appear on the bottom as well, but let's just focus on JavaScript.

![Browser console ready to receive an input](/img/img1.png)

JavaScript is an excellent language to start experimenting with, especially if you're attracted to dynamic interfaces. I encourage you to type all of the commands manually to have grasp feeling of what it's like to be a programmer.

#### Arithmetics

We will start with math operations using numbers and arithmetic signs in the console just like we would do using simple calculator. The result will be returned by the console line even before you hit the enter button, try it yourself.

```javascript
3 + 4 // Performs the addition

10 - 5 // Performs the substruction

25 * 3 // Perfroms the multiplication

125 / 5 // Performs division

5 ** 2 // Performs exponential

Math.sqrt(25) // The method to perform square root

clear() // function that clears the console for convinience, optional
```

![Arithmetic commands executed in the console](/img/img2.png)

Well Done! Did you feel akward with the Math.sqrt() method ? You will learn about methods along the way, and don't worry if you missreading a couple of words or two. When learning a programming it's inevitable to come across the concepts that are not yet familiar to you. Now let's get a little bit dirty and nail one of those concepts.

#### Variables

Let's create a variable **number** that will prompt you to store the value of any number.

```javascript
const number = prompt('Enter the square rootable number: ');
```

Now you are about to find out why it's getting dirty. When coding it's essential for a programmer to be very attentive and accurate to the command prompt. Let's try the following code and see what heppens.

```javascript
const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);
```

![Creating variable with prompt input to print it using console.log](/img/img3.png)

If you are windy like me, there is a big chances your are confused the backtick sign *`*   with the quote sign  *'*   using which would not return the expected result. Eventually the learning curve will leave you frustruated with the console and error messages, but as aspiring programmers we should embrace it as the part of our job, and keep learning.

JavaScript is bad ass programming language. It has both Front and Back end web frameworks, and even mobile-app frameworks for Android and IOS devices alike. To put it into perspective - my beloved Python only handles the back-end for web applications.

### Step 2: Learn to Code in Terminal

Just now we've been using browser as the mediator between the User and the Machine which is only possible with JavaScript, but now we would like to write instructions directly into the machine itself. If you're using Windows operating system, you might need to make a few tweaks to ensure a seamless coding experience. While Windows is widely used and affordable, it's just never meant to be a developing machine. Whereas on MacOS you may just press **Command** + **Т** to find a Terminal and skip the next section.

#### Install WSL2 on Windows

In order to successfully run any code on the Windows machine, you should do it in the Windows Subsystem for Linux or **WSL2** for short. Linux has many advantages over Windows, but we will focus only on **Terminal**, and for that we should open the PowerShell as Administrator and run the following command.

```powershell
wsl --install
```

Take a a little break, since the installation might take a few minutes.

If running on Windows 11, the Ubuntu distro should be installed by default. If so create a Linux username and password. That's it.

For Windows 10 users proceed with the Distro installation as following.

```powershell
wsl --list --online
```

This line of code will list the available Linux distributions. Choose any distro name. I'll choose Debian for demonstrative purposes, but you can install Ubuntu or Kali it doesn't really matter.

```powershell
wsl --install -d Debian
```

Create username and password after the installation. You might need to restart your machine and check the start menu to see if there is a Linux distribution available. Open your Debian or Ubuntu or whatever distro you've installed, and that's your Terminal.

![Linux Terminal installed and opened via Start menu](/img/img4.png)

After installing our Linux distro, let's do something cool, try this command for instance:

```bash
sudo apt-get install && sudo apt-get upgrade
```

It should update your Linux system. Isn't cool ? You'd never miss any update with such a bad ass interactive interface. I literally prompt this command every signle day, and it still blowing my mind.

#### Terminal and Python Shell

Now regardless of your Operating System, you can run **Python** directly in your Terminal using the following command.

```python
python3
```

```bash
Python 3.11.2 (main, Mar 13 2023, 12:18:29) [GCC 12.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

As we are entered In the state of tripple arrows **>>>**, we are in so called **Python Shell** which is a powerful way to interact with your machine. We can perform the same arithmetic commands as we did using JavaScript.

```python
1 + 1
2 * 5
5 ** 2
13 / 4
13 // 4 # This is a strict division
```

The square root is more tricky, to do that you have to import the Math module first.

```python
import math
math.sqrt(25)
```

While the neccessity of importing modules might look like a disadvantage when comparing to JavaScript. The modularity in Python is actually what makes it so widely used in many different fields from Machine Learning to Space Engineering, because there is just limitless amount of modules available for different purposes.

#### Lists

Now let's create a few variables using Python Shell.

```python
oranges = 5
kids = ['Aki', 'Kenshin', 'Konrat']
```

The first variable contains the number **5** representing the amount of oranges, and the second one contains the **list** of names representing kids names **Aki** , **Kenshin** and **Konrat** respectively. It's way more intuitive to create a variable when comparing to JavaScript, because of the Python's beautiful syntax, however we are paying the price for that ease of syntax, and the price is the **indentation**, which makes it a bit more challenging. We will get to that in the next section.

#### For loops

Now imaging that we have to supply our kids with oranges programmatically. Let's do that using the **for loop** which is the sequence of instructions written in short. Make sure to follow the indentation format by creating space using **tab** or **four spaces** on each line that follows **for i in kids:**

```python
for i in kids:
    oranges -= 1
    print(f'{i} received an orange, {oranges} oranges remaining')
```

 Every command line that being indented will be repeated as the sequence for each kid in the list subtracting the amount of oranges by 1, printing the name and amount of oranges remained. Now execute the following loop in the Python Shell by **double** clicking the Enter button. The expected result is shown below.

![Terminal displays Python Shell for loop result](/img/img5.png)

#### If else

Now we've got a problem, there is just two oranges left for three of the kids. How would you solve this problem? If you are an old school parents like mine you might have a straightforward approach like so:

```python
for i in kids:
    if 'K' in kids:
        oranges -= 1
        print(f'{i} received an orange, {oranges} oranges remaining')
```

This code scans every name in the list, and if it contains big letter 'K' then kid gets an orange. This is due to if statement at the line 2 which leaves Aki without an orange. Let's use **else** statement to fix this.

```python
if oranges == 3:
    for i in kids:
        oranges -= 1
        print(f'{i} received an orange, {oranges} oranges remaining')
else:
    print('We will go to the Whole Foods to buy more oranges for our kids')
```

In this solution we initially check if the stock of oranges is equal to the exact number of our kids which is 3, if so we proceed as before, **else** we are stating: 
> *We will go to the Whole Foods to buy more oranges for our kids*.

![Terminal displays Python Shell If Else statement result ](/img/img6.png)

If you got so far into the article, then you are true bad dog, congrats! As for now you have an idea of what is variables, lists, loops and If-else statements. We will revise them in upcoming articles in this beginner's guide series, but for now take rest for a while, cause that was a lot to process for a bloody beginner.

### Step 3: Learn to Code in IDE

Just now we've been using Python Shell to directly communicate with the machine by one line at the time. In fact it's not the most effective way to write and execute the code. Now let's explore the Integrated Developing Environment or **IDE** for short.

IDE is simply a text editor for creating files of code, which often referred as **scripts**. Running scripts through a Terminal allows you to execute multiple lines of code at once. We are going to use **VS Code** because eventually you will be watching YouTube to keep learning programming, and most of the time it will be VS code.

Follow the link to download and install the [VS Code](https://code.visualstudio.com/). There is one gangsta move to open VS Code using Linux Terminal. Try this command if running on WSL.

```bash
code .
```

#### Directory

Open your Terminal and make the directory for our orange project with this command.

```bash
mkdir orange_project
```

It creates a directory named **orange_project** in your WSL home directory. Projects are managed in directories accessible from your IDE. Open VS Code, look at the tool bar and choose **File** -> **Open Folder** it will drop-down the menu like on the picture shown below where you can choose any available directory. Let's choose **orange_project**.

![VS Code drop-down menu for choosing a directory](/img/img7.png)

Creating new files should be as easy, but choose **New File** instead of **Open Folder** at the tool bar. Alternatively you can click on the icons to create the file or the directory. Don't be confused with the word *directory* it's just a fancy way to sa *folder*.

![VS Code icons to create file or folder](/img/img8.png)

Let's create two files in our orange project, The first one named **script.py**, and it will contain the Python programm for fair orange distribution system that we've developed in the Step 2.

```javascript
oranges = 5
kids = ['Aki', 'Kenshin', 'Konrat']
if oranges >= 3:
    for i in kids:
        oranges -= 1
        print(f'{i} received an orange, {oranges} oranges remaining')
else:
    print('We are going to buy more oranges for our kids')
```

![Python script created in VS Code](/img/img9.png)

After creating/updating each file, remember to press **'Ctrl'** + **'S'** or go to **File** and hit **Save**. Otherwise VS Code would not be able to find your files in the project. 

Now create the second file **script.js** which is the same programm, but written in JavaScript.

```python
let oranges = 2;
let kids = ['Aki', 'Kenshin', 'Konrat'];

if (oranges >= 3) {
    for (let i of kids) {
        oranges -= 1;
        console.log(`${i} received an orange, ${oranges} oranges remaining`);
    }
} else {
    console.log('We are going to buy more oranges for our kids');
}
```

![JavaScript script created in VS Code](/img/img10.png)

Again press **'Ctrl'** + **'S'** and lets run our very last command lines into the Terminal.

```bash
pwd
```

```bash
ls
```

```bash
cd orange_project
```

```bash
ls
```

```bash
python3 script.py
```

```bash
node script.js
```

![Python and JavaScript files executed using Terminal](/img/img11.png)

There you go! Your first executed Python and JavaScript files.

## Conclusion

In this article we've accessed the console in the browser, explored the Terminal and even created bilingual project using VS Code. It's way too much for the first experience with programming. Congrats you with such a huge milestone!

Keep in mind that this guide is meant for a complete beginners to boost their confidence with some heavy lifting environment set-up and hands-on experience, but the basics and theory are essential to back-up this practice. So follow the FAQ section below to see the recommendations.


> The words printed here is experience. You must go through the concepts.
> -- <cite>Bad Dog</cite>


Follow me on LinkedIn to stay up to date for upcoming articles in this series of **How to Learn Coding**.

## FAQ from Coding Beginners

### What's better JavaScript or Python?

It depends on what is your final goal. If you trying to build a website then JavaScript is the better choice for the front-end elements. For Machine Learning tasks you are going to use Python modules, that will save you a lifetime amount of work rather than writing them from the scratch in any other language. For a Statistical Learning **R** is the way to go. So focus on your goal and the choice of programming language will come easy.

### Can I pivot from Data Science to Software Engineering?

Indeed many people may find Data Science way too theorethical, thus no guarantees - that you will get to the actual *population*. Afterall Software Engineering is about building actual stuff you can use, whereas Data Science more about pointing at the significance of some data. So Yes, the Software Engineeing is cool, and no shame in switching to that.

### What Should I learn next to be a good coder?

You can start with YouTube [CS50](https://www.youtube.com/watch?v=IDDmrzzB14M&list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4) courses. It will back you up with solid fundamentals to better understand the content you've red so far. It's also essential for growth in Tech companies, so just start with that and keep wondering what's next. Another source I'd recommend is the [interviews.school](https://interviews.school). This website has been developed by Google employee guiding users to prepare for the interview in a big Tech companies such as MANG.

### Should I Read Programming Books?

This is another good resource for a contextual learning. However there is just so much to cover as a beginner. I'd rather focus on IT basics like HTTP, Network Protocols, Binary Code Processing, Data Types and Data Structures, Databases, Git and so much more, so Google Search is better at this point.

### Should I use LLM like GPT and Gemini?

Sure yes! The only scenario I'd not recommend LLM is at the very end of deadline for your homework, cause of the temptation to copy paste the response without even reading it. Always be curiouse and critical to every response LLM would provide you.

Yours,  
Bad Dog