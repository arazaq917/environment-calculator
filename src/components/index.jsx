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
                <div className="w-full h-[1300px] flex-col flex items-center" style={{
                    backgroundImage: 'url(/assets/landingBg2.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                }}>
                    <div className="px-0 pt-14 shadow-md w-full" style={{background: 'linear-gradient(180deg, #9747FF -10%, rgba(0, 0, 0, 0) 60.82%)'}}>
                        <Header/>
                        <div className="w-full text-white py-3 flex flex-col items-center">
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col items-center">
                                    <span className="text-white lg:mb-4 text-center text-[42px]">
                                        Save Trees, Save the Planet
                                    </span>
                                    <span className="text-white lg:mb-4 text-center text-[42px]">
                                        <strong className="text-[60px]">Go Digital</strong> with <strong className="text-[60px]">MyEduID</strong>
                                    </span>
                                </div>
                                <span className="text-white font-bold my-8 px-[30px] rounded-[20px] text-[125px] w-full bg-[#FFFFFF33]">
                                    {treesCut?.toLocaleString()}
                                </span>
                                <span className="lg:text-[42px] text-center flex flex-col">
                                    <span>Hectares of Trees & Forest <strong>Cut Down</strong> or <strong>Burned</strong></span>
                                    <span className="font-bold">This Year!</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="w-[100%] mt-[-500px] px-[100px]">
                        <div className="bg-[#FFFFFF] h-[828px] rounded-[20px] p-[100px]">
                            <div className="min-h-screen flex flex-col gap-[30px] items-center">
                                <div className="text-center mb-8">
                                    <h1 className="text-[42px] font-bold mb-4">Discover Your Return Of Investment</h1>
                                    <p className="text-[28px]">After Switching to <strong>Blockchain</strong> Certificate with <strong>MyEduID</strong></p>
                                </div>

                                <div className="text-center mt-3 mb-8">
                                    <p className="text-[28px]">Enter the estimated Number of <strong>Certificates</strong> Issued annually.</p>
                                </div>

                                <div className="w-[75%] mb-8 mt-3">
                                    <input onWheel={numberInputOnWheelPreventChange}
                                           value={numberOfPages}
                                           onChange={calculatePaper}
                                           type="number"
                                           placeholder="2000 - 10000" className="appearance-none border-none bg-[#F1F1F9] w-full px-4 py-4 border text-[25px] focus-visible:outline-none rounded-md text-center" />
                                </div>

                                <div className="text-center mb-8 w-[65%]">
                                    <p className="text-[#282454] text-[20px] leading-[30px] ">*In order to obtain valuable cost and time-saving insights, it is essential to input a minimum of 200 certificates.</p>
                                </div>

                                <button className="bg-purple-500 text-white text-[25px] font-bold leading-[37px] py-4 px-8 mt-4 rounded-full">
                                    Discover Your ROI
                                </button>
                            </div>
                        </div>
                    </div>
                <PaperBenefits results={results}/>
                <Footer/>
            </div>
        </>
    );
}

export default PaperCalculator