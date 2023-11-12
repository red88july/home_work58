import React from "react";
import Backdrop from "../Backdrop/Backdrop";

interface Props extends React.PropsWithChildren{
  show: boolean,
  title: string,
  onClose: React.MouseEventHandler,
}

const Modal:React.FC<Props>= ({show,title, children,onClose}) => {
  const onInnetClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <Backdrop show={show} onClick={onClose}/>
      <div className="modal show" style={{display: show ? 'block': 'none'}} onClick={onClose}>
        <div className="modal-dialog" onClick={onInnetClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;