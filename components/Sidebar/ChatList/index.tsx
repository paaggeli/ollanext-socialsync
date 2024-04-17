import ChatItem from '@/components/Sidebar/ChatList/ChatItem';

const ChatList = ({chats}) => {
  return (
    <div className="">
      <h2 className="text-lg text-neutral-400 tracking-wider font-semibold mb-2">Chats</h2>
      <ul className="text-left mx-6 mt-3 pt-4 border-t border-neutral-400">
        {chats.map((chat, index) => (
          <ChatItem key={index} chat={chat} />
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
