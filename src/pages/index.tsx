import React, { useContext } from "react";
import { useExampleSliceState, useExampleSliceActions } from "@/hooks/slices";
import { useGetOneQuery } from "@/hooks/queries";

import TransferCard from "@/components/TransferCard";

export default function Home() {
    return (
        <div className="w-full h-full flex justify-center py-40">
            <TransferCard />
        </div>
    );
}
