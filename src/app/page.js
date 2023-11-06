import React from "react";
import PaperCalculator from "../components";

export default function Home() {
  return (
    <div>
        <PaperCalculator initialValue={Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000)}/>
    </div>
  )
}
