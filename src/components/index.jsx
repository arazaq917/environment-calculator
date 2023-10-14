'use client'
import React, {useEffect, useState} from "react";

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

    const BASE_PAPER_CERTIFICATE_COST = 30;  // Assuming RM30 as the cost of a single paper certificate

    const [treesCut, setTreesCut] = useState(initialTrees);

    useEffect(() => {
        calculateValues(1000)
        const interval = setInterval(() => {
            const randomFloat = Math.random();

            setTreesCut(prevTrees => prevTrees + randomFloat);
        }, 1000);
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

    return(
        <>
        <div className="min-h-screen bg-gray-100 flex justify-center">
            <div className="bg-white px-8 py-14 shadow-md w-full flex flex-col items-center sm:gap-12 lg:gap-24">
                <div className="flex flex-col sm:gap-8 lg:gap-12 sm:w-full lg:w-2/4">
                    <h1 className="sm:text-2xl lg:text-4xl font-bold lg:mb-4 text-center">
                        Digital vs Paper Certificate
                    </h1>
                    <h1 className="sm:text-4xl lg:text-8xl font-bold mb-4 text-center mt-8">
                        {treesCut.toFixed(2)}
                    </h1>
                    <h1 className="sm:text-2xl lg:text-4xl font-bold mb-4 text-center">
                        Hectares of Forest Cut Down or Burned <span className="text-blue-800">Globally, This Year</span>
                    </h1>

                </div>
                <div className="flex flex-col gap-3 items-center sm:w-full lg:w-2/4">
                    <h1 className="sm:text-2xl lg:text-4xl font-bold mb-4 text-center w-11/12">
                        Please enter the estimated number of paper certificates issued annually
                    </h1>

                    <div className="mb-4 w-72">
                        <input
                            value={numberOfPages}
                            onChange={calculatePaper}
                            type="number"
                            placeholder="Enter number"
                            className="w-full p-2 border rounded-md bg-gray-200 m-3 h-16 text-2xl"
                        />
                    </div>

                    <p className="text-sm text-gray-500 w-11/12">
                        *In order to obtain valuable cost and time-saving insights, it is essential to input a minimum of 200 certificates.
                    </p>
                </div>
                <div className="flex flex-col gap-10 items-center sm:w-full lg:w-2/4">
                    <h1 className="text-3xl font-bold mb-4">
                        By Switching to Blockchain Certificate with MyEduID
                    </h1>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="mr-10">
                            <h2 className="text-2xl font-medium mb-2">
                                You can save <span className="font-bold text-3xl">RM {results.money_saved}</span> per year
                            </h2>

                            <p className="text-gray-600">
                                By cutting down material, printing, labour cost, storage, packaging & delivery
                            </p>
                        </div>

                        <div className="flex-shrink-0 flex justify-center">
                            <div className="h-48 w-48 border-2 rounded-full border-gray-300 flex items-center justify-center">
                                <span className="text-gray-500">Image</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="mr-10">
                            <h2 className="text-2xl font-medium mb-2">
                                <span className="font-bold text-3xl">{results.CO2_saved}g</span> Carbon Dioxide Reduction
                            </h2>

                            <p className="text-gray-600">
                                Control greenhouse gas emissions, scoring win for a sustainable future
                            </p>
                        </div>

                        <div className="flex-shrink-0 flex justify-center">
                            <div className="h-48 w-48 border-2 rounded-full border-gray-300 flex items-center justify-center">
                                <span className="text-gray-500">Image</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <div className="mr-10">
                            <h2 className="text-2xl font-medium mb-2">
                                Saved <span className="font-bold text-3xl">{results.trees_saved} Trees</span>
                            </h2>

                            <p className="text-gray-600">
                                Saved trees from paper production plus trees that need to absorb {results.CO2_saved/1000}kg of CO2
                            </p>
                        </div>

                        <div className="flex-shrink-0 flex justify-center">
                            <div className="h-48 w-48 border-2 rounded-full border-gray-300 flex items-center justify-center">
                                <span className="text-gray-500">Image</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <div className="mr-10">
                            <h2 className="text-2xl font-medium mb-2">
                                <span className="font-bold text-3xl">{results.time_saved_hours.toFixed(0)} Hours</span> productivity hours saved annually
                            </h2>

                            <p className="text-gray-600">
                                That is a RM {results.salary_saved.toFixed(0)} salary saved in a year
                            </p>
                        </div>

                        <div className="flex-shrink-0 flex justify-center">
                            <div className="h-48 w-48 border-2 rounded-full border-gray-300 flex items-center justify-center">
                                <span className="text-gray-500">Image</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Join Our Movement</h2>
                        <button className="bg-gray-400 text-white px-6 py-3 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default PaperCalculator