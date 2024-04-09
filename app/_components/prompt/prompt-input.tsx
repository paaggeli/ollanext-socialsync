import { useState } from 'react';
import { IoIosSend } from "react-icons/io";
export default function PromptInput() {
  const [text, setText] = useState('');

  const maxHeight = 200;

  const handleChange = (event) => {
    setText(event.target.value);
    const currentHeight = event.target.scrollHeight;
    if (currentHeight > maxHeight) {
      event.target.style.height = `${maxHeight}px`;
      event.target.style.overflowY = 'scroll';
    } else {
      event.target.style.height = 'auto';
      event.target.style.height = `${event.target.scrollHeight}px`;
      event.target.style.overflowY = 'hidden';
    }
  };

  return (
    <div className="flex align-items justify-center">
      <div className="promptInput relative w-2/3 flex items-center justify-between p-2 pr-0 mb-4 border border-neutral-700 rounded-md">
        <textarea 
          className="m-0 w-full resize-none p-2 mr-16 border-0 bg-transparent overflow-hidden outline-none scrollbar" 
          rows="1" 
          value={text} 
          onChange={handleChange} 
          placeholder="Type your prompt here...">
        </textarea>
        <button className="absolute bottom-[0.7rem] right-3 ml-2 px-4 py-2 text-neutral-400 rounded hover:bg-neutral-700 hover:font-semibold border border-neutral-400"><IoIosSend /></button>
      </div>
    </div>
  );
}
