

# ORU Phones Backend API Documentation

This document provides an overview of the 5 available routes of the ORU Phones website backend API, including the base URL and details on the filters and requirements for each route.

## Base URL

The base URL for the ORU Phones website backend API is `https://oru-backend.onrender.com/`.

## Routes

### Route 1: `/gettable/1`

Returns users with income lower than $5 USD and have a car of brand "BMW" or "Mercedes".

#### Filters:
- Income less than $5 USD
- Car brand is "BMW" or "Mercedes"

### Route 2: `/gettable/2`

Returns male users which have phone price greater than $10,000.

#### Filters:
- Gender is male
- Phone price greater than $10,000 USD

### Route 3: `/gettable/3`

Returns users whose last name starts with "M" and have a quote character length greater than 15 and email includes his/her last name.

#### Filters:
- Last name starts with "M"
- Quote character length greater than 15
- Email includes user's last name

### Route 4: `/gettable/4`

Returns users which have a car of brand "BMW", "Mercedes", or "Audi" and whose email does not include any digit.

#### Filters:
- Car brand is "BMW", "Mercedes", or "Audi"
- Email does not include any digit

### Route 5: `/gettable/5`

Returns the data of top 10 cities which have the highest number of users and their average income.

#### Filters:
- None

## Note

The API response may be slow due to the use of a free tier web service which limits the speed.
