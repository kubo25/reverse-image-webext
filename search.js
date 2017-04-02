var message = null;

browser.contextMenus.create({
    id: "search",
    title: "Search for Image on Google",
    contexts: ["all"],
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId === "search"){
        if(message === null){
            var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});

            gettingActiveTab.then((tabs) => {
              browser.tabs.sendMessage(tabs[0].id, "null");
            });
        }
        else if(message === "unsupported"){
            var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});

            gettingActiveTab.then((tabs) => {
              browser.tabs.sendMessage(tabs[0].id, "unsupported");
            });
        }
        else{
            var creating = browser.tabs.create({
                url:"https://www.google.com/searchbyimage?image_url=" + message
            });
            
            message = null;
        }
    }
});

browser.runtime.onMessage.addListener(function(e){
    console.log(e);
    message = e;
});