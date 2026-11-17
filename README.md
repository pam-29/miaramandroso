# Miaramandroso

## About miaramandrodo
Miaramandroso is a crowdfunding web app for agricultural projects in Madagascar. For now, it shows the funding progress of a project (amount collected, days left, progress bar). A purchase simulator and mobile money payment are planned.

## Tech stack
Laravel, React.js, MySQL, Inertia.js, TypeScript and Docker

## How to run it
- Clone te repository
- Create the .env file: cp .env.example .env. Then set the database values in it: DB_CONNECTION=mysql, DB_HOST=mysql
- Start Docker: docker compose up --build
- Create the tables: docker compose exec app php artisan migrate
- Add the project: docker compose exec app php artisan db:seed --class=ProjetSeeder
- Install and start the front end: npm install, then npm run dev
- Open http://localhost:8000
