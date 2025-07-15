import React from "react";
import { tampilkanTahun } from "../utils.js";
import { HeaderPage } from "./HeaderPage.js";
export function Home() {
  return (
    <>
      <HeaderPage />
      <h1>Selamat Datang di Aplikasi React</h1>
      <h2>Ini adalah halaman Home</h2>
      <footer>
        <p>&copy; {tampilkanTahun()} - Hak Cipta Dilindungi</p>
      </footer>
      </>
  );
}
