import React from "react";
import Services from "@/components/services";
import Logos from "@/components/logos";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Logos />
        <Services />
      </main>
    </>
  );
}