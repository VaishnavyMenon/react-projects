const ThemeIcon = ({ theme, setTheme }) => {
  const handleTheme = () => {
    setTheme((prev)=>(!prev))
    console.log(theme, "theme")
  }
  return (
    <div
    onClick={handleTheme}
      className={`w-[55px] h-[55px] ${
        theme ? "bg-[#3c3c3c]" : "bg-[#ffffff]"
      } rounded-full items-center justify-center flex fixed ml-[312px] top-[calc(100vh-85px)] cursor-pointer`}
    >
      <img
        src={`${theme ? "/images/dark_mode.svg" : "/images/light_mode.svg"}`}
        className="w-[30px] h[30px] pt-2"
      />
    </div>
  );
};

export default ThemeIcon;
