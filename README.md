# Burger App

## Overview

A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat and then devour them! Please check out the launched app on Heroku here: https://thawing-lowlands-71191.herokuapp.com/burgers

## Functionality

Using an home-grown ORM, the app has 3 basic CRUD functions

1. READ all entries from the MySQL database and display them to the DOM using Handlebars.
2. UPDATE a selected burger by clicking "Devour It"
    a. hits a route in Express to change its "devoured" status in the MySQL database
    b. re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
3. CREATE a new burger using the "Place Order" form
    a. hits a route in Express to insert a new burger into the MySQL database
    b. re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)
    
Screenshot

<img width="590" alt="burger_shop" src="https://user-images.githubusercontent.com/1817873/33796838-9c446ace-dcca-11e7-9849-a0bb2f90af08.PNG">

Technologies Used:

Javascript nodeJS expressJS npm packages: fs express-handlebars mysql path body-parser CSS: Twitter Bootstrap

License

Copyright 2017 UNC Coding Bootcamp - Parker Preyer
