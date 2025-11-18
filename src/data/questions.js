export const SampleQuestions = [
  {
    id: 1,
    question: "What is the virtual DOM in React?",
    options: [
      "A physical representation of the DOM",
      "A lightweight JavaScript representation of the DOM",
      "A database for storing DOM elements",
      "A CSS framework for styling"
    ],
    correctAnswer: 1,
    explanation:
      "The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM by libraries like React."
  },
  {
    id: 2,
    question: "Which hook is used to manage state in a functional component?",
    options: ["useEffect", "useState", "useReducer", "useContext"],
    correctAnswer: 1,
    explanation:
      "useState allows functional components to have and update local state."
  },
  {
    id: 3,
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON Extended",
      "Java Standard eXtension"
    ],
    correctAnswer: 0,
    explanation: "JSX stands for JavaScript XML and allows writing HTML-like syntax in JavaScript."
  },
  {
    id: 4,
    question: "Which hook is used for side effects in React?",
    options: ["useState", "useMemo", "useEffect", "useCallback"],
    correctAnswer: 2,
    explanation: "useEffect lets you run side effects such as API calls, subscriptions, and timers."
  },
  {
    id: 5,
    question: "What is the purpose of React keys?",
    options: [
      "To style elements",
      "To identify elements in lists uniquely",
      "To trigger rerenders manually",
      "To bind events"
    ],
    correctAnswer: 1,
    explanation: "Keys help React identify which items in a list have changed or been added/removed."
  },
  {
    id: 6,
    question: "Which method is used to update state in a class component?",
    options: ["setState", "updateState", "changeState", "refreshState"],
    correctAnswer: 0,
    explanation: "setState is the built-in method to update component state in class components."
  },
  {
    id: 7,
    question: "What is a React component?",
    options: [
      "A part of the DOM tree",
      "A reusable piece of UI",
      "A Java class",
      "A browser API"
    ],
    correctAnswer: 1,
    explanation: "Components are reusable blocks that define how UI should appear."
  },
  {
    id: 8,
    question: "Which hook returns memoized values?",
    options: ["useEffect", "useRef", "useMemo", "useLayoutEffect"],
    correctAnswer: 2,
    explanation: "useMemo returns a memoized value to avoid expensive recalculations."
  },
  {
    id: 9,
    question: "What is React?",
    options: [
      "A CSS framework",
      "A JavaScript library for building user interfaces",
      "A database management system",
      "A server-side rendering engine"
    ],
    correctAnswer: 1,
    explanation: "React is a JavaScript library used to build UI components."
  },
  {
    id: 10,
    question: "Which React hook is used to access context values?",
    options: ["useState", "useContext", "useReducer", "useCallback"],
    correctAnswer: 1,
    explanation: "useContext provides the value stored in a React context."
  },
  {
    id: 11,
    question: "What does useEffect return?",
    options: [
      "A cleanup function or nothing",
      "A state variable",
      "A context value",
      "A DOM element"
    ],
    correctAnswer: 0,
    explanation: "useEffect may return a cleanup function to run before re-running or unmounting."
  },
  {
    id: 12,
    question: "What is React Router used for?",
    options: [
      "State management",
      "Styling components",
      "Handling navigation between pages",
      "Managing API calls"
    ],
    correctAnswer: 2,
    explanation: "React Router manages navigation and routing within React applications."
  },
  {
    id: 13,
    question: "What is props in React?",
    options: [
      "Internal state of a component",
      "Functions for modifying state",
      "Input values passed to components",
      "CSS styling rules"
    ],
    correctAnswer: 2,
    explanation: "Props are inputs passed from a parent component to a child component."
  },
  {
    id: 14,
    question: "Which hook stores a mutable value that persists across renders?",
    options: ["useState", "useMemo", "useRef", "useEffect"],
    correctAnswer: 2,
    explanation: "useRef stores mutable values and does not trigger rerenders."
  },
  {
    id: 15,
    question: "What is the purpose of useReducer?",
    options: [
      "To memoize components",
      "To manage complex state logic",
      "To fetch data",
      "To manage routing"
    ],
    correctAnswer: 1,
    explanation: "useReducer helps manage complex state where multiple actions affect the state."
  },
  {
    id: 16,
    question: "React is based on which architecture?",
    options: ["MVC", "MVVM", "Component-based architecture", "Client-server"],
    correctAnswer: 2,
    explanation: "React uses a component-based architecture to structure applications."
  },
  {
    id: 17,
    question: "Which file usually contains the root React component?",
    options: ["index.js", "App.css", "config.json", "root.html"],
    correctAnswer: 0,
    explanation: "index.js typically renders the root App component."
  },
  {
    id: 18,
    question: "What does React.StrictMode do?",
    options: [
      "Enables production mode",
      "Highlights potential problems in an app",
      "Optimizes rendering",
      "Handles routing"
    ],
    correctAnswer: 1,
    explanation: "StrictMode activates additional checks to help identify potential issues."
  },
  {
    id: 19,
    question: "Which lifecycle method is used after a component mounts (class component)?",
    options: [
      "componentWillMount",
      "componentDidMount",
      "componentWillUpdate",
      "shouldComponentUpdate"
    ],
    correctAnswer: 1,
    explanation: "componentDidMount runs once after the component is inserted into the DOM."
  },
  {
    id: 20,
    question: "What is the purpose of React fragments (<></>)?",
    options: [
      "To wrap multiple elements without adding extra DOM nodes",
      "To apply styles",
      "To memoize values",
      "To fetch data"
    ],
    correctAnswer: 0,
    explanation: "Fragments allow grouping elements without creating extra DOM nodes."
  }
];