# YTDownloader

![Version](https://img.shields.io/badge/version-v1.0-red.svg) ![License](https://img.shields.io/badge/license-MIT-black.svg) ![Node.js](https://img.shields.io/badge/node.js-v20+-green.svg) ![Platform](https://img.shields.io/badge/platform-Linux%20|%20Windows%20|%20macOS-orange.svg)

**YTDownloader** Developed with HTML, CSS, JS, and Node.js, it allows you to download YouTube videos in MP4 format in various qualities, including 1080p, 720p, 2K, and 4K. It uses `youtube-dl-exec` for its backend and offers a completely browser-based interface.

---

## 📑 Table of Contents
- [Purpose of the Tool](#-purpose-of-the-tool)
- [Key Features](#-key-features)
- [Legal and Ethical Disclaimer](#️-legal-and-ethical-disclaimer)
- [Installation](#-installation)
  - [Prerequisites](#prerequisites)
  - [Installation on Linux](#installation-on-linux)
  - [Installation on Windows](#installation-on-windows)
  - [Installation on macOS](#installation-on-macos)
- [Usage](#️-usage)
  - [Running the Tool](#running-the-tool)
- [Example Output](#example-output)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Purpose of the Tool
YouTube Video Downloader is designed for those who want to download videos quickly and easily. Specifically:
- Download videos in different qualities (1080p, 720p, 2K, 4K).
- A simple interface that works in the browser.

---

## ✨ Key Features
- ⚡ **Multiple Quality Support:** Download in 1080p, 720p, 2K and 4K options.
- 🌐 **Browser Based:** It works without requiring any additional software.
- 💾 **Fast Download:** `youtube-dl-exec` Optimized backend with.
- 🖥️ **Easy to Use:** Paste the YouTube URL and select quality to download.
- 🕒 **Real Time Update:** Updated libraries to comply with new YouTube changes.

---

## ⚠️ Legal and Ethical Disclaimer
> **DISCLAIMER:** This tool is for **educational purposes** and should only be used to **download YouTube videos for which you have permission**. Use on unauthorized systems is **illegal** and may lead to serious legal consequences. The developer is **not responsible for any misuse**.

---

## 🚀 Installation

### Prerequisites
- Node.js (v20.x or above)
- npm (Node.js comes with)
- Required modules: `express`, `youtube-dl-exec`, `fs` (Node.js internal)

### Installation on Linux
```bash
sudo apt update && sudo apt install -y nodejs npm git
git clone https://github.com/burakdevelopment/ytdownloader.git
cd ytdownloader
npm install
```

### Installation on Windows
```bash
git clone https://github.com/burakdevelopment/ytdownloader.git
cd ytdownloader
npm install
```

### Installation on macOS
```bash
brew install node
git clone https://github.com/burakdevelopment/ytdownloader.git
cd ytdownloader
npm install
```

## 🛠️ Usage

### Running the Tool
- To start the server, run the following command in terminal:
```bash
node server.js
```

- Go to http://localhost:3000 in your browser.
- Paste YouTube URL.
- Click the "Get Video" button, then choose the quality you want (1080p, 720p, 2K, 4K) and download.

## 📊 Example Output

- The interface opens in the browser and quality options appear when the URL is entered.
- Once the download is complete, a file like video_1080p.mp4 will be downloaded (file size depends on the video).

## 🤝 Contributing
Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. Feel free to fork the repo and submit a pull request. For bug reports or feature requests, please open an "Issue".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License
This project is distributed under the MIT License. See the `LICENSE` file for more information.
