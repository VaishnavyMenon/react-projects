import { BsThreeDotsVertical } from "react-icons/bs";
import EmptyState from "./EmptyState";

const ContactList = ({ handleOption, theme, contacts, setUpdate, onOpen }) => {
  const isEmpty = contacts? contacts.length===0? 1 : 0 : 1
  return (
    <div className="mt-[158px] overflow-scroll max-h-[65%] overflow-x-hidden fixed">
    
      {isEmpty? ( <div className="w-[332px]" ><EmptyState theme={theme} setUpdate={setUpdate} onOpen={onOpen}/> </div>):   
    
    (contacts?.map(({ name, email, phone, id }) => (
        <div
          key={id}
          className={`flex gap-[40px] justify-between items-center w-[330px] border-b-2 ${
            theme ? "border-[#f0f0f0]" : "border-[#363636]"
          }`}
        >
          <div className="flex gap-[18px] items-center">
            <img src="/images/profile_icon.png" className="w-[60px] h-[60px]" />
            <div className="py-[12px] min-w-[140px]">
              <h2
                className={`font-semibold text-[18px] ${
                  theme ? "text-[#3c3c3c]" : "text-[#ffffff]"
                }`}
              >
                {name}
              </h2>
              <p className="text-[14px] text-[#a4a4a4]">{email}</p>
              <p className={`text-[14px] text-[#a4a4a4]`}>{phone}</p>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical
              onClick ={() => handleOption({ name, email, phone, id})}
              className={` h-[40px] w-[18px] cursor-pointer ${
                theme ? "text-[#a4a4a4]" : "text-[#ffffff]"
              }`}
            />
          </div>
        </div>
      )))}
    </div>
  );
};

export default ContactList;
