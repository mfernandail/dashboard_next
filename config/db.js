const { createPool } = require('mysql');

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

pool.getConnection(error => {
  if(error) throw error;
  console.log('Databa running');
});

const executeQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, params, (error, data) => {
        if(error) {
          reject(error);
        }
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  executeQuery
}
