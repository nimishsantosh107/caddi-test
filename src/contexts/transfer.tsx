import React, { PropsWithChildren, createContext, useState } from "react";
import axios from "axios";
import { ethers } from "ethers";

export const TransferContext = createContext({} as any);

export const TransferContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [ethhBalance, setEthhBalance] = useState<number>(100000);

    const sendTransaction = async (amount: string, address: string, gasLimit: string) => {
        setIsLoading(true);
        const res = await axios.post(
            "http://localhost:8080/api/v1/simulate",
            {
                chainId: 1,
                from: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
                to: address,
                gasLimit: gasLimit.toString(),
                value: ethers.utils.parseEther(amount).toString(),
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
        // fails due to CORS on server side
        console.log(res.data);
        setIsLoading(false);
    };

    return (
        <TransferContext.Provider value={{ isLoading, sendTransaction, ethhBalance, setEthhBalance }}>
            {children}
        </TransferContext.Provider>
    );
};
