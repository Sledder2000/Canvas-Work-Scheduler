chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "assignments") {
        console.log("Scraped Assignments:", message.data);
        // You can store or process the data here
    }
});