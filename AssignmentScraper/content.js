// Only run on assignments pages
if (
  window.location.pathname.includes("/courses/") &&
  window.location.pathname.includes("/assignments")
) {
  console.log("Loading assignments...");

  // Wait a short moment to let Canvas render the titles
  setTimeout(() => {
    const assignments = [];

    document
      .querySelectorAll("li.assignment.sort-disabled.search_show")
      .forEach((el) => {
        const titleEl = el.querySelector(".ig-info a.ig-title");
        const dueEl = el.querySelector(".assignment-date-due span");
        const title = titleEl ? titleEl.innerText.trim() : "No title";
        const dueDate = dueEl ? dueEl.innerText.trim() : "No due date";
        assignments.push({ title, dueDate });
      });

    console.log("Assignments found:", assignments);

    chrome.runtime.sendMessage({ type: "assignments", data: assignments });
  }, 700); // 700ms delay is usually enough
} else {
  console.log("Not on the assignments page.");
}

