import Image from 'next/image'
import moneyIcon from '../../public/assets/Wallet Money.png'
import treesIcon from '../../public/assets/Leaf.png'
import carbonIcon from '../../public/assets/Clouds.png'
import timeIcon from '../../public/assets/Hourglass.png'


export default function PaperBenefits({results}) {
    return (
        <div className="min-h-screen text-white flex flex-col gap-[15px] mt-[200px] justify-center items-center">
            <div className="text-center mb-16 flex-col flex gap-[20px]">
                <p className="text-[28px]">By Switching To</p>
                <h1 className="text-[60px] font-bold mb-4">MyEduID</h1>
                <p className="text-[28px]">Blockchain Certificate Solution</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center flex flex-col gap-[26px]">
                    <h2 className="text-xl">You've <strong>Saved</strong></h2>
                    <div className="w-[150px] h-[150px] bg-white flex items-center justify-center rounded-full mx-auto p-4">
                        <Image
                            src={moneyIcon}
                            alt="Picture"
                        />
                    </div>
                    <p className="font-bold text-2xl">RM {Math.floor(results.salary_saved).toLocaleString()}</p>
                    <p>Cost Of Production Annually</p>
                </div>
                <div className="text-center flex flex-col gap-[26px]">
                    <h2 className="text-xl">You've <strong>Reduced</strong></h2>
                    <div className="w-[150px] h-[150px] bg-white flex items-center justify-center rounded-full mx-auto p-4">
                        <Image
                            src={carbonIcon}
                            alt="Picture"
                        />
                    </div>
                    <p className="font-bold text-2xl">{results.CO2_saved.toLocaleString()}g</p>
                    <p>Carbon Dioxide Annually</p>
                </div>
                <div className="text-center flex flex-col gap-[26px]">
                    <h2 className="text-xl">You've <strong>Protected</strong></h2>
                    <div className="w-[150px] h-[150px] bg-white flex items-center justify-center rounded-full mx-auto p-4">
                        <Image
                            src={treesIcon}
                            alt="Picture"
                        />
                    </div>
                    <p className="font-bold text-2xl">{results.trees_saved.toLocaleString()} Trees</p>
                    <p>From Getting Cut Annually</p>
                </div>
                <div className="text-center flex flex-col gap-[26px]">
                    <h2 className="text-xl">You've <strong>Saved</strong></h2>
                    <div className="w-[150px] h-[150px] bg-white flex items-center justify-center rounded-full mx-auto p-4">
                        <Image
                            src={timeIcon}
                            alt="Picture"
                        />
                    </div>
                    <p className="font-bold text-2xl">{Math.floor(results.time_saved_hours).toLocaleString()} Hours</p>
                    <p>Hours Of Productivity</p>
                </div>
            </div>

            <p className="text-center text-[42px]">
                Try the <strong>Future</strong> Today with our Verified Certifications.
            </p>
        </div>
        // <div className="flex flex-col items-center justify-center mt-[100px]">
        //     <div className="text-white text-5xl mb-10 font-bold">Did You Know?</div>
        //     <div className="text-white text-3xl mb-10">Paper Certificates is A Silent Threat to Our Planet's Health.</div>
        //
        //     <div className="grid grid-cols-3 gap-4 mt-[20px] items-center">
        //         <div className="flex flex-col items-end gap-[178px]">
        //             <div className="w-[350px] text-center lg:mr-[-60px] flex flex-col items-center bg-[#FFFFFFCC] p-6 rounded-lg">
        //                 <div className="mb-4 text-xl font-bold">Deforestation</div>
        //                 <p>The production of paper certificates is the <strong>main</strong> contribution of deforestation.</p>
        //             </div>
        //             <div className="lg:mr-[-15px] text-center w-[350px] flex flex-col items-center bg-[#FFFFFFCC] p-6 rounded-lg">
        //                 <div className="text-xl font-bold mb-4">Resource Depletion</div>
        //                 <p>Paper certificates require the use of valuable natural resources.</p>
        //             </div>
        //         </div>
        //
        //         <div className="z-10 h-[450px] w-[450px] bg-[#FFFFFF] rounded-full flex items-center justify-center">
        //             <Image
        //                 src={resource}
        //                 alt="Picture"
        //             />
        //         </div>
        //
        //         <div className="w-[350px] flex flex-col text-center items-center bg-[#FFFFFFCC] p-6 rounded-lg">
        //             <div className="mb-4 text-xl font-bold">Forgery and Fraud</div>
        //             <p>Paper certificates are susceptible to <strong>forgery</strong> and <strong>fraud</strong>.</p>
        //         </div>
        //     </div>
        //     <span className="font-bold text-[35px] mt-[10px] text-white">Paper Certificates</span>
        //     <div className="mt-[200px]">
        //         <span className="font-bold text-[35px] text-white">Join Our Movement To Save Planet Earth !</span>
        //     </div>
        // </div>
    );
}
