document.body.style = "display: none";
var frame = document.createElement("iframe");
frame.id = "iFrame";
frame.style = "top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: none; display: none";
frame.width = "100%";
frame.height = "100%";
frame.setAttribute("frameborder", "0");
frame.src = "https://www.google.com";
document.lastChild.appendChild(frame);
frame.onload = function() {
    var body = document.body;
    if (body) document.lastChild.removeChild(body);
    var newBody = document.createElement("body");
    var elem = document.createElement("p");
    elem.innerText = "Hi Lev!";
    newBody.appendChild(elem);
    document.lastChild.appendChild(newBody);
}