import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function Numberpickers() {
  const [chapterNumber, setChapterNumber] = useState("");
  const [error, setError] = useState(false);

  const handleChapterNumberChange = (event) => {
    const value = event.target.value;
    if (value === "" || (value >= 1 && value <= 10000)) {
      setChapterNumber(value);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {" "}
      <TextField
        id="outlined-number"
        label="Số chương"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={chapterNumber}
        onChange={handleChapterNumberChange}
        error={error}
        helperText={error ? "Số chương phải trong khoảng từ 1 đến 10000" : null}
        sx={{ width: 388 }}
      />
    </>
  );
}
