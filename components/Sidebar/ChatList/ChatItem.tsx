const ChatItem = ({ chat }) => {
  const handleClick = () => {
    // Handle click event to display chat in the main area
    console.log(`Clicked on chat: ${chat}`);
  };

  return (
    <li className="text-sm italic py-1 hover:font-semibold hover:bg-accent cursor-pointer" onClick={handleClick}>
      {chat}
    </li>
  );
};

export default ChatItem;
