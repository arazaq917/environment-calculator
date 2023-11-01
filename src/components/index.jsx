'use client'
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Header from "../app/header";
import PaperBenefits from "./resourcePage";
import Footer from "./footer";

const PaperCalculator = () => {
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
    const initialTrees = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);

    const BASE_PAPER_CERTIFICATE_COST = 30;

    const [treesCut, setTreesCut] = useState(initialTrees);

    useEffect(() => {
        calculateValues(1000)
        const interval = setInterval(() => {
            const randomFloat = Math.random();
            console.log(randomFloat)
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
                    backgroundImage: 'url(/assets/landingBg.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                }}>
                    <div className="px-0 pt-14 shadow-md w-full" style={{background: 'linear-gradient(180deg, #9747FF -10%, rgba(0, 0, 0, 0) 90.82%)'}}>
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
                                <span className="text-white font-bold text-center my-8 px-[30px] rounded-[20px] text-[125px] w-max bg-[#FFFFFF33]">
                                    {/*{treesCut.toLocaleString()}*/}
                                    83,650,362.77
                                </span>
                                <span className="lg:text-[42px] text-center flex flex-col">
                                    <span>Hectares of Trees & Forest <strong>Cut Down</strong> or <strong>Burned</strong></span>
                                    <span className="font-bold">This Year!</span>
                                </span>
                            </div>

                            {/*<div className="flex flex-col gap-3 items-center sm:w-full lg:w-2/4">*/}
                            {/*    <h1 className="text-white sm:text-2xl lg:text-4xl font-bold mb-4 text-center w-11/12">*/}
                            {/*        Please enter the estimated number of paper certificates issued annually*/}
                            {/*    </h1>*/}

                            {/*    <div className="mb-4 w-72">*/}
                            {/*        <input*/}
                            {/*            onWheel={numberInputOnWheelPreventChange}*/}
                            {/*            value={numberOfPages}*/}
                            {/*            onChange={calculatePaper}*/}
                            {/*            type="number"*/}
                            {/*            placeholder="Enter number"*/}
                            {/*            className="w-full p-2 border rounded-md bg-gray-200 m-3 h-16 text-2xl text-black"*/}
                            {/*        />*/}
                            {/*    </div>*/}

                            {/*    <p className="text-white text-sm text-gray-500 w-11/12">*/}
                            {/*        *In order to obtain valuable cost and time-saving insights, it is essential to input*/}
                            {/*        a minimum of 200 certificates.*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                            {/*<div className="flex flex-col gap-10 items-center sm:w-full lg:w-2/4">*/}
                            {/*    <h1 className="text-white text-3xl font-bold mb-4">*/}
                            {/*        By Switching to Blockchain Certificate with MyEduID*/}
                            {/*    </h1>*/}
                            {/*    <div className="flex flex-col sm:flex-row mt-10">*/}
                            {/*        <div className="mr-10">*/}
                            {/*            <h2 className="text-white text-2xl font-medium mb-2">*/}
                            {/*                You can save <span*/}
                            {/*                className="font-bold text-3xl">RM {results.money_saved}</span> per year*/}
                            {/*            </h2>*/}

                            {/*            <p className="text-gray-600">*/}
                            {/*                By cutting down material, printing, labour cost, storage, packaging &*/}
                            {/*                delivery*/}
                            {/*            </p>*/}
                            {/*        </div>*/}

                            {/*        <div className="flex-shrink-0 flex justify-center">*/}
                            {/*            <div*/}
                            {/*                className="h-48 w-48 border-2 rounded-full border-gray-300 flex items-center justify-center">*/}
                            {/*                <span className="text-gray-500">Image</span>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="text-white flex flex-col sm:flex-row mt-10">*/}
                            {/*        <div className="mr-10">*/}
                            {/*            <h2 className="text-white text-2xl font-medium mb-2">*/}
                            {/*                <span className="font-bold text-3xl">{results.CO2_saved}g</span> Carbon*/}
                            {/*                Dioxide Reduction*/}
                            {/*            </h2>*/}

                            {/*            <p className="text-gray-600">*/}
                            {/*                Control greenhouse gas emissions, scoring win for a sustainable future*/}
                            {/*            </p>*/}
                            {/*        </div>*/}

                            {/*        <div className="flex-shrink-0 flex justify-center">*/}
                            {/*            <div*/}
                            {/*                className="h-48 w-48 border-2 rounded-full border-gray-300 flex items-center justify-center">*/}
                            {/*                <span className="text-gray-500">Image</span>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="text-white flex flex-col sm:flex-row">*/}
                            {/*        <div className="mr-10">*/}
                            {/*            <h2 className="text-2xl font-medium mb-2">*/}
                            {/*                Saved <span*/}
                            {/*                className="font-bold text-3xl">{results.trees_saved} Trees</span>*/}
                            {/*            </h2>*/}

                            {/*            <p className="text-gray-600">*/}
                            {/*                Saved trees from paper production plus trees that need to absorb <span*/}
                            {/*                className="font-medium">{results.CO2_saved / 1000}kg</span> of CO2*/}
                            {/*            </p>*/}
                            {/*        </div>*/}

                            {/*        <div className="flex-shrink-0 flex justify-center">*/}
                            {/*            <div*/}
                            {/*                className="h-48 w-48 border-2 rounded-full border-gray-300 flex items-center justify-center">*/}
                            {/*                <span className="text-gray-500">Image</span>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="text-white flex flex-col sm:flex-row">*/}
                            {/*        <div className="mr-10">*/}
                            {/*            <h2 className="text-2xl font-medium mb-2">*/}
                            {/*                <span*/}
                            {/*                    className="font-bold text-3xl">{results.time_saved_hours.toFixed(0)} Hours</span> productivity*/}
                            {/*                hours saved annually*/}
                            {/*            </h2>*/}

                            {/*            <p className="text-gray-600">*/}
                            {/*                That is a <span*/}
                            {/*                className="font-medium">RM {results.salary_saved.toFixed(0)}</span> salary*/}
                            {/*                saved in a year*/}
                            {/*            </p>*/}
                            {/*        </div>*/}

                            {/*        <div className="flex-shrink-0 flex justify-center">*/}
                            {/*            <div*/}
                            {/*                className="h-48 w-48 border-2 rounded-full border-gray-300 flex items-center justify-center">*/}
                            {/*                <span className="text-gray-500">Image</span>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="text-white text-center">*/}
                            {/*        <h2 className="text-3xl font-bold mb-4">Join Our Movement</h2>*/}
                            {/*        <Link href="https://www.myeduid.my/contact">*/}
                            {/*            <button*/}
                            {/*                className="bg-gray-400 text-white px-6 py-3 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">*/}
                            {/*                Contact Us*/}
                            {/*            </button>*/}
                            {/*        </Link>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="w-[100%] px-[100px]">
                        <div className="bg-[#FFFFFF] h-[900px] rounded-[20px]">

                        </div>
                    </div>
                </div>
                <PaperBenefits/>
                <Footer/>
            </div>
        </>
    );
}

export default PaperCalculator