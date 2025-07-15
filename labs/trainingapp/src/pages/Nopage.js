import React from "react";
import { tampilkanTahun } from "../utils.js";

export function NoPage() {
  return (
    <>
      <h2>404 Page Not Found</h2>
      <footer>
        <p>&copy; {tampilkanTahun()} - Hak Cipta Dilindungi</p>
      </footer>
    </>
  );
}
