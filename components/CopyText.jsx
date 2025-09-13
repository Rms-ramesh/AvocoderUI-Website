import React, { useState } from "react";

function CopyText({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      // Modern browsers
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    } else {
      // Fallback for older browsers / iOS
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // prevents scrolling to bottom
      textArea.style.top = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch (err) {
        console.error("Fallback: Copy failed", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center 
                    bg-gray-100 p-3 rounded-lg shadow-md max-w-full 
                    hover:shadow-lg transition-shadow duration-300">
      
      {/* Text */}
      <span className="text-gray-800 break-words max-w-full pr-3">
        {text}
      </span>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-300 ease-in-out
          ${copied 
            ? "bg-green-500 text-white" 
            : "bg-blue-500 text-white hover:bg-blue-600"}`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default CopyText;
