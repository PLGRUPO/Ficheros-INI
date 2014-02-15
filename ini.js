"use ______"; // Use ECMAScript 5 strict mode in browsers that support it

$(document)._____(function() {
   $("#fileinput").______(calculate);
});

function calculate(evt) {
  var f = evt.target.files[0]; 

  if (f) {
    var r = new __________();
    r.onload = function(e) { 
      var contents = e.target.______;
      
      var tokens = lexer(contents);
      var pretty = tokensToString(tokens);
      
      out.className = 'unhidden';
      initialinput._________ = contents;
      finaloutput._________ = pretty;
    }
    r.__________(f); // Leer como texto
  } else { 
    alert("Failed to load file");
  }
}

var temp = '<li> <span class = "<%= ______ %>"> <%= _ %> </span>\n';

function tokensToString(tokens) {
   var r = '';
   for(var i in tokens) {
     var t = tokens[i];
     var s = JSON.stringify(t, undefined, 2);
     s = _.template(temp, {t: t, s: s});
     r += s;
   }
   return '<ol>\n'+r+'</ol>';
}

function lexer(input) {
  var blanks         = /^___/;
  var iniheader      = /^________________/;
  var comments       = /^________/;
  var nameEqualValue = /^________________________/;
  var any            = /^_______/;

  var out = [];
  var m = null;

  while (input != '') {
    if (m = blanks.____(input)) {
      input = input.substr(m.index+___________);
      out.push({ type : ________, match: _ });
    }
    else if (m = iniheader.exec(input)) {
      input = input.substr(___________________);
      _______________________________________ // avanzemos en input
    }
    else if (m = comments.exec(input)) {
      input = input.substr(___________________);
      _________________________________________
    }
    else if (m = nameEqualValue.exec(input)) {
      input = input.substr(___________________);
      _______________________________________________
    }
    else if (m = any.exec(input)) {
      _______________________________________
      input = '';
    }
    else {
      alert("Fatal Error!"+substr(input,0,20));
      input = '';
    }
  }
  return out;
}
