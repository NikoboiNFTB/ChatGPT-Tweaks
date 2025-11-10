// ==UserScript==
// @name         ChatGPT - Force Remove Fade
// @namespace    https://github.com/NikoboiNFTB/ChatGPT-Tweaks/
// @version      1.1
// @description  Forcibly removes 'content-fade' from the bottom container on chatgpt.com without timers. More stable.
// @author       Nikoboi
// @match        https://chatgpt.com/*
// @icon         https://cdn.oaistatic.com/assets/favicon-eex17e9e.ico
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const TARGET_ID = 'thread-bottom-container';
    const FADE_CLASS = 'content-fade';

    function removeFade() {
        const el = document.getElementById(TARGET_ID);
        if (el && el.classList.contains(FADE_CLASS)) {
            el.classList.remove(FADE_CLASS);
            console.log('[ChatGPT - Force Remove Fade] Removed fade from:', el);
        }
    }

    function startObserver() {
        const observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    removeFade();
                } else if (mutation.type === 'childList') {
                    removeFade();
                }
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class']
        });

        console.log('[ChatGPT - Force Remove Fade] Observer running.');
        removeFade();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startObserver);
    } else {
        startObserver();
    }
})();
