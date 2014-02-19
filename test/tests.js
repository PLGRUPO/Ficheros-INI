var assert = chai.assert;

suite('Ficheros .ini', function() {
    test('Parseado correcto de una cadena', function () {
        var prev = localStorage.fileInput;
        parseInput('[Cabecera1]\nentrada  = valor\n; Comentarios\n\n[Cabecera2]\n;no hay valores');
        assert.deepEqual(document.getElementById('finaloutput').innerHTML, '<ol>\n\n\t  <li> <span class="Header"> {\n  "type": "Header",\n  "match": [\n    "[Cabecera1]",\n    "Cabecera1"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Igualdad"> {\n  "type": "Igualdad",\n  "match": [\n    "entrada  = valor",\n    "entrada",\n    "valor"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Comentarios"> {\n  "type": "Comentarios",\n  "match": [\n    "; Comentarios"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Header"> {\n  "type": "Header",\n  "match": [\n    "[Cabecera2]",\n    "Cabecera2"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Comentarios"> {\n  "type": "Comentarios",\n  "match": [\n    ";no hay valores"\n  ]\n} </span>\n\t</li></ol>');
        localStorage.fileInput = prev;
    });
});
