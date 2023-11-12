const Footer = () => {
    return(
        <div className="lg:h-[450px] min-[320px]:h-[300px] w-full flex flex-col items-center justify-around" style={{background: "linear-gradient(180deg, rgba(19, 17, 40, 0) 0%, #9747FF 100%)"}}>
            <div className="cursor-pointer hover:bg-[#9747FF80] bg-[#9747FF] lg:py-[10px] px-[75px] rounded-[30px] text-center">
                <span className="font-bold lg:text-[30px] leading-[45px] text-white">Join Us Now !</span>
            </div>
            <span className="font-bold lg:text-[30px] min-[320px]:text-[12px] leading-[24px] text-white">© MyEduID 2023</span>
        </div>
    )
}
export default Footer