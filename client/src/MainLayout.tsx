// MainLayout.tsx
import React, { useState, useEffect } from "react";
import { RootState, sendMessage } from "./redux/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tips from "./components/Tips";
import MessageList from "./components/MessageList";
import { useDispatch, useSelector } from "react-redux";

const API_ENDPOINT: string = "http://localhost:8080/chat";

const MainLayout: React.FC = () => {
  const message = useSelector((state: RootState) => state.app.message);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  const handleSend = async () => {
    if (input.trim() !== "") {
      dispatch(sendMessage({ type: "text", content: input, sender: "user" }));
      setInput("");

      try {
        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          body: JSON.stringify({ prompt: input }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const resData = await response.json();
        console.log("Response from API: \n", resData.response);

        // Dispatch the message with the updated content from the API
        const catMessage = {
          type: "text",
          content: resData.response,
          sender: "ollama",
        };
        dispatch(sendMessage(catMessage));
      } catch (error) {
        console.error("Error here:", error);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-surface">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1 p-4">
        {message.length === 0 ? <Tips /> : <MessageList message={message} />}
      </main>
      <Footer input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  );
};

export default MainLayout;
