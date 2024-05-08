import { useState, useRef, useEffect } from 'react';
import TopBar from "@/components/Prompt/TopBar";
import Response from "@/components/Prompt/Response";
import PromptInput from "@/components/Prompt/PromptInput";

export default function PromptArea() {
  const [responseList, setResponseList] = useState([]);
  const responseContainerRef = useRef(null);

  const handleInputChange = (value) => {
    setResponseList([...responseList, value]);
  }
  
  useEffect(() => {
    if (responseContainerRef.current) {
      responseContainerRef.current.scrollTop = responseContainerRef.current.scrollHeight;
    }
  }, [responseList]);

  return(
    <div className="flex flex-col flex-1 h-screen bg-stone-900 px-5">
      <TopBar />
      <div ref={responseContainerRef} className="h-full w-4/5 mx-auto py-4 overflow-y-auto scrollbar">
        {responseList.map((content, index) => (
          <Response key={index} content={content} />
        ))}
      </div>
      <PromptInput onInputSubmit={handleInputChange} />
    </div>
  )
}
