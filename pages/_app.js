import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { TinderProvider } from "../context/TinderContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://ixugs5tdzstv.usemoralis.com:2053/server"
      appId="HjFoJQhFfOZzZj5wgtd6SSsbXsoHxNvthMEnBSf8"
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
