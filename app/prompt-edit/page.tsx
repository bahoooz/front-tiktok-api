"use client";

import { Prompt } from "@/types";
import React, { useEffect, useState } from "react";
import PromptEdit from "../components/PromptEdit";

export default function PromptEditPage() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPrompts() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/prompt`);
      const data = await res.json();
      setPrompts(data.prompts);
      console.log(data);
    }
    fetchPrompts();
  }, []);

  const handleSave = async (updatedPrompt: Prompt) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/prompt/${updatedPrompt.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPrompt)
      }
    );
    const data = await res.json()
    const promptSaved: Prompt = data.updatedPrompt
    setPrompts((prev) =>
      prev.map((prompt) =>
        prompt.id === promptSaved.id ? promptSaved : prompt
      )
    );
  };

  const currentPrompt = prompts.find((prompt) => prompt.id === page);

  if (!currentPrompt) return <p>Chargement...</p>;

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-dvh px-4">
      <h1 className="text-2xl">ÉDITER LES PROMPTS</h1>
      <PromptEdit
        key={currentPrompt.id}
        prompt={currentPrompt}
        onSave={handleSave}
      />
      <div className="flex gap-3 text-xl">
        {prompts.map((prompt) => (
          <button
            key={prompt.id}
            onClick={() => setPage(prompt.id)}
            className={`rounded-md p-2 text-base cursor-pointer ${
              page === prompt.id
                ? "bg-blue-400 text-white hover:bg-blue-400/80"
                : "hover:bg-gray-200"
            }`}
          >
            Prompt {prompt.id}
          </button>
        ))}
      </div>
    </div>
  );
}
