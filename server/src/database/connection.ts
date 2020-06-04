import knex from 'knex';
import path from 'path';

const connection = knex({
    client:'sqlite3',
    connection:{
        filename: path.resolve(__dirname,'database.sqlite'),
    },
    pool:{
        max:50,
        min:2
    },
    acquireConnectionTimeout:10000,
    useNullAsDefault:true,
})

export default connection;