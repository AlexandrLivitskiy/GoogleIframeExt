document.lastChild.lastChild.style = "display: none";
var frame = document.createElement("iframe");
frame.id = "iFrame";
frame.style = "top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: none display: none";
frame.width = "100%";
frame.height = "100%";
frame.setAttribute("frameborder", "0");
frame.src = window.location.href;
document.lastChild.appendChild(frame);
var oldBody = document.lastChild.children[1];
document.lastChild.removeChild(oldBody);
window.onload = function() {
    var newBody = document.createElement("body");
    var frameDocument = document.lastChild.lastChild.contentDocument;
    var s = frameDocument.getElementById("search");
    if (s) {
        var results = s.getElementsByTagName("h3");
        for (var i = 0; i < results.length; i++) {
            var newLine = document.createElement("p");
            newLine.innerText = results[i].innerText;
            newBody.appendChild(newLine);
        }
        document.lastChild.appendChild(newBody);
    }
};
