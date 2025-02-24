import React from 'react';

export default function QNA() {
  return (
    <div className='qna-container'>
      <h1 className='display-1 text-center'>Q&A Page</h1>
      <ul>
        <li>Q1: What is the primary purpose of props in React?</li>
        <p><strong>Answer:</strong> B) To pass data from one component to another</p>
        
        <li>Q2: How do you pass props to a React component?</li>
        <p><strong>Answer:</strong> B) As attributes in the JSX tag</p>
        
        <li>Q3: What happens if a prop is not passed to a component that expects it?</li>
        <p><strong>Answer:</strong> A) React throws an error</p>
        
        <li>Q4: What is a common convention for structuring React projects?</li>
        <p><strong>Answer:</strong> B) Separating components, styles, and assets into different folders</p>
        
        <li>Q5: In a React project, where is the main entry point typically located?</li>
        <p><strong>Answer:</strong> C) index.js</p>
        
        <li>Q6: What is the recommended naming convention for React component files?</li>
        <p><strong>Answer:</strong> B) PascalCase (MyComponent.js)</p>
        
        <li>Q7: What is JSX in React?</li>
        <p><strong>Answer:</strong> B) A syntax extension for JavaScript</p>
        
        <li>Q8: Which of the following is a valid way to write a JSX expression?</li>
        <p><strong>Answer:</strong> A) &lt;h1&gt;{2 + 2}&lt;/h1&gt;</p>
        
        <li>Q9: What is the correct syntax for adding a class to a JSX element?</li>
        <p><strong>Answer:</strong> B) &lt;div className="container"&gt;</p>
        
        <li>Q10: What is the use of useState in React?</li>
        <p><strong>Answer:</strong> B) To manage component state</p>
        
        <li>Q11: What is returned by useState?</li>
        <p><strong>Answer:</strong> C) An array with a state variable and a setter function</p>
        
        <li>Q12: How do you update state in useState?</li>
        <p><strong>Answer:</strong> B) Use the setter function returned by useState</p>
        
        <li>Q13: What is useEffect used for in React?</li>
        <p><strong>Answer:</strong> B) Fetching data and performing side effects</p>
        
        <li>Q14: What happens if you provide an empty dependency array [] in useEffect?</li>
        <p><strong>Answer:</strong> B) The effect runs only once after the initial render</p>
        
        <li>Q15: What is the key difference between props and state in React?</li>
        <p><strong>Answer:</strong> C) props are passed from parent to child, while state is managed within a component</p>
        
        <li>Q16: How do you create a class component in React?</li>
        <p><strong>Answer:</strong> A) class MyComponent extends React.Component {}</p>
        
        <li>Q17: What method is used to define state in a React class component?</li>
        <p><strong>Answer:</strong> C) constructor with this.state</p>
        
        <li>Q18: What lifecycle method is used to perform side effects in class components?</li>
        <p><strong>Answer:</strong> A) componentDidMount</p>
        
        <li>Q19: What is NOT a valid way to apply CSS in React?</li>
        <p><strong>Answer:</strong> C) Using this.styles in a functional component</p>
        
        <li>Q20: How do you apply conditional styling in React?</li>
        <p><strong>Answer:</strong> C) Both A and B</p>

  <br/>
  -------------------------------------------------------------------------------------------------------
  <br/>

  <li>Q21: Explain the role of props in React. How are they different from state?</li>
<p><strong>Answer:</strong> Props pass data from parent to child, enabling reusability, while state manages internal data and updates dynamically within a component to handle user interactions.</p>

<li>Q22: What is JSX, and why is it used in React?</li>
<p><strong>Answer:</strong> JSX is a JavaScript syntax extension that simplifies writing UI components by allowing HTML-like code within JavaScript, making React component structures more readable and manageable.</p>

<li>Q23: What is the purpose of the useEffect hook? Provide an example of when you would use it.</li>
<p><strong>Answer:</strong> The useEffect hook handles side effects like API calls or event subscriptions. For example, fetching data on component mount ensures updated information is displayed dynamically.</p>

<li>Q24: Explain the different phases of the React component lifecycle in class components.</li>
<p><strong>Answer:</strong> The React lifecycle has three phases: Mounting, Updating, and Unmounting.</p>
</ul>
</div>

  );
}
