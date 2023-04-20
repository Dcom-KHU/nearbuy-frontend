"use client";

import ReactDOM from "react-dom";
import { useState } from "react";
import { searchToggle } from "@/store/searchToggle/searchToggleSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { IoSearch, IoCloseSharp } from "react-icons/io5";

const BackDropBox = styled.div`
  /* TODO: 작은 화면과 큰 화면일 때, 검색창 다르게 표시 */
  /* @media screen and (max-width: 707px) { */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  /* } */
`;
const OverlayForm = styled.form`
  /* @media screen and (max-width: 707px) { */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px;
  background-color: white;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  gap: 20px;

  input {
    height: 30%;
    width: 90%;
    min-width: 204px;
    background-color: rgb(242, 243, 246);
    border-radius: 8px;
    padding: 0 10px;
  }
  button {
    background-color: var(--background-color);
    border-radius: 50%;
    padding: 10px;
  }
  button:hover {
    color: var(--accent-color);
    font-weight: bolder;
  }
`;

// 검색창
const BackDropPortal = () => {
  return <BackDropBox />;
};
const OverlayPortal: React.FC<{ onClick: () => void }> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 검색 결과 페이지로 리디렉션 redirect
    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    // <Link href={`/${nowState}/detail/?id=${post.id}`}>
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <OverlayForm onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="검색어를 입력해주세요."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">
        <IoSearch />
      </button>
      <button onClick={props.onClick}>
        <IoCloseSharp />
      </button>
    </OverlayForm>
  );
};

// 포탈
const SearchModal = () => {
  const dispatch = useDispatch();
  const searchToggleHandler = () => {
    dispatch(searchToggle());
  };
  return (
    <>
      {ReactDOM.createPortal(
        <BackDropPortal />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <OverlayPortal onClick={searchToggleHandler} />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </>
  );
};
export default SearchModal;
