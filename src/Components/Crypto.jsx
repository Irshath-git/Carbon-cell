import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        setCryptoData(response.data.bpi);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-black">
          Cryptocurrency Prices
        </h2>
        {loading && <p className="text-center">Loading...</p>}
        {cryptoData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
            {Object.keys(cryptoData).map((key) => (
              <div key={key} className="p-4 rounded-md">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {cryptoData[key].description}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Price: {cryptoData[key].rate} {cryptoData[key].symbol}
                  </p>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CryptoPrices;
