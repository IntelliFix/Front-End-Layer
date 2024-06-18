import React, { useRef, useState } from "react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import ApiHandler from "../../ApiHandler/ApiHandler";
import ReactLoading from "react-loading";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css"; // You can choose any highlight.js theme you prefer
import "./Chatbot.css"; // Import the CSS file

export const Chat = () => {
  const inputRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async () => {
    try {
      if (inputText.trim() !== "") {
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: inputText, role: "user" },
        ]);
        setInputText("");
        setIsTyping(true);

        const response = await ApiHandler.submitMessage(inputText);
        const responseData = response.data.output;

        setMessages((prevMessages) => [
          ...prevMessages,
          { content: responseData, role: "assistant" },
        ]);
        setIsTyping(false);
      }
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: "Sorry, an error has occurred...", role: "assistant" },
      ]);
      console.log(error);
      setIsTyping(false);
    }
  };

  const formatMessage = (content) => {
    // Patterns for different markdown formats
    const codePattern = /```python([\s\S]*?)```/g;
    const boldPattern = /\*\*(.*?)\*\*/g;
    const italicPattern = /\*(.*?)\*/g;
    const underlinePattern = /__(.*?)__/g;
    const inlineCodePattern = /`([^`]+)`/g;

    const formatText = (text) => {
      if (typeof text !== 'string') return text;

      // Handling inline code
      let formattedText = text.split(inlineCodePattern).map((part, index) =>
        index % 2 === 0 ? part : <code key={index} style={{ backgroundColor: '#272822', padding: '0 4px', borderRadius: '3px' }}>{part}</code>
      );

      // Handling bold text
      formattedText = formattedText.map((part, index) =>
        typeof part === 'string' ? part.split(boldPattern).map((subPart, subIndex) =>
          subIndex % 2 === 0 ? subPart : <strong key={`${index}-${subIndex}`}>{subPart}</strong>
        ) : part
      ).flat();

      // Handling italic text
      formattedText = formattedText.map((part, index) =>
        typeof part === 'string' ? part.split(italicPattern).map((subPart, subIndex) =>
          subIndex % 2 === 0 ? subPart : <em key={`${index}-${subIndex}`}>{subPart}</em>
        ) : part
      ).flat();

      // Handling underlined text
      formattedText = formattedText.map((part, index) =>
        typeof part === 'string' ? part.split(underlinePattern).map((subPart, subIndex) =>
          subIndex % 2 === 0 ? subPart : <u key={`${index}-${subIndex}`}>{subPart}</u>
        ) : part
      ).flat();

      return formattedText;
    };

    const parts = content.split(codePattern);

    return parts.map((part, index) => {
      if (index % 2 === 0) {
        const formattedText = formatText(part);
        return <Typography key={index} sx={{ color: "white" }}>{formattedText}</Typography>;
      } else {
        return (
          <Box key={index} sx={{ bgcolor: "#272822", p: 2, borderRadius: 2, my: 1 }}>
            <Highlight className="python">
              {part}
            </Highlight>
          </Box>
        );
      }
    });
  };


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          mt: 3,
          gap: 3,
        }}
      >
        <Box
          sx={{
            paddingTop: 10,
            marginTop: "auto",
            marginBottom: "auto",
            display: { md: "flex", xs: "none", sm: "none" },
            flex: 0.2,
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              boxShadow: "2px 2px 2px black",
              display: "flex",
              width: "100%",
              height: "70vh",
              bgcolor: "#1e1e1e",
              borderRadius: 5,
              flexDirection: "column",
              border: "1px solid #444",
              mx: 3,
            }}
          >
            <Avatar
              sx={{
                mx: "auto",
                my: 2,
                bgcolor:
                  "linear-gradient(90.21deg,rgba(170, 54, 124, 0.5) -5.91%,rgba(74, 47, 189, 0.5) 111.58%)",
                background:
                  "linear-gradient(90.21deg,rgba(170, 54, 124, 0.5) -5.91%,rgba(74, 47, 189, 0.5) 111.58%)",
                color: "white",
                fontWeight: 700,
              }}
            >
              PY
            </Avatar>
            <Typography sx={{ mx: "auto", color: "white" }}>
              Hello, this is PyErre!
            </Typography>
            <Typography
              sx={{
                mx: "auto",
                my: 4,
                p: 3,
                color: "white",
              }}
            >
              You can ask me any kind of questions regarding Python, Python frameworks or libraries, and even programming concepts! Sadly I won't be able to help you with anything else other than Python because the IntelliFix team programmed me to do so :(
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingTop: 6,
            display: "flex",
            flex: { md: 0.8, xs: 1, sm: 1 },
            flexDirection: "column",
            px: 3,
          }}
        >
          <Box className="chat-container">
            <Box className="chat-messages">
              {messages.map((chat, index) => (
                <div key={index} className={`chat-message ${chat.role}`} style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start', marginBottom: '10px', justifyContent: 'space-between' }}>
                  {chat.role === "user" ? (
                    <FaUser className="icon" style={{ marginRight: '10px', marginTop: '5px' }} />
                  ) : (
                    <FaPython className="icon" style={{ marginRight: '10px', marginTop: '5px' }} />
                  )}
                  <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'flex-start' }}>
                    {formatMessage(chat.content)}
                  </Box>
                </div>
              ))}
              {isTyping && (
                <div className="chat-message assistant">
                  <ReactLoading
                    type="spin"
                    color="white"
                    height={40}
                    width={40}
                  />
                </div>
              )}
            </Box>

            <Box className="chat-input">
              <textarea
                type="text"
                ref={inputRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
                placeholder="Type your message..."
                rows="1"
                style={{
                  width: "100%",
                  whiteSpace: 'pre-wrap',
                  overflowWrap: 'break-word',
                  border: 'none',
                  outline: 'none',
                  resize: 'none'
                }}
              />
              <IconButton onClick={handleSubmit} disabled={isTyping}>
                <IoMdSend />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
