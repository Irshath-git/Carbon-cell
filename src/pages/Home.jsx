import React from "react";
import Sidebar from "../Components/Sidebar";
import PopulationChart from "../Components/PopulationData";
import CryptoPrices from "../Components/Crypto";
import MetaMaskWalletCard from "../Components/MetaMask";
import Header from "../Components/Header";

const Home = () => {
  return (
    <section className="flex gap-6">
      <div className="w-full m-3 text-xl text-gray-900 font-semibold justify-center items-center">
        <Header />
        <CryptoPrices />
        <PopulationChart />
        <MetaMaskWalletCard />
      </div>
    </section>
  );
};

export default Home;
