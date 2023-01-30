import "../styles/globals.css";

//INTERNAL IMPORT
import { TextZProvider } from "../Context/TextZContext";
import { NavBar } from "../Components/index";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <TextZProvider>
      <NavBar />
      <Component {...pageProps} />
    </TextZProvider>
  </div>
);

export default MyApp;
