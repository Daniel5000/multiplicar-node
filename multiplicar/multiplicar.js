//requireds
const fs = require('fs');
const colors = require('colors');


listarTabla = (base, limite) => {
    if (!Number(base)) {
        reject(`El valor introducido ${base} no es nùmero`);
        return;
    }

    if (!Number(limite)) {
        reject(`El valor introducido ${limite} no es nùmero`);
        return;
    }

    console.log('==============================='.green)
    console.log(`tabla de ${base}==`.green);
    console.log(`===============================`.green);

    for (let index = 0; index <= limite; index++) {
        console.log(`${ base }*${ index }=${ base*index }`);
    }


}

crearArchivo = (base, limite = 5) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es nùmero`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${ base }*${ i }=${ base*i } \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}