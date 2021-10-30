import Routes from "./routes";
import GlobalStyle from "./styles";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes />
      <Toaster />
    </div>
  );
}

export default App;
