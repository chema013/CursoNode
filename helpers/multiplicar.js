const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar, hasta ) => {

    try {
        let salida = '';
        let consola = '';

        consola += '=======================================\n'.green;
        consola += 'Tabla del: ' + colors.blue( base + '\n');
        consola += '=======================================\n'.green;

        salida += '=======================================\n';
        salida += 'Tabla del: ' + base + '\n';
        salida += '=======================================\n';

        for (let i = 0; i <= hasta; i++) {
            consola += `${base} ${ 'X'.magenta } ${i} ${ '='.magenta } ${base*i}\n`;
             salida += `${base} ${ 'X' } ${i} ${ '=' } ${base*i}\n`;
        }
        if (listar) console.log(consola);
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
        return await `Tabla del ${base} creado`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}