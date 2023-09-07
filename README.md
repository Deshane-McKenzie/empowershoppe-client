




This website conveys a sense of empowerment and inspiration for aspiring entreprenuers who
are looking to start their own ecommerce business. The word “Empower” suggests this website
will provide and display the tools/functionality necessary for success in an online business. The
word “Shoppe” adds a sense of uniquness and personality to the name. Together, the name
Empower Shoppe implies a business that is focused on empowering entrepreneurs to achieve
their dreams and create successful online businesses using this website as an example along
with other resources the company provides for sale.


## Tech Stack

**Client:** React

**Server:** Node, Express, Knex

**API:** Stripe

**Database** MySQL


## Roadmap

1 - Get all required assets and site data (ex. product names & descriptions)

2 - Setup Client/Server side files with boiler plate code for all pages

3 - Add information needed to Database

4 - Complete CRUD for backend & test in Postman

5 - Complete Header/Footer on website

6 - Complete Product Page on website

7 - Complete Stripe API functionality (backend)

8 - Complete Checkout Page (frontend)

9 - Complete Home Page (frontend)

10 - Make sure code is clean/ Comments are made

11 - Deploy Project

12 - Update localhost links to the URL links & Test website functionality
## Features

- Menu as Modal onClick for Mobile screen
- Available on Mobile/Tablet/Desktop screen sizes
- Search Bar Functionality
- Product Page functionality onCLick for each product
- Add to Cart & Checkout Functionality using Stripe
- Funcionality that connects to & updates Database
- FRONTEND - Create and Read for Reviews on Product
- BACKEND - CRUD for Reviews on Product Page (Create, Read, Update, Delete)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#URL

#DATABASE (DB) CONFIG

`DB_LOCAL_DBNAME`='Enter your database name here'

`DB_LOCAL_USER`='Enter your username here'

`DB_LOCAL_PASSWORD`='Enter your password here'

#STRIPE API

`STRIPE_SECRET_KEY`= 'Enter your Stripe secret key here'
## API Reference

#### Get all Product Information

```http
  GET /product
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| N/A | N/A | Retrieve all products with all info from the Database |

#### Get Product with Reviews included

```http
  GET /product/:product_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |

#### Edit Product Review (For Admin)

```http
  PUT /product/reviews/:review_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Review to edit |

#### Delete Product Review

```http
  DELETE /product/reviews/:review_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Review to delete |

#### Get all Reviews

```http
  GET /reviews
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| N/A     | N/A | Retrieves all review info for all products |

#### Get single Review by ID

```http
  GET /reviews/:review_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Review to fetch |

#### Post a Review

```http
  POST /reviews
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`     | `string` | **Required**. Id of Product to post to. (param) |

#### Edit a Review

```http
  PUT /reviews/:review_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Review to edit |

#### Delete a Review

```http
  DELETE /reviews/:review_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Review to delete |

#### Get Order_id (Stripe Payment)

```http
  GET api/payment/success
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| N/A      | N/A | Retreives order_id to delete |

#### Post to Stripe API

```http
  POST api/payment
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| N/A      | N/A | Posts to Stripe, then database once payment is successful |


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Lessons Learned

1 - Know what things are called

A lot of time was used looking for a solution to a problem without knowing first what all of the terms I needed were called. I could've saved a lot of time by figuring out the terms first and natually finding the answer after.

Solution: Understood concepts as much as I could and searched for terms first then used the terms to save time finding the solutions to the problems

2 - Always take time to Plan before you start writing code

I followed this throughout majority of my project except for with the Stripe API functionality (frontend & backend). I wouldn't have had the amount of errors and confusion I had if I had taken time upfront to understand the documentation, steps involved and how I was going to structure the code for it to work.

Solution: Understood terms needed, read through documentation more, got advice and began to start writing the code

3 - Be prepared to revise your initial plan when coding with a deadline

I thought I would've been able to finish everything I had planned even after cutting some of my ideas, but I underestimated the amount of time it would take to complete my initial plan. 

Thankfully it was easy to revise my plan because I had only invested time into the most important aspects of my website at the time of realization.

Solution: Through experience I will be able to better determine how long a task will take me to do

4 - Read the Documentation

The time it took to figure out how to use something like the Stripe API would have been reduced if I had gotten more comfortable with reading the documentation fully. I've learned it is possible to get better at going through documentation to find what you need faster.

5 - Understand Error Messages (in the order they started)

When coding, I learned even if you are sure you know what to do, always check your code as you go so you can see right away when there's an error. I noticed there may be an error, that was caused as the result of another error which can cause you to re-write code that wasn't necessary.

Solution: Solving the root problem first after understanding what it means prevented the other errors in some cases
## Appendix

CRUD was completed on the backend but only Create and Read was done on the front end in an effort to prioritize the User experience while using the website since a Guest shouldn't be able to edit and delete other Users' reviews.

There will be further updates made to EmpowerShoppe and the plan is to add User Authentication using OAuth to allow for CRUD based off of the Reviews they leave ONLY, when signed into their account.

Other features will be created to enhance the User experience and truly allow for an ecommerce website that aspiring entrepreneurs can view as a resource when building ecommerce websites for their business.
## Feedback

If you have any feedback, please reach out to me at empowershoppe@gmail.com

