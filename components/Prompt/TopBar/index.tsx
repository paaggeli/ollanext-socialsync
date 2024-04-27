import EditableChatTitle from '@/components/Prompt/TopBar/EditableChatTitle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState, useEffect, useRef } from 'react';

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return(
  <div className="flex items-center h-16 border-b border-b-border">
      <div className="flex-grow relative" ref={dropdownRef}>
        
          {/* <button type="button" className="border border-blue-500 rounded-full pb-0 pt-0.5 pl-2.5 pr-1 leading-none hover:bg-blue-500 hover:text-white text-xs transition duration-300 ease-in-out focus:outline-none" id="menu-button" aria-expanded={isOpen} aria-haspopup="true" onClick={toggleDropdown}>
            Share
            <svg className="inline ml-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="share" size="pillIcon">
                Share
                <svg className="inline ml-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem><a href="#" >Share the chat with email</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#" >Share the chat on twitter</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#" >Share the chat on facebook</a></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
        {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-md bg-neutral-800 text-white shadow-lg focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <a href="#" className="text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Share the chat with email</a>
            <a href="#" className="text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Share the chat on twitter</a>
            <a href="#" className="text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Share the chat on facebook</a>
          </div>
        </div>
        )}
      </div>

      <EditableChatTitle />
      
      <div className="flex justify-end flex-grow text-right text-gray-500">
        <div className="flex items-counter space-x-8">
          <span>Mistral</span>
          <span>1 day before</span>
          {/* <button type="button" className="border border-red-500 rounded-full py-0.5 px-2.5 hover:bg-red-500 hover:text-white text-xs text-red-500 transition duration-300 ease-in-out focus:outline-none" id="delet-chat-button">Delete
        </button> */}
          <Button variant="destructive" size="pill">Delete</Button>
        </div>
      </div>
  </div>
)}
