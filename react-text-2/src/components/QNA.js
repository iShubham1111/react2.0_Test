import React from 'react';

const questions = [
  {
    id: 1,
    question: "What is React?",
    options: {
      a: "A JavaScript framework",
      b: "A JavaScript library for building UI",
      c: "A back-end framework",
      d: "A database"
    },
    correctAnswer: "b"
  },
  {
    id: 2,
    question: "Who developed React?",
    options: {
      a: "Google",
      b: "Facebook",
      c: "Microsoft",
      d: "Apple"
    },
    correctAnswer: "b"
  },
  {
    id: 3,
    question: "What is JSX?",
    options: {
      a: "JavaScript and XML",
      b: "JSON and XML",
      c: "JavaScript Extension",
      d: "A new JavaScript framework"
    },
    correctAnswer: "a"
  },
  {
    id: 4,
    question: "How do you create a React component?",
    options: {
      a: "function MyComponent() {}",
      b: "class MyComponent extends React.Component {}",
      c: "Both a and b",
      d: "None of the above"
    },
    correctAnswer: "c"
  },
  {
    id: 5,
    question: "What is the purpose of useState in React?",
    options: {
      a: "To define a state in class components",
      b: "To manage state in functional components",
      c: "To perform API calls",
      d: "To handle props"
    },
    correctAnswer: "b"
  },
  {
    id: 6,
    question: "Which method is used to update the state in class components?",
    options: {
      a: "updateState()",
      b: "setState()",
      c: "changeState()",
      d: "modifyState()"
    },
    correctAnswer: "b"
  },
  {
    id: 7,
    question: "Which hook is used for side effects in functional components?",
    options: {
      a: "useEffect",
      b: "useState",
      c: "useReducer",
      d: "useMemo"
    },
    correctAnswer: "a"
  },
  {
    id: 8,
    question: "What is the correct way to pass props in React?",
    options: {
      a: "<Component propName='value' />",
      b: "<Component[propName]='value' />",
      c: "<Component.propName='value' />",
      d: "<Component>{propName: value}</Component>"
    },
    correctAnswer: "a"
  },
  {
    id: 9,
    question: "Which statement is true about React components?",
    options: {
      a: "Components can only be class-based",
      b: "Components must always have state",
      c: "Components are reusable pieces of UI",
      d: "Components cannot be nested"
    },
    correctAnswer: "c"
  },
  {
    id: 10,
    question: "What is the virtual DOM?",
    options: {
      a: "A real-time database",
      b: "A lightweight copy of the actual DOM",
      c: "A new HTML version",
      d: "A replacement for the actual DOM"
    },
    correctAnswer: "b"
  },
  {
    id: 11,
    question: "What is the difference between state and props?",
    options: {
      a: "State is mutable, props are immutable",
      b: "Props are mutable, state is immutable",
      c: "Both are mutable",
      d: "Both are immutable"
    },
    correctAnswer: "a"
  },
  {
    id: 12,
    question: "What is the best way to handle performance optimizations in React?",
    options: {
      a: "Avoid using state",
      b: "Use useMemo and useCallback where necessary",
      c: "Use inline functions in JSX",
      d: "Re-render components frequently"
    },
    correctAnswer: "b"
  },
  {
    id: 13,
    question: "What happens when the state of a component changes?",
    options: {
      a: "The component re-renders",
      b: "The component remains unchanged",
      c: "The entire application reloads",
      d: "Nothing"
    },
    correctAnswer: "a"
  },
  {
    id: 14,
    question: "What is the default state value of useState()?",
    options: {
      a: "null",
      b: "undefined",
      c: "The initial value provided",
      d: "0"
    },
    correctAnswer: "c"
  },
  {
    id: 15,
    question: "Which hook is used to manage complex state logic?",
    options: {
      a: "useEffect",
      b: "useReducer",
      c: "useState",
      d: "useRef"
    },
    correctAnswer: "b"
  },
  {
    id: 16,
    question: "In which lifecycle method do API calls typically occur?",
    options: {
      a: "componentDidMount",
      b: "componentDidUpdate",
      c: "render",
      d: "constructor"
    },
    correctAnswer: "a"
  },
  {
    id: 17,
    question: "What is the purpose of useEffect?",
    options: {
      a: "To handle form submissions",
      b: "To manage state",
      c: "To perform side effects in functional components",
      d: "To update props"
    },
    correctAnswer: "c"
  },
  {
    id: 18,
    question: "What does useRef return?",
    options: {
      a: "A mutable object with a .current property",
      b: "A new DOM element",
      c: "A state variable",
      d: "A function"
    },
    correctAnswer: "a"
  },
  {
    id: 19,
    question: "What will useEffect with an empty dependency array ([]) do?",
    options: {
      a: "Run only once when the component mounts",
      b: "Run every time the component updates",
      c: "Run only when the component unmounts",
      d: "Never run"
    },
    correctAnswer: "a"
  },
  {
    id: 20,
    question: "Which lifecycle method is used to clean up resources?",
    options: {
      a: "componentWillUnmount",
      b: "componentDidMount",
      c: "render",
      d: "componentDidUpdate"
    },
    correctAnswer: "a"
  },
  {
    id: 21,
    question: "Which package is commonly used for routing in React?",
    options: {
      a: "react-router",
      b: "redux-router",
      c: "react-navigation",
      d: "react-dom"
    },
    correctAnswer: "a"
  },
  {
    id: 22,
    question: "How do you define a route in React Router?",
    options: {
      a: "<Route path='/home' element={<Home />} />",
      b: "<Router path='/home' component={Home} />",
      c: "<Route to='/home' component={Home} />",
      d: "<Route component={<Home />} />"
    },
    correctAnswer: "a"
  },
  {
    id: 23,
    question: "What is useContext used for?",
    options: {
      a: "To create a new context",
      b: "To access a context value",
      c: "To update the state",
      d: "To manage side effects"
    },
    correctAnswer: "d"
  },
  {
    id: 24,
    question: "What is the purpose of React Context API?",
    options: {
      a: "To manage component states",
      b: "To share data between components without props drilling",
      c: "To make API calls",
      d: "To handle component updates"
    },
    correctAnswer: "b"
  },
  {
    id: 25,
    question: "Which component is used to wrap routes in React Router?",
    options: {
      a: "<Router>",
      b: "<Switch>",
      c: "<BrowserRouter>",
      d: "<Navigation>"
    },
    correctAnswer: "c"
  },
  {
    id: 26,
    question: "What is Redux used for?",
    options: {
      a: "Managing component styles",
      b: "Managing global state",
      c: "Handling API requests",
      d: "Creating routes"
    },
    correctAnswer: "b"
  },
  {
    id: 27,
    question: "What is a higher-order component (HOC)?",
    options: {
      a: "A component that is higher in the DOM tree",
      b: "A function that returns a new component",
      c: "A component that manages state",
      d: "A component with a higher z-index"
    },
    correctAnswer: "b"
  },
  {
    id: 28,
    question: "What is React.memo used for?",
    options: {
      a: "To memoize values in functions",
      b: "To prevent unnecessary re-renders of functional components",
      c: "To store component data in memory",
      d: "To handle memoization of API responses"
    },
    correctAnswer: "c"
  },
  {
    id: 29,
    question: "How does useMemo work?",
    options: {
      a: "It caches the result of an expensive function",
      b: "It re-renders the component",
      c: "It replaces useState",
      d: "It triggers a side effect"
    },
    correctAnswer: "a"
  },
  {
    id: 30,
    question: "What does useCallback do?",
    options: {
      a: "Caches functions to prevent unnecessary re-renders",
      b: "Memoizes component state",
      c: "Handles callback functions",
      d: "None of the above"
    },
    correctAnswer: "a"
  }
];

const QNA = () => {
  return (
    <div className="qna-container">
      {questions.map((q) => (
        <div key={q.id} className="qna-item">
          <h3>
            {q.id}. {q.question}
          </h3>
          <ul>
            <li>a) {q.options.a}</li>
            <li>b) {q.options.b}</li>
            <li>c) {q.options.c}</li>
            <li>d) {q.options.d}</li>
          </ul>
          <p>
            <strong>Correct Answer:</strong> {q.correctAnswer}) {q.options[q.correctAnswer]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QNA;
