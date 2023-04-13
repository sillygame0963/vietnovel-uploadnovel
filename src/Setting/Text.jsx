import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function Text() {
  const [chapterTitle, setChapterTitle] = useState("");
  const [error, setError] = useState(false);

  const handleChapterTitleChange = (event) => {
    setChapterTitle(event.target.value);
  };

  const handleChapterTitleBlur = (event) => {
    const value = event.target.value;
    if (value.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <TextField
        id="outlined-multiline-static"
        label="Tiêu đề chương"
        type="text"
        value={chapterTitle}
        onChange={handleChapterTitleChange}
        onBlur={handleChapterTitleBlur}
        // VALIDATION
        error={error}
        helperText={error ? "Tiêu đề không được để trốn" : null}
        sx={{ width: 388, marginLeft: 2 }}
      />
    </>
  );
}
