import "./Codefixer.css";
import "./MainView.css";
import ButtonBar from "../Button/Button_Bar.js";
import React, { useState, useEffect, useRef } from "react";
import ApiHandler from "../../ApiHandler/ApiHandler";
import Editor from "@monaco-editor/react";
import {
  Box,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { IoMdSend } from "react-icons/io";

function MainView() {
  const [code, setCode] = useState("");
  const [comment, setComment] = useState("");
  const [codeResult, setCodeResult] = useState("");
  const [commentResult, setCommentResult] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const [mode, setMode] = useState("Side-by-Side"); // Default mode
  const handleModeChange = (buttonName) => {
    setMode(buttonName);
  };

  const handleButtonClick = async () => {
    setCommentResult('');
    try {
      setLoading(true);
      console.log(code);
      const formatCodeToJSON = (code) => {
        return JSON.stringify({ code });
      };
      const formattedCode = formatCodeToJSON(code);
      console.log("Formatted code: " + formattedCode);
      const response = await ApiHandler.submitCode(formattedCode, comment);
      console.log(response);
      var correctedCode = response["data"]["corrected_code"];
      
      //  !!! THE CODE BELOW WAS THE PROBLEM !!!
      // if (correctedCode.startsWith("```python")) {
      //   correctedCode = correctedCode.split("```");
      // }

      setCodeResult(correctedCode); // Assuming the response contains the result
      setCommentResult(response["data"]["comment"]); // Assuming the response contains the result
      console.log("Result");
      console.log(codeResult);
      console.log(commentResult);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="main-container">
      <div>
        <ButtonBar handleModeChange={handleModeChange} />
      </div>

      <div className="codefixer-area">
        <div className={`inputs ${mode !== "Corrected" ? "show" : "hide"}`}>
          <Editor
            height="430px"
            language="python"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
            options={{
              inlineSuggest: true,
              fontSize: "14px",
              marginBottom: "8px",
              formatOnType: true,
              autoClosingBrackets: true,
            }}
          />
          <Box className="chat-input">
            <textarea
              ref={inputRef}
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleButtonClick();
                }
              }}
              placeholder="Type additional comments here..."
              rows="4"
              style={{
                width: "100%",
                whiteSpace: 'pre-wrap',
                overflowWrap: 'break-word',
                border: 'none',
                outline: 'none',
                resize: 'none'
              }}
            />
            <IconButton onClick={handleButtonClick}>
              <IoMdSend />
            </IconButton>
          </Box>
        </div>

        <div className={`outputs ${mode !== "Buggy" ? "show" : "hide"} `}>
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <CircularProgress />
            </Box>
          ) : (<Editor

            height="430px"
            language="python"
            theme="vs-dark"
            value={codeResult}
            onChange={(value) => setCodeResult(value)}
            options={{
              inlineSuggest: true,
              fontSize: "14px",
              marginBottom: "8px",
              formatOnType: true,
              autoClosingBrackets: true,
            }}
          />
          )}
          <Box className="chat-input">
            <textarea
              ref={inputRef}
              value={commentResult}
              rows="4" // Adjust the number of rows as needed
              style={{
                width: "100%",
                resize: "none", // Prevents resizing, can be omitted if resizing is desired
                boxSizing: "border-box",
                border: 'none',
                outline: 'none',
              }}
              readOnly
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default MainView;
