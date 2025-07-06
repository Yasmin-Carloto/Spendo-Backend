require('dotenv').config({ path: __dirname+'/./../../../.env' });

module.exports = {
    development: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
        host: process.env.DATABASE_HOST,
        dialect: 'mysql',
        port: process.env.DATABASE_PORT,
        logging: false,
        define: {
            timestamps: true
        },
        timezone: '-03:00'
    }
}