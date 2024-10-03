// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import "./App.css";

import Best from "./pages/best";
import Men from "./pages/men";
import Etc from "./pages/etc";
import SHOES from "./pages/shoes";
import Women from "./pages/women";
import ProductDetail from "./components/ProductDetail";
// 기타 필요한 컴포넌트 임포트

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      {/* 라우트 설정 */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/category/best" element={<Best />} />{" "}
        <Route path="/category/women" element={<Women />} />{" "}
        <Route path="/category/men" element={<Men />} />{" "}
        <Route path="/category/etc" element={<Etc />} />{" "}
        <Route path="/category/shoes" element={<SHOES />} />{" "}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* 다른 페이지 라우트 설정 */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
