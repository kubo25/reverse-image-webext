let message = null;

/*
Create all the context menu items.
*/
browser.contextMenus.create({
    id: "search",
    title: "Search for Image on Google",
    contexts: ["all"],
});

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
browser.contextMenus.onClicked.addListener(function(info, tab) {
  if(info.menuItemId === "search"){
      if(message === null){
        var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
        gettingActiveTab.then((tabs) => {
          browser.tabs.sendMessage(tabs[0].id, "alert");
        });
    }
  }
});

browser.runtime.onMessage.addListener(function(message){
    console.log(message);
});