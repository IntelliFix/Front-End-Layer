import React, { useRef, useState } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import red from "@mui/material/colors/red";
import ApiHandler from "../../ApiHandler/ApiHandler";
import ChatItem from "./ChatItem";

const Chat = () => {
  const inputRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async () => {
    try {
      if (inputText.trim() !== "") {
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: inputText, role: "user" },
        ]);
        setInputText("");

        const response = await ApiHandler.submitMessage(inputText);
        const responseData = response.data.output;

        setMessages((prevMessages) => [
          ...prevMessages,
          { content: responseData, role: "assistant" },
        ]);
        console.log(responseData);
      }
    } catch (error) {
      console.log(error);
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
        {/* Sidebar */}
        <Box
          sx={{
            marginTop: "auto",
            marginBottom: "auto",
            display: { md: "flex", xs: "none", sm: "none" },
            flex: 0.2,
            flexDirection: "column",
          }}
        >
          {" "}
          <Box
            sx={{
              boxShadow: "2px 2px 2px black",
              display: "flex",
              width: "100%",
              height: "70vh",
              bgcolor: "#1b2329",
              borderRadius: 5,
              flexDirection: "column",
              mx: 3,
            }}
          >
            <Avatar
              sx={{
                mx: "auto",
                my: 2,
                bgcolor: "white",
                color: "black",
                fontWeight: 700,
              }}
            >
              PY
            </Avatar>
            <Typography
              sx={{ mx: "auto", fontFamily: "work sans", color: "white" }}
            >
              Hello, this is PyErre!
            </Typography>
            <Typography
              sx={{
                mx: "auto",
                fontFamily: "work sans",
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
            <Button
              // onClick={handleDeleteChats}
              sx={{
                width: "200px",
                my: "auto",
                color: "white",
                fontWeight: "700",
                borderRadius: 3,
                mx: "auto",
                bgcolor: red[400],
                ":hover": {
                  bgcolor: red[600],
                },
              }}
            >
              Clear Conversation
            </Button>
          </Box>
        </Box>

        {/* Main Chat Area */}
        <Box
          sx={{
            display: "flex",
            flex: { md: 0.8, xs: 1, sm: 1 },
            flexDirection: "column",
            px: 3,
          }}
        >
          {/* Chat Title */}
          {/* <Typography
          sx={{
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Python Assistant
        </Typography> */}

          {/* Chat Messages */}
          <Box
            sx={{
              width: "100%",
              height: "75vh",
              borderRadius: 3,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden", // Hide the scrollbar
            }}
          >
            <Box
              sx={{
                overflowY: "auto", // Allow vertical scrolling
                paddingRight: "17px", // Add padding to compensate for the scrollbar width
              }}
            >
              {messages.map((chat, index) => (
                <ChatItem key={index} content={chat.content} role={chat.role} />
              ))}
            </Box>
          </Box>

          {/* Input Field */}
          <div
            style={{
              position: "fixed",
              marginTop: "10rem",
              width: "75%",
              bottom: 3,
              borderRadius: 8,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              // borderColor: "white",
              border: "0.3px solid white",
              marginTop: "0.7rem",
              display: "flex",
              margin: "auto",
              backdropFilter: "blur(15px)",
            }}
          >
            <input
              ref={inputRef}
              type="text"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                padding: "30px",
                border: "none",
                outline: "none",
                color: "white",
                fontSize: "20px",
                marginBottom: "0rem",
              }}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
            />
            <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
              <IoMdSend />
            </IconButton>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Chat;
