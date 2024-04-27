// import NewChatButton from '@/components/Sidebar/NewChatButton';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ChatList from '@/components/Sidebar/ChatList';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export default function Sidebar() { 
  const chats = ["Chat 1", "Chat 2", "Chat 3", "Chat 4", "Chat 5"];
  return(
    <div className="relative h-screen w-55 bg-background text-white border-r border-r-border flex flex-col">
      <div className="flex items-center justify-center h-16 px-2.5 bg-background">
        <h1 className="text-xl">OllaNext SocialSync</h1>
      </div>

      <div className="flex-grow mt-8 justify-center text-center">
          {/* <NewChatButton /> */}
          <Button className='my-8'>New Chat</Button>
          <ChatList chats={chats} />
      </div>

      <div className="h-18 flex flex-col items-center justify-center text-center">
        {/* <Button variant="link">Settings</Button> */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link">Settings</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <p>test dialog</p>
              </div>
              <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className="py-2">
          <p className="text-xs hover:font-semibold"><a href="https://github.com/your-username/your-repository-name/contributing">Contributing on GitHub!</a></p>
        </div>

        <div className="flex justify-evenly pb-2 w-full">
          <a href="#"><Button variant="ghost" size="icon" className="rounded-full focus-visible:ring-offset-0"><FaXTwitter /></Button></a> 
          <a href="#"><Button variant="ghost" size="icon" className="rounded-full focus-visible:ring-offset-0"><FaFacebookF /></Button></a> 
          <a href="#"><Button variant="ghost" size="icon" className="rounded-full focus-visible:ring-offset-0"><FaGithub /></Button></a> 
          <a href="#"><Button variant="ghost" size="icon" className="rounded-full focus-visible:ring-offset-0"><RiLinkedinFill /></Button></a>
        </div>
      </div>

    </div>
  );
}
