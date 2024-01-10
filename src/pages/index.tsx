import React, { useContext } from "react";
import { ExampleContext } from "@/contexts";
import { useExampleSliceState, useExampleSliceActions } from "@/hooks/slices";
import { useGetOneQuery } from "@/hooks/queries";

// export default function Home() {
//     //context
//     const { status } = useContext(ExampleContext);
//     // redux
//     const { exampleKey } = useExampleSliceState();
//     const { exampleAction } = useExampleSliceActions();
//     // rtk query
//     const { data, isLoading, isError } = useGetOneQuery({ id: 1 });

//     return (
//         <div>
//             <div className="stats shadow">
//                 <div className="stat">
//                     <div className="stat-titile">Styles</div>
//                     <div className="stat-value">DaisyUI</div>
//                 </div>
//             </div>
//             <div className="stats shadow">
//                 <div className="stat">
//                     <div className="stat-titile">Context</div>
//                     <div className="stat-value">{status}</div>
//                 </div>
//             </div>
//             <div className="stats shadow">
//                 <div className="stat">
//                     <div className="stat-titile">ReduxSlice</div>
//                     <div className="stat-value">{exampleKey}</div>
//                     <button className="btn btn-primary" onClick={() => exampleAction("testKey")}>
//                         action
//                     </button>
//                 </div>
//             </div>
//             <div className="stats shadow">
//                 <div className="stat">
//                     <div className="stat-titile">RTKQuery</div>
//                     <div className="stat-value">{data?.todo}</div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function Home() {
    return <div className="w-full h-full p-20">App</div>;
}
