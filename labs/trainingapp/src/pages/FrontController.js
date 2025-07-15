import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Blogs } from "./Blogs";
import { Contact } from "./Contact";
import { NoPage } from "./Nopage";

export function FrontController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
