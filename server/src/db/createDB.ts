import mysql2 from 'mysql2';
import * as dotenv from 'dotenv';
dotenv.config();

export default () => {
  const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    insecureAuth: true
  });

  connection.connect((err) => {
    if (err) throw err;
    connection.query(`CREATE DATABASE IF NOT EXISTS ??`, process.env.DB_NAME), (err: string) => {
      if (err) throw err;
      console.log('Database created');
    };
    connection.end();
  });
};