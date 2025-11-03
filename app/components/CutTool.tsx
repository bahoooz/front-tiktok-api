"use client";

import React, { useState } from "react";

export default function CutTool() {
  const [file, setFile] = useState<File | null>(null);
  const [duration, setDuration] = useState<number>(60);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wait, setWait] = useState(false);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!file) {
      setError("Choisis une vidéo d'abord");
      return;
    }
    if (!duration || duration <= 0) {
      setError("Durée de segment invalide");
      return;
    }

    try {
      setLoading(true);

      // 1) préparer le form-data
      const formData = new FormData();
      formData.append("file", file);

      // 2) envoyer au backend
      const res = await fetch(
        `http://localhost:4000/cut?duration=${duration}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      setSuccess(data.message);
      setDownloadUrl(data.downloadUrl);
      setWait(true);
      setTimeout(() => {
        setWait(false);
      }, 10_000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message ?? "Erreur inconnue");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Télécharger la vidéo</label>
        <input
          type="file"
          accept=".mp4,.mkv,.mov,.webm"
          onChange={onFileChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">
          Durée des parties (secondes)
        </label>
        <input
          type="number"
          min={1}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="border p-2 rounded w-40"
        />
      </div>
      <button
        type="submit"
        disabled={loading || !file || wait}
        className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
      >
        {loading
          ? "En cours de découpage et d'archivage"
          : wait
          ? "Cleanup interne en cours... (10s restantes)"
          : "Découper"}
      </button>
      {error && <p className="text-red-600">{error}</p>}
      {(success && !loading && wait) && <p className="text-green-600">{success}</p>}
      <br />{" "}
      {(downloadUrl && !loading && wait) && (
        <a
          className="border px-4 py-2 rounded cursor-pointer"
          href={downloadUrl}
          download={"parties.zip"}
        >
          Télécharger les vidéos
        </a>
      )}
    </form>
  );
}
