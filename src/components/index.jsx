'use client'
import React, {useEffect, useState} from "react";
import Header from "../app/header";
import PaperBenefits from "./resourcePage";
import Footer from "./footer";

const PaperCalculator = ({initialValue}) => {
    const [numberOfPages, setNumberOfPages] = useState(1000);
    const [results, setResults] = useState({
        CO2_saved: 0,
        trees_saved: 0,
        time_saved_minutes: 0,
        time_saved_hours: 0,
        money_saved: 0,
        salary_saved: 0,
        cost_decrease_percentage: 0
    });

    const BASE_PAPER_CERTIFICATE_COST = 30;

    const [treesCut, setTreesCut] = useState(initialValue);

    useEffect(() => {
        calculateValues(1000)
        const interval = setInterval(() => {
            setTreesCut(prevTrees => prevTrees + 0.01);
        }, 10);
        return () => clearInterval(interval);
    }, []);

    const calculatePaper = (e) => {
        let val = parseInt(e.target.value, 10);
        setNumberOfPages(val);
        calculateValues(val)
    }

    const calculateValues = (val) => {
        let moneySaved = val * 20;
        let paperCertificateTotalCost = BASE_PAPER_CERTIFICATE_COST * val;
        let costDecreasePercentage = ((paperCertificateTotalCost - moneySaved) / paperCertificateTotalCost) * 100;

        setResults({
            CO2_saved: val * 35,
            trees_saved: val * 0.027,
            time_saved_minutes: val * 8,
            time_saved_hours: ((val * 8) / 60),
            money_saved: moneySaved,
            salary_saved: (val * 8 / 60) * 20,
            cost_decrease_percentage: costDecreasePercentage
        });
    }
    const numberInputOnWheelPreventChange = (e) => {
        e.target.blur()
        e.stopPropagation()
    }
    return (
        <>
            <div className="min-h-screen bg-[#131128] flex flex-col items-center justify-center">
                <div className="w-full flex-col flex items-center" style={{
                    backgroundImage: 'url(/assets/landingBg2.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                }}>
                    <div className="px-0 lg:pt-14 min-[320px]:pt-10  shadow-md w-full flex flex-col items-center"
                         style={{background: 'linear-gradient(180deg, #9747FF -10%, rgba(0, 0, 0, 0) 60.82%)'}}>
                        <Header/>
                        <div className="w-full text-white py-3 flex flex-col items-center">
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col items-center">
                                    <span
                                        className="text-white mb-4 text-center lg:text-[42px] min-[320px]:text-[18px]">
                                        Save Trees, Save the Planet
                                    </span>
                                    <span
                                        className="text-white mb-4 text-center lg:text-[42px] min-[320px]:text-[22px]">
                                        <strong className="lg:text-[60px] ">Go Digital</strong> with <strong
                                        className="lg:text-[60px]">MyEduID</strong>
                                    </span>
                                </div>
                                <span
                                    className="text-white font-bold my-4 lg:my-8 px-[20px] rounded-[20px] lg:text-[125px] md:text-[96px] sm:text-[52px] min-[320px]:text-[30px] min-[320px]:w-full sm:w-[430px] md:w-[740px] lg:w-[960px] xl:w-[960px] bg-[#FFFFFF33]">
                                    {treesCut?.toLocaleString()}
                                </span>
                                <span
                                    className="lg:text-[42px] md:text-[32px] min-[320px]:text-[12px] text-center flex flex-col">
                                    <span>Hectares of Trees & Forest <strong>Cut Down</strong> or <strong>Burned</strong></span>
                                    <span
                                        className="font-bold mt-3 min-[320px]:text-[35px] lg:text-[60px]">This Year!</span>
                                </span>
                            </div>
                        </div>
                        <div className="lg:mt-[50px] w-fit min-[320px]:mb-[-40px] lg:mb-[-80px] ">
                            <div
                                className="bg-[#FFFFFF] rounded-[10px] lg:p-[40px] md:p-[30px] sm:p-[30px] min-[320px]:p-[25px]">
                                <div className="flex flex-col gap-[15px] lg:gap-[30px] items-center justify-center">
                                    <div className="text-center mt-3 lg:mb-8">
                                        <p className="lg:text-[28px] min-[320px]:text-[10px]">Enter the estimated Number
                                            of <strong>Certificates</strong> Issued annually.</p>
                                    </div>
                                    <div className="lg:w-[75%] lg:mb-8 mt-3 flex items-center justify-center">
                                        <input onWheel={numberInputOnWheelPreventChange}
                                               value={numberOfPages}
                                               onChange={calculatePaper}
                                               type="number"
                                               placeholder="2000 - 10000"
                                               className="appearance-none border-none bg-[#F1F1F9] px-4 lg:py-4 py-2 border lg:text-[25px] focus-visible:outline-none rounded-md text-center"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PaperBenefits results={results} numberOfPages={numberOfPages}/>
                <Footer/>
            </div>
        </>
    );
}

export default PaperCalculator