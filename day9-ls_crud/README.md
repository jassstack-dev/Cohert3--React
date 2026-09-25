# E-Commerce Product Management

A simple **React-based E-Commerce Product Management application** built to practice React fundamentals, state management, state lifting, CRUD operations, and browser storage.

🔗 **Live Demo:** https://e-commerce-psi-two-58.vercel.app/

---

## 🚀 Features

* 🛍️ E-Commerce product management
* ➕ Add new products
* ✏️ Update existing products
* 🗑️ Delete products
* 💾 Local Storage for persistent product data
* 🔄 React state management using `useState`
* ⬆️ State lifting between components
* 🆔 Unique product IDs using `nanoid`
* 📋 Dynamic product rendering
* 📝 Form handling and validation using React Hook Form
* 📱 Responsive UI
* ⚡ Built with React

---

## 🌐 Live Demo

**https://e-commerce-psi-two-58.vercel.app/**

### How to Use

When you open the application:

1. Open the website using the live demo link.
2. Go to the **Navbar**.
3. Click on **Add Product**.
4. Fill in the product details.
5. Click **Save Product**.
6. The product will be displayed on the product listing.
7. Use the **Update** button to edit an existing product.
8. Use the **Delete** button to remove a product.

---

## 🛠️ Technologies Used

* React.js
* JavaScript
* React Hook Form
* Tailwind CSS
* Local Storage
* Nanoid
* Vercel

---

## 🧠 React Concepts Practiced

### `useState`

Used to manage application data such as:

* Product list
* Selected product for updating
* UI state
* Form visibility

### State Lifting

Product data is managed in the parent component and passed to child components using props.

This allows different components to access and update the same product data.

### Local Storage

Product data is stored in **Local Storage** so that products remain available even after refreshing the browser.

### CRUD Operations

The project implements the basic product management operations:

* **Create** → Add a new product
* **Read** → Display products
* **Update** → Edit an existing product
* **Delete** → Remove a product

### Nanoid

`nanoid` is used to generate unique IDs for products.

Example:

```js
id: nanoid()
```

These IDs are then used to identify specific products during **Update** and **Delete** operations.

---

## 📌 Product Management Flow

The application follows a simple product management flow:

```text
Open Website
     ↓
Navbar
     ↓
Add Product
     ↓
Fill Product Form
     ↓
Save Product
     ↓
Product Added
     ↓
Update / Delete
```

When updating a product, its unique ID is used to find the correct product inside the product array.

When deleting a product, the unique ID helps identify exactly which product should be removed.

---

## 💾 Data Persistence

The application uses **Local Storage** to persist product data.

When a product is added, updated, or deleted, the updated product list is stored in Local Storage.

This means the product data remains available even after refreshing the page.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Form.jsx
│   ├── Users.jsx
│   └── Navbar.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 💻 Run Locally

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go inside the project:

```bash
cd e-commerce
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 📚 What I Learned

While building this project, I practiced:

* React component structure
* Props
* `useState`
* State lifting
* Conditional rendering
* Array methods like `map()`, `filter()`
* CRUD operations
* Creating unique IDs with `nanoid`
* React Hook Form
* Form validation
* Local Storage
* Updating objects inside arrays
* Deleting items using unique IDs
* Sharing state between components
* Deploying a React application using Vercel

---

## 🎯 Purpose of This Project

This project was built as a **React mini project for practice**.

The main goal was to understand how different React concepts work together to create a functional product management application.

> **Course 30% → Khud Coding 70%**

---

## 👨‍💻 Author

**Jass**

Built with React while learning and practicing full-stack development.
