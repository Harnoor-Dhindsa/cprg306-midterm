"use client";
import React, { useEffect, useState } from "react";

const APICallExam = () => {
  const passcode = "ehen2rfow";
  const [secretCode, setSecretCode] = useState(null);

  const fetchSecretCode = async () => {
    try {
      const response = await fetch(
        `https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`
      );
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="bg-red-100 p-2 rounded-md border border-red-500"
          onClick={fetchSecretCode}
        >
          Submit
        </button>
      </div>
      {secretCode && (
        <div className="p-4 text-center text-green-600">
          <p>The secret code is: {secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;
