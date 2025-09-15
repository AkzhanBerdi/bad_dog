---
title: "AI-powered Assistant for Self-Service Analytics"

date: 2024-05-26

draft: false

tags: ["nlp", "ai", "self-service"]

thumbnail: '/img/ai_powered_assistant_for_self_service_analytics.png'

alt_description: 'Using ChatGPT NLP model for self-service analytics'

slug: "ai-powered-assistant-for-self-service-analytics"

description: "Building Self-Service Analytics using telegram bot and ChatGPT"
---

> You would never be able to hire enough data professionals to meet the data demands of the business, so instead, why not turn the business into data professionals?"
>
>                                                                                     -- Random Guy from LinkedIn

In small start-ups, the demand for data products is ever-growing. As the Lead Data Analyst, I've developed numerous solutions, from automated email reporting systems and comprehensive dashboards integrating external data sources to real-time fraud detection algorithms. However, maintaining these projects makes it challenging to develop new solutions. With budget constraints preventing the hiring of more data professionals, why not empower the business itself to be a Data Product? This article explains how to build Self-Service Analytics using a Telegram bot and ChatGPT's Natural Language Processing (NLP).

## Prerequisites

As mentioned in my [previous article](https://blog.baddogdata.com/how-to-build-data-warehouse-in-activity-schema-with-clickhouse), as a Data Professional, the first step is ensuring denormalization. Data Marts and Data Warehouses are crucial utilities for your Data Team. Having all data in one place makes it easier to deliver business objectives. Once you have consistent data in one place, you are ready to implement AI into your infrastructure.

## User to Assistant Interaction

The following scheme explains how self-service analytics works in 6 simple steps.

![User and NLP interaction scheme](/img/img39.png)

1. User sends a request for data in a specific format.
2. Backend logic utilizes system prompts so NLP understands user intention.
3. NLP returns the SQL query to the backend.
4. Backend logic uses SQL to query the Data Warehouse.
5. Data Warehouse responds with the relevant Data Frame.
6. Backend performs feature processing to return the data in the requested format.

## User Story

Imagine a Digital Marketing Specialist named Zhanibek wants to see the sessions by month. He opens the Telegram chat and asks, "show me sessions by month".

![Chat Bot interaction](/img/img40.png)

The response happens in milliseconds. Zhanibek is very excited; he just retrieved the necessary data without even talking to the Data Team. Now, Zhanibek wants to use this data in a spreadsheet, so he asks, "show me engaged sessions by month in excel".

![Chat Bot export to excel](/img/img41.png)

Zhanibek is amazed by the export to Excel feature, but he realizes that a spreadsheet is not convenient enough to comprehend the trends, so he requests, "show me the chart of activeUsers".

![Chat Bot outputs chart](/img/img42.png)

The number of features depends on your actual goal. If needed you can also add a forecasting feature. However, my goal is to resolve ad-hoc requests so my Data Team can focus on product metrics instead of calling the Google Analytics API every time someone needs the current sessions. So I focused mainly on three features - Querying Database, Export to Excel and Matplotlib Charts.

## Concerns

It's surprising that tech companies often resist implementing AI. The CTO may warn that the lack of control over NLP may lead to critical DDL statements or even SQL injections. The Head of Cyber Security might warn that calling third-party APIs could leak classified information.

These are concerns you must address and manage. For example, set read-only credentials for the user account used under backend logic, so no DELETE operations are permitted.

The NLP model doesn't need to see the actual data, although it works better if a data sample is provided. You can synthesize the data sample so the NLP doesn't access classified data.

[YdataAI](https://github.com/ydataai/ydata-synthetic) is highly recommended service to synthsize data samples.

## Conclusion

Empowering business users with self-service analytics through AI can significantly reduce the burden on your Data Team. By addressing potential security concerns and providing robust tools, you can enable your business to become more data-savvy and self-reliant. This approach not only enhances efficiency but also ensures that your data professionals can focus on delivering Product Metrics.

[GitHub Repo](https://github.com/AkzhanBerdi/telechat)

Yours,  
Bad Dog
