# Usage

## First step, set your enviroment
1. Download and install `Node` from `https://nodejs.org/`
2. Download and install `MongoDB` from `https://www.mongodb.com/`
3. Copy `.env.example` into `.env` and set your own config

## If its your first time

    npm run setup

That gonna install all dependencies, run the initDB and run the dev

## If you have install all the dependencies and want to delete the database

    npm run initDB

## For launch the dev if you have allready install all

    npm start

![image](https://user-images.githubusercontent.com/103906418/190901710-f7df55d8-89a3-4d4a-9871-7f91872e7129.png)


## Routes

## GET

1. Go to your url that you set on `.env` bejore E.g:

    `http://localhost:3000/`
    
![image](https://user-images.githubusercontent.com/103906418/190901724-58fed5d2-b280-421b-91c9-855ec0521dbe.png)


that let you see the main page, also you can aply some `filters` in the url like:

    name, tags, sale, sort, limit, skip and price, price also admits a range of prices E.g: `http://localhost:3000/?price=10-50`

2. Go to your url/api/adverts to see the API E.g:

    `http://localhost:3000/api/adverts`

![image](https://user-images.githubusercontent.com/103906418/190901747-82f62713-5fa2-47c6-84e7-68ea2d726531.png)


that let you see the API with all the adverts, also you can aply the same filters than the main page.

## POST
    You can post your own adverts on the website using Postman with the API url E.g: `http://localhost:3000/api/adverts`.
    
![image](https://user-images.githubusercontent.com/103906418/190901801-82c7fcf2-2e81-472b-b568-47d42bf9f786.png)





