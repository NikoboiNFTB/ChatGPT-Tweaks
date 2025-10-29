// ==UserScript==
// @name         ChatGPT - Auto "Stay Logged Out"
// @namespace    https://github.com/NikoboiNFTB/ChatGPT-Tweaks/
// @version      1.0
// @description  Automatically clicks "Stay logged out" when the login prompt it appears.
// @author       Nikoboi
// @match        https://chatgpt.com/
// @grant        none
// @run-at       document-idle
// @icon         https://cdn.oaistatic.com/assets/favicon-eex17e9e.ico
// ==/UserScript==

(function () {
    'use strict';

    const targetText = 'Stay logged out';

    function clickStayLoggedOut() {
        const links = document.querySelectorAll('a');
        for (const link of links) {
            if (link.textContent.trim() === targetText) {
                console.log('Found "Stay logged out" link. Clicking...');
                link.click();
                return true;
            }
        }
        return false;
    }

    // Try immediately
    if (clickStayLoggedOut()) return;

    // Observe DOM changes to catch it when it appears
    const observer = new MutationObserver(() => {
        if (clickStayLoggedOut()) {
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
})();
