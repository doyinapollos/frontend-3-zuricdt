import React, { useState } from "react";

const InlineTextEdit = ({ text, onSave, placeholder }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSaveClick = () => {
    onSave(editedText);
    setIsEditing(false);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="inline-text-edit" onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <div className="flex items-center">
          <input
            type="text"
            placeholder={placeholder} // Custom placeholder text
            value={editedText}
            onChange={handleInputChange}
            className="border text-black rounded px-2 py-1 mr-2"
          />
          <button
            onClick={handleSaveClick}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default InlineTextEdit;
