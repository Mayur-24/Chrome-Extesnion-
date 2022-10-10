/**
* In this what we are going to do is listen
* to any updates in our tab system and find the most recent tab
* and check if that is of youtube and if t is of youtube then we will add + button to it
**/
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if(tab.url && tab.url.includes("youtube.com/watch")) {  //checking is url exists and if yes is it of youtube
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);
        // there is a messaging system that happens between extension, we send message to contentScript that a new video has been loaded and this is the id of video
        console.log(urlParameters);
        chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v")
        })
    }
});