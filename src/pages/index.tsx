import React, { useContext } from "react";
import { ExampleContext } from "@/contexts";
import { useExampleSliceState, useExampleSliceActions } from "@/hooks/slices";
import { useGetOneQuery } from "@/hooks/queries";

import TransferCard from "@/components/TransferCard";

//     //context
//     const { status } = useContext(ExampleContext);
//     // redux
//     const { exampleKey } = useExampleSliceState();
//     const { exampleAction } = useExampleSliceActions();
//     // rtk query
//     const { data, isLoading, isError } = useGetOneQuery({ id: 1 });

export default function Home() {
    return (
        <div className="w-full h-full flex justify-center p-20 py-40">
            <TransferCard />
        </div>
    );
}
