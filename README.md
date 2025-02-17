# Tridecco Website

The official repository for the Tridecco game website.

## 🌐 Overview

The Tridecco website is a platform for the Tridecco game, providing information, story, and resources for players. It is built using Express.js, EJS, and Tailwind CSS. The website is designed to be responsive and user-friendly, ensuring a seamless experience across devices.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Install the latest version of Node.js from the [official website](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tridecco/site.git && cd site
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables (optional):

   ```env
   PORT=3000 # Port to run the server on
   HOST=localhost # Host to run the server on
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the website. (or the port specified in your `.env` file)

### Build for Production

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the website. (or the port specified in your `.env` file)

> **Note:** You can use a process manager like **PM2** to run the production server in the background. Additionally, you can use a reverse proxy like **Nginx** to serve the website over HTTPS.
