# CoolMenu Project

This project demonstrates an interactive menu built with React.

## Installation

1. First, you'll need to install Vite, if you haven't already done so. You can do this by running `npm init @vitejs/app` and then selecting the React template.
2. Clone the repository to your local machine.
3. Navigate to the project directory and install dependencies with `npm install`.
4. Start the local development server with `npm run dev`.

## Usage

This project provides a `Menu` component that displays an interactive menu. When you hover over a menu item, it changes the background image and opacity to create a parallax effect.

## Components

### MenuItem

`MenuItem` is a component that renders an individual menu item. It accepts the following props:

- `index`: The index of the menu item in the list.
- `setActiveIndex`: A function to update the active menu item.
- `children`: The content to display for the menu item.
- `activeIndex`: The currently active menu item index.

### Menu

`Menu` is the main component that renders the full menu. It maintains the state of the currently active menu item and passes that state to each `MenuItem`. The `Menu` component also manages the hover effects for the menu items.
