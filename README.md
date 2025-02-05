## T3W7 Revision - Tuesday


## Vite
Vite is a modern build tool and development server for JavaScript projects, designed to be fast, lightweight, and easy to use. It’s commonly used for Vue.js, React, and Vanilla JS projects but can support other frameworks as well.

### How to create a directory using vite:
    npm create vite@latest . -- --template react 

### How to Install dependencies:
    npm install

### How to run Vite:
    npm run dev


### useState() Hook
built-in React hook that lets you add state to functional components. It allows you to store and update values over time. It returns a stateful value, and a function to update it. You can define multiple useState() hooks in one function.

    function Example() {
    // Declare a state variable "count" and a function "setCount" to update it
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
    }


### useEffect() Hook
The useEffect hook in React allows functional components to perform side effects, such as fetching data, updating the DOM, setting up event listeners, or managing timers. It runs after the component renders and can be controlled using a dependency array. When no dependencies are provided, it runs on every render; with an empty array [], it runs only once on mount; and when specific dependencies are listed, it runs only when they change.

useEffect hook replaces and combines multiple lifecycle methods from class components in React. In class-based components, you typically use these lifecycle methods:

- componentDidMount → Runs once when the component mounts.
- componentDidUpdate → Runs after the component updates (when dependencies change).
- componentWillUnmount → Runs before the component unmounts (for cleanup).
- With useEffect, all these behaviors can be achieved inside a single hook.


## Custom Hooks
Custom hooks in React are reusable functions that encapsulate logic using built-in hooks like useState and useEffect. They allow you to abstract and share logic across multiple components without repeating code. A custom hook typically starts with "use" (e.g., useFetch or useAuth) and can manage state, handle API calls, or manage side effects. By using custom hooks, you can keep components clean and more maintainable while improving code reusability.

- Must start with "use" (e.g., useFetch, useAuth).
- Must be called at the top level of a function (not inside loops, conditions, or nested functions).
- Can use other React hooks inside them (useState, useEffect, etc.).
- Custom hooks return data, functions, or state, but they don’t return JSX like components do.
- Just like React’s built-in hooks, custom hooks can manage state (useState), handle side effects (useEffect), or even use other hooks like useContext or useRef.
- Great for handling fetch requests, authentication, form validation, etc., in a reusable way.


### UseContext + Custom Hooks
Common pattern in React to encapsulate and simplify access to context values. Why use useContext in a custom hook?

- Encapsulation: Keeps context logic separate from components.
- Reusability: Allows multiple components to easily access the context.
- Cleaner code: Reduces prop drilling and makes components more readable.
- Benefits: Error handling, validation.