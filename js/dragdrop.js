$(document).ready(function () {
    var dropZone = document.getElementById('dragandrophandler');
    dropZone.addEventListener('drop', handleFileSelect, false);
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('dragleave', handleDragLeave, false);
});


function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();


    var files = evt.dataTransfer.files;

    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        if (f) {
            var r = new FileReader();
            r.onload = function (e) {
                var contents = e.target.result;

                var tokens = lexer(contents);
                var pretty = tokensToString(tokens);

                out.className = 'unhidden';
                initialinput.innerHTML = contents;
                finaloutput.innerHTML = pretty;

                if (window.localStorage) {
                    localStorage.initialinput = contents;
                    localStorage.finaloutput = pretty;
                }
            }
            r.readAsText(f);
            output.push(r);
        } else {
            alert("Failed to load file");
        }
    }
    document.getElementById('finaloutput').innerHTML = '<ul>' + output.join('') + '</ul>';

    evt.target.style.background = "white";

}



function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.target.style.background = "#c9e8f3";
}

function handleDragLeave(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.target.style.background = "white";
}