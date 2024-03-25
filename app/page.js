"use client";

import Image from "next/image";

export default function Home() {
  const mytest = () => {
  }

  return (
    <>
      <div>
        Beispiel-Inhalt<br />
        <button className="btn btn-blue" onClick={mytest}>Test</button>
      </div>
    </>
  );
}
