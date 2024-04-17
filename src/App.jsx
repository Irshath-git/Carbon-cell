import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PopulationChart from "./Components/PopulationData";
import CryptoPrices from "./Components/Crypto";
import MetaMaskWalletCard from "./Components/MetaMask"
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div>
       <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<PopulationChart />} />
            <Route path="/assets" element={<CryptoPrices />} />
            <Route path="/metawallet" element={<MetaMaskWalletCard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
};

export default App;
