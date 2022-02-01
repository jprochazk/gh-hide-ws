"use strict";

chrome.scripting.registerContentScripts([
  {
    id: "foreground",
    js: ["foreground.js"],
    matches: [
      "https://github.com/*/*/pull/*",
      "http://github.com/*/*/pull/*/files",
      "http://github.com/*/*/pull/*/files/*",
    ],
    runAt: "document_start",
  },
]);
