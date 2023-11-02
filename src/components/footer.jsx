const Footer = () => {
    return(
        <div className="h-[652px] w-full flex flex-col items-center justify-around" style={{background: "linear-gradient(180deg, rgba(19, 17, 40, 0) 0%, #9747FF 100%)"}}>
            <div className="cursor-pointer w-[363px] h-[70px] hover:bg-[#9747FF80] bg-[#9747FF] mt-[50px] py-[10px] px-[45px] rounded-[30px] text-center">
                <span className="font-bold text-[30px] leading-[45px] text-white">Join Us Now !</span>
            </div>
            <span className="font-bold text-[30px] leading-[24px] text-white">© MyEduID 2023</span>
        </div>
    )
}
export default Footer