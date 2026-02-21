---
title: "Two approaches to a dummy variables"

date: 2026-02-21

draft: false

tags: ["the shape of data"]

thumbnail: '/img/two_approaches_to_create_a_dummy_data.png'

alt_description: 'Creating dummy variables for different purposes'

slug: "two-approaches-to-create-a-dummy-variable"

description: "Learn about the difference between supervised and unsupervised machine learning and importance of creating dummy variable approaches"

---

> Perfection is a myth. The best solution is simply the one with tradeoffs you can live with.
>
> <p align="right">-- Smartest guy in the room</p>

There are a lot of different Machine Learning algorithms being created each and every day. For the sake of simplicity let's say there are just two categories - they are supervised and unsupervised.

## Supervised Learning

The one we use when we have a specific number or target to predict, it's usually called a dependent variable, as opposed to the data points we use to predict the dependent variable which are called independent variables or predictors. When we are predicting a numerical value it's called regression; when we're predicting a categorical variable it's called classification.

You may have heard of k-nearest neighbours (k-NN), support vector machines, random forest, etc. Using a supervised learning algorithm usually involves splitting your data into two sets. There's training data, where the algorithm tries to adjust the parameters in the function so that the predicted values are as close as possible to the actual values.

After a supervised learning algorithm has been trained, we can use it to make new predictions and to estimate the impact of each independent variable on the dependent variable.

## Unsupervised Learning

These algorithms tend to focus on data exploration - for example, reducing the dimensionality of a dataset to better visualize it, finding how the data points are related to each other, or detecting anomalous data points. In unsupervised learning there is no dependent or independent variable, and there is no split of the dataset; instead the entire dataset is served to the unsupervised algorithm.

My favourite techniques of k-means, hierarchical clustering and principal component analysis are good examples where unsupervised learning is used for market segmentation or reducing dimensions as a preprocessing step to improve a supervised learning algorithm.

## Structured Data and Dummy Variables

Data science and statistical methods usually operate on structured data such as dataframes, which are basically Excel-like tables with columns, rows and strict rules on how the observed data points are inserted.

| Variable 1 | Variable 2 | Variable 3 | Outcome |
| ---------- |:----------:|:----------:|:-------:|
| 0          | 1          | Male       | 3.21    |
| 1          | 5          | Female     | 3.99    |
| 1          | 4          | Female     | 2.70    |
| 0          | 1          | Male       | 3.19    |
| 1          | 5          | Female     | 4.00    |
| 1          | 4          | Non-binary | 1.29    |

This is an example of three independent variables and the dependent variable that we are trying to predict, which is the "Outcome" column. Let's examine the data types of each column:

- **Variable 1** - is a binary numerical column containing only 1 and 0
- **Variable 2** - is a discrete numerical value column that takes whole numbers only
- **Variable 3** - is a categorical variable representing gender

Some algorithms accept categorical values, but most of them do not. Therefore data manipulation is required to convert categorical text data into numerical values.

| Variable 1 | Variable 2 | Variable Male | Variable Female | Outcome |
| ---------- |:----------:|:-------------:|:---------------:|:-------:|
| 0          | 1          | 1             | 0               | 3.21    |
| 1          | 5          | 0             | 1               | 3.99    |
| 1          | 4          | 0             | 1               | 2.70    |
| 0          | 1          | 1             | 0               | 3.19    |
| 1          | 5          | 0             | 1               | 4.00    |
| 1          | 4          | 0             | 0               | 1.29    |

Notice how the Non-binary observation has 0 in both columns - Variable Male and Variable Female. That's where we have two different ways to feed the algorithm with gender values.

## n-value dummy variables

We have three distinct values such as Male, Female and Non-binary, hence n equals 3. With n-value dummy variables we map gender in the following manner:

```
Male       → (1, 0, 0)
Female     → (0, 1, 0)
Non-binary → (0, 0, 1)
```

This ensures that each category is equally distant from the others. The Euclidean distance between any two categories is:

```
distance(Male, Female)       = sqrt((1-0)^2 + (0-1)^2 + (0-0)^2) = sqrt(2) ≈ 1.41
distance(Male, Non-binary)   = sqrt((1-0)^2 + (0-0)^2 + (0-1)^2) = sqrt(2) ≈ 1.41
distance(Female, Non-binary) = sqrt((0-0)^2 + (1-0)^2 + (0-1)^2) = sqrt(2) ≈ 1.41
```

![Three value dummy variable](/img/img44.png)

## n-1 dummy variables

Using only 2 dummy variables means we drop one category:

```
Male       → (1, 0)
Female     → (0, 1)
Non-binary → (0, 0)
```

Now let's check the distances on a two-dimensional plane:

```
distance(Male, Female)       = sqrt((1-0)^2 + (0-1)^2) = sqrt(2) ≈ 1.41
distance(Male, Non-binary)   = sqrt((1-0)^2 + (0-0)^2) = sqrt(1) = 1.00
distance(Female, Non-binary) = sqrt((0-0)^2 + (1-0)^2) = sqrt(1) = 1.00
```

Both Male and Female are closer to Non-binary than they are to each other, distorting the true relationships between categories.

![Two value dummy variable](/img/img43.png)

## Tradeoff between n and n-1 approaches

Have you heard of multicollinearity? That's exactly what happens with n-value dummy variables — each variable is completely and linearly determined by the others. Algebraically it's a linear dependence, meaning one column is a linear combination of the other columns.

```
Variable_Male + Variable_Female + Variable_NonBinary = 1  (always)
```

Multicollinearity causes computational problems for linear and logistic regression, so for those algorithms we should use n-1 dummy variables rather than all n.

On the other hand, for algorithms like k-NN where distances between data points are crucial, we don't want to drop any category, as that would skew the distances and lead to suboptimal performance.