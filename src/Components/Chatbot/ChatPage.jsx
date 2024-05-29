import React, { useRef, useState } from "react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import ApiHandler from "../../ApiHandler/ApiHandler";
import ReactLoading from "react-loading";
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
        { content: "Sorry an error has occured...", role: "assistant" },
      ]);
      console.log(error);
      setIsTyping(false);
    }
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
                // fontFamily: "work sans",
                my: 4,
                p: 3,
                color: "white",
              }}
            >
              You can ask me any kind of questions regarding python, python
              frameworks or libraries, and even programming concepts! Sadly I
              won't be able to help you with anything else rather than python
              because the IntelliFix team programmed me to do so :(
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
                <div key={index} className={`chat-message ${chat.role}`}>
                  {chat.content}
                  {chat.role === "user" ? (
                    <FaUser className="icon" />
                  ) : (
                    <FaPython className="icon" />
                  )}
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
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
                placeholder="Type your message..."
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
