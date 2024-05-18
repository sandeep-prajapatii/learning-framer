import React from 'react';

function Navbar({ examples, setCurrentExample, closeNavbar }) {
  return (
    <div className="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg p-4">
      <button onClick={closeNavbar} className="text-right mb-4">Close</button>
      <ul>
        {examples.map((Example, index) => (
          <li key={index}>
            <button 
              className="w-full text-left py-2 hover:bg-gray-200"
              onClick={() => {
                setCurrentExample(index);
                closeNavbar();
              }}
            >
              Example {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
