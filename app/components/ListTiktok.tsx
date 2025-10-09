"use client";

import { Video } from "@/types";
import React, { useEffect, useState } from "react";
import { AiFillTikTok, AiOutlineLoading } from "react-icons/ai";
import { FaCheck, FaHourglassStart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function ListTiktok() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video/get`);
        if (!res.ok) throw new Error("Erreur lors du fetch");
        const data: Video[] = await res.json();
        const sortedData = [...data].sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        );
        setVideos(sortedData);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) setError(error.message);
        else setError(String(error));
      }
    };
    fetchVideos();
  }, []);
  return (
    <div
      className={`text-white flex flex-col gap-8 max-h-[70dvh] ${
        !loading && "overflow-auto"
      }`}
    >
      {!loading ? (
        videos.map((v: Video) => (
          <div
            className="bg-gray-900 flex items-center justify-center py-6 px-8 gap-12 rounded-3xl"
            key={v.id}
          >
            {v.type === "tiktok" && <AiFillTikTok size={48} />}
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-lg">{v.prompt.slice(0, 100)}</h3>
              <h4 className="text-sm">
                <span className="underline">OperationID :</span> {v.operationId}
              </h4>
              {v.uri && (
                <h5 className="text-sm">
                  <span className="underline">URI :</span> {v.uri}
                </h5>
              )}
              <h6 className="text-xs">{v.createdAt}</h6>
            </div>
            <div className="flex gap-6">
              <div>
                <h4 className="text-sm mb-3">État génération : </h4>
                {v.done ? (
                  <FaCheck className="text-green-400" size={32} />
                ) : (
                  <FaHourglassStart className="text-orange-300" size={32} />
                )}
              </div>
              <div>
                <h4 className="text-sm mb-3">État du post : </h4>
                {v.isPosted ? (
                  <FaCheck size={32} />
                ) : (
                  <RxCross1 className="text-red-400" size={32} />
                )}
              </div>
            </div>
          </div>
        ))
      ) : error ? (
        <h2>Une erreur est survenue : {error}</h2>
      ) : (
        <AiOutlineLoading size={32} className="text-black animate-spin" />
      )}
    </div>
  );
}
