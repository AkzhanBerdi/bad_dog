---
title: "The Fastest Way to Upload Data into PostgreSQL"

date: 2024-10-27

draft: false

tags: ["data-engineering", "postgresql", "airflow"]

thumbnail: '/img/the_fastest_way_to_upload_data.png'

alt_description: 'Uploading data into PostgreSQL using COPY method'

slug: "fastest-way-to-upload-data-into-postgresql"

description: "Learn how to significantly speed up your PostgreSQL data uploads by switching from INSERT to COPY method"
---

> There are only two hard things in Computer Science: cache invalidation and naming things.
> 
>                                                                                    -- Random Guy from LinkedIn



Recently I changed my job from Data Analyst in a Big Tech Marketplace to a Data Product Manager in Agribusiness Enterprise. And I was freaking out of FOMO concerning that Enterprise company would not challenge me enough to stay on point with technical approach to creative solutions. I gotta say, that I was wrong and my learning curve is as steep as it should be for anyone who changes the jobs in between to seize the learning opportunity.


## The Problem with Pandas Default Insert

Recently our Data Team faced an interesting challenge. Our Airflow DAG was taking forever to upload a DataFrame into PostgreSQL. The culprit? The default pandas `to_sql()` method that uses INSERT statements.

Here's what happens under the hood when you use the default INSERT approach:

```python
df.to_sql('table_name', engine, if_exists='append')
```

This innocent-looking line generates something like this for EACH row:

```sql
INSERT INTO table_name (col1, col2, col3) 
VALUES ('value1', 'value2', 'value3');
```

Imagine doing this millions of times! Each INSERT statement requires a round trip to the database. It's like delivering packages one by one instead of using a container ship. No wonder our DAG was running slower than my previous employer's internet connection.

## Enter the COPY Method

One of the greatest mind in our team comes with the thought "I may have realized the fastest way to upload dataframe into PostgreSQL". Here's the core of the solution:

```python
def psql_insert_copy(table, conn, keys, data_iter):
    dbapi_conn = conn.connection
    with dbapi_conn.cursor() as cur:
        s_buf = StringIO()
        writer = csv.writer(s_buf)
        writer.writerows(data_iter)
        s_buf.seek(0)

        columns = ', '.join('"{}"'.format(k) for k in keys)
        table_name = '{}.{}'.format(table.schema, table.name)
        sql = 'COPY {} ({}) FROM STDIN WITH CSV'.format(
            table_name, columns)
        cur.copy_expert(sql=sql, file=s_buf)
```
Suggesting to use PostgreSQL's COPY command, this beast can handle bulk data loading like it's nothing. Instead of sending individual INSERT statements, COPY streams the data in a single transaction. It's like upgrading from a bicycle courier to a cargo plane!

## The Results Speak for Themselves

<div class="table-container">

| Method | Time to Upload 1M Rows |
|--------|----------------------|
| INSERT | ~20 minutes         |
| COPY   | ~20 seconds         |

</div>

Yes, you read that right. What used to take half an hour now completes in seconds. Our DBAs finally stopped giving us the evil eye during peak load times.

## Let's break it down:

### INSERT Method
**Pros:**
- Simple to implement
- Good for small datasets
- Better for real-time row-by-row updates
- Easier error handling per row

**Cons:**
- Painfully slow for bulk uploads
- Creates heavy network traffic
- Causes database connection overhead
- Makes DBAs cry

### COPY Method
**Pros:**
- Blazing fast for bulk uploads
- Minimal network overhead
- Single transaction
- Makes DBAs smile

**Cons:**
- More complex implementation
- All-or-nothing transaction
- Harder to handle individual row errors
- Not suitable for real-time updates

## Conclusion

If you're dealing with bulk data uploads in PostgreSQL, switching from INSERT to COPY is like upgrading from a Honda Civic to a Ferrari (without the expensive maintenance). Just remember - with great power comes great responsibility. Make sure your data is clean before attempting the upload, as COPY is an all-or-nothing operation.

The full implementation and comparison available in Askin Tamanli [repository](https://github.com/askintamanli/Fastest-Methods-to-Bulk-Insert-Pandas-Dataframe-into-PostgreSQL)

Yours,  
Bad Dog 