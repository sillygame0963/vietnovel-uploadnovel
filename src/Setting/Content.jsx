import * as React from "react";
import { styled } from "@mui/material/styles";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: 0,
  },
}));

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState("left");
  const [formats, setFormats] = React.useState(() => ["italic"]);
  const [error, setError] = React.useState(false);
  const [text, setText] = React.useState("");

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChapterTitleBlur = (event) => {
    const text = event.target.value;
    if (text.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: "wrap",
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color">
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>

      <div className="relative">
        <textarea
          placeholder="Nội dung chương"
          type="text"
          className="border border-gray-200 bg-white w-full h-[100px] rounded-b-lg leading-4 outline-none placeholder:text-sm placeholder:pt-2 line-clamp-1 placeholder:tracking-widest"
          value={text}
          onChange={handleTextChange}
          onBlur={handleChapterTitleBlur}
          error={error}
          helperText={error ? "Nội dung không được bỏ trống!" : null}
          style={{
            fontWeight: formats.includes("bold") ? "bold" : "normal",
            fontStyle: formats.includes("italic") ? "italic" : "normal",
            textDecoration: formats.includes("underlined")
              ? "underlined"
              : "normal",

            textAlign: formats.includes("left")
              ? "left"
              : formats.includes("center")
              ? "center"
              : formats.includes("right")
              ? "right"
              : "justify",
          }}
        />
        {error && (
          <div className="absolute -bottom-5 left-1 right-0 text-red-500 text-xs">
            Nội dung không được bỏ trống!
          </div>
        )}
      </div>
    </div>
  );
}
