import { useState } from 'react';

const MyComponent = () => {
  const [generatedCode, setGeneratedCode] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const userInput = e.target.elements.userInput.value;
    console.log("user",userInput)
    const response = await fetch('/api/gptApi', {
      method: 'POST',
      body: JSON.stringify({ text: userInput }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setGeneratedCode(data.code);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <textarea name="userInput" />
        <button type="submit">Generate Code</button>
      </form>
      <pre>{generatedCode}</pre>
    </div>
  );
};

export default MyComponent;
