Steps for context cretion 
1- create context (example : max)
    just functions without any functionality init.
2 - custom hook 
    named useMax that returns our context via useContext(max)
3 - Context Provider
    MaxProvider = Max.Provider

step 2 the useMax will be imported in App and functions functionalities will be defined

# React Todo App (Learning Context API)

This project is a simple **Todo Application** built as part of learning the **React Context API**.  
The goal of this project is not to showcase a production-ready app but to practice **state management using Context + Custom Hooks** in React.

---

## About
- The app manages a list of todos: **Add, Edit, Delete, Complete Toggle**.
- Todos are persisted in `localStorage`.
- Context API is used to share state (`todos`) and methods (`addTodo`, `updateTodo`, etc.) across components without prop drilling.

---

## Context API Creation Process (Reference Steps)

### Step 1 – Create Context
- Create a new context with some **initial values or placeholders**.  
  Example from this project (`Context.js`):
```js
import { createContext, useContext } from "react";

export const TodoContext = createContext({
todos: [],
addTodo: () => {},
updateTodo: () => {},
deleteTodo: () => {},
completed: () => {},
});
```

Here we define only the function signatures, no functionality yet.

---

### Step 2 – Custom Hook
- Create a hook (`useTodo`) to access the context easily from anywhere in the project.
```js
export const useTodo = () => {
return useContext(TodoContext);
};
```

This allows components to use `const {addTodo} = useTodo()` instead of importing the context everywhere.

---

### Step 3 – Provider
- Wrap the app (or parts of it) with the context **Provider**.  
- The Provider receives a `value` prop where we define the actual state & all functionalities.

```js
export const TodoProvider = TodoContext.Provider;
```

In `App.js`:

```js
<TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, completed }}>
{/* App Content */}
</TodoProvider>
```

Here is where the **real implementations of the functions** live, and the state (`todos`) is also provided.

---

### Step 4 – Use in Components
- Any component can now consume the provided values using the custom hook.

Example from `TodoItem.js`:
```js
const { updateTodo, deleteTodo, completed } = useTodo();
```
Example from `TodoForm.js`:
```js
const { addTodo } = useTodo();
```

---

## Summary
This small app demonstrates:
- How to **create Context**.
- How to write a **custom hook** for cleaner usage.
- How to use a **Provider** to share state and functions.
- How child components (`TodoItem`, `TodoForm`) consume context without prop drilling.

The process can be generalized for any app where state needs to be shared globally.

---

