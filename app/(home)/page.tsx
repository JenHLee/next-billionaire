"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [billionaries, setBillionaries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getBillionaries = async () => {
    const response = await fetch(
      "https://billions-api.nomadcoders.workers.dev/"
    );
    const json = await response.json();
    setBillionaries(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getBillionaries();
  }, []);

  return (
    <div>
      <h2>home</h2>
      {isLoading ? (
        <h2>is Loading....</h2>
      ) : (
        <h2>{JSON.stringify(billionaries)}</h2>
      )}
      <div></div>
    </div>
  );
}
