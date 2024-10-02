// src/components/Header.tsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";
import myLogo from "../assets/logo.png";
// src/index.js 또는 index.tsx
//import "../styles/index.css";

const Header: React.FC = () => {
  return (
    <header className="bg-black header">
      {/* 상단 바 */}
      <div className="header__top">
        {/* 로고 */}
        <div className="h-12 mt-2 w-29">
          <Link to="/">
            <img
              src={myLogo}
              alt="Logo"
              className="object-contain w-full h-full"
            />
          </Link>
        </div>
        {/* 사용자 메뉴 */}
        <div className="flex space-x-6 text-white">
          <Link
            to="/login"
            className="text-white hover:text-white hover:underline"
          >
            로그인
          </Link>
          <Link
            to="/register"
            className="text-white hover:text-white hover:underline"
          >
            회원가입
          </Link>
          <Link
            to="/cart"
            className="text-white hover:text-white hover:underline"
          >
            장바구니
          </Link>
        </div>
      </div>
      {/*header botton*/}
      <div>
        {/* 검색창 */}
        <div className="relative w-full px-5 ">
          <input
            type="text"
            placeholder="10월 멤버스데이 오픈!"
            className="w-full px-4 py-2 pl-5 bg-white rounded-md text-gray focus:outline-none"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 cursor-pointer right-7 top-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="flex justify-start px-5 py-3 space-x-6 text-gray-400 bg-black">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="category/best"
              className=" text-gray-400 hover:text-white hover:underline"
            >
              BEST
            </Link>
          </li>
          <li>
            <Link
              to="category/women"
              className=" text-gray-400 hover:text-white hover:underline"
            >
              WOMEN
            </Link>
          </li>
          <li>
            <Link
              to="category/men"
              className=" text-gray-400 hover:text-white hover:underline"
            >
              MEN
            </Link>
          </li>
          <li>
            <Link
              to="category/shoes"
              className=" text-gray-400 hover:text-white hover:underline"
            >
              SHOES
            </Link>
          </li>
          <li>
            <Link
              to="category/etc"
              className="text-gray-400 hover:text-white hover:underline"
            >
              etc
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
