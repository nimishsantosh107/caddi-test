import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TransferContextProvider } from "@/contexts";
import ReduxProvider from "@/store/redux";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <ReduxProvider>
                <TransferContextProvider>
                    <div>
                        <NavBar />
                        <Component {...pageProps} />
                    </div>
                </TransferContextProvider>
            </ReduxProvider>
        </div>
    );
}
