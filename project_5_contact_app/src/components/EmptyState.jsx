const EmptyState = ({theme, setUpdate, onOpen}) => {

 const handleAddContact = () => {
    setUpdate(false)
    onOpen();
    }

  return (
    <div className={`flex flex-col gap-[30px] justify-center items-center`}>
    <div className={`flex flex-col justify-center items-center `} >
        <img className={`h-[260px]`} src="/images/EmptyState.png" />
        <h1 className={`text-[20px] ${theme? "text-[#3c3c3c]" : "text-[#ffffff]"} font-semibold`}>No Contacts Found</h1>
    </div>
    <button onClick={handleAddContact} className={`px-[33px] py-[8px] h-[40px] w-[165px] bg-[#0085ff] rounded-[12px] text-[16px] font-medium text-[#ffffff]`}> Add Contact</button>
    </div>
  )
}

export default EmptyState