# react-next-utils

**Debounce & Lazy-load hooks for React and Next.js**  
A small, highly optimized package to improve performance and user experience in your React/Next.js projects.

---

##  Features

- **`useDebounce`** – Debounce any callback function based on a dependency or input change.  
- **`useLazyLoad`** – Trigger callbacks when an element enters the viewport using the Intersection Observer API.  

## Usage
```bash
useDebounce(search, functionCall, 1000);
useLazyLoad(ref, functionCall, shouldLoad);
```

---

## 📦 Installation

```bash
npm install react-next-utils
# or
yarn add react-next-utils
