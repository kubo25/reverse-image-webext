document.addEventListener("contextmenu", function(e){
    let message;
    
    if(e.target.tagName === "IMG"){
        message = e.target.src;
        browser.runtime.sendMessage(message);
    }
    
});

browser.runtime.onMessage.addListener()