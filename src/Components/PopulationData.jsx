import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactApexChart from "react-apexcharts";

const PopulationChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Extracting labels and values from the fetched data
  const labels = data.map(item => item.Year);
  const values = data.map(item => item.Population);

  // Chart options
  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    xaxis: {
      categories: labels,
    },
  };

  // Chart series
  const series = [{
    name: 'Population',
    data: values,
  }];

  return (
    <>
      <div className="w-full sm:w-full md:w-full lg:w-full mx-auto">
      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-black">
          Population Over Time
        </h2>
      <div className="bg-white drop-shadow-2xl rounded-md p-4 w-full">
         <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
    </div>
    </>
  );
};

export default PopulationChart;
