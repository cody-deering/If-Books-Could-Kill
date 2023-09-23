# If-Books-Could-Kill

## Description
If Books Could Kill is a Full Stack e-commerce web application where users register for an account, browse a dataset of books, add the books to their cart, and purchase the books within their cart. This application keeps record of the user's purchase history by requesting the user to authenticate into the application.

## Table of Contents:

- [Description](#description)
- [Deployed Link](#deployed-link)
- [Project Requirements](#project-requirements)
- [Acceptance Criteria](#acceptance-criteria)
- [User Stories](#user-stories)
- [Output](#output)
- [Wireframes](#wireframes)
- [Collaborators](#collaborators)
- [Technologies Used](#technologies-used)
- [License](#license)
- [How to Contribute](#how-to-contribute)

## Deployed Link
https://if-books-could-kill-4b2d6d5c1cfb.herokuapp.com/

## Project Requirements
1. Node.js and Express.js to create a RESTful API.
2. Use Handlebars.js as the template engine
3. Use MySQL and the Sequilize ORM for the database
4. Have both GET and POST routes for retrieving and adding new data.
5. Use at least one new library, package, or technology that we haven't discussed.
6. Have a folder structure that meets the MVS paradigm
7. Include authentication (express-session and cookies)
8. Protect API keys and sensitive information with environments variables.
9. Be deployed using Heroku (with data).
10. Have a polished UI.
11. Be responsive.
12. Be interactive.
13. Meet good-quality coding standards.
14. Have a professional README.

## Acceptance Criteria

```
SCENARIO: The user views the login page
  GIVEN the user navigates to the URL
  WHEN the page displays
  THEN the user views the username and password fields
  WHEN the user clicks the "Create an account" link
  THEN the Create Account modal window displays
  AND the First Name, Last Name, Email, and Password fields display
  AND the Create Account and Cancel buttons display
  WHEN the user clicks the Create Account button
  THEN the user is navigated to the home page

SCENARIO: The user views the homepage
  GIVEN the user has signed in
  WHEN the home page displays
  THEN the user views the navigation bar
  AND the navigation bar has the title "If Books Could Kill"
  AND the navigation bar has a search text box
  AND the user's name displays in the top right-hand corer
  AND the cart displays in the top right-hand corner to the right of the user's name
  AND the "Picks of the Month" section displays with a list of books
  AND the "Employee Favorites" section displays with a list of books

SCENARIO: The user adds a book to their cart
  GIVEN the user has signed in
  WHEN the user has clicked the "Add to Cart" button
  THEN the cart displays a "1" in a red circle
  AND the user remains on the homepage

SCENARIO: The user seraches for a book
  GIVEN the user is signed in
  WHEN the user enters the title of a book in the search field
  AND the user clicks the "Search" button
  THEN the user is navigated to a page with the searched book (if available)
  AND other books similar to the searched book display

SCENARIO: The user checkouts out from their cart
  GIVEN the user has added one or more books to their cart
  WHEN the user clicks the cart symbol in the top right-hand corner of the page
  THEN the user is navigated to the checkout page
  AND the selected book(s) display in the cart
  AND the purchase button displays
```

## User Stories

```
AS a user
I WANT the ability to If Books Could Kill site
SO I can login to the site

AS a user
I WANT the ability to create an account if I do not already have a login
SO that I am able to purchase books

AS a user
I WANT the ability to have a navigation bar
SO I can navigate to the genre of my choice

AS a user
I WANT the ability to have a search bar in the navigation bar
SO that I can search for any book of my choice

AS a user
I WANT the ability to have a homepage
SO that the most popular and employee favorites books will display

AS a user
I WANT the ability to have a genre page
SO that when the genre is searched or selected the books within that genre will display

AS a user
I WANT the ability to have a checkout page
SO I have the ability to purchase books

AS a user
I WANT the ability to have a confirmation modal
SO that I have confirmation that my books were purchased
```

## Output

<img width="1274" alt="Login Page" src="https://github.com/cody-deering/If-Books-Could-Kill/assets/134161776/1c498407-2ec8-46a5-a643-8693954f577c">

<img width="1276" alt="Homepage" src="https://github.com/cody-deering/If-Books-Could-Kill/assets/134161776/91dbd856-a6e1-465c-94d3-d08dee28b525">

<img width="1261" alt="Checkout Page" src="https://github.com/cody-deering/If-Books-Could-Kill/assets/134161776/8150eb33-1c27-4ae4-9749-facc0fc2b1a2">


## Wireframes

**Note: Wireframes include future improvements visually and functionally as an ongoing process to improve the application.

![Login Page](https://github.com/cody-deering/If-Books-Could-Kill/assets/134161776/f8d55e84-ef5a-4cda-b638-388136bf664e)

![Create Account Modal Window](https://github.com/cody-deering/If-Books-Could-Kill/assets/134161776/8831fb0d-a85c-49fc-a7d4-01b55bab91e0)

![Homepage 1 - Top of Page](https://github.com/cody-deering/If-Books-Could-Kill/assets/134161776/0e4da468-95e5-4bd5-8b5f-1173f130b4ca)

![Book Search Page](https://github.com/cody-deering/If-Books-Could-Kill/assets/134161776/22fa5e0f-99e4-4475-98ab-12fd7b4d6f27)

![Genre Page](https://github.com/cody-deering/If-Books-Could-Kill/assets/134161776/647826ce-ea8f-4949-975f-6e66555d10c4)

![Checkout Page](https://github.com/cody-deering/If-Books-Could-Kill/assets/134161776/0249586e-5559-4919-b244-649a89333c57)


## Collaborators

1. Austin Dancer
2. Coding Deering
3. Jeremy Ethridge
4. Elaine Luckey

**Assistance from Edward Kim


## Technologies Used
1. Kaggle Datasets
2. BCrypt hash password
3. Moment.js
4. Bootstrap
5. Node.js
6. Express.js
7. Handlebars.js
8. MySQL

## License

Please see the license in the code.

## How to Contribute
- Request access to the repo
- Clone the repo to your local machine
- All pull requests are welcome

## License: 
Please refer to the LICENSE in the repo
