import React, { useContext } from "react";
import { TransferContext } from "@/contexts";

const TransactionModal = ({}) => {
    return (
        <div>
            {/* <button className="btn" onClick={() => document?.getElementById("my_modal_1").showModal()}>
                open modal
            </button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Transaction details:</h3>
                    <p className="py-4">DATA/SUCCESS</p>
                    <p className="py-4">HASH</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default TransactionModal;
