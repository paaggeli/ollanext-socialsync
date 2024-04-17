import { useState } from 'react';

export default function EditableChatTitle() {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('untitled');

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
  };

  return (
  <div className="flex-glow text-center">
    { isEditing ? (
      <input type="text" className="text-center outline-none bg-transparent" value={title} onChange={handleTitleChange} onBlur={handleTitleBlur} autoFocus />
      ) : (
      <div className="font-bold" onClick={handleTitleClick}>
        {title}
      </div>
      )}
    </div>
  );
}
