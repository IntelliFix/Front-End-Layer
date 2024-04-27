import React, { useRef, useState } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import loading icon
import red from "@mui/material/colors/red";
import ApiHandler from "../../ApiHandler/ApiHandler";
import ChatItem from "./ChatItem";
import ReactLoading from "react-loading";

export const Chat = () => {
  const inputRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false); // State variable to indicate whether the chatbot is typing

  const handleSubmit = async () => {
    try {
      if (inputText.trim() !== "") {
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: inputText, role: "user" },
        ]);
        setInputText("");
        setIsTyping(true); // Set isTyping to true when the user submits a message

        const response = await ApiHandler.submitMessage(inputText);
        const responseData = response.data.output;

        setMessages((prevMessages) => [
          ...prevMessages,
          { content: responseData, role: "assistant" },
        ]);
        setIsTyping(false); // Set isTyping to false when the response is received
      }
    } catch (error) {
      console.log(error);
      setIsTyping(false); // Set isTyping to false in case of an error
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
            paddingTop:10,
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
                bgcolor: "#1bf7f3",
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
            paddingTop: 6,
            display: "flex",
            flex: { md: 0.8, xs: 1, sm: 1 },
            flexDirection: "column",
            px: 3,
          }}
        >
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
              // marginTop: "10rem",
              width: "75%",
              bottom: 3, // what this do? it holds the input down but how?
              borderRadius: 45,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              // borderColor: "white",
              border: "0.3px solid #1bf7f3",
              marginTop: "0.7rem",
              display: "flex",
              // marginBottom: "3px", // not workinngg :(
              backdropFilter: "blur(15px)",
            }}
          >
            {/* Conditionally render loading icon or send button */}
            {isTyping ? (
              <ReactLoading
                color="white"
                height={50}
                width={50}
                margin={3}
              />
            ) : (
              <input
                ref={inputRef}
                type="text"
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  padding: "15px", // it was 30px
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
            )}
            {/* Conditionally render loading icon or send button */}
            {!isTyping && (
              <IconButton
                onClick={handleSubmit}
                sx={{ color: "#1bf7f3", mx: 1 }}
              >
                <IoMdSend />
              </IconButton>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

