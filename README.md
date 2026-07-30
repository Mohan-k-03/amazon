# Amazon Clone

A simple Amazon-like storefront built with only HTML, CSS and JavaScript. This project is a front-end clone intended for learning and practice — it replicates common e-commerce UI patterns (product listing, search, cart UI) without a backend.

## Table of Contents

- [About](#about)
- [Demo](#demo)
- [Features](#features)
- [Tech / Languages](#tech--languages)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This is an Amazon UI clone implemented with plain HTML, CSS and JavaScript. It's intended as a learning project to practice responsive layouts, DOM manipulation, and basic client-side state (cart behavior). There is no backend — product data is stored in static JSON or JavaScript objects.

## Demo

If you host this repository (GitHub Pages or a static server), open `index.html` to see the app. You can also run it locally (instructions below).

## Features

- Product listing grid
- Product detail view (modal or separate page)
- Search and basic filtering
- Add to cart and cart preview
- Responsive layout for desktop and mobile
- Simple client-side persistence (localStorage)

## Tech / Languages

- HTML
- CSS (vanilla; you can replace with a framework if desired)
- JavaScript (vanilla)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Mohan-k-03/amazon.git
cd amazon
```

2. Since this is a static front-end project, you can open `index.html` directly in the browser. For a better local experience (so fetch/XHR works), run a simple static server:

```bash
# Python 3 built-in server
python -m http.server 8000
# then open http://localhost:8000 in your browser

# or with Node.js using `serve` if installed
npx serve .
```

## Usage

- Open `index.html` or run a local static server and navigate to the site.
- Browse products, use the search box, add items to the cart, and view the cart.
- Product data can be edited in the `data` or `assets` file where products are defined (e.g., `products.js` or `data/products.json`).

## Project Structure

A suggested file structure — adjust to match your repo:

- index.html
- css/
  - styles.css
- js/
  - app.js
  - products.js
- assets/
  - images/
- data/
  - products.json

Update these paths to match your actual project layout.

## Development

- Edit the HTML, CSS, and JS files in the repository.
- Use your browser DevTools to debug layout and JavaScript.
- To persist simple cart state across reloads, use `localStorage`.

## Contributing

Contributions are welcome for improvements (UI polish, accessibility, more realistic product data). To contribute:

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-change`
3. Commit your changes: `git commit -m "Add feature X"`
4. Push and open a pull request

Please include screenshots and a short description of the change.

## License

This project is available under the MIT License. See LICENSE file for details. If you prefer a different license, tell me and I can update this.

## Contact

Maintainer: Mohan-k-03

Open an issue for questions or feature requests.
