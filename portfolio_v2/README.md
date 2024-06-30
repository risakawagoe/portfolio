# Portfolio Version 2
Developed with React in 2024

## Updates
Added a backend and a separate manager (also in React) to allow for easy content updates.

## Local Installation
Create a .env file at the root of the project and include the following:
```
REACT_APP_PORTFOLIO_DB_SERVICE_ENDPOINT=""
```
Run the following:
```
npm install
npm start
```

## Dockerization
```
docker build --build-arg PORTFOLIO_DB_SERVICE_ENDPOINT="<YOUR_ENDPOINT>" -t <username>/<imagenamge>:<tag> .
```