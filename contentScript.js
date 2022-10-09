(() => {
    let youtubeLeftControls, youtubePlayers;
    let currentVideo="";
    /**
    to listen to message we are going to add a listener
    **/
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;
        if(type === "NEW") {
            currentVideo = videoId;
            newVideoLoaded();
        }
    });
})();