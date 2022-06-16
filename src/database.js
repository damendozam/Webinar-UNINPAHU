const mysql = require('mysql');
const {promisify} =require('util');

database={
    host     : 'belxxsbg1rmgmswmdo5v-mysql.services.clever-cloud.com',
    user     : 'utdltlt74njjianc',
    password : 'OE81igcdbg1q7J1Ce8wt',
    database : 'belxxsbg1rmgmswmdo5v'
}

const pool = mysql.createPool(database);

pool.getConnection((err,connection)=>{
    if(err){
        if(err.code == 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code == 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code == 'ECONREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if(connection)connection.release();
    console.log('DB is connection');
    return;
});

pool.query = promisify(pool.query);
module.exports=pool;