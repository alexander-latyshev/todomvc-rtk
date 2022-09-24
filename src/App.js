import "./App.css";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <div className="todos">
      <h1>todos</h1>
      <Header />
      <Main router={{ location }} />
      <Footer router={{ location }} />
    </div>
  );
};

export default App;
