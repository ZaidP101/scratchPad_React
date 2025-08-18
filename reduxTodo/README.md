# Redux Todo App

This is a simple Todo application built using **Redux Toolkit** for state management.

---

## How Redux Is Used in This Project

### 1. Slice Creation

A slice is created using `createSlice` from `@reduxjs/toolkit`. It includes:

- **Initial State**: Contains a default todo item.
- **Reducers**: Define logic for adding, removing, and updating todos.

```js
const initialState = {
  todos: [{ id: 1, text: "hello" }]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo,
    removeTodo,
    updateTodo
  }
});
```
Each reducer automatically generates an associated action creator.

### 2. Store Initialization
The Redux store is created using configureStore and includes the todo slice:
```js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/TodoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});
```

### 3. Providing the Store
The store is provided to the entire React app using the <Provider> component from react-redux:
```js
import { Provider } from 'react-redux';
import { store } from './app/store';

<Provider store={store}>
  <App />
</Provider>
```
This allows access to Redux state and dispatch methods throughout the component tree.

### 4. Using Redux in Components
Adding Todos

In AddTodo.js, a new todo is dispatched to the store:
```js
const dispatch = useDispatch();
dispatch(addTodo(input));
```
Removing Todos

In Todos.js, todos are accessed and a delete action is dispatched:
```js
const todos = useSelector(state => state.todo.todos);
dispatch(removeTodo(todo.id));
```

## Why Use Redux Instead of Context API?

| Feature                           | Redux Toolkit ✅   | Context API ⚠️         |
|-----------------------------------|--------------------|------------------------|
| Centralized State Management      | ✅ Yes             | ⚠️ Basic Only          |
| DevTools Support                  | ✅ Built-in        | ❌ No                  |
| Middleware (e.g., Thunk)          | ✅ Easy to Use     | ❌ Not Supported       |
| Better for Frequent Updates       | ✅ Yes             | ❌ Can cause re-renders |
| Scalable for Large Applications   | ✅ Preferred       | ❌ Less Suitable       |

> While Context API is good for small apps, **Redux** is more powerful and maintainable in applications where state changes frequently or scales across many components.
