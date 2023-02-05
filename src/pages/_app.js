import "@/styles/globals.scss";
import { SSRProvider } from "react-bootstrap";
import "../components/home/navstyle.css"

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
