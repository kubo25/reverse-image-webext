document.addEventListener("contextmenu", function(e){
    var message = null;
    
    if(e.target.tagName === "IMG"){
        message = e.target.src;
    }
    else{
        var img = e.target;
        var style = img.currentStyle || window.getComputedStyle(img, false);
        var url = style.backgroundImage.slice(4, -1);
        
        console.log(url);
        
        if((/\.(gif|jpg|jpeg|tiff|tif|png|bmp|webp)/).test(url)){
            message = url.slice(1, -1);
        }
        else{
            message = "unsupported";
        }
    }
    
    browser.runtime.sendMessage(message);
});

browser.runtime.onMessage.addListener(function(message){
    if(message === "unsupported"){
        alert("This type of image is not supported");
    }
    else{
        alert("No image selected!");
    }
});