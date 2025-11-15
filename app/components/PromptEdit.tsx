"use client";

import { Prompt } from "@/types";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function PromptEdit({
  prompt,
  onSave,
}: {
  prompt: Prompt;
  onSave: (updatedPrompt: Prompt) => void;
}) {
  const [formData, setFormData] = useState(prompt);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successBtnTiktok, setSuccessBtnTiktok] = useState(false);

  useEffect(() => {
    setFormData(prompt);
    setCurrentPrompt(prompt.prompt);
    console.log(formData);
  }, [prompt]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await onSave(formData); // ⬅️ on attend le fetch du parent
    } finally {
      setIsLoading(false);
    }
  };

  const handleTiktokBtnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/generate-to-upload`,
        {
          method: "POST",
        }
      );
      const data = await res.json();
      setSuccessBtnTiktok(true);
      setTimeout(() => {
        setSuccessBtnTiktok(false);
      }, 3000);
      console.log(data);
    } catch (error) {
      console.error(error);
      setSuccessBtnTiktok(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // "Génère une grand-mère française de 100 ans"
    <form
      onSubmit={handleSubmit}
      className="border rounded-xl px-4 py-8 w-full max-w-[850px] flex flex-col gap-6 overflow-y-auto max-h-screen"
    >
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="intro">Intro</label>
          <input
            // disabled
            value={formData.intro}
            onChange={handleChange}
            name="intro"
            className="border p-2 bg-gray-200 rounded-md"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="place">Lieu</label>
          <input
            placeholder="Dans une cité délabrée..."
            value={formData.place}
            onChange={handleChange}
            name="place"
            className="border p-2 rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="habit">Tenue vestimentaire</label>
          <input
            placeholder="Habillée en survêtement rose avec un chapeau..."
            value={formData.habit}
            onChange={handleChange}
            name="habit"
            type="text"
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="rapSpeed">Vitesse du rap</label>
          <select
            value={formData.rapSpeed}
            onChange={handleChange}
            name="rapSpeed"
            className="border p-2 rounded-md"
          >
            <option value="fastNervous">Rapide et énervé</option>
            <option value="fastAmbient">Rapide et ambiançant</option>
            <option value="fastMelancholy">Rapide et mélancolique</option>
            <option value="slowNervous">Lent et énervé</option>
            <option value="slowAmbient">Lent et ambiançant</option>
            <option value="slowMelancholy">Lent et mélancolique</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="animal">
            Animal <span className="text-sm text-gray-500">(facultatif)</span>
          </label>
          <input
            placeholder="crocodile à côté..."
            value={formData.animal || ""}
            onChange={handleChange}
            name="animal"
            type="text"
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="instrumentalFlow">Flow de l&apos;instru</label>
          <select
            value={formData.instrumentalFlow}
            onChange={handleChange}
            name="instrumentalFlow"
            className="border p-2 rounded-md"
          >
            <option value="nervous">Énervée</option>
            <option value="ambient">Ambiançante</option>
            <option value="melancholy">Mélancolique</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="rapText">Texte du rap</label>
        <textarea
          value={formData.rapText}
          onChange={handleChange}
          placeholder="Posée dans mon tieks tu sais pas qui j'suis..."
          name="rapText"
          className="border p-2 rounded-md"
        />
      </div>
      <div className="bg-gray-600 text-white p-4 rounded-md">
        <h2 className="mb-2">Prompt actuel :</h2>
        <p className="text-sm">{String(currentPrompt)}</p>
      </div>
      <div className="flex justify-between items-end gap-8">
        <div className="flex w-2/3 gap-4">
          <button
            className="border h-[40px] rounded-md cursor-pointer hover:bg-gray-200 w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Chargement" : "Mettre à jour"}
          </button>
          <button
            className="border aspect-square flex items-center justify-center gap-1 w-full h-[40px] rounded-md cursor-pointer hover:bg-gray-200 p-1"
            disabled={isLoading}
            onClick={handleTiktokBtnSubmit}
          >
            {successBtnTiktok ? (
              <>
                <p className="hidden md:block">Génération vidéo commencée ✅</p>
                <p className="md:hidden">✅</p>
              </>
            ) : (
              <Image
                className="w-6"
                src={"/assets/tiktok.png"}
                width={500}
                height={500}
                alt="tiktok logo"
              />
            )}
          </button>
        </div>
        <div className="flex justify-center items-center rounded-md text-green-400 font-medium text-sm">
          <p className="flex gap-1">
            <span className="hidden md:flex">Dernière modif :</span>{" "}
            {formatDate(formData.updatedAt)}
          </p>
        </div>
      </div>
    </form>
  );
}
