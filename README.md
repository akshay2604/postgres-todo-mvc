## Sample todo app in Postgres, expressJS with Sequelize

### Install

```
npm install
```

#### Start Server

```
npm run start
```

### Create a DB

```
createdb YOUR_DB_NAME
```
#### Edit server/config.json
```
{
  "development": {
    "username": "waiyaki",
    "password": null,
    "database": "todos-dev",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "waiyaki",
    "password": null,
    "database": "todos-test",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  }
}
```

###  Run Migration to persist models to your DB

```
sequelize db:migrate
```