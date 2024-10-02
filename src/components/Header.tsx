// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* 상단 바 */}
      <div className="header__top">
        {/* 로고 */}
        <div className="header__logo">
          <Link to="/">
            <img
              src="https://via.placeholder.com/150x50?text=Logo"
              alt="Logo"
            />
          </Link>
        </div>

        {/* 검색창 */}
        <div className="header__search">
          <input type="text" placeholder="검색어를 입력하세요" />
          <button type="submit">
            <img
              alt="search"
              src="https://img.icons8.com/?size=100&id=7695&format=png&color=808080"
            />
          </button>
        </div>

        {/* 사용자 메뉴 */}
        <div className="header__user-menu">
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
          <Link to="/cart">장바구니</Link>
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/category/men">남성</Link>
          </li>
          <li>
            <Link to="/category/women">여성</Link>
          </li>
          <li>
            <Link to="/category/accessories">액세서리</Link>
          </li>
          <li>
            <Link to="/category/shoes">신발</Link>
          </li>
          <li>
            <Link to="/sale">세일</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
