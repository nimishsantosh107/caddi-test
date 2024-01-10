import React, { useState, useContext } from "react";
import { TransferContext } from "@/contexts";

const TransferCard = ({}) => {
    const { sendTransaction, ethhBalance, setEthhBalance } = useContext(TransferContext);

    const [amount, setAmount] = useState("12000");
    const [address, setAddress] = useState("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    const [gasLimit, setGasLimit] = useState("50000");

    const handleTransferClick = async () => {
        // if (!amount || !address || !gasLimit) show feedback
        await sendTransaction(amount, address, gasLimit);
        setEthhBalance((prev: number) => prev - (Number(amount) || 0));
    };

    return (
        <div>
            <div className="card w-192 shadow-xl bg-neutral text-neutral-content">
                <div className="card-body px-32">
                    <h2 className="card-title">Token transfer</h2>

                    <p>Transfer ETHH to address</p>
                </div>
                <div className="w-full h-full  flex flex-col justify-center items-center p-10">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Amount (in ETHH):</span>
                            <span className="label-text-alt">123 {ethhBalance}</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-info w-full max-w-xs"
                            value={amount}
                            onChange={(e) => {
                                setAmount(e.target.value);
                            }}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Recipient address:</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-info w-full max-w-xs"
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Gas limit:</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-info w-full max-w-xs"
                            value={gasLimit}
                            onChange={(e) => {
                                setGasLimit(e.target.value);
                            }}
                        />
                    </label>
                    <button
                        onClick={() => {
                            handleTransferClick();
                        }}
                        className="btn btn-info mt-10"
                    >
                        Transfer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransferCard;
