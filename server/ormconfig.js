require("dotenv").config();

module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "synchronize": false,
  "logging": false,
  "migrationsRun": false,
  "insecureAuth": true,
  "entities": [
    "src/entity/*.ts"
  ],
  "migrations": [
    "src/migration/*.ts"
  ],
  "subscribers": [
    "src/subscriber/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}