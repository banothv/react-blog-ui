# 📝 React Blog UI — DevBlog

A responsive blog website built using **React.js, Vite, JavaScript, HTML, and CSS**. This project allows users to explore web development articles, search for specific posts, and filter articles by category through a clean and user-friendly interface.

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Project Objectives](#-project-objectives)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation and Setup](#-installation-and-setup)
- [How to Run](#-how-to-run-the-project)
- [Application Components](#-application-components)
- [How Search and Filtering Work](#-how-search-and-filtering-work)
- [Git and GitHub Workflow](#-git-and-github-workflow)
- [Future Enhancements](#-future-enhancements)
- [Learning Outcomes](#-learning-outcomes)
- [Author](#-author)

## 🚀 Project Overview

DevBlog is a frontend web development project created to practice React fundamentals and build a reusable, component-based user interface.

The application displays blog posts about web development topics such as HTML, CSS, JavaScript, and React. Users can browse the available posts, search for articles, and filter content by category.

This project was developed as part of **Week 1 — Frontend Development Practice** in a MERN Stack learning roadmap.

## 🎯 Project Objectives

- Build a responsive blog user interface using React.
- Understand component-based application development.
- Create reusable React components.
- Display blog content dynamically from a JSON file.
- Implement search functionality for blog posts.
- Add category-based filtering.
- Practice JavaScript state management and React hooks.
- Learn how to organize a frontend project.
- Use Git and GitHub for version control and project hosting.

## ✨ Features

- **Responsive UI:** A clean interface designed for convenient browsing.
- **Navigation Bar:** Provides links to the main sections of the website.
- **Blog Post Cards:** Displays article information in a structured layout.
- **Search Functionality:** Helps users find articles using search keywords.
- **Category Filtering:** Filters posts by topics such as HTML, CSS, JavaScript, and React.
- **Reusable Components:** Separates the interface into smaller components.
- **JSON-Based Content:** Stores blog post information in `public/posts.json`.
- **React State Management:** Uses React hooks to manage application data and interactions.
- **Modern Development Setup:** Uses Vite for a fast development workflow.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Web page structure |
| CSS3 | Styling and responsive layouts |
| JavaScript (ES6+) | Application logic |
| React.js | Component-based UI development |
| Vite | Development server and build tool |
| JSON | Blog post data storage |
| Node.js | JavaScript runtime |
| npm | Package and dependency management |
| Git | Version control |
| GitHub | Remote repository and code sharing |

## 📁 Project Structure

```text
react-blog/
│
├── public/
│   ├── posts.json
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   ├── Button.jsx
│   │   └── Form.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

**Important files:**

- `App.jsx` — Main application logic and rendering.
- `App.css` — Styles associated with the application.
- `index.css` — Global styles.
- `main.jsx` — React application entry point.
- `Header.jsx` — Website navigation and header.
- `Card.jsx` — Reusable blog post card.
- `Button.jsx` — Reusable button component.
- `Form.jsx` — Form-related interface component.
- `Footer.jsx` — Website footer.
- `posts.json` — Blog post data.
- `package.json` — Project scripts and dependencies.
- `.gitignore` — Prevents selected generated files from being tracked by Git.

## 💻 Prerequisites

Install the following tools before running the project:

1. **Node.js:** [Download Node.js](https://nodejs.org/)
2. **Visual Studio Code:** [Download VS Code](https://code.visualstudio.com/)
3. **Git:** [Download Git](https://git-scm.com/)
4. **GitHub account:** [Create or access your account](https://github.com/)

Verify the installations in PowerShell:

```powershell
node -v
npm.cmd -v
git --version
```

In this development environment, Node.js was installed and npm commands were executed using `npm.cmd` because PowerShell blocked the regular `npm` script.

## ⚙️ Installation and Setup

### Step 1: Create the project folder

The main workspace was created at:

```text
MERN-Week1/
├── portfolio/
└── react-blog/
```

The `portfolio` folder contains the separate HTML and CSS portfolio project. The `react-blog` folder contains this React application.

### Step 2: Create the React application with Vite

From the `MERN-Week1` directory, the project was created using:

```powershell
npm.cmd create vite@latest react-blog -- --template react
```

The React template was selected, and the project dependencies were installed.

### Step 3: Open the React project

```powershell
cd "$HOME\OneDrive\Desktop\MERN-Week1\react-blog"
```

Open the folder in VS Code if necessary:

```powershell
code .
```

### Step 4: Install dependencies

If setting up the project on a new computer, run:

```powershell
npm.cmd install
```

This installs the dependencies declared in `package.json`.

### Step 5: Develop the application

The project includes reusable React components, CSS styling, and JSON-based blog content.

The interface was organized into separate files to make the code easier to maintain and extend.

## ▶️ How to Run the Project

Open PowerShell or the VS Code terminal inside the `react-blog` directory.

Run:

```powershell
npm.cmd run dev
```

Vite will display a local development URL, usually:

```text
http://localhost:5173/
```

Open that URL in your browser to view the application.

**Note:** Keep the terminal running while using the development server. Press `Ctrl + C` in the terminal to stop it.

### Build for production

To create a production build, run:

```powershell
npm.cmd run build
```

To preview the production build locally:

```powershell
npm.cmd run preview
```

The production files are generated in the `dist/` directory.

## 🧩 Application Components

### 1. Header

`Header.jsx` contains the website branding and navigation links, such as Home, Articles, and Contact.

### 2. Blog Card

`Card.jsx` is a reusable component for presenting individual blog posts in a consistent format.

### 3. Button

`Button.jsx` provides a reusable button component for interactive elements.

### 4. Form

`Form.jsx` contains form-related UI functionality.

### 5. Footer

`Footer.jsx` provides the footer section of the website.

### 6. Main Application

`App.jsx` connects the components and manages the blog post data, search input, and category selection.

### 7. Blog Data

`public/posts.json` stores the article information. The application can load this data and display the available posts.

## 🔎 How Search and Filtering Work

### Search functionality

The search interface allows users to enter keywords to find matching blog posts.

Typical implementation steps:

1. Store the search input in React state.
2. Load the blog posts from the JSON file.
3. Compare the search keyword with the relevant post fields.
4. Display matching posts in the interface.

### Category filtering

The category filter lets users narrow the displayed articles by topic.

For example:

- HTML
- CSS
- JavaScript
- React

The visible posts update according to the selected category.

The search and category filter can work together to narrow the results further.

## 🔄 Git and GitHub Workflow

Git was used to track changes locally, and GitHub is the remote repository where the source code can be shared.

### Step 1: Initialize Git

```powershell
git init
```

### Step 2: Stage project files

```powershell
git add .
```

### Step 3: Commit the changes

```powershell
git commit -m "Build React Blog UI with search and filters"
```

The initial commit was created successfully.

### Step 4: Rename the branch

```powershell
git branch -M main
```

### Step 5: Connect the GitHub repository

Create an empty repository on GitHub named `react-blog-ui`.

Then connect the local project using the correct repository URL:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/react-blog-ui.git
```

Replace `YOUR-USERNAME` with your actual GitHub username.

If `origin` already exists, update it instead:

```powershell
git remote set-url origin https://github.com/YOUR-USERNAME/react-blog-ui.git
```

Verify the configured URL:

```powershell
git remote -v
```

### Step 6: Push the project

```powershell
git push -u origin main
```

After a successful push, the project files will be available in your GitHub repository.

### Step 7: Push future changes

After editing the application, run:

```powershell
git add .
git commit -m "Update React Blog UI"
git push
```

**Git safety:** Keep `node_modules/` and `dist/` excluded through `.gitignore`. Never commit passwords, API keys, access tokens, or other secrets.

## 🔮 Future Enhancements

- Add individual blog article pages.
- Implement routing with React Router.
- Add pagination or a Load More button.
- Improve accessibility and keyboard navigation.
- Add a backend API using Node.js and Express.
- Store blog posts in MongoDB.
- Add an administrator interface for creating and editing articles.
- Deploy the application to a hosting service.
- Add automated tests for components and filtering functionality.

## 📚 Learning Outcomes

Through this project, the following concepts were practiced:

- React project creation with Vite.
- JSX syntax and component-based development.
- Reusable UI components.
- React hooks such as `useState` and `useEffect`.
- Fetching JSON data in a frontend application.
- Search and category filtering.
- CSS styling and responsive UI design.
- npm scripts and dependency management.
- Git commits, branches, remotes, and GitHub push workflow.

## 👨‍💻 Author

**Banoth Venkatesh**

- GitHub: [@banothv](https://github.com/banothv)
- LinkedIn: [Banoth Venkatesh](https://www.linkedin.com/in/banoth-venkatesh-97a584298/)

## 📄 License

This project is intended for educational and portfolio purposes. Add a specific open-source license if you wish to permit reuse under defined terms.

---

⭐ If you find this project useful, feel free to explore the source code and suggest improvements.
