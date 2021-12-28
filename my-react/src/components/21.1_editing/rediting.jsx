import React, { useState, useEffect, useRef } from "react";

export const Editing = () => {
  const [isEditing, setisEditing] = useState(false);
  const Input = () => {
    const inputRef = useRef();
    useEffect(() => {
      inputRef.current.focus();
    });
    return (
      <>
        <span>
          <input ref={inputRef} type="text" />
        </span>
      </>
    );
  };

  return (
    <div>
      <span>
        {isEditing && <Input />}
        <button onClick={() => setisEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </div>
  );
};
