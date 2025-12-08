# Flappy Bird - Portfolio Version

This version of Flappy Bird has been refactored to use modern JavaScript (ES6 Modules and Classes) for better code organization and performance.

## How to Run

Because this project uses **ES6 Modules** (`import`/`export`), it **cannot** be run simply by double-clicking `index.html` due to browser security restrictions (CORS). You must run it using a local web server.

### Option 1: Using Python (Pre-installed on most systems)

1.  Open a terminal/command prompt.
2.  Navigate to the `docs` folder of this project.
3.  Run one of the following commands:

    ```bash
    # Python 3
    python3 -m http.server

    # OR Python 2
    python -m SimpleHTTPServer
    ```

4.  Open your browser and go to `http://localhost:8000`.

### Option 2: Using VS Code

1.  Install the "Live Server" extension.
2.  Right-click `index.html` and select "Open with Live Server".

### Option 3: Using Node.js

1.  Run `npx serve docs` in the project root.

## Features

- **Optimized Input**: Uses `pointerdown` for zero-latency jumps.
- **Modular Code**: Split into `entities`, `screens`, and `utils` for maintainability.
- **Keyboard Support**: Play with Spacebar or ArrowUp.
