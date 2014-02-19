function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var f = evt.dataTransfer.files[0];
    if (f) {
        var r = new FileReader();
        r.onload = function(e) { 
            var contents = e.target.result;
			parseInput(contents);
        }
        r.readAsText(f);
    } else { 
        alert("Failed to load file");
    }
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
}

var dropZone = document.getElementById('fileinput');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);
