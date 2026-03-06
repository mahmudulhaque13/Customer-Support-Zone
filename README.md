1. What is JSX, and why is it used?

JSX is a syntax in React that lets you write HTML-like code inside JavaScript.
It makes UI code easier to read and create.

2. What is the difference between State and Props?

Props: Data passed from parent to child (read-only).
State: Internal data of a component that can change.

3. What is the useState hook?

useState is a React hook used to create and manage state in functional components.

Example:

const [count, setCount] = useState(0);

4. How can you share state between components?

By lifting state up to a parent component and passing it through props.

5. How is event handling done in React?

Using camelCase events and functions.

Example:

<button onClick={handleClick}>Click</button>
