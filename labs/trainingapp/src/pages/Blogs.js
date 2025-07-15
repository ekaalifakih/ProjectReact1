import React from "react";
import { tampilkanTahun } from "../utils.js";
import { HeaderPage } from "./HeaderPage.js";
export function Blogs() {
  return (
    <>
      <HeaderPage />
      <h2>Ini adalah halaman Blogs</h2>
      <footer>
        <p>&copy; {tampilkanTahun()} - Hak Cipta Dilindungi</p>
      </footer>
    </>
  );
}
