
//Comunicación con la tabla 'productos' de la bbdd

const connection = require('./db.model');

exports.getAllProducts = () => {

    return new Promise(async (resolve, reject) => { 
        try {
            const data = await connection.query("SELECT * FROM productos")
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })

}

exports.getProductByID = (productID) => {

    return new Promise( async (resolve, reject) => {
        try {
            const data = await connection.query(`SELECT * FROM productos WHERE ID = ${productID}`)
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })

}

exports.insertSingleProduct = (nombreProducto, precioProducto, stock) => {
    
    return new Promise( async (resolve, reject) => {
        try {
            const result = await connection.query(`
                INSERT INTO productos (nombre, precio, cantidad)
                VALUES ("${nombreProducto}", ${precioProducto}, ${stock})
                `)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })

}

exports.updateProduct = (id, nuevoNombre, nuevoPrecio, nuevaCantidad ) => {
    return new Promise(async (resolve, reject) => {
        try {
            const sql = `
            UPDATE productos 
            SET nombre = "${nuevoNombre}", precio = ${nuevoPrecio}, cantidad = ${nuevaCantidad}
            WHERE ID = ${id};
            `
            const result = await connection.query(sql);
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

exports.removeProduct = (id) => {

    return new Promise(async (resolve, reject) => {
        try {
            const sql = `DELETE FROM productos WHERE ID = ${id}`;
            const result = await connection.query(sql);
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
    
}