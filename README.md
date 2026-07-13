# ⚛️ React Notes

A beginner-friendly collection of React fundamentals and important concepts.

---

# 📌 Common Tasks in Front-End Development

- **App State** – Data definition, organization, and storage.
- **User Actions** – Event handlers respond to user interactions.
- **Templates** – Design and render HTML templates.
- **Routing** – Resolve URLs and navigate between pages.
- **Data Fetching** – Communicate with servers using APIs and AJAX.

---

# 🚀 Fundamentals of React

React is built around three core ideas:

1. **JavaScript + HTML in the same file (JSX)**
2. **Embrace Functional Programming**
3. **Everything is a Component**

---

# 📖 Important JavaScript Concepts for React

## 1. Functions are First-Class Citizens

Functions can be stored inside variables, passed as arguments, and returned from other functions.

```javascript
const greet = function () {
  console.log("Hello");
};
```

---

## 2. Functions are Objects

Functions behave like objects in JavaScript.

```javascript
function sayHi() {}
sayHi.language = "JavaScript";
```

---

## 3. Functions Should Have No Side Effects

A pure function should always return the same output for the same input without modifying external data.

```javascript
function add(a, b) {
  return a + b;
}
```

---

# 🧩 Components

> Everything in React is a Component.

Components are reusable pieces of UI.

---

# 🔒 Variables Should Be Immutable

Use **const** whenever possible.

```javascript
const name = "Maulik";
```

Avoid changing values directly.

---

# 📦 Exporting Components

## Default Export

Only one default export is allowed per file.

```javascript
export default function Login() {}
```

Import:

```javascript
import Login from "./Login";
```

---

## Named Export

Named exports allow multiple exports from a single file.

```javascript
export function Login() {}

export function Logout() {}
```

Import:

```javascript
import { Login, Logout } from "./FileName";
```

Use named exports when multiple components or functions exist in the same file.

---

# 🏗️ Nested Components

Components can be created inside other components.

```jsx
function App() {
  function Header() {
    return <h1>Welcome</h1>;
  }

  return <Header />;
}
```

---

# 🔁 Return Statement

A React component can return **only one root element**.

❌ Incorrect

```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

✅ Correct

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

---

# 🧩 React Fragment

A Fragment groups multiple elements without adding an extra DOM node.

## Short Syntax

```jsx
<>
  <div></div>
  <div></div>
  <div></div>
</>
```

## Full Syntax

```jsx
import { Fragment } from "react";

<Fragment>
  <div></div>
  <div></div>
  <div></div>
</Fragment>;
```

---

# 📝 JSX

**JSX = JavaScript XML**

or

**JSX = JavaScript Syntax Extension**

JSX allows writing HTML-like code inside JavaScript.

```jsx
const element = <h1>Hello React</h1>;
```

---

# 🏛️ Class-Based Components

Before React Hooks, class components were used for state and lifecycle methods.

```jsx
import { Component } from "react";

class Footer extends Component {
  render() {
    let date = new Date();
    const year = date.getFullYear();

    return <p>&copy; {year} Maulik Dabhi. All Rights Reserved.</p>;
  }
}
```

---

# 🎨 Inline CSS

React uses **double curly braces** for inline styling.

```jsx
<h2
  style={{
    color: "green",
    textDecoration: "underline",
  }}
>
  Login
</h2>
```

---

# 📌 const in React

Using `const`, we can create:

- Variables
- Functions
- Arrays
- Objects

Example:

```javascript
const name = "Maulik";

const greet = () => {
  console.log("Hello");
};
```

---

# 🧠 State

State is the **memory of a component**.

It is mainly used for:

- Event handling
- Updating UI
- Storing dynamic values

Example:

```jsx
import { useState } from "react";

const [loginStatus, setLoginStatus] = useState(false);
```

- `loginStatus` → Current state value
- `setLoginStatus()` → Updates the state

---

# 📅 Notes (09/07/2026)

# Passing Props to Components

Props (Properties) allow components to communicate with each other.

The **Parent Component** passes data to the **Child Component**.

---

## Method 1 — Using props Object

### App.jsx

```jsx
import User from "./User";

<User name="Maulik" age={21} />;
```

### User.jsx

```jsx
export default function User(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </>
  );
}
```

---

## Method 2 — Destructuring (Recommended)

### User.jsx

```jsx
export default function User({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}
```

Destructuring makes the code cleaner and easier to read.

---

# 📅 Notes (10/07/2026)

# Ternary Operator

Syntax:

```javascript
condition ? trueValue : falseValue;
```

Example:

```javascript
10 < 5 ? "True" : "False";
```

React Example:

```jsx
{
  isLoggedIn ? <Home /> : <Login />;
}
```

---

---

# 🎯 Event Handling

Event handling allows React components to respond to user actions like clicks, typing, form submissions, and mouse events.

### Common Events

- `onClick`
- `onChange`
- `onSubmit`
- `onKeyDown`
- `onKeyUp`
- `onMouseEnter`
- `onMouseLeave`
- `onDoubleClick`
- `onFocus`
- `onBlur`

### Example

```jsx
function handleClick() {
  alert("Button Clicked!");
}

<button onClick={handleClick}>Click Me</button>;
```

> **Note:** Pass the function reference (`handleClick`), not the function call (`handleClick()`).

---

## 📅 Notes (13/07/2026)

# Controlled and Uncontrolled Components

React forms can be managed using **Controlled Components** or **Uncontrolled Components**. The difference lies in **where the form data is stored and managed**.

### Controlled Component

- Form data is managed by **React State** using `useState()`.
- React becomes the **single source of truth**.
- Recommended approach for most React applications.

```jsx
const [name, setName] = useState("");

<input type="text" value={name} onChange={(e) => setName(e.target.value)} />;
```

### Uncontrolled Component

- Form data is managed by the **DOM**, not React State.
- Data is accessed using **Refs**.

```jsx
import { useRef } from "react";

const inputRef = useRef();

<input type="text" ref={inputRef} />;
```

### Quick Comparison

| Controlled                    | Uncontrolled                             |
| ----------------------------- | ---------------------------------------- |
| Uses `useState()`             | Uses `useRef()`                          |
| Data stored in React State    | Data stored in the DOM                   |
| Easier validation and control | Simpler for basic forms                  |
| Recommended for most cases    | Useful for simple or existing HTML forms |

---

# 📚 Quick Summary

- ✅ React is component-based.
- ✅ JSX allows writing HTML inside JavaScript.
- ✅ Components return a single root element.
- ✅ Fragments avoid unnecessary DOM nodes.
- ✅ Use `const` whenever possible.
- ✅ State stores dynamic data.
- ✅ Props pass data from parent to child.
- ✅ Use destructuring for cleaner props.
- ✅ Inline CSS uses `{{ }}`.
- ✅ Named exports allow multiple exports.
- ✅ Default export allows only one export per file.
- ✅ Ternary operators are commonly used for conditional rendering.

---

## 👨‍💻 Author

**Maulik Dabhi**

If these notes helped you, consider ⭐ starring the repository.
