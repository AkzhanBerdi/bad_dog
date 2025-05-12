---
title: "Statistical Data Analysis 101"

date: 2024-02-01

draft: false

tags: ["stats"]

thumbnail: '/img/statistical_data_analysis_101.png'

alt_description: 'Statistical Data Analysis in 4 basic steps'

slug: "statistical-data-analysis-101"

description: "Learn about Statistical Analysis, Central Tendency, Variability, Variance, neural networks and back propagation."

---

## Bloody Beginners Guide. Part I

In this article we will take a look at the basic concepts of Statistical Analysis. We will be using the R programming language to visualize essential details, so download [RStudio Desktop](https://posit.co/download/rstudio-desktop/) and install both R and R studio. If you are not comfortable programming at all, then check out my previous post about [how to start coding](https://baddogdata.com/how-to-learn-coding) and build the basics of using Terminal and VS Code. Even though it's not covering the R, it still a good point to start.

Now let's kick-off with the following command to generate random dataset. Print the entire block of the code into R studio editor, then select the code you want to run and press *Ctrl + Enter*. 

```r
set.seed(123)  # Allows you to reproduce the same random data as mine
data <- rnorm(100, mean = 50, sd = 10) # Generating a random dataset
data # Calling the dataset to be printed in the console
```

Everything after the hash sign **#** is a comment for you ro read, it's not part of the code.

## Measure of Central Tendency

The most basic concept of statistical data analysis is the average expected value. Let's find the mean and median average points in our dataset that we've just created. Building the visual graphs helps to make it clear at glance. We will start with the mean.

### Arithmetic Mean

The mean, of course, is just a ratio between the amount of values and total number of observations. It sounds simple, but look at this scary formula. It's worth breaking it down and memorizing, as you will see it more often on your learning journey. 

$$
\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i
$$

#### Formula Explanation

The mean, denoted by $\bar{x}$ , which equals to the sum of all values expressed by the sign $\sum_{i=1}^n {x_i}$ , and the implied $\frac{1}{n}$ multiplication is merely a division by the number of observations. It's fair enough to interpret this formula as following.

$$
\bar{x} = \frac{{x_1} + {x_2} + ... +{x_n}}{N}
$$

Now enough of math! Let's visualize our dataset using histogram. Also we will draw two absolute lines, the red line indicating the mean, and the green line representing the median.

```r
# Plotting the data
hist(data, main = "Measure of Central Tendency", 
           xlab = "Values", 
           ylab = "Observations",
           col = "lightblue", border = "black")

# Adding a vertical line for the mean and median
abline(v = mean(data), col = "red", lwd = 2)
abline(v = median(data), col = "green", lwd = 2)
# Getting the values
print(mean(data))
print(median(data))
```

![Normal Distribution with mean and median](/img/img12.png)

Looking at the graph we can see the mean and median both at the center, as expected. The console line calculated \$50.90 and \$50.61 as the mean and median respectively.

But what is this median and why do we need it?

### Median

Unlike the mean, the median, denoted by $\tilde x$ it's the exact middle value in the dataset. It's pretty much straightforward with odd numbers of observations, you just sort the spendings in ascending order and point to the value in the middle. As the formula suggests - divide the number of observations by 2 and round it upwards. That's your median! 

$$
\tilde{x} = {x}_\frac{n+1}{2}
$$

However our dataset has even 100 values. In this case the division by 2 would not result with the value in the middle. So in this case we have to find the arithmetic mean between the two values closest to the middle. That would be the sum of number 50 and 51, divided by 2.

$$
\tilde{x} = \frac{{X_{(\frac{n}{2})}}+{X_{(\frac{n}{2}+1)}}}{2}
$$

Use the following script to get a new random distribution, but less symmetric this time.

```r
set.seed(123)  # Keep this for reproducibility
# Generating a new random dataset with a longer tail on one side
data <- c(rnorm(80, mean = 50, sd = 10), rnorm(20, mean = 80, sd = 10))

# Plotting the data
hist(data, main = "Measure of Central Tendency", 
           xlab = "Values", 
           ylab = "Observations",col = "lightblue", border = "black")

# Adding an absolute line for the mean and median
abline(v = mean(data), col = "red", lwd = 2)
abline(v = median(data), col = "green", lwd = 2)
# Getting the mean and median value in bash style
cat("Mean:", mean(data), "\n")
cat("Median:", median(data), "\n")
```

![Not Normal Distribution with mean and median](/img/img13.png)

Note how the median and mean are further apart from each other, to be precise they are \$52.78 and \$56.90 respectively. That's due to the fact that we've defined some spendings to be more than \$100. And that's why we use median more often, cause it's resistant to the outliers and always point to the middle value unlike the mean. 

## Quantiles

A quantile divides the dataset into several equal parts. The median is actually a particular case of a quantile which divides the dataset into two quantiles. Let's create a couple of variables using the **'quantile()'** function.

```r
# Defining median using quantiles function
my_median <- quantile(data, probs = c(0.50))

# Creating histogram plot
hist(data, main = "Median", 
     xlab = "Values", 
     ylab = "Observations",col = "lightblue", border = "black")

# Drawing a quantile
abline(v = my_median, col = "orange", lwd =2)
```

![Displaying Median using quantiles function](/img/img14.png)

In this way we divide the dataset into two quantiles, everything above the median and everything below it. The dataset maybe sliced in any given number of quantiles. Let's cut it down to four quartiles.

```r
# Defining quartiles
quartile <- quantile(data, probs = c(0.25,0.50, 0.75))

# Creating histogram plot
hist(data, main = "Quartiles", 
     xlab = "Values", 
     ylab = "Observations",col = "lightblue", border = "black")

# Drawing a quantile
abline(v = quartile, col = "orange", lwd =2)
```

![Displaying quartiles using quntile function](/img/img15.png)

Now we have four equal quantiles in terms of total amount of values, but notice the difference in range. We can keep slicing and dicing the distribution to quintiles and deciles or even percentiles if you need to. But we will move on to the next concept.

## Measure of variability

The Central tendency is not the only measure to look at when analyzing the data. Now imagine you've been set for a business trip to three different cities. Let's check the weather to make an assumptions on how to dress and what clothes to pack in your luggage.

| City     | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday |
| -------- |:------:|:-------:|:---------:|:--------:|:------:|:--------:|
| Lulea    | 0      | 0       | 0         | 0        | 0      | 0        |
| Columbus | -5     | 5       | -5        | 5        | -5     | 5        |
| Dublin   | -30    | -10     | 10        | 10       | 10     | 10       |

If you take the weekly average temperature for each city of Lulea, Columbus or Dublin you will get the exactly same 0&deg;C in every city. We don't care about the mean in this situation, but what we do care about - is the range or spread of the values.

### Range

Calculating the range is pretty simple. You sort the values in ascending order, then find the difference between the maximum and minimum values. However be aware that just like an avarage, the range is quite sensitive for outliers.

$$
x_1 \le x_2 \le... \le x_n
$$

$$
R = x_n - x_1
$$

$$
R_{Dublin} = 10 - (-30) = 40
$$

### Interquartile Range

Since all outliers are usually marginal values, they should lie on either edge of the dataset i.e. within the first or fourth quartile. That's why the Interquartile Range or IQR for short is used to eliminate the outliers impact. We slice the dataset to contain only the second and third quartiles, and that is the sweetest data for us to make an assumptions on. 

$$
IQR = \tilde{x}_{0.75} - \tilde{x}_{0.25}
$$

Let's create a new data for order transactions and group it by the payment providers. Now run the following script to create the dataframe.

```r
set.seed(123) # Keep this for reproducibility

# Create a new dataset for 
data1 <- c(rnorm(50, mean = 150, sd = 30), rnorm(50, mean = 200, sd = 40), 300)
data2 <- c(rnorm(50, mean = 180, sd = 20), rnorm(50, mean = 220, sd = 30), 250)
data3 <- c(rnorm(50, mean = 160, sd = 25), rnorm(50, mean = 210, sd = 35), 270)

# Create the data frame
df <- data.frame(
  Group = rep(c("Jusan", "Halyk", "Kaspi"), each = 101),
  Values = c(data1, data2, data3)
)
```

Further we will use the advance visualization **'ggplot2'** library to create the boxplot that will enable us to assess measures of variability and central tendency alike.

The installation would be required first, and then you can run the boxplot script.

```r
# Installing ggplot2 library
install.packages("ggplot2")
# Importing it
library(ggplot2)
```

```r
# Creating a boxplot
ggplot(df, aes(x = Group, y = Values, fill = Group)) +
  geom_boxplot(notch = TRUE, color = "darkblue", alpha = 0.7) +
  labs(title = "Comparison of Three Groups",
       y = "Values", x = "Groups") +
  theme_bw() +
  scale_fill_manual(values = c("Jusan" = "darkorange", "Halyk" = "darkgreen", "Kaspi" = "#bd1206"))
```

![The boxplot displaying payment providers](/img/img16.png)

Looking at this graph we can see three different plots representing **'Halyk'**, **'Jusan'**, and **'Kaspi'** in green, orange and red respectively.

Think of the sandglass shape like this: the middle line is the median, the whole sandglass thing is the IQR. The bottom part is the second quartile, the top part is the third quartile, above it is the fourth quartile, and below the IQR is the first quartile. And the outlier? It's a lonely point that separated from the Halyk Group boxplot.

If you made it this far, then congrats fellow! You've learn how to perform decent descriptive analysis using measures of Central Tendency and Variablity. The next section would get a little bit tricky, but pretty much exciting for nerds like me.

## Variance

Sometimes we have to understand how far the values in the dataset from the mean or median. That helps both in Statistical and Machine Learning.

### Absolute Deviation

The absolute deviation is the sum of differences between the average and each and every given value of the dataset divided by total observations. The math is pretty much straightforward.

$$
D = \frac{\sum_{i=1}^n(x_i - A)}{n}
$$

However, there is a technical problem with this formula, it would only work if our distribution doesn't have any negative value within it, just like our dataset happens to be.    

![Absolute Deviation of a certain value](/img/img17.png)

Otherwise, just like with the weather example where the negative and positive values cancels eachother out, it would be rather meaningless to have 0 deviation at actual 10 &deg;C range, so for this reason the formula has been modified to use modules like so 

$$
D = \frac{\sum_{i=1}^n|x_i - A|}{n}
$$

Depending on your requirements you may need either an **Absolute Median Deviation** 

$$
D_{(\tilde x_{0,5})} = \frac{\sum_{i=1}^n|x_i - \tilde x_{0,5}|}{n}
$$

Or an **Absolute Mean Deviation**

$$
D_{(\tilde x_{0,5})} = \frac{\sum_{i=1}^n|x_i - \bar x_{0,5}|}{n}
$$

Essentially the same thing, but different point of reference to the average.

## Back Propagation

Module does great job eliminating problem of negative values by using absolutes. However when the task requires optimization for a machine learning algorithms like neural network for instance, then the Absolute Values becomes a huge problem.

How does machine learn to distinguish between cat and dog? It learns through a process of back propagation, it gives a shot saying cat is dog, it then receives an error, this error propagated back to an algorithm optimizing yet another numerous intteration.

At the very core of it's engine, neural networks use function's derivative to adjust itself in case of error. But what happens if the the algorithm use absolute deviation?

![Absolute Value Function](/img/img18.png)

The Absolute Value Function gets to a corner point where the Lipschitz condition is violated, and no derivative available to propagate the error back to the machine, hence neural network algorithm breaks.

### Mean Squared Error

Finding the derivative requires a tangency line that gives machine a new direction to adjust itself. Therefor the Absolute Deviation evolved into **Mean Squared Error** which use square instead of module. 

$$
S^2(A) = \frac{\sum_{i=1}^n(x_i - A)^2}{n}
$$

Thus allows to keep absolute values and function's derivative both at the same time, and that optimizes back propagation to work as expected.

![Tangency Line on a function](/img/img19.png) 

### Sample Variance

The optimization task always requires Mean Squared Error to be as minimum as possible. That's pretty obvious! We want our neural network to be precise, and not making any mistakes, hence the name Mean Squared **Error**. The MSE gets minimum value when the Central Tendency is equal to Arythmetic Mean or $ A = \bar x$ , and that's called **Sample Variance**.

$$
\tilde S^2 = \frac{\sum_{i=1}^n(x_i - \bar x)^2}{n}
$$

It may feel a bit off to use square values, but so what? We don't care about actual values if it allows the machine to learn how to distinguish between cancer and healthy cells, right? 

### Standard Deviation

In the end if the original values are required, we are always allowed to apply the square root to the Sample Variance, and that's how the Standard Deviation kicks into the game.

$$
\tilde S = \sqrt{\frac{1}{n}\sum_{i=1}^n(x_i - \bar x)^2}
$$

That's enough for an introduction into Statistical Data Analysis, I hope you enjoyed.

Yours,  
Bad Dog
