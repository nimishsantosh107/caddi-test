import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ExampleContextProvider } from "@/contexts";
import ReduxProvider from "@/store/redux";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <ReduxProvider>
                <ExampleContextProvider>
                    <div>
                        <NavBar />
                        <Component {...pageProps} />
                    </div>
                </ExampleContextProvider>
            </ReduxProvider>
        </div>
    );
}
