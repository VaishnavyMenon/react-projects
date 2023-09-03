import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Modal = ({ theme, isOpen, onClose, children, isUpdate }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div
            className={`absolute top-[calc(100vh-75%)] mx-[38px] z-50 min-w-[334px] max-h-fit min-h-[390px] ${
              theme ? "bg-white" : "bg-[#3c3c3c]"
            } rounded-[20px] py-6`}
          >
            <div className={`flex justify-between  items-center mx-[28px] mb-[18px]`}>
              <h1
                className={`${theme? "text-[#0085ff]" : "text-[#ffffff]"} text-[24px] font-semibold`}
              >
              {isUpdate? "Update Contact" : "Add Contact"}
              </h1>
              <AiOutlineClose
                onClick={onClose}
                className={`${
                  theme ? "text-[#717171]" : "text-[#ffffff]"
                } text-3xl pt-[6px] cursor-pointer`}
              />
            </div>
            <div>{children}</div>
          </div>
          <div
            onClick={onClose}
            className={` absolute z-40 top-0 backdrop-brightness-50 w-[412px] h-[150vh] `}
          />
        </>
      )}
    </>
  , document.getElementById("modal-root"));
};

export default Modal;
