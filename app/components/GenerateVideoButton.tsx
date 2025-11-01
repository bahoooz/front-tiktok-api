"use client";

import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

export default function GenerateVideoButton() {
  const [loading, setLoading] = useState(false);
  const [dataVideo, setDataVideo] = useState({});
  const [error, setError] = useState<string | null>(null);
  const handleGenerate = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/video/generate`,
        {
          method: "POST",
        }
      );
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} – ${await res.text()}`);
      }
      const data = await res.json();
      setDataVideo(data);
      console.log(dataVideo);
      setLoading(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message ?? "Erreur inconnue");
      }
    }
  };
  return (
    <button
      disabled
      onClick={handleGenerate}
      className="bg-blue-900 text-white py-3 px-4 rounded-2xl cursor-pointer"
    >
      Generate AI Video{" "}
      {loading && <AiOutlineLoading className="animate-spin" />}
      {error && error}
    </button>
  );
}
