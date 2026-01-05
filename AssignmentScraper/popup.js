document.getElementById("scrape").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["content.js"]
        });
    });
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "assignments") {
        const results = document.getElementById("results");
        results.innerHTML = "";
        message.data.forEach((assignment) => {
            const li = document.createElement("li");
            li.textContent = `${assignment.title} - ${assignment.dueDate}`; 
            results.appendChild(li); 
        });
    }
});