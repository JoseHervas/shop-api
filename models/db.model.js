//Conexión con la bbdd

const mysql = require('mysql');
const mysql_config = require('../config/secretos')

//WRAPPER
class Database {
    constructor(config){
        this.connection = mysql.createPool(config)
    }
    query(sql){
        return new Promise((resolve, reject) => {
            this.connection.query(sql, (error, result) => {
                if (error){
                    console.log("hola")
                    return reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    }
    // close(){
    //     return new Promise((resolve, reject) => {
    //         this.connection.end( (error) => {
    //             if (error) {
    //                 reject(error)
    //             } else {
    //                 resolve()
    //             }
    //         } )
    //     })
    // }
}

//la config debe estar en un archivo a parte (por temas de seguridad)
const connection = new Database(mysql_config)

module.exports = connection;