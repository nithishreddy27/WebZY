import { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
export default function MyComponent() {
  const [elements, setElements] = useState([]);
  const [htmlArray, setHtmlArray] = useState([]);
  useEffect(() => {


    const htmlContent = ReactDOMServer.renderToString();
  
    // Store the HTML content in the array
    setHtmlArray(prevHtmlArray => [...prevHtmlArray, htmlContent]);
    // Load the elements from local storage on mount
    const storedElements = JSON.parse(localStorage.getItem('elements'));
    if (storedElements) setElements(storedElements);
  }, []);

  useEffect(() => {
    // Store the elements to local storage when the state changes
    if(elements.length!=0){
        localStorage.setItem('elements', JSON.stringify(elements));
    }
  }, [elements]);

  // Add a new element to the state
  const addElement = () => {
    setElements([...elements, <div>New Element</div>]);
  };

  return (
    <div>
      <button onClick={addElement}>Add Element</button>
      {elements.map((element)=>(
        <>
            {element}
            {console.log("el",element)}
        </>
      ))}
    </div>
  );
}