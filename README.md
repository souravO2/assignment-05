# 🚀 DevStack

### Curated Tools, Technologies & Resources for Modern Developers

DevStack is a modern developer-focused web application that brings together useful **technologies, tools, and resources** in one place. It provides an easy-to-explore interface for developers to discover technologies and organize resources for building modern software.

🔗 **Live Website:** https://ass-05-devstack.netlify.app/

---

## ✨ Features

### 🛠️ 1. Explore Technologies

Browse through a curated collection of technologies used in modern software development. Developers can easily discover different technologies and learn more about them.

### 📁 2. Project & Resource Discovery

Explore useful projects and development resources from a centralized platform, making it easier to find tools and technologies for different development needs.

### 🛒 3. Interactive & Responsive UI

DevStack provides a clean, modern, and responsive user interface that works smoothly across desktop, tablet, and mobile devices.

---

## 🧑‍💻 Technologies Used

* ⚛️ **React**
* 📘 **TypeScript**
* ⚡ **Vite**
* 🎨 **Tailwind CSS**
* 🌼 **DaisyUI**
* 🔔 **Sonner**
* 📦 **JSON**
* 🚀 **Netlify**

---

## 📸 Project Overview

DevStack is designed with a clean and minimal interface focused on making developer resources easy to discover and navigate.

The application includes dedicated sections for technologies, projects, and other useful developer resources.

---

## 🎯 Purpose

The goal of DevStack is to create a centralized platform where developers can quickly discover useful technologies, tools, and resources without having to search across multiple platforms.

---

## 🌐 Live Demo

👉 **[Visit DevStack](https://ass-05-devstack.netlify.app/)**

---

## 👨‍💻 Developer

**Saifur Rahman Sourav**

Built with ❤️ using React and modern web technologies.

---
## Q & A

### i. What is JSX, and why is it used in React?

**Answer:**
JSX means JavaScript XML. It's an extended version of JS. It allows us to write HTML code inside React. JSX allows us to write and add HTML in React.

<br>

### ii. What is the difference between props and state?

**Answer:**
The properties we pass into a component are called props. State is a built-in React method that is used to change only that part where we make changes by doing something on the web page.

<br>

### iii. What does the useState hook do, and where did you use it in this project?

**Answer:**
The `useState` hook is used to make changes when we trigger something on the web page. It gives us a variable and a function. By calling the function, we can make changes where the variable has been used.

<br>

### iv. What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:**
`useEffect` gives a side effect to a component. While fetching data from a JSON file or an API, we use `useEffect` to show something when the data fetching is not successful.

<br>

### v. Why does every item in a `.map()` list need a unique key prop?

**Answer:**
Every item in a `.map()` needs a unique key prop so that the data doesn't mix up with another data.

<br>

### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Answer:**
Conditional rendering is using a conditional operator to show or do different actions in different conditions.

Example:

{adder.length !== 0 ? (
  <Cart />
) : (
  <p>Your stack is empty.</p>
)}

<br>

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:**
Passing data from parent to child is easy as JSX is uni-directional. I use props to send data from parent to child.

But sending data from child to parent is complicated. I use `useState` in the parent component and pass the state props to the child component. Then I make changes in the state from the child. That's how it sends something back to the parent component.

