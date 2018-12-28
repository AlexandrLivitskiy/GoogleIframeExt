var TIMEOUT = 777;

document.body.style = "display: none";
var frame = document.createElement("iframe");
frame.id = "iFrame";
frame.style = "top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: none; display: none";
frame.width = "100%";
frame.height = "100%";
frame.setAttribute("frameborder", "0");
frame.src = window.location;
document.lastChild.appendChild(frame);

function newGoogle() {
    var body = document.body;
    if (body) document.lastChild.removeChild(body);
    var newBody = document.createElement("body");
    var frameDoc = document.getElementById("iFrame").contentWindow.document;
    var searchResult = frameDoc.getElementById("search");
    if (searchResult) {
        var resultAr = searchResult.getElementsByTagName("h3");
        for (var i = 0; i < resultAr.length; i++) {
            var elem = document.createElement("p");
            elem.innerHTML = "<a href=\"" + resultAr[i].parentElement.href + "\">" + resultAr[i].innerText + "</a>";
            newBody.appendChild(elem);
        }
    }
    document.lastChild.appendChild(newBody);
    setTimeout(newGoogle, TIMEOUT);
};

frame.onload = function () {
    setTimeout(newGoogle, TIMEOUT);
};