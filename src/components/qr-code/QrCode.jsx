import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css"

const QrCode = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="qr-code-container">
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        /> 
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button> 
      </div>
      <br />
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#f5f5f5" />
      </div>
    </div>
  );
};

export default QrCode;
