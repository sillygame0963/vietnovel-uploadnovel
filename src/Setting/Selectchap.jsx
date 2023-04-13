import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={chapter}
      sx={{ width: 790 }}
      renderInput={(params) => <TextField {...params} label="Truyện" />}
    />
  );
}

const chapter = [];
