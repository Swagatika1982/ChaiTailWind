# ChaiTailwind CSS Engine

A lightweight utility-first CSS engine built using JavaScript.

This project dynamically scans the DOM, detects custom `chai-*` utility classes, parses them, and applies inline styles at runtime.

Inspired by utility-first frameworks like Tailwind CSS.

---

# Features

- Runtime DOM scanning
- Dynamic inline style generation
- Utility-first class system
- Responsive UI demo
- Live style updates using dropdown controls
- Lightweight JavaScript engine

---

# Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation

---

# How It Works

The engine:

1. Traverses the DOM after page load
2. Finds classes starting with `chai-`
3. Parses utility class patterns
4. Converts them into inline styles
5. Applies styles dynamically

Example:

```html
<div class="chai-p-20 chai-bg-blue chai-text-white">
  Hello ChaiTailwind
</div>

Gets converted into:

padding: 20px;
background-color: blue;
color: white;

Supported Utilities

Spacing
Class	Style
chai-p-20	padding: 20px
chai-m-20	margin: 20px
chai-pt-10	padding-top: 10px
chai-pb-10	padding-bottom: 10px
chai-mt-10	margin-top: 10px
chai-mb-10	margin-bottom: 10px

Background Colors
Class	Style
chai-bg-red	background-color: red
chai-bg-blue	background-color: blue
chai-bg-green	background-color: green
chai-bg-purple	background-color: purple
chai-bg-orange	background-color: orange

Text Colors
Class	Style
chai-text-white	color: white
chai-text-black	color: black
chai-text-red	color: red
chai-text-blue	color: blue

Text Alignment
Class	Style
chai-text-left	text-align: left
chai-text-center	text-align: center
chai-text-right	text-align: right

Font Size
Class	Style
chai-font-16	font-size: 16px
chai-font-24	font-size: 24px
chai-font-32	font-size: 32px

Border
Class	Style
chai-border-1	1px solid black
chai-border-2	2px solid black
chai-border-5	5px solid black

Border Radius
Class	Style
chai-rounded	border-radius: 8px
chai-rounded-10	border-radius: 10px
chai-rounded-20	border-radius: 20px

Width & Height
Class	Style
chai-w-250	width: 250px
chai-w-350	width: 350px
chai-h-200	height: 200px

Flexbox Utilities
Class	Style
chai-flex	display: flex
chai-gap-20	gap: 20px
chai-justify-center	justify-content: center
chai-justify-between	justify-content: space-between
chai-items-center	align-items: center

Runtime Styling Demo

This project also includes a live runtime demo panel.

Users can:

Select styles from dropdowns
Dynamically change utility classes
Watch styles update instantly in the browser

This demonstrates runtime class parsing and inline style generation.

Responsive Design

The UI is fully responsive and works on:

Desktop
Tablet
Mobile

Project Structure
chai-tailwind-engine/
│
├── index.html
├── style.css
├── chai.js
├── README.md
└── images/

Future Improvements

More utility classes
Responsive utility support
Hover utilities
Animation utilities
Theme support
Dynamic stylesheet generation

Live Demo

chai-tailwind-ss.netlify.app

GitHub Repository

https://github.com/Swagatika1982/ChaiTailWind

Author

Created by S. Sahoo
