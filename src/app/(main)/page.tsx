"use client";
import { useCreateDocument } from "@/hooks/useCreateDocument";
import mutationFetch from "@/utils/fetcher";
import { BlobProvider } from "@react-pdf/renderer";
import React, { useState } from "react";
import useSWRMutation from "swr/mutation";

type Props = {};

const Page = (props: Props) => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const sections = ["Test proje dökümantasyonu", result];
  const document = useCreateDocument(sections);

  const { trigger, isMutating } = useSWRMutation([`/api/groq`], mutationFetch, {
    onSuccess: (data) => {
      console.log(data);
      setResult(data.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleSubmit = () => {
    trigger({
      method: "POST",
      data: { userInput },
    });
  };

  return (
    <div className="p-40 flex flex-col gap-1 items-center place-content-center">
      {isMutating ? <p>Loading...</p> : <p>{result}</p>}
      <input
        className="w-full bg-gray-400 rounded-lg p-2"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        className="p-4 bg-orange-500 text-white rounded-md"
        onClick={handleSubmit}
      >
        Ask Ai
      </button>
      <BlobProvider document={document || <></>}>
        {({ blob, url, loading, error }) => {
          if (loading) {
            return <div>Yükleniyor...</div>;
          }
          return (
            <a href={url || ""} download="example.pdf">
              <button className="p-4 bg-blue-500 text-white rounded-md">
                PDF Oluştur ve İndir
              </button>
            </a>
          );
        }}
      </BlobProvider>
    </div>
  );
};

export default Page;
