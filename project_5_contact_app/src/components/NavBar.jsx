import {BiSearchAlt2} from "react-icons/bi"
import {BsPlusCircleFill} from "react-icons/bs"

const NavBar = ({theme, handleSearch, onOpen, setUpdate }) => {

  const handleAddContact = () => {
    setUpdate(false)
    onOpen();
  }
  return (
    <div className="flex flex-col gap-[25px] fixed ">
      <div className={`text-[34px] font-medium  ${theme? "text-[#3D3D3D]" :"text-[#FFFFFF]"}`}>
        <h1>Contacts</h1>
      </div>
      <div className="flex items-center relative gap-[15px]">
      <BiSearchAlt2  className={`text-[40px] absolute pl-[12px] ${theme? "text-[#3C3C3C]":"text-[#ffffff]"}`}/>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Contact"
          className={` rounded-[10px] h-[45px] min-w-[270px] border-[1.5px] pl-[50px] py-auto bg-transparent placeholder-[#717171] ${theme? "border-[#3C3C3C] text-[#3C3C3C]":"border-[#ffffff] text-[#ffffff]"}`}
        />
        <div className="flex">
          <BsPlusCircleFill onClick={handleAddContact} className={`text-[47px] fill-[#0085ff] cursor-pointer z-[1]`}/>
          <div className="absolute bg-white w-[30px] h-[30px] ml-[10px] mt-2.5 ]"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
