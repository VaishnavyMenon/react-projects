import { createPortal } from "react-dom";

const Options = ({ theme, isOpen, onClose, handleDelete, setUpdate, onOpen }) => {

  const onEdit = () => {
    onClose();
    onOpen()
    setUpdate(true)
  }

  return createPortal(
    isOpen && 
    <div> 
    <div className={` absolute z-50 ml-[12px] bottom-0 min-w-[10%] min-h-[135px] rounded-t-[20px] text-[24px] flex flex-col justify-center gap-[10px] items-center ${theme? " bg-white" : " bg-[#3c3c3c]"} `}>
        <p onClick={onEdit} className={` ${theme? "text-[#3c3c3c]" : "text-[#ffffff]"}  cursor-pointer`} >Edit</p>
        <div className={` min-w-[376px] ${theme? "bg-[#f4f4f4]":"bg-[#515151]"}  h-[1px] `}/>
        <p onClick={()=>handleDelete()} className={`  text-red-500 cursor-pointer`}>Delete</p>
    </div>
    <div
    onClick={onClose}
    className={` absolute z-40 top-0 backdrop-brightness-50 w-[400px] h-[100vh] `}
  />
  </div>, document.getElementById("modal-root"));
};

export default Options;
