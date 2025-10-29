// ==UserScript==
// @name         Auto Continue Generating
// @namespace    https://github.com/NikoboiNFTB/ChatGPT-Tweaks/
// @version      1.0
// @description  Automatically click the "Continue generating" button on ChatGPT.
// @author       Nikoboi
// @match        https://chatgpt.com/*
// @grant        none
// @icon         https://cdn.oaistatic.com/assets/favicon-eex17e9e.ico
// ==/UserScript==

(function() {
    'use strict';

    function clickContinueButton() {
        const button = document.querySelector('button.btn.relative.btn-secondary.btn-small.py-2.whitespace-nowrap');
        if (button && button.textContent.trim() === 'Continue generating') {
            console.log('Button found: "Continue generating"');
            setTimeout(() => {
                button.click();
                console.log('Clicked "Continue generating" button');
            }, 500);
        }
    }

    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                clickContinueButton();
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    clickContinueButton();
})();
