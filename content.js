document.addEventListener("contextmenu", function(e){
    var message = null;
    
    if(e.target.tagName === "IMG"){
        message = e.target.src;
    }
    else{
        var img = e.target;
        var style = img.currentStyle || window.getComputedStyle(img, false);
        var url = style.backgroundImage.slice(4, -1);
        
        if(url !== ""){
            message = url.slice(1, -1);
        }
    }
    
    browser.runtime.sendMessage(message);
});

browser.runtime.onMessage.addListener(function(message){
    alert("No image selected!");
});