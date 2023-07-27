# Music Shop App
Welcome to the Music Shop Application repository! This is the platform for our online music shop, where music enthusiasts can discover and purchase their favorite music.<b>Project was created for educational purposes only.</b>Project was fully created on the 
[gitlab](https://gitlab.com/dens-szkot/music-shop-nwta).

## Table of contents
* [Technologies](#technologies)
* [Installation](#installation)
* [Routes](#routes)
* [Authors](#authors)
* [License](#license)
* [Contact](#contact)

## Technologies
#### The Music Shop platform is built using the following technologies:
* <b>Frontend</b>: Typescript, Nextjs, NextAuth, React Redux Toolkit, axios, styled-components, Material UI
* <b>Backend</b>: Nextjs, PrismaORM
* <b>Tests</b>: Cypress (E2E)
* <b>Database</b>: PostgreSQL
* <b>Serverless</b>: AWS ECS, AWS ECR, AWS LoadBalancer, AWS RDS
* <b>Other</b>: Docker, Gitlab CI/CD

## Installation
Clone the repository
```
git clone https://gitlab.com/dens-szkot/music-shop-nwta.git
cd music-shop-nwta
```
Initialize database
* Install postgreSQL (pgAdmin)
* Create server and database (music-shop)
* Generate connection string to the database

Install dependencies
```
npm install --global yarn
yarn
```
Create .env file as below
```
DATABASE_URL = "postgresql://'login':'password'@localhost:5432/music-shop?schema=public"
NEXTAUTH_URL = "http://localhost:8080"
NEXTAUTH_URL_INTERNAL = "http://localhost:8080"
SECRET = "WAJFUIA22189hfWAF2"
```
Start the project
```
yarn dev
```

## Routes
* `/signin`
* `/signup`
* `/`
* `/cart`
* `/order-history`
* `/admin-page`
* `/settings`

## Authors
#### Piotr Wrobel
Dawid Węgrzyn
atryk Dyrcz

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact
Contact me via e-mail: piotrwrobel.ajiiz@gmail.com

Initialized with 🖤
