# Portfolio Website

This is my personal portfolio website, built using **HTML, CSS, and JavaScript**, and deployed on **GitHub Pages**.

## 🔹 Live Demo
[View Portfolio](https://sujayv16.github.io/portfolio/)

---


## 🛠️ Setup & Run Locally
### **1. Clone the Repository**
```sh
git clone https://github.com/sujayv16/portfolio.git
cd portfolio
```

### **2. Open in Browser**
Since this is a static website, you can open `index.html` directly:

- Open the `index.html` file in a browser OR
- Use a live server extension in VS Code:
  - Install the "Live Server" extension
  - Right-click `index.html` → "Open with Live Server"

---

## 🌍 Deployment (GitHub Pages)
Changes pushed to the main branch automatically update the live website.

### **Steps to Update:**
1. Make changes to your project.
2. Commit and push:
   ```sh
   git add .
   git commit -m "Updated portfolio"
   git push origin main
   ```
3. Wait a few minutes, then refresh your GitHub Pages link.

---

## ⚙️ Pre-rendering & SEO Compilation

To achieve **maximum SEO discoverability** and near-instant load times (improving Core Web Vitals), this portfolio uses a **static pre-rendering compilation system**. All components inside `components/` are merged into the final `index.html` file using the central data from `js/components.js`.

### How to Update Content:
1. Modify data inside the `PORTFOLIO_DATA` object in [js/components.js](file:///c:/Users/SUSHMA/OneDrive/Desktop/portfolio/js/components.js) (or modify structural files in the `components/` directory).
2. Run the compilation script from the root directory:
   ```sh
   node scripts/prerender.js
   ```
3. Commit and push the generated changes in `index.html` to deploy.

---

## 📩 Contact
Feel free to connect with me through the Contact Form on the website!

