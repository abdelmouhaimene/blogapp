import React from "react";
import Navbar from "../components/Navbar";
export default function layout ({children} : Readonly<{children : React.ReactNode}>)  {
  return (
    <main className="bg-black text-white">
        <Navbar />
        {children}
    </main>
  )
}
