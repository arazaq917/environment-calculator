import Image from 'next/image'
import moneyIcon from '../../public/assets/Wallet Money.png'
import treesIcon from '../../public/assets/Leaf.png'
import carbonIcon from '../../public/assets/Clouds.png'
import timeIcon from '../../public/assets/Hourglass.png'


export default function PaperBenefits({results, numberOfPages}) {
    return (
        <div className="text-white flex flex-col gap-[15px] lg:mt-[160px] min-[320px]:mt-[90px] justify-center items-center">
            <div className="text-center lg:mb-16 min-[320px]:mb-10 flex-col flex lg:gap-[20px] min-[320px]:gap-[10px]">
                <p className="lg:text-[28px] min-[320px]:text-[12px]">By Switching To</p>
                <h1 className="lg:text-[60px] min-[320px]:text-[35px] font-bold lg:mb-4">MyEduID</h1>
                <p className="lg:text-[28px] min-[320px]:text-[12px]">Blockchain Certificate Solution</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 min-[320px]:gap-x-4 min-[320px]:gap-y-12 lg:gap-8 lg:mb-16 min-[320px]:mb-10">
                <div className="text-center flex flex-col lg:gap-[26px] min-[320px]:gap-[15px]">
                    <h2 className="lg:text-xl min-[320px]:text-[12px]">You've <strong>Saved</strong></h2>
                    <div className="lg:w-[150px] lg:h-[150px] min-[320px]:h-[80px] min-[320px]:w-[80px] bg-white flex items-center justify-center rounded-full mx-auto p-4">
                        <Image
                            src={moneyIcon}
                            className="min-[320px]:h-[37px] min-[320px]:w-[37px] lg:h-auto lg:w-auto"
                            alt="Picture"
                        />
                    </div>
                    <p className="font-bold lg:text-2xl min-[320px]:text-[12px]">RM {Math.floor(results.salary_saved).toLocaleString()}</p>
                    <p className="min-[320px]:text-[12px] lg:text-[16px]">Cost Of Production Annually</p>
                </div>
                <div className="text-center flex flex-col lg:gap-[26px] min-[320px]:gap-[15px]">
                    <h2 className="lg:text-xl min-[320px]:text-[12px]">You've <strong>Reduced</strong></h2>
                    <div className="lg:w-[150px] lg:h-[150px] min-[320px]:h-[80px] min-[320px]:w-[80px] bg-white flex items-center justify-center rounded-full mx-auto p-4">
                        <Image
                            src={carbonIcon}
                            className="min-[320px]:h-[37px] min-[320px]:w-[37px] lg:h-auto lg:w-auto"
                            alt="Picture"
                        />
                    </div>
                    <p className="font-bold lg:text-2xl min-[320px]:text-[12px]">{results.CO2_saved.toLocaleString()}g</p>
                    <p className="min-[320px]:text-[12px] lg:text-[16px]">Carbon Dioxide Annually</p>
                </div>
                <div className="text-center flex flex-col lg:gap-[26px] min-[320px]:gap-[15px]">
                    <h2 className="lg:text-xl min-[320px]:text-[12px]">You've <strong>Protected</strong></h2>
                    <div className="lg:w-[150px] lg:h-[150px] min-[320px]:h-[80px] min-[320px]:w-[80px] bg-white flex items-center justify-center rounded-full mx-auto p-4">
                        <Image
                            src={treesIcon}
                            className="min-[320px]:h-[37px] min-[320px]:w-[37px] lg:h-auto lg:w-auto"
                            alt="Picture"
                        />
                    </div>
                    <p className="font-bold lg:text-2xl min-[320px]:text-[12px]">{results.trees_saved.toLocaleString()} Trees</p>
                    <p className="min-[320px]:text-[12px] lg:text-[16px]">From Getting Cut Annually</p>
                </div>
                <div className="text-center flex flex-col lg:gap-[26px] min-[320px]:gap-[15px]">
                    <h2 className="lg:text-xl min-[320px]:text-[12px]">You've <strong>Saved</strong></h2>
                    <div className="lg:w-[150px] lg:h-[150px] min-[320px]:h-[80px] min-[320px]:w-[80px] bg-white flex items-center justify-center rounded-full mx-auto p-4">
                        <Image
                            src={timeIcon}
                            className="min-[320px]:h-[37px] min-[320px]:w-[37px] lg:h-auto lg:w-auto"
                            alt="Picture"
                        />
                    </div>
                    <p className="font-bold lg:text-2xl min-[320px]:text-[12px]">{Math.floor(results.time_saved_hours).toLocaleString()} Hours</p>
                    <p className="min-[320px]:text-[12px] lg:text-[16px]">Hours Of Productivity</p>
                </div>
            </div>

            <p className="text-center lg:text-[42px] min-[320px]:text-[12px] mb-4 lg:mb-8">
                With the total of <strong>{numberOfPages}</strong> Certificate
            </p>

            <p className="text-center lg:text-[42px] min-[320px]:text-[12px]">
                Try the <strong>Future</strong> Today with our Verified Certifications.
            </p>
        </div>
    );
}
