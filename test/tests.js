var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed



var foobar = {
  inputOriginal: function() {
  	        var prev = localStorage.fileInput;
        parseInput('[Cabecera1]\nentrada  = valor\n; Comentarios\n\n[Cabecera2]\n;no hay valores');
        localStorage.fileInput = prev;
    return document.getElementById('finaloutput').innerHTML;
  },
    localStore: function() {

    if(localStorage){
        return "true";
    }else{
        return "false";
    }

  },
  Url: function() {
  	var url = window.location.pathname;
  		if (url.indexOf('/test/index.html') > -1) {
        return 'true';
  		}
  }
  
};

suite('Ficheros .ini', function() {
	  
	  test('return true -> Url correcta', function () {   
        assert.deepEqual(foobar.Url(),'true');
    });
    
	  test('return true -> Localstorage Disponible', function () {   
        assert.deepEqual(foobar.localStore(),'true');
    });
    

    
    test('Parseado correcto de una cadena', function () {
        var prev = localStorage.fileInput;
        parseInput('[Cabecera1]\nentrada  = valor\n; Comentarios\n\n[Cabecera2]\n;no hay valores');
        assert.deepEqual(foobar.inputOriginal(), '<ol>\n\n\t  <li> <span class="Header"> {\n  "type": "Header",\n  "match": [\n    "[Cabecera1]",\n    "Cabecera1"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Igualdad"> {\n  "type": "Igualdad",\n  "match": [\n    "entrada  = valor",\n    "entrada",\n    "valor"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Comentarios"> {\n  "type": "Comentarios",\n  "match": [\n    "; Comentarios"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Header"> {\n  "type": "Header",\n  "match": [\n    "[Cabecera2]",\n    "Cabecera2"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Comentarios"> {\n  "type": "Comentarios",\n  "match": [\n    ";no hay valores"\n  ]\n} </span>\n\t</li></ol>');
        localStorage.fileInput = prev;
    });
    
    test('Parseado correcto de una cadena 1', function () {
        var prev = localStorage.fileInput;
        parseInput('[Cabecera1]\nentrada  = valor\n; Comentarios\n\n[Cabecera2]\n;no hay valores');
        assert.deepEqual(foobar.inputOriginal(), '<ol>\n\n\t  <li> <span class="Header"> {\n  "type": "Header",\n  "match": [\n    "[Cabecera1]",\n    "Cabecera1"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Igualdad"> {\n  "type": "Igualdad",\n  "match": [\n    "entrada  = valor",\n    "entrada",\n    "valor"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Comentarios"> {\n  "type": "Comentarios",\n  "match": [\n    "; Comentarios"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Header"> {\n  "type": "Header",\n  "match": [\n    "[Cabecera2]",\n    "Cabecera2"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Blancos"> {\n  "type": "Blancos",\n  "match": [\n    "\\n"\n  ]\n} </span>\n\t\n\t  </li><li> <span class="Comentarios"> {\n  "type": "Comentarios",\n  "match": [\n    ";no hay valores"\n  ]\n} </span>\n\t</li></ol>');
        localStorage.fileInput = prev;
    });
    
});
 