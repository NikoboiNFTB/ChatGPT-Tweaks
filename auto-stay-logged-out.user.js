// ==UserScript==
// @name         ChatGPT - Auto "Stay Logged Out"
// @namespace    https://github.com/NikoboiNFTB/ChatGPT-Tweaks/
// @downloadURL  https://github.com/NikoboiNFTB/ChatGPT-Tweaks/raw/refs/heads/main/auto-click-logged-out.user.js
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

    if (clickStayLoggedOut()) return;

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
