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

# 📅 Notes (13/07/2026)

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

# 📅 Notes (14/07/2026)

# 🔁 Looping using `map()`

In React, the **`map()`** method is the most common way to display a list of data. It loops through each element of an array and returns a new JSX element for every item. This allows you to dynamically render lists without writing repetitive code.

---

## Why use `map()`?

- Converts each element of an array into a JSX element.
- Makes the UI dynamic by rendering data automatically.
- Keeps the code clean, reusable, and easy to maintain.
- Commonly used to display lists, menus, tables, cards, and products.

---

## Syntax

```jsx
array.map((element, index) => <JSX key={index}>{element}</JSX>);
```

> **Note:** Every element returned by `map()` should have a unique **`key`** prop. React uses the `key` to identify which items have changed, been added, or removed, improving rendering performance.

---

# 📌 Looping Through an Array

### Example

```jsx
const fruits = ["Apple", "Banana", "Mango", "Orange"];

function App() {
  return (
    <ol>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ol>
  );
}
```

### Output

```text
1. Apple
2. Banana
3. Mango
4. Orange
```

---

# 📌 Looping Through an Array of Objects

When working with objects, you can access each object's properties inside the `map()` function.

### Example

```jsx
const students = [
  { id: 1, name: "Maulik", age: 21 },
  { id: 2, name: "Rahul", age: 22 },
  { id: 3, name: "Priya", age: 20 },
];
```

### Display as a Table

```jsx
<table border="1">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>

  <tbody>
    {students.map((student) => (
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
      </tr>
    ))}
  </tbody>
</table>
```

---

# 💡 Using a Unique `key`

React requires every item rendered using `map()` to have a **unique `key`**.

✅ Recommended

```jsx
<tr key={student.id}>
```

⚠️ Avoid using the array index as a key when the list can change (items are added, removed, or reordered).

```jsx
<li key={index}>{fruit}</li>
```

Using a unique ID helps React update the UI more efficiently.

---

# 📝 Important Notes

- `map()` works only with **arrays**.
- It returns a **new array** without modifying the original array.
- Every JSX element returned by `map()` should have a **unique `key`**.
- `map()` is commonly used to render lists, tables, cards, and menus dynamically.
- Prefer using a unique ID as the `key` instead of the array index whenever possible.

---

# 📅 Notes (15/07/2026)

# 🔍 `filter()` Method

The **`filter()`** method is used to create a new array by selecting only the elements that satisfy a given condition. Unlike `map()`, which transforms every element, `filter()` only returns the elements for which the condition is `true`.

---

## Why use `filter()`?

- Filters data based on a condition.
- Returns a new array without modifying the original array.
- Commonly used for search functionality, displaying active users, filtering products, and removing items.

---

## Syntax

```jsx
array.filter((element) => condition);
```

---

## Example

```jsx
const numbers = [10, 15, 20, 25, 30];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);
```

### Output

```text
[10, 20, 30]
```

---

## Example with Array of Objects

```jsx
const students = [
  { id: 1, name: "Maulik", age: 21 },
  { id: 2, name: "Rahul", age: 18 },
  { id: 3, name: "Priya", age: 22 },
];

const adults = students.filter((student) => student.age >= 21);

console.log(adults);
```

---

## Important Notes

- Works only with arrays.
- Returns a **new array**.
- Does not modify the original array.
- Returns only the elements that satisfy the condition.

---

# ⚡ `useMemo()`

`useMemo()` is a React Hook used to **memoize (remember) the result of a calculation**. It prevents expensive computations from running on every render and recalculates the value only when one of its dependencies changes.

---

## Why use `useMemo()`?

- Improves application performance.
- Prevents unnecessary calculations on every render.
- Useful when working with expensive computations, filtering, sorting, or large datasets.

---

## Syntax

```jsx
import { useMemo } from "react";

const memoizedValue = useMemo(() => {
  return calculation;
}, [dependencies]);
```

> **Dependency Array:**  
> React recalculates the memoized value **only when one of the dependencies changes**. If none of the dependencies change, React returns the previously stored value.

---

## Example

```jsx
import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const square = useMemo(() => {
    console.log("Calculating...");
    return count * count;
  }, [count]);

  return (
    <>
      <h2>Square: {square}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

---

## Important Notes

- Used for **performance optimization**.
- Stores the result of a calculation.
- Recalculates only when dependencies change.
- Should not be used for every calculation—only expensive ones.

---

# 🔄 `useEffect()`

`useEffect()` is a React Hook used to perform **side effects** after a component renders. Side effects are operations that interact with the outside world, such as fetching data, setting timers, adding event listeners, or updating the document title.

---

## Why use `useEffect()`?

- Fetch data from APIs.
- Set or clear timers.
- Add or remove event listeners.
- Update the document title.
- Perform actions after rendering.

---

## Syntax

```jsx
import { useEffect } from "react";

useEffect(() => {
  // Side Effect

  return () => {
    // Cleanup Code (Optional)
  };
}, [dependencies]);
```

---

## Example

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "React App";
  }, []);

  return <h1>Hello React</h1>;
}
```

---

## Dependency Array

### Run only once (on component mount)

```jsx
useEffect(() => {
  console.log("Runs once");
}, []);
```

### Run whenever a dependency changes

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

### Run after every render

```jsx
useEffect(() => {
  console.log("Runs after every render");
});
```

---

## Cleanup Function

A cleanup function is used to remove side effects such as timers or event listeners when the component is unmounted.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

---

## Important Notes

- Runs after the component renders.
- Used for handling side effects.
- The dependency array controls when the effect runs.
- Cleanup functions help prevent memory leaks.

---

# 📅 Notes (17/07/2026)

# 🔄 Component Lifecycle

Every React component goes through a series of stages during its lifetime. These stages are known as the **Component Lifecycle**. Understanding the lifecycle helps developers perform actions at the right time, such as fetching data, updating the UI, or cleaning up resources.

---

## 1️⃣ Mounting

**Mounting** is the first phase of a component's lifecycle. It occurs when the component is created and inserted into the DOM for the first time.

During this phase, React:

- Initializes the component.
- Sets the initial state using `useState()`.
- Renders the component on the screen.
- Executes `useEffect()` with an empty dependency array (`[]`) after the first render.

### Example

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

---

## 2️⃣ Updating

The **Updating** phase occurs whenever the component needs to re-render because its data has changed.

A component updates when:

- Props change.
- State (`useState`) changes.
- Parent component re-renders.
- `forceUpdate()` is called (Class Components).

During this phase, React updates only the parts of the UI that have changed.

### Example

```jsx
useEffect(() => {
  console.log("Count Updated");
}, [count]);
```

---

## 3️⃣ Unmounting

**Unmounting** is the final phase of a component's lifecycle. It occurs when the component is removed from the DOM.

During this phase, cleanup tasks should be performed, such as:

- Clearing timers.
- Removing event listeners.
- Canceling API requests.
- Closing WebSocket connections.

### Example

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log("Component Unmounted");
  };
}, []);
```

---

## Lifecycle Using `useEffect()`

| Lifecycle Phase | `useEffect()`                          |
| --------------- | -------------------------------------- |
| Mounting        | `useEffect(() => {}, [])`              |
| Updating        | `useEffect(() => {}, [dependency])`    |
| Unmounting      | `return () => {}` inside `useEffect()` |

---

# 🌟 Keeping Components Pure

A **Pure Component** is a component that always produces the same output for the same input (Props and State). It does not modify external variables or produce side effects during rendering.

Keeping components pure makes them:

- Easier to understand.
- Easier to test.
- More reusable.
- More predictable.

---

## Rules for Keeping Components Pure

- Do not modify props directly.
- Do not change variables outside the component.
- Always return the same UI for the same props and state.
- Perform side effects inside `useEffect()`, not during rendering.

### Pure Component Example

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

The component always returns the same output for the same `name` prop.

---

# 🎨 React Bootstrap

**React Bootstrap** is a popular UI library that provides ready-made Bootstrap components for React applications. Instead of writing Bootstrap classes manually, React Bootstrap offers reusable React components.

---

## Why use React Bootstrap?

- Faster UI development.
- Responsive design.
- Clean and reusable components.
- Easy integration with React.
- Less custom CSS required.

---

## Installation

```bash
npm install react-bootstrap bootstrap
```

Import Bootstrap CSS:

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
```

---

## Example

```jsx
import Button from "react-bootstrap/Button";

function App() {
  return <Button variant="primary">Click Me</Button>;
}
```

---

## Common React Bootstrap Components

- `Button`
- `Navbar`
- `Card`
- `Form`
- `Modal`
- `Alert`
- `Table`
- `Container`
- `Row`
- `Col`

---

## Important Notes

- React Bootstrap is built on top of Bootstrap.
- Components are fully responsive.
- Uses React components instead of HTML classes.
- Helps create professional-looking UIs with minimal effort.

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

- ✅ **`filter()` Method:**  
  The `filter()` method is used to create a new array by selecting only the elements that satisfy a given condition. It does not modify the original array and is commonly used for search functionality, filtering products, active users, or any condition-based data.

- ✅ **`useMemo()` Hook:**  
  The `useMemo()` Hook is used to **memoize the result of an expensive calculation**, improving performance by preventing unnecessary recalculations. React recomputes the value only when one of the dependencies in the dependency array changes.

- ✅ **Dependency Array in `useMemo()`:**  
  The dependency array tells React **when to recalculate** the memoized value. If the dependencies remain unchanged, React returns the previously stored result instead of executing the calculation again.

- ✅ **`useEffect()` Hook:**  
  The `useEffect()` Hook is used to perform **side effects** after a component renders, such as fetching data from an API, setting timers, adding event listeners, or updating the document title. The dependency array controls when the effect should run, and a cleanup function can be used to prevent memory leaks.

- ✅ **Component Lifecycle:**  
  Every React component goes through three lifecycle phases: **Mounting**, **Updating**, and **Unmounting**. These phases determine when a component is created, re-rendered, and removed from the DOM, allowing developers to perform actions at the appropriate stage.

- ✅ **Mounting, Updating, and Unmounting:**  
  During **Mounting**, the component is created, initialized, and rendered for the first time. **Updating** occurs whenever props or state change, causing the component to re-render. **Unmounting** happens when the component is removed from the DOM, where cleanup tasks such as clearing timers and removing event listeners should be performed.

- ✅ **Keeping Components Pure:**  
  A pure component always returns the same UI for the same props and state without modifying external data or causing side effects during rendering. Keeping components pure makes applications more predictable, reusable, easier to test, and simpler to maintain.

- ✅ **React Bootstrap:**  
  React Bootstrap is a UI component library that combines the power of React with Bootstrap's responsive design. It provides pre-built, reusable components like Buttons, Forms, Cards, and Navbars, allowing developers to build professional and responsive user interfaces with less code.

---

## 👨‍💻 Author

**Maulik Dabhi**

If these notes helped you, consider ⭐ starring the repository.
