import React from "react";
import axios from "axios";

const TransferCard = ({}) => {
    return (
        <div>
            <div className="card w-192 shadow-xl bg-neutral text-neutral-content">
                <div className="card-body">
                    <h2 className="card-title">Token transfer</h2>

                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>

                <figure>
                    <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                    />
                </figure>
            </div>
        </div>
    );
};

export default TransferCard;
