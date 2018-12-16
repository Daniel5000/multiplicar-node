const argv = require('./config/yargs.js').argv;
var colors = require('colors/safe');

const { crearArchivo } = require('./multiplicar/multiplicar.js')


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ` + colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

}