# ChatGPT-Tweaks

A collection of useful user scripts to enhance the ChatGPT experience by automating certain actions and modifying UI behaviors. These tweaks are designed to simplify interactions with ChatGPT and improve usability.

## Features

1. **Auto Continue Generating**: 
   Automatically clicks the "Continue generating" button on ChatGPT to keep the conversation going without manual intervention.

2. **Auto "Stay Logged Out"**: 
   Automatically clicks the "Stay logged out" option when the login prompt appears, useful if you don't want to be logged in.

3. **Remove Fade**: 
   Removes the "content-fade" effect at the bottom of the page when using ChatGPT, particularly useful when using browsers like LibreWolf with DarkReader, which may leave a white fade at the bottom of the page.

## Installation

### Prerequisites

- You need a userscript manager, such as [Tampermonkey](https://www.tampermonkey.net/) installed in your browser.
- These scripts are designed to work with the [ChatGPT](https://chatgpt.com/) web app.

### Steps

1. **Install Tampermonkey (or any similar userscript manager)**:
   - [Tampermonkey Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Tampermonkey Chrome Extension](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   
2. **Install Scripts (Choose a way, listed easiest to hardest)**:
   - Click the links down below in the [Scripts](https://github.com/NikoboiNFTB/ChatGPT-Tweaks/tree/main?tab=readme-ov-file#scripts) section, then install when prompted.
   - Click the script in the repository, and click "Raw" in the top-right corner, then install when prompted by your userscript manager.
   - Copy and paste the code into a new userscript in your manager.
   - Download the user scripts and import them manually.

## Scripts

### 1. ChatGPT - Auto Continue Generating ([install](https://github.com/NikoboiNFTB/ChatGPT-Tweaks/raw/refs/heads/main/Auto-Continue-Generating-1.0.user.js))

**Description**: Automatically clicks the "Continue generating" button when it appears.

**How it works**: 
- Observes the page for changes and clicks the "Continue generating" button when it appears.

### 2. ChatGPT - Auto "Stay Logged Out" ([install](https://github.com/NikoboiNFTB/ChatGPT-Tweaks/raw/refs/heads/main/Auto-Stay-Logged-Out-1.0.user.js))

**Description**: Automatically clicks the "Stay logged out" option when the login prompt is shown.

**How it works**:
- This script checks for the "Stay logged out" link and clicks it when detected.
- It also observes the page to handle any dynamic loading of the prompt.

### 3. ChatGPT - Remove Fade ([install](https://github.com/NikoboiNFTB/ChatGPT-Tweaks/raw/refs/heads/main/ChatGPT-Remove-Fade-1.0.user.js))

**Description**: Removes the 'content-fade' effect at the bottom of the ChatGPT page, useful when using browsers like LibreWolf and DarkReader.

**How it works**:
- The script replaces the specific class `content-fade` that causes the unwanted fade at the bottom of the page with a modified class to remove it.

## License

This repository is licensed under the **GNU General Public License v3.0 (GPLv3)**. See [LICENSE](LICENSE) for details.

## Contributing

Feel free to fork this repository and create pull requests for new features or improvements. If you encounter any issues, please open an issue to discuss it.

## Disclaimer

These scripts are not officially endorsed by OpenAI and are intended for personal use. Use at your own risk.
