# AI Image Generator App

This application enables image generation through artificial intelligence based on user input. It is built with **React.js** and styled using **SCSS (Sassy Cascading Style Sheets)**.

## Live Preview

Check out the live app here:  
https://adrianav1999.github.io/ai-image-generator-app

## Features

- Generate images by describing what you want the AI to create.
- Choose from different styles such as anime, realistic, Flux Shell and more.
- Select aspect ratio and number of images to generate at once.
- Download generated images directly to your device.
- Save images as favorites and manage them by adding or removing.
- Provides answers to frequently asked questions related to the app.

## Components

- **Navbar.jsx** — Handles navigation between different pages.
- **Hero.jsx** — Main introduction section with call-to-action.
- **About.jsx** — Explains the app’s purpose and background.
- **UsageGuide.jsx** — Step-by-step instructions on how to use the app.
- **ImageModal.jsx** — Displays generated images with interactive options.
- **Footer.jsx** — Contains footer information.

## Pages

- **Home** — The landing page.
- **ImageGenerator** — Interface to create AI-generated images.
- **Favorites** — Displays all saved favorite images.
- **FAQ** — Section for common questions and answers.

## Routing Concept

Navigation is managed with **React Router**, enabling smooth client-side transitions between the main pages without reloading the entire site. This setup ensures a seamless user experience while switching between Home, ImageGenerator, Favorites and FAQ pages.

## API Integrations

- **Imagine Art API** — Responsible for generating images based on the user’s description and chosen parameters.
- **Cache API** — Used to store previously generated images locally, which helps reduce unnecessary API requests and speeds up image retrieval.
- **Intersection Observer API** — Utilized to detect when elements enter the viewport, allowing animations to trigger smoothly as the user scrolls through the app.

## Technologies Used

- **React.js** for building the frontend interface.
- **SCSS (Sassy Cascading Style Sheets)** for organizing and maintaining styles efficiently.
- Integration with multiple web APIs **(Imagine Art API, Cache API, Intersection Observer API)** to enable image generation, caching and animated effects.

## Installation / How to Run

To run this project locally:

1. Clone the repository:
   
   #### `git clone https://github.com/AdrianaV1999/ai-image-generator-app.git`

2. Navigate into the project folder:

   #### `cd ai-image-generator-app`

3. Install dependencies:
   
   ### `npm install`

4. Start the development server:
   
   ### `npm start`

This will start the app locally at: `http://localhost:3000`

---

This project highlights practical experience in integrating APIs, implementing client-side routing and applying styling techniques.
