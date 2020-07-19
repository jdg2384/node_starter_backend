'use strict';
module.exports = {
 development: {
   client: 'pg',
   connection: 'postgres://localhost/db_dev',
 },
 test: {
   client: 'pg',
   connection: 'postgres://localhost/db_test',
 },
 production: {
   client: 'pg',
   connection: process.env.DATABASE_URL
 }
};

