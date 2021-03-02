function zoomOut() {
    $(".large-photo-background").remove();
}

function zoomIn(path) {
    console.log(path)

    var newElement = "<div class=\"large-photo-background\" onclick=\"zoomOut()\">";
    
    newElement += "<img class=\"large-photo\" src=\"" + path + "\">";
    newElement += "</div>";
        
    $(".grid-row").after(newElement);
}
