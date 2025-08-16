# React Context API – Dark Mode Toggle (Learning Project)

This project is part of my React learning journey, specifically exploring **Context API**.  

The main focus here is understanding **how components can share and stay in sync with global state** without prop drilling.  

---

## What I Learned

- **Context API Basics**  
  How to create a `Context` and wrap components inside a `Provider`.

- **State Sharing Across Components**  
  When the dark mode toggle is switched, the state update is stored in Context.  
  Any component (like a card) consuming this context will **reactively change** its UI depending on whether the theme is `"dark"` or `"light"`.

- **Dark Mode Sync**  
  - The toggle updates the global state.  
  - The `Card` component doesn’t need the toggle’s props directly.  
  - Instead, it **subscribes to Context** and always reflects the correct mode.  

This ensures all components are **in sync with the same state**, regardless of where they are in the component tree.  

---

## Note on Tailwind Dark Mode

While working on this, I noticed that the **latest Tailwind installation guide** doesn’t generate a `tailwind.config.js` file by default.  
Because of this, I couldn’t directly add:  

```js
darkMode: "class",
