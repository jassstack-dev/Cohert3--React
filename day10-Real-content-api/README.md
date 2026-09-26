🛒 E-Commerce Context API

A modern and responsive e-commerce application built with React.js, focused on learning and implementing React Context API for global state management.

The application fetches products from a fake API, manages application-wide state using Context API, and provides a fully functional cart system with LocalStorage persistence.

🌐 Live Demo

Live Website: https://ecommerce-context-api-xi.vercel.app/

📸 About The Project

This project is an e-commerce platform created to understand and implement React Context API in a real-world application.

Instead of passing product and cart-related data through multiple components using props, the application uses a centralized Context Provider to manage and share state across the application.

Products are fetched from a fake REST API and displayed dynamically. Users can add products to their cart, remove products, and maintain their cart data even after refreshing the page using LocalStorage.

✨ Features

🛍️ Product listing fetched from a fake API

🔄 Dynamic product rendering

🧠 Global state management using React Context API

🛒 Add products to cart

❌ Remove products from cart

🔢 Cart item count

💾 Cart persistence using LocalStorage

🔄 Cart data remains available after page refresh

📱 Responsive UI

🧩 Reusable React components

⚡ Fast and dynamic UI

🚀 Deployed on Vercel

🧠 Context API Implementation

The main purpose of this project is to understand how React Context API can be used for global state management.

A custom Context is created using:

createContext()


A Context Provider is then used to provide application state to different components.

For example:

<MyStore.Provider value={{ cart, setCart, toggle, setToggle }}>
  {children}
</MyStore.Provider>


Components can access this shared state using:

const { cart, setCart } = useContext(MyStore);


This avoids unnecessary prop drilling between components.

🛒 Cart System

The application contains a complete cart management system.

Users can:

Add products to the cart

View the number of items in the cart

Remove products from the cart

Navigate between products and cart views

The cart state is maintained globally through Context API.

Example:

const [cart, setCart] = useState([]);


When a product is added:

setCart([...cart, product]);


The cart data can then be accessed from different components using useContext().

💾 LocalStorage

To make the cart persistent, the project uses the browser's LocalStorage API.

This means that cart data doesn't disappear when the user refreshes the page.

The cart can be stored using:

localStorage.setItem("cart", JSON.stringify(cart));


And retrieved using:

const savedCart = JSON.parse(localStorage.getItem("cart"));


This allows the application to restore the previous cart state when the user returns or refreshes the page.

🌐 API Integration

Products are fetched from a fake e-commerce API.

The API provides product information such as:

Product title

Product price

Product description

Product category

Product image

Product rating

The fetched data is then stored and rendered dynamically inside React components.

🏗️ Project Structure

A simplified structure of the project looks like this:

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Products.jsx
│   └── Cart.jsx
│
├── context/
│   └── MyContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css


The exact structure may vary depending on the current implementation.

🛠️ Technologies Used
Technology	Purpose
React.js	Frontend UI
JavaScript	Application logic
Context API	Global state management
useState	Local state management
useContext	Accessing global state

	
LocalStorage	Persistent cart data
Tailwind CSS	Styling and responsive UI
Vercel	Deployment
⚙️ How It Works

The basic application flow is:

Fake API
   ↓
keep it in array 
   ↓
React Components
   ↓
Context Provider
   ↓
Global Cart State
   ↓
LocalStorage
   ↓
Persistent Cart

1. product array

Products are fetched from the API when the application loads.

2. Store Data

The fetched product data is stored in React state.

3. Provide Global State

Context API provides shared state to components that need access to it.

4. Add To Cart

When the user adds a product, it is added to the global cart state.

5. Save Cart

The cart is synchronized with LocalStorage so that the data survives page refreshes.

6. Display Cart

The Navbar and Cart components can access the same cart state through Context API.

🚀 Getting Started

Follow these steps to run the project locally.

Clone the Repository
git clone <your-repository-url>

Navigate Into The Project
cd e-commerce-context-api

Install Dependencies
npm install

Start Development Server
npm run dev


The application will then be available on the local development server provided by Vite.

📦 Build For Production
npm run build


To preview the production build:

npm run preview

🎯 Learning Goals

This project was created primarily to practice and understand:

React Context API

Global state management

useContext

useState

Component communication

Avoiding prop drilling

API integration

Cart state management

LocalStorage

React component architecture

Responsive UI development

🔮 Future Improvements

Some features that can be added in future versions:

🔐 User authentication

❤️ Wishlist functionality

🔍 Product search

🏷️ Category filtering

📊 Product sorting

➕ Quantity increment/decrement

💳 Checkout page

💰 Total cart price

📦 Order management

🌙 Dark mode

🔔 Toast notifications

👨‍💻 Author

Built with ❤️ while learning and practicing React Context API and global state management.

Live Project

https://ecommerce-context-api-xi.vercel.app/

⭐ Support

If you found this project useful or helpful, consider giving the repository a ⭐ on GitHub.
