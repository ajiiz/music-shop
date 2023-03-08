# music-shop-app
Project was fully created on the gitlab. All commits and releases are avaliable here 
*[LINK](https://gitlab.com/dens-szkot/music-shop-nwta)*

## Table of contents
* [Status](#status)
* [Technologies](#technologies)
* [Routes](#routes)
* [Instruction](#instruction)
* [Authors](#authors)
* [License](#license)
* [Contact](#contact)

## Status
#### Ended

## Technologies
#### Project is created with:
* Nextjs
* NextAuth
* React Redux Toolkit
* React Hooks
* Cypress E2E Testing
* Prisma ORM
* PostgreSQL
* Axios
* Styled Components
* Material UI
* AWS ECS
* AWS ECR
* AWS LoadBalancer
* AWS RDS
* Docker
* Gitlab CI/CD

## Routes
* /signin - login
* /signup - register
* / - main
* /cart - cart
* /order-history - order history
* /admin-page - admin panel
* /settings - account settings

## Instruction
#### Pull the project
```
git clone https://gitlab.com/dens-szkot/music-shop-nwta.git
cd music-shop-nwta
```
#### Initialize database
* Install postgreSQL (pgAdmin)
* Create server and database (music-shop)
* Generate connection string to the database
#### Install and generate the packages
```
npm install --global yarn
yarn
```
#### Create .env file as below
```
DATABASE_URL = "postgresql://'login':'password'@localhost:5432/music-shop?schema=public"
NEXTAUTH_URL = "http://localhost:8080"
NEXTAUTH_URL_INTERNAL = "http://localhost:8080"
SECRET = "WAJFUIA22189hfWAF2"
```
#### Start the project
```
yarn dev
```

## Authors
#### Piotr Wrobel
[portfolio](https://www.pwrobel.xyz/)
[gitlab](https://gitlab.com/ajiiz)
#### Dawid Węgrzyn
#### Patryk Dyrcz

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact
#### Contact me via e-mail: piotrwrobel.ajiiz@gmail.com

Initialized with 🖤
