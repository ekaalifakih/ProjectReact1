import React from "react";
import { tampilkanTahun } from "../utils.js";
import { HeaderPage } from "./HeaderPage.js";
export function Contact() {
  return (
    <>
      <HeaderPage />
      <h2>Ini adalah halaman Contact</h2>
      <footer>
        <p>&copy; {tampilkanTahun()} - Hak Cipta Dilindungi</p>
      </footer>
    </>
  );
}
