"use client";

import Home from "../screens/home";
import { ToastContainer } from "react-toastify";

export default function Page() {
  return (
    <main>
      <Home />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}
