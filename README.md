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

```
- `search` - react state whcih is changing
- `functionCall` -> the function which needs to be called
- `1000` - duration 

```
useLazyLoad(ref, functionCall, shouldLoad);
```
- `ref` - ref to a div
- `functionCall` -> the function which needs to be called
- `shouldLoad` - parameter which decided how long the lazy loading whould continue.  
---

## 📦 Installation

```bash
npm install react-next-utils
# or
yarn add react-next-utils
