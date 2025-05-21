import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-100 mb-4"
      aria-label="Kembali"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
}

export default BackButton;
