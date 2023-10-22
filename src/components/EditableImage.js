import React, { useState, useRef } from "react";
import placeImage from "../assets/images/place-image.png";

const EditableImage = () => {
  const [imageSrc, setImageSrc] = useState(`${placeImage}`); // Placeholder image source
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSrc(reader.result); // Update image source when file is read
    };

    if (file) {
      reader.readAsDataURL(file); // Read the selected file as a data URL
    }
  };

  const handlePlaceholderClick = () => {
    // Trigger a click event on the file input when the placeholder is clicked
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={imageSrc}
        alt="Editable"
        className="w-full h-full rounded-[7px] object-cover mb-4 cursor-pointer"
        onClick={handlePlaceholderClick}
      />{" "}
      <label
        className={`w-64 h-64 flex flex-col items-center justify-center border border-dashed border-gray-400 ${
          imageSrc ? "hidden" : ""
        }`}
        onClick={handlePlaceholderClick}
      >
        <span className="text-gray-600 cursor-pointer"> Choose File </span>{" "}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          ref={fileInputRef}
          // Uncomment the line below if you want to allow only one file to be uploaded
          // multiple={false}
        />{" "}
      </label>{" "}
    </div>
  );
};

export default EditableImage;
