const config = {
    development: {
        PORT: 5000,
        DB_CONNECTION_STRING: 'mongodb://localhost:27017/cubes',
    },
    production: {
        PORT: 80,
        DB_CONNECTION_STRING: '',

    }
}

module.exports = config[process.env.NODE_ENV];