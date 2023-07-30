import { BsThreeDotsVertical } from "react-icons/bs";

const ContactList = ({ handleOption, theme, contacts }) => {
  
  return (
    <div className="mt-[35px] overflow-scroll max-h-[calc(100vh-250px)] overflow-x-hidden">
      {contacts?.map(({ name, email, phone, id }) => (
        <div
          key={id}
          className={`flex gap-[80px] items-center w-[320px] border-b-2 ${
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
      ))}
    </div>
  );
};

export default ContactList;
