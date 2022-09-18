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

## Routes

## GET

1. Go to your url that you set on `.env` bejore E.g:

    `http://localhost:3000/`

that let you see the main page, also you can aply some `filters` in the url like:

    name, tags, sale, sort, limit, skip and price, price also admits a range of prices E.g: `http://localhost:3000/?price=10-50`

2. Go to your url/api/adverts to see the API E.g:

    `http://localhost:3000/api/adverts`

that let you see the API with all the adverts, also you can aply the same filters than the main page.

## POST
    You can post your own adverts on the website using Postman.




