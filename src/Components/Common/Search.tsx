import React, { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Search = (props: any) => {
  const { show, handleClose, handleSearchChange } = props;
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const handleStartListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "vi-VN" });
  };
  const handleStopListen = () => {
    SpeechRecognition.stopListening();
    handleClose();
    handleSearchChange({ target: { value: inputValue } });
  };
  return (
    <>
      <div
        className={` z-50 fixed md:top-15 top-0 h-0 w-screen bg-[#9F9F9F] ${
          show ? "block" : "hidden"
        }`}
      >
        <p>Microphone: {listening ? "on" : "off"}</p>
        <div className="relative w-[25px] top-10 md:left-96 left-28">
          {" "}
          <FaMicrophone
            style={{ width: "25px", height: "25px" }}
            onClick={handleStartListening}
          />
        </div>
        <input
          className=" md:w-[800px] max-md:max-w-[400px] px-12 h-14 flex justify-center mx-auto items-center  rounded-md border-0 py-1.5 text-[#000000]  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div
          className="text-center relative -top-10 w-[25px] md:left-[1125px] cursor-pointer "
          onClick={handleStopListen}
        >
          <RiDeleteBack2Line style={{ width: "25px", height: "25px" }} />
        </div>
      </div>
    </>
  );
};

export default Search;
