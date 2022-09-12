import React, { useCallback, useMemo } from "react";
import "./index.css"
import { tuple } from "../../utils/tuple";

export const useModal = () => {
  const toggleModal = useCallback(() => {
    document.querySelector(".modal")?.classList.toggle("show-modal");
  }, []);

  const toggleModalOutside = useCallback((event: React.MouseEvent) => {
    if (event.target === document.querySelector(".modal")) {
      toggleModal();
    }
  }, [toggleModal]);

  const Modal = useMemo(() => {
    return (
      <div className="modal" onClick={toggleModalOutside}>
        <div className="modal-content">
          <span
            className="close-button"
            onClick={toggleModal}
          >
            &times;
          </span>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
          <div>Hello, I am a modal!</div>
        </div>
      </div>
    );
  }, [toggleModal, toggleModalOutside]);

  return tuple(toggleModal, Modal);
}
