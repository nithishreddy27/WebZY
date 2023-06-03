import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState,useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [htmlArray, setHtmlArray] = useState([]);
  const [count, setcount] = useState(0)
  const [elements, setElements] = useState([])
  const [dipalyElements, setDipalyElements] = useState(false)
  const [selectedElement, setselectedElement] = useState("target")
  // useEffect(()=>{

  //   const doc = document.getElementById("target").innerHTML;

  //   console.log(doc)
  //   setHtmlArray(doc)
  //   // const blob = new Blob([doc]);

  //   // // Get the size of the Blob in bytes
  //   // const sizeInBytes = blob.size;
    
  //   // console.log("Size in bytes:", sizeInBytes);

  //   // const doc = document.getElementsByTagName("*")
  //   // console.log(doc)


    
  //   // const rootElement = document.documentElement;

  //   // // Function to recursively traverse the DOM tree and print the structure
  //   // function printDOMTree(node, indent = '') {
  //   //   // Print the current node
  //   //   console.log(indent + node.nodeName);
    
  //   //   // Get the child nodes of the current node
  //   //   const childNodes = node.childNodes;
    
  //   //   // Recursively traverse each child node
  //   //   for (let i = 0; i < childNodes.length; i++) {
  //   //     const childNode = childNodes[i];
  //   //     if (childNode.nodeType === Node.ELEMENT_NODE) {
  //   //       printDOMTree(childNode, indent + '  ');
  //   //     }
  //   //   }
  //   // }
    
  //   // // Call the function to print the DOM tree structure
  //   // printDOMTree(rootElement);

  // },[count])

  useEffect(()=>{
    console.log("inside",selectedElement)
  },[selectedElement])

  function addElement(newElement){
    const tempElement = document.createElement(newElement);
    // Set the HTML content of the temporary element
    // tempElement.innerHTML = htmlArray;
    setElements([...elements,newElement])
    tempElement.style.border = '1px solid black';
    tempElement.style.width = "50%";
    tempElement.style.height = "50%";
    tempElement.style.height = "100px";
    
    tempElement.addEventListener('click', (e) => {
      // Your onclick event logic here
      setselectedElement(e.target.id)
      setDipalyElements(true)
      console.log(newElement+' clicked!');
    });
    // tempElement.classList.add("w-[100px]","bg-slate-900","h-[100px]")
    const h1 = document.createElement('h1');
    h1.textContent = newElement;
    tempElement.appendChild(h1);
    const elementCount = elements.filter(element => element === newElement).length;
    tempElement.id = newElement+String(elementCount)
    console.log('inside',elementCount)

    // Get the desired location in the document to append the rendered HTML
    const targetElement = document.getElementById(selectedElement);

    // Append the temporary element to the target element
    targetElement.appendChild(tempElement);
  }

  // function runMe(){ 
  //   const tempElement = document.createElement('div');

  //   // Set the HTML content of the temporary element
  //   tempElement.innerHTML = htmlArray;

  //   // Get the desired location in the document to append the rendered HTML
  //   const targetElement = document.getElementById('target');

  //   // Append the temporary element to the target element
  //   targetElement.appendChild(tempElement);
  // }
  return (
    <main className="min-h-screen flex" id='main-div'>
      <div className='w-[30%]' id="div1">
        {/* <p className='text-red-800 text-lg'>one</p> */}
        {/* <form action="/api/addData" method='POST'>
          <input type="text" name='Id' />
          <button type="submit">Submit</button>
        </form> */}

        <button onClick={()=>{addElement("div")}}>Add div</button>
        <button onClick={()=>{addElement("h1")}}>Add h1</button>
        {dipalyElements && ( <div>

        <button onClick={()=>{addElement("h1")}}>Add h1</button>
        <button onClick={()=>{addElement("div")}}>Add h1</button>
        <button onClick={()=>{addElement("span")}}>Add h1</button>

        </div> )}


        {/* {Array.from({ length: count }, (err, i) => (
              <div key={i}>Div {i + 1}</div>
           ))} */}

          {/* <button onClick={runMe}>Create</button> */}
      </div>

          <div id='target' className='w-[70%] text-red-600' onMouseEnter={console.log("inside")}>
           one
          </div>
    </main>
  )
}
