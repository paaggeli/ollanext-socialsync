import NavLink from './navigation/navlink';
import NewChatButton from './newChatButton';
import ChatList from './ChatList';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export default function Sidebar() { 
  const chats = ["Chat 1", "Chat 2", "Chat 3", "Chat 4", "Chat 5"];
  return(
    <div className="relative h-screen w-55 bg-neutral-800 text-white border-r border-r-neutral-700 flex flex-col">
      <div className="flex items-center justify-center h-16 px-2.5 bg-neutral-800">
        <h1 className="text-xl">OllaNext SocialSync</h1>
      </div>

      <div className="flex-grow mt-8 justify-center text-center">
          <NewChatButton />
          <ChatList chats={chats} />
      </div>

      <div className="h-18 flex flex-col items-center justify-center text-center">
        <button className="py-1 hover:font-semibold focus:outline-none">Settings</button>
        <div className="py-2">
          <p className="text-xs hover:font-semibold"><a href="https://github.com/your-username/your-repository-name/contributing">Contributing on GitHub!</a></p>
        </div>

        <div className="flex justify-evenly pb-2 w-full">
          <a href="#"><FaXTwitter /></a> <a href="#"><FaFacebookF /></a> <a href="#"><FaGithub /></a> <a href="#"><RiLinkedinFill /></a>
        </div>
      </div>

    </div>
  );
}
