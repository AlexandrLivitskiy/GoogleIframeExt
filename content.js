window.onload = function() {
    var offers = document.getElementsByClassName("offer-wrapper");
    for (var i = 0; i < offers.length; i++) {
        var link = offers[i].getElementsByTagName("a")[1].href.split("#")[0];
        var p = offers[i].getElementsByTagName("tr")[1].getElementsByClassName("lheight16")[0];
        addViewsCount(p, link);
    }
};

function addViewsCount(el, uri) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', uri, true);
    xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        var views = this.response.split("Перегляди:<strong>")[1].split("</strong>")[0];
        el.innerHTML = el.innerHTML + "<font color=\"red\"> Просмотров: " + views + "</font>";
        console.log(views);
    };
    xhr.send(JSON.stringify({}));
}