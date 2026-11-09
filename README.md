# Shopping List

A lightweight, minimalist shopping list web application built with vanilla HTML, CSS, and JavaScript.

## Features

- **Add Items**: Type in the product input field and press <kbd>Enter</kbd> to add items to your shopping list.
- **Auto-Numbering**: Automatically assigns an incrementing index to each item as it is added.
- **Mark as Purchased**: Click on any product name to toggle a strikethrough line indicating the item has been bought.
- **Delete Items**: Click the trash can icon (<i class="far fa-trash-alt"></i>) next to any item to remove it from the list.
- **Zero Build Tools**: Runs directly in the browser with no build step, bundler, or package installation required.

## Tech Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling and layout
- **JavaScript (ES6+)**: DOM manipulation and event handling
- **[Bootstrap 5](https://getbootstrap.com/)** (CDN): Form controls and utility styling
- **[Font Awesome 5](https://fontawesome.com/)** (CDN): Iconography for the delete action

## Project Structure

```text
shopping-list/
├── index.html     # Main HTML document and layout
├── style.css      # Custom styling (colors, layout, strikethrough effects)
├── script.js      # App logic (add item, toggle purchased, delete item)
└── README.md      # Project documentation
```

## Getting Started

### Prerequisites

All you need is a modern web browser (e.g., Chrome, Edge, Firefox, Safari).

### Running the App

1. Clone or download this repository:
   ```bash
   git clone https://github.com/<your-username>/shopping-list.git
   cd shopping-list
   ```

2. Open `index.html` in your browser:
   - **Directly**: Double-click `index.html` in your file explorer, or right-click and choose **Open with** > your preferred browser.
   - **Using VS Code Live Server**: Right-click `index.html` in VS Code and select **Open with Live Server**.
   - **Using a simple local server**:
     ```bash
     # Python 3
     python -m http.server 8000
     ```
     Then navigate to `http://localhost:8000`.

## How to Use

1. **Add a Product**: Click on the input box labeled *"Enter product name"*, type the item name, and press <kbd>Enter</kbd>.
2. **Toggle Purchased Status**: Click on the product text to mark it with a line-through. Clicking it again will unmark it.
3. **Remove a Product**: Click the white trash can icon to the right of the item to delete it from the list.

## Potential Future Enhancements

- [ ] Persist shopping list items in browser `localStorage`.
- [ ] Ability to edit existing items inline.
- [ ] Add a "Clear All" button.
- [ ] Categorize items (e.g., Produce, Dairy, Bakery).
- [ ] Quantity / counter support for items.

## License

This project is open source and available under the [MIT License](LICENSE) (or free for personal/educational use).

