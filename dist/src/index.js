import { CvCubePersp } from './cvCubePersp.js';
import { Input } from './Input.js';
var canvas;
var graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
//const miCanvas:CanvasLocal = new CanvasLocal(graphics, canvas);
var miCanvas = new CvCubePersp(graphics, canvas);
miCanvas.paint();
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
}
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    //
    readObject(new Input(contenido));
    elemento.innerHTML = contenido;
}
function readObject(inp) {
    //for (; ;) {
    var i = inp.readInt();
    console.log(i);
    i = inp.readInt();
    console.log(i);
    i = inp.readFloat();
    console.log(i);
    i = inp.readInt();
    console.log(i);
    //}
}
document.getElementById('file-input')
    .addEventListener('change', leerArchivo, false);
