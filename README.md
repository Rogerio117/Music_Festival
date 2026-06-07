# Techno & EDM Festival 🎵

A responsive and modern landing page for a fictional Techno & EDM Music Festival, built to demonstrate modern web development workflows using HTML5, SASS, and Gulp.

This project focuses on styling architecture, asset management, and task automation, providing a solid foundation for front-end development.

##  Features

- **Modern Hero Section:** Engaging video background hero section that captures attention.
- **SASS Architecture:** Organized SCSS structure for maintainability and scalability (variables, mixins, global styles, and layout modules).
- **Task Automation:** Gulp integration to automate the compilation of SASS to CSS.
- **Responsive Design:** Ensures a seamless experience across desktop and mobile devices.
- **Custom Typography:** Integrated with Google Fonts (Montserrat) for a polished look.

##  Tech Stack

- **HTML5:** Semantic markup structure.
- **SASS (SCSS):** CSS preprocessor for advanced styling capabilities.
- **Gulp:** Toolkit for automating painful or time-consuming tasks in the development workflow.
- **NPM:** Node Package Manager for managing dependencies.

##  Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your computer:
- [Node.js](https://nodejs.org/en/) (which includes `npm`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rogerio117/Music_Festival.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd First_Proyect
   ```

3. **Install dependencies:**
   Run the following command to install Gulp, SASS, and other development dependencies:
   ```bash
   npm install
   ```

### Running the Project Locally

1. **Start the development watch task:**
   ```bash
   npm run dev
   ```
   *This command runs `gulp dev`, which listens for any changes in your `.scss` files and automatically compiles them into standard CSS in the `build/css/app.css` directory.*

2. **Open the application:**
   Simply open the `index.html` file in your preferred web browser to view the application.
   If you have an extension like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode, you can use it to open `index.html` with hot-reloading for HTML changes.

##  Folder Structure

```text
├── build/               # Compiled output directory (CSS)
├── src/                 # Source files
│   ├── scss/            # SASS files organized by modules
│   ├── img/             # Images and galleries
│   └── video/           # Video assets for the background
├── gulpfile.js          # Gulp configuration and task definitions
├── index.html           # Main HTML document
└── package.json         # NPM configuration and scripts
```

##  Author

**Rogerio Canto, Juan Pablo**

- GitHub: [@Rogerio117](https://github.com/Rogerio117)
