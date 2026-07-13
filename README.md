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

> > > **13/07/2026**

# 🎯 Controlled and Uncontrolled Components

In React, form inputs can be managed using **Controlled Components** or **Uncontrolled Components**. The difference between them depends on **where the form data is stored and managed**.

### Controlled Component

- Form data is stored and managed using **React State (`useState`)**.
- React State acts as the **single source of truth**.
- The input value is controlled by React, making it easier to validate, update, and manage form data.
- Recommended approach for most React applications.

```jsx
const [name, setName] = useState("");

<input type="text" value={name} onChange={(e) => setName(e.target.value)} />;
```

### Uncontrolled Component

- Form data is stored in the **DOM**, not in React State.
- Data is accessed using **`useRef()`**.
- Useful for simple forms, file inputs, or when working with existing HTML forms.

```jsx
const inputRef = useRef();

<input type="text" ref={inputRef} />;
```

### Quick Comparison

| Controlled Component                | Uncontrolled Component |
| ----------------------------------- | ---------------------- |
| Uses `useState()`                   | Uses `useRef()`        |
| Data stored in React State          | Data stored in the DOM |
| React controls the input            | DOM controls the input |
| Easier validation and form handling | Best for simple forms  |
| Recommended approach                | Used in specific cases |

---

# 🪝 Hooks in React

**Hooks** are special functions that allow functional components to use React features such as state, references, and lifecycle methods without writing class components.

### Common React Hooks

- **`useState()`** → Used to create and manage state (component memory).
- **`useRef()`** → Used to reference DOM elements or store mutable values without re-rendering the component.
- **`useEffect()`** → Used to perform side effects such as API calls, timers, event listeners, or updating the document title after a component renders.

---

# 📚 React Quick Summary

- ✅ **React is a Component-Based Library:**  
  Every UI is built by combining small, reusable components. Instead of writing one large HTML page, React divides the UI into independent components that can be reused across the application.

- ✅ **JSX (JavaScript XML):**  
  JSX allows you to write HTML-like syntax inside JavaScript. It makes UI code more readable and lets you use JavaScript expressions inside HTML using `{}`.

- ✅ **Single Root Element:**  
  Every React component must return only one root element. If multiple elements need to be returned, wrap them inside a `<div>` or a **React Fragment (`<>...</>`)**.

- ✅ **React Fragments:**  
  Fragments allow grouping multiple elements without creating an extra HTML element in the DOM. This keeps the DOM cleaner and avoids unnecessary wrapper elements.

- ✅ **Immutability with `const`:**  
  React encourages immutable data. Use `const` whenever possible for variables and functions to prevent accidental reassignment and write more predictable code.

- ✅ **State (`useState`):**  
  State is a component's memory used to store dynamic data such as counters, form inputs, login status, or theme changes. When the state changes, React automatically re-renders the component to display the updated UI.

- ✅ **Props (Properties):**  
  Props allow a parent component to send data to a child component. They make components reusable because the same component can display different data based on the props it receives.

- ✅ **Props Destructuring:**  
  Instead of accessing values with `props.name` and `props.age`, destructuring (`{ name, age }`) provides cleaner, shorter, and more readable code.

- ✅ **Inline CSS:**  
  Inline styles in React use **double curly braces (`{{ }}`)** because the outer braces indicate JavaScript and the inner braces define a JavaScript object containing CSS properties written in camelCase.

- ✅ **Exports in React:**
  - **Default Export:** Only one component or function can be exported from a file and imported without curly braces.
  - **Named Export:** Multiple components or functions can be exported from the same file and imported using curly braces (`{}`).

- ✅ **Conditional Rendering:**  
  React commonly uses the **Ternary Operator (`condition ? true : false`)** to display different UI elements based on a condition, making it simple to show or hide content dynamically.

- ✅ **Event Handling:**  
  Event handling enables React components to respond to user interactions such as button clicks, typing, form submissions, keyboard events, and mouse events. React uses **camelCase** event names like `onClick`, `onChange`, and `onSubmit`, and event handlers should be passed as function references.

- ✅ **Controlled Components:**  
  A controlled component stores form data in **React State (`useState`)**. Since React controls the input values, it becomes easier to validate data, handle user input, and update the UI. This is the recommended approach for most React applications.

- ✅ **Uncontrolled Components:**  
  An uncontrolled component stores form data in the **DOM** instead of React State. Data is accessed using **`useRef()`**, making it useful for simple forms, file inputs, or integrating React with existing HTML or third-party libraries.

- ✅ **React Philosophy:**  
  React follows a **declarative** approach, where developers describe **what the UI should look like** based on the current state, and React efficiently updates only the necessary parts of the DOM whenever the data changes.

- ✅ **React Hooks:**  
  Hooks are built-in React functions that allow functional components to use features like state, references, and lifecycle methods without writing class components. They make React code cleaner, more reusable, and easier to maintain.

- ✅ **`useState()` Hook:**  
  The `useState()` Hook is used to create and manage **state (component memory)**. Whenever the state changes, React automatically re-renders the component to display the updated UI.

- ✅ **`useRef()` Hook:**  
  The `useRef()` Hook is used to access **DOM elements directly** or store mutable values that persist between renders without triggering a component re-render. It is commonly used for uncontrolled components and managing input focus.

- ✅ **`useEffect()` Hook:**  
  The `useEffect()` Hook is used to perform **side effects** after a component renders, such as fetching data from APIs, setting timers, adding event listeners, or updating the document title.

---

## 👨‍💻 Author

**Maulik Dabhi**

If these notes helped you, consider ⭐ starring the repository.
