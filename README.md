# 🎨 React Color Picker App

A modern and stylish color picker application built with React. This tool allows you to select a color, automatically generates a beautiful color palette based on your selection, and lets you save your favorite colors for future use.

The project features a sleek, "glassmorphism" style UI with an animated gradient background.

***

## ✨ Features

* **Interactive Color Wheel:** Select any color using the native browser color picker.
* **Smart Palette Generation:** Automatically finds and displays a visually appealing color palette that best matches your selected color.
* **Save Favorites:** Store your most-used colors in a "Favorites" section for easy access.
* **Copy to Clipboard:** Instantly copy the HEX code of your chosen color with a single click.
* **Dynamic Text Contrast:** The app intelligently switches text color (black or white) to ensure it's always readable against your selected background color.
* **Responsive Design:** A clean and functional layout that works well on different screen sizes.

***

## 🛠️ Tech Stack

* **Frontend:** [React](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Color Palettes:** [nice-color-palettes](https://www.npmjs.com/package/nice-color-palettes)
* **Styling:** CSS3 (Animations, Flexbox, Backdrop-filter)

***

## 🚀 Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your system.
* [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/lahkopo/React-Color-Picker
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd react-color-picker
    ```
3.  **Install the dependencies:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```

***

## 💡 How It Works

The core logic for palette generation is based on finding the "closest" color within a predefined set of palettes. When you select a color, the app calculates the **Euclidean distance** in the RGB color space between your color and every color in the library. It then selects the palette containing the color with the smallest distance, ensuring the generated palette is a harmonious match for your selection.
