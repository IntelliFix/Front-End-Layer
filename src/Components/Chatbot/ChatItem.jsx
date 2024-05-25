import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TbBrandPython } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

function extractCodeFromString(message) {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
}

function isCodeBlock(str) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }
  return false;
}

const ChatItem = ({ content, role }) => {
  const messageBlocks = extractCodeFromString(content);
  return role === "assistant" ? (
    // AI message box
    <Box
      sx={{
        display: "flex",
        p: 5,
        bgcolor: "#323f4a",
        gap: 2,
        borderRadius: 2,
        my: 1,
      }}
    >
      <Avatar sx={{ ml: "0", bgcolor: "black" }}>
        {/* <img src="openai.png" alt="openai" width={"30px"} /> */}
        <TbBrandPython color="rgba(170, 54, 124, 1)" bgcolor="black" />
      </Avatar>
      <Box>
        {!messageBlocks && (
          <Typography sx={{ fontSize: "16px", color: "white" }}>
            {content}
          </Typography>
        )}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block, index) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter
                key={index}
                style={coldarkDark}
                language="javascript"
              >
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography key={index} sx={{ fontSize: "20px" }}>
                {block}
              </Typography>
            )
          )}
      </Box>
    </Box>
  ) : (
    // User message box
    <Box
      sx={{
        display: "flex",
        p: 2,
        bgcolor: "#1b2329",
        gap: 2,
        borderRadius: 2,
        marginTop: 3,
      }}
    >
      <Avatar sx={{ ml: "0", bgcolor: "black" }}>
        {/* <img src="openai.png" alt="openai" width={"30px"} /> */}
        <FaUser color="white" bgcolor="black" />
      </Avatar>
      <Box>
        {!messageBlocks && (
          <Typography sx={{ fontSize: "16px", color: "white" }}>
            {content}
          </Typography>
        )}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block, index) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter
                key={index}
                style={coldarkDark}
                language="javascript"
              >
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography key={index} sx={{ fontSize: "20px" }}>
                {block}
              </Typography>
            )
          )}
      </Box>
    </Box>
  );
};

export default ChatItem;
